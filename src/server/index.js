const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const fetch = require('node-fetch');
const app = express();

dotenv.config();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 8080;
const server = app.listen(port, () => console.log(`Running on port: ${port}`));

app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile(path.resolve('src/client/views/index.html')));

app.post('/language', (req, res) => {
    
    const key = process.env.MC_API_KEY;
    const txt = req.body.txt;
    
    fetch(`https://api.meaningcloud.com/lang-4.0/identification?key=${key}&txt=${txt}`, { method: 'POST' })
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(error => console.log('error', error));
});