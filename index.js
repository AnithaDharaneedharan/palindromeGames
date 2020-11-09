var express = require('express');
const bodyParser = require('body-parser');

const api = require('./api');

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use(api);

app.get('/', function (req, res) {
  res.render('index.html');
});

var port = 3000;
module.exports = app.listen(port, function () {
  console.log('Server', process.pid, 'listening on port', port);
});


