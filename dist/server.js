const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const newCardProduct = require('./cardProductCreate.js')

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => res.send('Hello, World'));

app.listen('8000', ()=> console.log("I'm listening on port 8000"));