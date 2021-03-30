import { WebSocketServer } from './classes/WebSocketServer';

export const App = (options = {}) => {
    return new WebSocketServer(options, false);
};

export const SSLApp = (options = {}) => {
    return new WebSocketServer(options, true);
};
