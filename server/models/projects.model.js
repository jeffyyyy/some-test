'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    title: String,
    type: String,
    lastUpdate: Date,
    hours: Number,
    messages: Number,
    progress: Number,
    color: String,
    image: String
});

module.exports = mongoose.model('Projects', ProjectSchema);