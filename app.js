var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-sample');
require('./models/ArticleModel');
require('./models/UserModel');
var app = express();
var routes = require('./routes');
app.use(bodyParser.json());
app.use(routes);

var server = app.listen(3000, () => {
    console.log(`Listening on port: ${server.address().port}`);
})