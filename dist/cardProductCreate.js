const https = require('https');
const secret = require('./doNotPush.js')
// %%%%%%%%%%%%% Marqeta Create Card Product %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const options = { 
  hostname: 'shared-sandbox-api.marqeta.com',
  path: '/v3/cardproducts',
  auth: secret.APPLICATION_TOKEN + ':' + secret.MASTER_ACCESS_TOKEN, 
  method: 'POST',
  headers: { 
    'Content-Type': "application/json"
    // token: 'fromMyServer', 
    // name: 'dispatched from my server', 
    // start_date: '2019-04-05' 
  }
};



const newCardProduct = https.request(options, (res)=>{
  console.log('Status Code:', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) =>{
    process.stdout.write(d);
  });
});

newCardProduct.on('error', (e)=>{
  console.log("ERRORS: ",e)
});

// Write the Card Product
newCardProduct.write(JSON.stringify({ token: 'FromModule', name: 'YES From Module', start_date: '2019-04-05' }));

newCardProduct.end();


module.exports = newCardProduct
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%