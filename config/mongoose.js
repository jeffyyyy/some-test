var config = require('./environment/development')
    , mongoose = require('mongoose')
    ;

module.exports = function() {
    var db = mongoose.connect(config.mongo.uri, config.mongo.options);

    return db;
}