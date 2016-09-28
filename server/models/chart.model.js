'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChartSchema = new Schema({
    name: String,
    label: [],
    data: [],
    color: String
});

module.exports = mongoose.model('Chart0', ChartSchema);