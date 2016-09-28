'use strict';

/* Factories */

var Factories = angular.module('TestApp.factory', []);

Factories.factory('ModelFactory', function() {
    var model = {};
    var getData = function() {
        model.chart = {
            data: [],
            colors: [],
            labels: [],
            options: {},
            filterText: 'THIS WEEK'
        };
        model.chart1 = {
            data: [],
            colors: [],
            labels: [],
            options: {},
            filterText: 'THIS WEEK'
        };
        model.chart2 = {
            data: [],
            colors: [],
            labels: [],
            totalHour: 0,
            options: {},
            filterText: 'THIS WEEK'
        };
        model.chart3 = {
            data: [],
            colors: [],
            labels: [],
            options: {},
            filterText: 'THIS WEEK'
        };
        model.people = {
            data1: [],
            colors1: [],
            labels1: [],
            options1: {},
            data2: [],
            colors2: [],
            labels2: [],
            options2: {},
            totalWorkingHours: 0,
            totalConversations: 0,
            totalPeople: 0,
            avatars: []
        };
        model.projects = {};

        return model;
    };

    return {
        getData: getData
    }
});
