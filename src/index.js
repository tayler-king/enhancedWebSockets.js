import { WebSocket } from './classes/WebSocket';

export const App = (options = {}) => {
    return new WebSocket(options, false);
};

export const SSLApp = (options = {}) => {
    return new WebSocket(options, true);
};
