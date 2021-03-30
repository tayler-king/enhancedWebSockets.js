import { App, SSLApp } from 'uWebSockets.js';
import { v4 as uuid } from 'uuid';
import { AuthenticationError } from '../errors/AuthenticationError';
import { wrapWithPromise, parseSocketMessage } from '../utils';
import { SocketParseError } from '../errors/SocketParseError';
import { SocketReplyError } from '../errors/SocketReplyError';

class WebSocketServer {
    #sockets = new Map();

    #interface;
    #handlers;
    #options;
    #socket;

    constructor(options, isSSL) {
        this.#interface = isSSL
            ? SSLApp
            : App;

        this.#options = options;
    }

    ws(path, behaviour) {
        const {
            authentication = false,
            upgrade = false,
            message = () => {},
            close = () => {},
            drain = () => {},
            open = () => {},
            ping = () => {},
            pong = () => {},
            ...socketOptions
        } = behaviour;

        this.#handlers = {
            authentication,
            upgrade,
            message,
            close,
            drain,
            open,
            ping,
            pong,
        };

        this.#socket = this
            .#interface(this.#options)
            .ws(path, {
                upgrade: (...args) => this.#onSocketUpgrade(...args),
                message: (...args) => this.#onSocketMessage(...args),
                close: (...args) => this.#onSocketClose(...args),
                drain: (...args) => this.#onSocketDrain(...args),
                open: (...args) => this.#onSocketOpen(...args),
                ping: (...args) => ping(...args),
                pong: (...args) => pong(...args),
                ...socketOptions,
            });

        setInterval(() => {
            this.#socket.publish('ping', '');
        }, 3000);

        return {
            listen: (...args) => {
                this.#socket.listen(...args);
                return this;
            },
        };
    }

    #sendSocketMessage( // eslint-disable-line class-methods-use-this
        socket,
        messageID,
        errorOrEvent,
        data,
    ) {
        // TODO: Check backpressure, drop slow messages / connections
        return socket.send((messageID || '') + JSON.stringify([
            errorOrEvent,
            data,
        ]));
    }

    #onSocketMessageCallback({ messageID, socketID }) {
        if (!(this.#sockets.has(socketID)))
            return;

        const socket = this.#sockets
            .get(socketID);

        return {
            resolve: (data) => {
                return this.#sendSocketMessage(
                    socket,
                    messageID,
                    null,
                    data,
                );
            },

            reject: (error) => {
                if (error instanceof SocketReplyError) {
                    return this.#sendSocketMessage(
                        socket,
                        messageID,
                        error.message,
                    );
                }

                throw error;
            },
        };
    }

    async #onSocketUpgrade(res, req, context) {
        const {
            authentication,
            upgrade,
        } = this.#handlers;

        let upgradeAborted = false;
        let closeReason = false;
        let userData = false;

        const id = uuid();

        res.onAborted(() => {
            upgradeAborted = true;
        });

        const secWebSocketKey = req.getHeader('sec-websocket-key');
        const secWebSocketProtocol = req.getHeader('sec-websocket-protocol');
        const secWebSocketExtensions = req.getHeader('sec-websocket-extensions');

        if (authentication) {
            // If you want to disallow unauthenticated connections, throw
            // an AuthenticationError and the request will be closed. Else,
            // just return empty user data.

            try {
                userData = await Promise.resolve(
                    authentication(secWebSocketProtocol, req, res),
                );
            } catch (ex) {
                if (ex instanceof AuthenticationError) {
                    closeReason = ex.message;
                } else throw ex;
            }
        }

        if (upgradeAborted)
            return;

        if (closeReason) {
            return res.upgrade({
                closeReason,
            },
            secWebSocketKey,
            secWebSocketProtocol,
            secWebSocketExtensions,
            context);
        }

        if (upgrade) {
            return upgrade(res, req, context, {
                secWebSocketKey,
                secWebSocketProtocol,
                secWebSocketExtensions,
            }, {
                lastMessageID: 0,
                closeReason,
                userData,
                id,
            });
        }

        return res.upgrade({
            lastMessageID: 0,
            closeReason,
            userData,
            id,
        },
        secWebSocketKey,
        secWebSocketProtocol,
        secWebSocketExtensions,
        context);
    }

    #onSocketMessage(socket, socketMessage) {
        const { id: socketID, closeReason } = socket;

        if (closeReason)
            return;

        let messageID;
        let event;
        let data;

        try {
            const [
                _messageID,
                _event,
                _data,
            ] = parseSocketMessage(socketMessage, socket.lastMessageID);

            messageID = _messageID;
            event = _event;
            data = _data;
        } catch (ex) {
            if (ex instanceof SocketParseError)
                return socket.end(4001, ex.message);

            throw ex;
        }

        const { message } = this.#handlers;

        if (!messageID)
            return message(event, data);

        socket.lastMessageID = messageID; // eslint-disable-line no-param-reassign

        wrapWithPromise(message, event, data)
            .then((data) => {
                this.#onSocketMessageCallback({
                    messageID,
                    socketID,
                }).resolve(data);
            })
            .catch((error) => {
                this.#onSocketMessageCallback({
                    messageID,
                    socketID,
                }).reject(error);
            });
    }

    #onSocketClose(socket) {
        const { closeReason, id } = socket;
        const { close } = this.#handlers;

        if (closeReason)
            return;

        this.#sockets
            .delete(id, socket);

        close(socket);
    }

    // TODO: Implement backpressure handling
    #onSocketDrain(socket) {} // eslint-disable-line class-methods-use-this, no-unused-vars

    #onSocketOpen(socket) {
        const { closeReason, id } = socket;
        const { open } = this.#handlers;

        if (closeReason)
            return socket.end(4000, closeReason);

        this.#sockets
            .set(id, socket);

        socket.subscribe('ping');
        open(socket);
    }

    send(socketID, event, data) {
        if (!(this.#sockets.has(socketID)))
            return;

        const socket = this.#sockets
            .get(socketID);

        return this.#sendSocketMessage(
            socket,
            false,
            event,
            data,
        );
    }
}

export { WebSocketServer };
