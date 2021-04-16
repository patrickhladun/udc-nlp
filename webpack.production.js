const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

const mode = 'production';

module.exports = merge(config, {
    mode,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {   
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
});