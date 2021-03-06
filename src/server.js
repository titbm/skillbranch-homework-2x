const EXPRESS = require('express');
const CHALK = require('chalk');
const CORS = require('cors');
const BASE = require('./base/base.json');
// var open = require('open');

const SERVER = EXPRESS();
const PORT = process.env.PORT || 3000;

SERVER.use(CORS());
// SERVER.use(EXPRESS.static('public'));

SERVER.get('/', (request, response) => {
  let query = request.query;
  response.status(200).send(BASE[request.query.i]);
});

SERVER.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(CHALK.cyan(`Server is up on port: ${PORT}`));
    // open("http://localhost:" + PORT);
  }
});
