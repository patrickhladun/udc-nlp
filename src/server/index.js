const dotenv = require('dotenv');
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express();
dotenv.config();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html');
    res.sendFile(path.resolve('src/client/views/index.html'));
})

app.listen(8080, () => console.log('Example app listening on port 8080!'));

app.get('/test', (req, res) => res.send(mockAPIResponse));
