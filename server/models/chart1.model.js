'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Chart1Schema = new Schema({
    name: String,
    label: [],
    data: [],
    color: String
});

module.exports = mongoose.model('Chart1', Chart1Schema);