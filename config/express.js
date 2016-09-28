var express = require('express');

module.exports = function() {
    var app = express();
    app.use(express.static(__dirname + '/../public'));

    require('../server/routes/route.js')(app);

    return app;
};
