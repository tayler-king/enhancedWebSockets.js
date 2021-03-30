import { SocketParseError } from './errors/SocketParseError';

export const wrapWithPromise = (fn, ...args) => {
    return new Promise((resolve, reject) => {
        let hasBeenHandled = false;

        const promise = fn(...args, (error, response) => {
            if (hasBeenHandled)
                return;

            hasBeenHandled = true;

            if (error)
                return reject(error);

            resolve(response);
        });

        if (typeof promise?.then === 'function') {
            promise
                .then((...args) => {
                    !hasBeenHandled && resolve(...args);
                })
                .catch((...args) => {
                    !hasBeenHandled && reject(...args);
                })
                .finally(() => {
                    hasBeenHandled = true;
                });
        }
    });
};

export const parseSocketMessage = (message, lastMessageID) => {
    const encoded = Buffer
        .from(message)
        .toString();

    const indexOfJSON = encoded.indexOf('[');

    if (indexOfJSON < 0)
        throw new SocketParseError('Invalid message format');

    const hasCallback = indexOfJSON > 0;
    const messageID = +encoded.slice(0, indexOfJSON);

    let event;
    let data;

    try {
        const [
            _event,
            _data,
        ] = JSON.parse(encoded.slice(indexOfJSON));

        event = _event;
        data = _data;
    } catch (ex) {
        throw new SocketParseError('Invalid message structure');
    }

    if (hasCallback && (Number.isNaN(messageID) || !Number.isInteger(messageID) || messageID <= 0))
        throw new SocketParseError('Invalid message ID');

    if (hasCallback && messageID <= lastMessageID)
        throw new SocketParseError('Attempted to reuse previous message ID');

    if (typeof event !== 'string' || event.length < 1 || event.length > 64)
        throw new SocketParseError('Invalid event');

    return [
        messageID,
        event,
        data,
    ];
};
