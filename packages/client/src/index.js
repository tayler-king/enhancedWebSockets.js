import { WebSocketClient } from './classes/WebSocketClient';

if(typeof window !== 'undefined')
    window.WebSocketClient = WebSocketClient;

export { WebSocketClient };