'use strict';

var EXPRESS = require('express');
var CHALK = require('chalk');
var CORS = require('cors');
var BASE = require('./base/base.json');
// var open = require('open');

var SERVER = EXPRESS();
var PORT = process.env.PORT || 3000;

SERVER.use(CORS());
// SERVER.use(EXPRESS.static('public'));

SERVER.get('/', function (request, response) {
  var query = request.query;
  response.status(200).send(BASE[request.query.i]);
});

SERVER.listen(PORT, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log(CHALK.cyan('Server is up on port: ' + PORT));
    // open("http://localhost:" + PORT);
  }
});