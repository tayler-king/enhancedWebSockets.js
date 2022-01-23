import { WebSocketServer } from './classes/WebSocketServer';

export { AuthenticationError } from './errors/AuthenticationError';
export { SocketReplyError } from './errors/SocketReplyError';

export const App = (options = {}) => {
    return new WebSocketServer(options, false);
};

export const SSLApp = (options = {}) => {
    return new WebSocketServer(options, true);
};
