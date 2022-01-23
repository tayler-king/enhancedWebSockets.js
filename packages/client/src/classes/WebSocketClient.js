import EventEmitter from 'eventemitter3';
import { parseSocketMessage } from '../utils';

class WebSocketClient extends EventEmitter {
    #options = {
        __deprecatedEventStructure: false,
        maxReconnectInterval: 30000,
        maxReconnectAttempts: 0,
        reconnectInterval: 1000,
        timeoutInterval: 2000,
        reconnectDecay: 1.5,
        reconnect: false,
    };

    #reconnect = {
        attemptNumber: 0,
        timeout: false,
    };

    #hasForceClosed = false;
    #lastMessageID = 0;
    #callbacks = new Map();
    #webSocket = false;

    #token;
    #url;

    constructor(url, token, options) {
        super();

        if (options)
            this.#options = { ...this.#options, ...options };

        this.#token = token;
        this.#url = url;

        this.#createConnection();
    }

    #createConnection() {
        console.debug(`Attempting new WebSocket connection to ${this.#url}`);

        if (this.#webSocket) {
            this.#webSocket.onmessage = undefined;
            this.#webSocket.onclose = undefined;
            this.#webSocket.onerror = undefined;
            this.#webSocket.onopen = undefined;
        }

        this.#webSocket = new WebSocket(this.#url, this.#token);
        this.#webSocket.onmessage = (...args) => this.#onSocketMessage(...args);
        this.#webSocket.onclose = (...args) => this.#onSocketClose(...args);
        this.#webSocket.onerror = (...args) => this.#onSocketError(...args);
        this.#webSocket.onopen = (...args) => this.#onSocketOpen(...args);
    }

    #attemptReconnection() {
        let { attemptNumber } = this.#reconnect;

        const {
            maxReconnectInterval,
            maxReconnectAttempts,
            reconnectInterval,
            timeoutInterval,
            reconnectDecay,
        } = this.#options;

        attemptNumber++;

        if (attemptNumber === maxReconnectAttempts) {
            console.debug(`Maximum connection attempts (${maxReconnectAttempts}) reached`);

            return this.#reconnect = {
                attemptNumber: 0,
                timeout: false,
            };
        }

        const delay = Math.min(
            reconnectInterval * (reconnectDecay ** attemptNumber),
            maxReconnectInterval,
        );

        console.debug(`Attempting reconnection #${attemptNumber} to WebSocket, delaying ${delay}ms`);

        setTimeout(() => {
            this.#createConnection();

            this.#reconnect.timeout = setTimeout(() => {
                console.debug('Failed to establish connection in time, closing connection');
                this.#webSocket.close();
            }, timeoutInterval);
        }, delay);

        this.#reconnect.attemptNumber = attemptNumber;
    }

    #onSocketMessage(messageEvent) {
        const encoded = messageEvent.data;

        if (!encoded.length)
            return;

        const [
            messageID,
            errorOrEvent,
            data,
        ] = parseSocketMessage(encoded);

        if (!messageID && ['open', 'close', 'error'].includes(errorOrEvent))
            return;

        // If there's a messageID, it means the message
        // is a callback. errorOrEvent is an error.
        if (messageID) {
            if (!this.#callbacks.has(messageID))
                return;

            const callback = this.#callbacks
                .get(messageID);
            
            if (this.#options.__deprecatedEventStructure) // eslint-disable-line no-underscore-dangle
                callback({ error: errorOrEvent, data });
            else callback(errorOrEvent, data);

            return this.#callbacks
                .delete(messageID);
        }

        // If there's no messageID, it means the message
        // is an event. errorOrEvent is an event.

        if (this.onmessage)
            this.onmessage(errorOrEvent, data);
        else this.emit(errorOrEvent, data);
    }

    #onSocketClose(closeEvent) {
        clearTimeout(this.#reconnect.timeout);
        console.debug('WebSocket connection lost');

        this.#callbacks.forEach((callback) => {
            callback('Socket closed');
        });

        this.#callbacks.clear();
        this.#lastMessageID = 0;

        if (!this.#hasForceClosed && this.#options.reconnect) {
            if (this.#reconnect.attemptNumber)
                return this.#attemptReconnection();

            this.#attemptReconnection();
        }

        this.#hasForceClosed = false;

        if (this.onclose)
            this.onclose(closeEvent);
        else this.emit('close', closeEvent);
    }

    #onSocketError(errorEvent) {
        if (this.onerror)
            this.onerror(errorEvent);
        else this.emit('error', errorEvent);
    }

    #onSocketOpen(openEvent) {
        clearTimeout(this.#reconnect.timeout);
        console.debug('WebSocket connection established');

        this.#hasForceClosed = false;
        this.#reconnect = {
            attemptNumber: 0,
            timeout: false,
        };

        if (this.onopen)
            this.onopen(openEvent);
        else this.emit('open', openEvent);
    }

    get readyState() {
        return this.#webSocket.readyState;
    }

    get bufferedAmount() {
        return this.#webSocket.bufferedAmount;
    }

    get url() {
        return this.#webSocket.url;
    }

    close(...args) {
        this.#hasForceClosed = true;
        console.debug('Client manually closed WebSocket connection');

        return this.#webSocket
            .close(...args);
    }

    send(event, data, callback) {
        if (typeof data === 'function') {
            callback = data; // eslint-disable-line no-param-reassign
            data = undefined; // eslint-disable-line no-param-reassign
        }

        if (callback) {
            const messageID = ++this.#lastMessageID;

            this.#callbacks
                .set(messageID, callback);

            return this.#webSocket.send(
                messageID + JSON.stringify([event, data]),
            );
        }

        this.#webSocket.send(
            JSON.stringify([event, data]),
        );
    }
}

export { WebSocketClient };
