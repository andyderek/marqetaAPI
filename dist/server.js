const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const createUserRequest = require('./createUser.js')
const { CreateCardProduct, flyByNight, redEyeAir, shopForBonus } = require('./cardProductCreate.js')

// To reduce the amount of API calls while creating layout
const fakeUserInputResponse = require('./fakeUserInputResponse.json')
const fakeCardProductData = require('./fakeCardProductData.json')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res) => res.send('Hello, World'));

app.get('/cardProfile', (req, res)=> {
  res.send('From the Server With Love');
})


app.post('/CreateCardProduct', (req,res)=>{
  // uncomment for real api request
  // CreateCardProduct(req, res);

  res.send(fakeCardProductData);

})


app.post('/userNameInput', (req, res)=> {
// uncomment for real api request
// createUserRequest(req, res);
  res.send(fakeUserInputResponse)
})




app.listen('8000', ()=> console.log("I'm listening on port 8000"));