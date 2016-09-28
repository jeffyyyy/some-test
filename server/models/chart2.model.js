'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Chart2Schema = new Schema({
    name: String,
    label: String,
    data: Number,
    color: String
});

module.exports = mongoose.model('Chart2', Chart2Schema);