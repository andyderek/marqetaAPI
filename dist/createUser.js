const https = require('https');
const secret = require('./doNotPush.js');


function createUserRequest(dog, dog2){

const options = { 
  hostname: 'shared-sandbox-api.marqeta.com',
  path: '/v3/users',
  auth: secret.APPLICATION_TOKEN + ':' + secret.MASTER_ACCESS_TOKEN, 
  method: 'POST',
  headers: { 
    'Content-Type': "application/json"
  }
};

const createUser = https.request(options, (res2)=>{
  console.log('Status Code: ', res2.statusCode);
  console.log('headers: ', res2.headers);

  let returnData = '';

  res2.on('data', (d)=>{
    process.stdout.write(d);
    returnData += d; 
  });

  res2.on('end', () => {
    console.log('No more data in response.');
    dog2.send(returnData);
  });

});

createUser.write(JSON.stringify(dog.body));
createUser.end();

}

module.exports = createUserRequest;