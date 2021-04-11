# enhancedWebSockets.js Client
_You can [view the server documentation here](https://github.com/Kondax/enhancedWebSockets.js/tree/main/server)._

This is the client for a small abstraction layer built on top of
[uWebSockets.js](https://github.com/uNetworking/uWebSockets.js) that provides
simple socket authentication alongside message callbacks.

It provides the same API as WebSocket, with some extended functionality.

You can [browse the WebSocket documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) to
get an understanding of how to use the client.

You are able to pass an authentication string to the server when using this client.

## Example
```js
import { WebSocketClient } from 'ews-client'; // or access it through window.WebSocketClient

// Authentication token is optional, as are the reconnection options. These
// are just the defaults set by the library.
const socket = new WebSocketClient('ws://127.0.0.1:9001'[, someAuthToken[, {
    maxReconnectInterval: 30000,
    maxReconnectAttempts: 0,
    reconnectInterval: 1000,
    timeoutInterval: 2000,
    reconnectDecay: 1.5,
    reconnect: false
}]]);

// Or use socket.onopen = event => {};
socket.on('open', event => {
    console.log(`Socket connection was opened`);
    
    socket.send('someEvent', { someData: true }, (error, data) => {
        if(error)
            console.error(`Received an error reply: ${ error }`);
        else console.log(`Received reply: ${ data }`);
    });
});

// Or use socket.onerror = event => {};
socket.on('error', event => {
    console.log(`Socket emitted an error: ${ event }`);
});

// Or use socket.onclose = event => {};
socket.on('close', event => {
    console.log(`Socket connection was closed: ${ event.reason }`);
});

// Or use socket.onmessage = (event, data) => {};
socket.on('someEvent', data => {
    console.log(`Received socket event 'someEvent', data ${ data }`);
})
```

## Key differences to the WebSocket class
### Authentication
This library supports an authentication string being sent with the initial WebSocket upgrade request,
by using the `sec-websocket-protocol` header. By sending the authentication string in this header you
prevent it from being leaked in the url.

Pass an authentication string (such as a JWT token) as the second argument and the server will perform
authentication. The server can either accept unauthenticated requests or reject the connection, in which
case the `close` event will be fired with `closeEvent.code = 4000` and a message in `closeEvent.reason`.

### Automatic reconnection
You can configure the library to automatically reconnect if the socket closes. The defaults are shown below.

```js
{
maxReconnectInterval: 30000, // Maximum delay between reconnection attempts
maxReconnectAttempts: 0, // Maximum reconnection attempts before giving up (0 for infinite)
reconnectInterval: 1000, // Initial delay between reconnection attempts
timeoutInterval: 2000, // Maximum timeout before a connection is considered as failed
reconnectDecay: 1.5, // Rate of increase in the reconnection delay
reconnect: false // If the library should automatically reconnect or not
}
```

If you are happy with the defaults and just want the library to automatically reconnect for you, set
`{ reconect: true }` as the third argument passed to the constructor.

### Sending events
Clients can optionally specify a callback function that allows the server to provide a response
to individual events. You don't have to send a callback, nor do you have to send data. You can invoke
the send function via the following:

```js
socket.send(event[, data[, callback ]]);
```

If the server does reply to the message, it will be called with the signature `callback(error, data)`.

### Receiving events
The WebSocketClient class extends an event emitter, so you can either handle events using `socket.onevent = () => {}`
where `event` is the event name, or use `socket.on('event', (...args) => {})`.

Since socket events are just directly broadcast top-level, it's possible the server could mistakenly send
`close`, `open`, or `error` events to the client. If this somehow happens the events are instead ignored.