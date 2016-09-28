'use strict';

var Project = require('../models/projects.model');
var People = require('../models/people.model');
var _ = require('underscore');

exports.index = function(req, res) {
    return res.render('index');
}

exports.getChart = function(req, res) {
    var Chart;
    switch(req.param('chart')) {
        case "1":
            Chart = require('../models/chart1.model');
            break;
        case "2":
            Chart = require('../models/chart2.model');
            break;
        case "3":
            Chart = require('../models/chart3.model');
            break;
        default:
            Chart = require('../models/chart.model');
            break;
    }
    Chart.find().sort("name").exec(function(err, data) {
        if (err) return res.status(500).send(err);
        return res.json(data);
    });
};

exports.getProjects = function(req, res) {
    Project.find().sort("title").exec(function(err, data) {
        if (err) return res.status(500).send(err);
        return res.json(data);
    });
};

exports.getPeople = function(req, res) {
    People.find().sort("name").exec(function(err, data) {
        if (err) return res.status(500).send(err);
        return res.json(data);
    });
};
