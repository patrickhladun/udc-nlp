const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {   
                test: /\.css$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
});