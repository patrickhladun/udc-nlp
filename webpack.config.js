const path = require('path');

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(process.cwd(), 'dist')
    }
}