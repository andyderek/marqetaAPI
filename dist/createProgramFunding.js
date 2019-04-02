const https = require('https');
const secret = require('./doNotPush.js');

const programFunding = {
  name: 'Program Funding'
}

const options = { 
  hostname: 'shared-sandbox-api.marqeta.com',
  path: '/v3/fundingsources/program',
  auth: secret.APPLICATION_TOKEN + ':' + secret.MASTER_ACCESS_TOKEN, 
  method: 'POST',
  headers: { 
    'Content-Type': "application/json"
  }
};

const createFunding = https.request(options, (res)=>{
  console.log('Status Code: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d)=>{
    process.stdout.write(d);
  });

  res.on('end', () => {
    console.log('No more data in response.');
  });

});

createFunding.write(JSON.stringify(programFunding));
createFunding.end();