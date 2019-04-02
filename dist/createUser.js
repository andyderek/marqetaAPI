const https = require('https');
const secret = require('./doNotPush.js');

const userProfile = {
  first_name: 'Boo',
  last_name: 'Davis',
  active: true 
}

const options = { 
  hostname: 'shared-sandbox-api.marqeta.com',
  path: '/v3/users',
  auth: secret.APPLICATION_TOKEN + ':' + secret.MASTER_ACCESS_TOKEN, 
  method: 'POST',
  headers: { 
    'Content-Type': "application/json"
  }
};

const createUser = https.request(options, (res)=>{
  console.log('Status Code: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d)=>{
    process.stdout.write(d);
  });

  res.on('end', () => {
    console.log('No more data in response.');
  });

});

createUser.write(JSON.stringify(userProfile));
createUser.end();

module.exports = createUser;