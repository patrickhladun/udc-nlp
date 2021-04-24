const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = 'production';

module.exports = merge(config, {
    mode,
    plugins: [
        new CleanWebpackPlugin({
            dry: false,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
});