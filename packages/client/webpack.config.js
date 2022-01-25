const path = require('path');
const { NODE_ENV = 'development' } = process.env;

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: false,
    mode: NODE_ENV,
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }],
    },
    resolve: {
        extensions: ['*', '.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: `WebSocketClient${NODE_ENV === 'production' ? '.min' : ''}.js`,
        library: 'WebSocketClient',
        libraryExport: 'default',
        libraryTarget: 'umd',
    },
};
