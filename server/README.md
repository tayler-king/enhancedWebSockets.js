# enhancedWebSockets.js Server
_You can [view the client documentation here](https://github.com/Kondax/enhancedWebSockets.js/tree/main/client)._

This is a small abstraction layer built on top of [uWebSockets.js](https://github.com/uNetworking/uWebSockets.js)
that provides simple socket authentication alongside message callbacks.

It provides the same API as uWebSockets.js, without the http server methods.

You can [browse the uWebSockes.js documentation](https://unetworking.github.io/uWebSockets.js/generated/) to
get an understanding of what the different configuration options include.

This package extends the functionality of uWebSockets.js by adding an `authentication` handler
alongside individual message events.

## Example
```js
import { App, AuthenticationError, SocketReplyError } from 'ews-server';

const app = App()
    .ws('/*', {
        // Socket authentication can be asynchronous or synchronous
        authentication(token) {
            // Perform your socket authentication here, based on the string
            // supplied on connection (perfect for JWT tokens)
            try {
                const { username, userID } = someDecodeFunction(token);
                return { username, userID };
            } catch {
                throw new AuthenticationError('Invalid token provided');
            }
            
            // Alternatively, if you wish to allow unauthenticated
            // sockets to connect, don't throw an AuthenticationError
        },
        
        open(socket) {
            const { id } = socket;
            const { userID } = socket.userData;
            
            if(userID)
                console.log(`User ${ userID } connected`);
            else console.log(`Guest connected`);
            
            // Send an event `hello` with data `world`
            app.send(id, 'hello', 'world');
        },
        
        close(socket) {
            const { userID } = socket.userData;
            
            if(userID)
                console.log(`User ${ userID } disconnected`);
            else console.log(`Guest disconnected`);
        },
        
        // You can either return a promise or explicitly call callback(err, data)
        // if you want to reply to the client.
        async message(socket, event, data, callback) {
            const { userID } = socket.userData;
            
            if(!userID)
                return callback('Socket message requires authentication');
                
            // If returning a promise and you want to reply with an error to the client,
            // throw a SocketReplyError. All other error typres will be unhandled. This is
            // to prevent errors from leaking through to the client.
            if(!data)
                throw new SocketReplyError('Socket message requires data payload');
                
            switch(event) {
                case 'it':
                    return 'worked';
                default:
                    throw new SocketReplyError('Unknown event');
            }
        }
    })
    .listen(9001, socket => {
        if(socket)
            console.log('Listening on port 9001');
    });
```

## Key differences to uWebSockets.js
### Authentication handler
This library supports an authentication string being sent with the initial WebSocket upgrade request,
by using the `sec-websocket-protocol` header. By sending the authentication string in this header you
prevent it from being leaked in the url.

You can choose to handle authentication the following ways:
- Provide no authentication method and allow all clients to connect
- Provide an authentication method and throw an AuthenticationError if authentication fails. This
  dispatches the error message to the client and immediately terminates the connection.
- Provide an authentication method and don't throw an AuthenticationError. This allows
  unauthenticated clients to connect to the socket.

The `authentication` handler can either be synchronous or asynchronous. Whatever you return
from the handler will be set to `socket.userData` for all future handlers (open, close, message).

If identifying a user, common practice would be to return `{ userID }` and access this through
`socket.userData.userID` in other handlers. If the socket isn't authenticated, you could return
false or nothing at all to differentiate between authenticated and unauthenticated sockets.

## Socket messages
Clients can optionally specify a callback function that allows the server to provide a response
to individual events. Under the hood, this library treats all events as though they have provided
a callback so that your code doesn't break if a malicious or broken client doesn't send a callback.

Messages also contain named events, which are accessed through the following:

```js
message(socket, event[, data[, callback]]) {
    switch(event) {
        case ...:
            break;
    }
}
```

**You must check if `callback` is defined prior to invoking the callback or
returning a `SocketReplyError`.**

You can either return a promise to trigger the callback handler or invoke the `callback` function
yourself. If you wish to reply an error, either call `callback(error)` or throw a `SocketReplyError`
with the message as the first argument.

Any errors thrown that aren't an instance of `SocketReplyError` will not be handled by the library
and not sent to the client.

## Sending data to clients
All incoming and outgoing data is treated as JSON, and is encoded/decoded by the library. You
are able to send data alongside the event name, which is as simple as `app.send(socketID, event[, data])`.

In the future it will be possible to use `socket.send(event, data)`. Callbacks are not supported
when emitting events to the client.

## Publishing messages to multiple clients
uWebSockets.js supports [subscribing to topics](https://github.com/uNetworking/uWebSockets.js/tree/master/examples), so you are able to call
`socket.subscribe('topic')`. You can then call `app.publish(topic, event[, data ])`
to send a message to all subscribed clients.