var config = require('./config/environment/development');
var express = require('./config/express');
var mongoose = require('./config/mongoose');
var db = mongoose();
var app = express();

app.listen(config.server.port, function() {
    console.log('Server running at http://localhost:' + config.server.port);
});
