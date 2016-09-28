'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Chart3Schema = new Schema({
    name: String,
    label: [],
    data: [],
    color: String
});

module.exports = mongoose.model('Chart3', Chart3Schema);