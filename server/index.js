'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = 3000;
app.set('port', PORT);

// Necessary to serve the index.html page
app.use(express.static(__dirname + '/../public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(app.get('port'), (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening to ${app.get('port')}!`);
})
