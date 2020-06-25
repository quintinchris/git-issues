const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const app = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());

// Twilio SMS setup
client.messages
  .create({
     body: '', //`${repo.issue}`
     from: `${process.env.TWILIO_PHONE_NUM}`,
     to: '' //`${user.number}`
   })
  .then(message => console.log(message.sid));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT, () => console.log(`Example app listening at http://localhost:${process.env.PORT}`));