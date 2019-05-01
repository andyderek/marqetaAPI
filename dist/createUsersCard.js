const https = require('https');
const secret = require('./doNotPush.js');

function createUsersCard(request, response){
  
  const options = {
    hostname: 'shared-sandbox-api.marqeta.com',
    path: '/v3/cards',
    auth: secret.APPLICATION_TOKEN + ':' + secret.MASTER_ACCESS_TOKEN,
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    }
  };

  const usersCard = https.request(options, (res2)=>{
    console.log('Create Users Card', res2.statusCode);
    console.log('Headers', res2.headers);

    let returnData = '';

    res2.on('data', (d)=>{
      process.stdout.write(d);
      returnData += d; 
    });

    res2.on('end', () => {
      console.log('No more data in response.');
      response.send(returnData);
    });

  });

  usersCard.on('error', (e)=>{
    console.log("ERRORS: ",e)
  });

  usersCard.write(JSON.stringify(request.body));
  usersCard.end();

}

module.exports = createUsersCard;