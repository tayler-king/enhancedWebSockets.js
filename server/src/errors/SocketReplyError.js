export class SocketReplyError extends Error {
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}
