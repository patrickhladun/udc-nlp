const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = 'development';

module.exports = merge(config, {
    mode,
    devServer: {
        port: 3000
    },
});