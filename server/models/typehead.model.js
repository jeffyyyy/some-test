'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TypeheadSchema = new Schema({
    name: String,
    description: String
}, {collection: 'typehead'});

module.exports = mongoose.model('Typehead', TypeheadSchema);
