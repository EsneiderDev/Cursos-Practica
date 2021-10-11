const client = require('twilio')();

client.messages.create({
  from: 'whatsapp:+14155238886',
  body: 'Ahoy world!',
  to: 'whatsapp:+15555555555'
}).then(message => console.log(message.sid));

