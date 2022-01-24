import { WebSocketClient } from './classes/WebSocketClient';

export { WebSocketClient };

if(typeof window === 'function')
    window.WebSocketClient = WebSocketClient;
