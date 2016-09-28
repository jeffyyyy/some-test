'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PeopleSchema = new Schema({
    name: String,
    avatar: String,
    label: [],
    hours: [],
    messages: Number,
    color: String
}, {collection: 'people'});

module.exports = mongoose.model('People', PeopleSchema);