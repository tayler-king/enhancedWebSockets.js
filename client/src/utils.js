export const parseSocketMessage = (encoded) => {
    const indexOfJSON = encoded.indexOf('[');

    if (indexOfJSON < 0)
        throw new Error('Invalid message format');

    const hasCallback = indexOfJSON > 0;
    const messageID = +encoded.slice(0, indexOfJSON);

    let errorOrEvent;
    let data;

    try {
        const [
            _errorOrEvent,
            _data,
        ] = JSON.parse(encoded.slice(indexOfJSON));

        errorOrEvent = _errorOrEvent;
        data = _data;
    } catch (ex) {
        throw new Error('Invalid message structure');
    }

    if (hasCallback && (Number.isNaN(messageID) || !Number.isInteger(messageID) || messageID <= 0))
        throw new Error('Invalid message ID');

    if (!hasCallback && (typeof errorOrEvent !== 'string' || errorOrEvent.length < 1 || errorOrEvent.length > 64))
        throw new Error('Invalid event');

    return [
        messageID,
        errorOrEvent,
        data,
    ];
};
