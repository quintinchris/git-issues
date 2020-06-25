const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const app = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var jsonParser = bodyParser.json();
//app.use(bodyParser.text());
//app.use(bodyParser.raw());
//app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', function (req, res) {
    console.log(req.body);
    /*
    client.messages
        .create({
            body: `${req.body}`, //`${repo.issue}`
            from: process.env.TWILIO_PHONE_NUM,
            to: 16072427828 //`${user.number}`
        })
        .then(message => console.log(message.sid));
        */
});

app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`));