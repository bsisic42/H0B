var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var sendEmailWithMailjet = require('./sendEmail.service');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => {
  res.json({ message: 'api:OK' })
});

app.post('/send', (req, res) => {
  sendEmailWithMailjet(req.body.recipients, req.body.name, req.body.som, () => {res.end("ok")});
});

app.listen(4730);
