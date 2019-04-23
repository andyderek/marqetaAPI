const https = require('https');
const secret = require('./doNotPush.js')
const cardProductCreator = require("./cardProductCreator.js")
// %%%%%%%%%%%%% Marqeta Create Card Product %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// %%%%%%%%%%%%%To populate API with Card Products for User to choose%%%%%%%%%%%%%%%
const flyByNight = new cardProductCreator("2019-04-11", "Fly By Night Airlines");
const redEyeAir = new cardProductCreator("2019-04-11", "Red Eye Air");
const shopForBonus = new cardProductCreator("2019-04-14", "Shop For Bonuses")


function CreateCardProduct(request, response){

const options = { 
  hostname: 'shared-sandbox-api.marqeta.com',
  path: '/v3/cardproducts',
  auth: secret.APPLICATION_TOKEN + ':' + secret.MASTER_ACCESS_TOKEN, 
  method: 'POST',
  headers: { 
    'Content-Type': "application/json"
  }
};

const newCardProduct = https.request(options, (res2)=>{
  console.log('Status Code:', res2.statusCode);
  console.log('headers: ', res2.headers);

  let returnData = ''

  res2.on('data', (d) =>{
    process.stdout.write(d);
    returnData += d;
  });

  res2.on('end', () => {
    console.log('No more data in response.');
    response.send(returnData);
  });

});

newCardProduct.on('error', (e)=>{
  console.log("ERRORS: ",e)
});

// Write the Card Product
newCardProduct.write(JSON.stringify(request.body));

newCardProduct.end();
}

module.exports = { CreateCardProduct, flyByNight, redEyeAir, shopForBonus }
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%