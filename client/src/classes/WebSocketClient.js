import EventEmitter from 'eventemitter3';
import { parseSocketMessage } from '../utils';

class WebSocketClient extends EventEmitter {
    #lastMessageID = 0;
    #callbacks = new Map();
    #webSocket;

    constructor(url, token) {
        super();

        this.#webSocket = new WebSocket(url, token);
        this.#webSocket.onmessage = (...args) => this.#onSocketMessage(...args);
        this.#webSocket.onclose = (...args) => this.#onSocketClose(...args);
        this.#webSocket.onerror = (...args) => this.#onSocketError(...args);
        this.#webSocket.onopen = (...args) => this.#onSocketOpen(...args);
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

        // If there's a messageID, it means the message
        // is a callback. errorOrEvent is an error.
        if (messageID) {
            if (!this.#callbacks.has(messageID))
                return;

            const callback = this.#callbacks
                .get(messageID);

            callback(errorOrEvent, data);

            return this.#callbacks
                .delete(messageID);
        }

        // If there's no messageID, it means the message
        // is an event. errorOrEvent is an event.
        this.emit(errorOrEvent, data);

        if (this.onmessage)
            this.onmessage(errorOrEvent, data);
    }

    #onSocketClose(closeEvent) {
        this.#callbacks.forEach((callback) => {
            callback('Socket closed');
        });

        this.#callbacks.clear();
        this.#lastMessageID = 0;

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
        return this.#webSocket.close(...args);
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
