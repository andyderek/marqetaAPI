const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => res.send('Hello, World'));

app.listen('3000', ()=> console.log("I'm listening on port 3000"));