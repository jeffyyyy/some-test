'use strict';

var Filters = angular.module('TestApp.filters', []);

Filters.filter('fromNow', function() {
    return function(date) {
        return moment(date).fromNow();
    }
});