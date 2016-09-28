'use strict';

var Services = angular.module('TestApp.services', []);

Services.service('Information', function($q, $http) {
    return {
        getChart: function (chartIndex) {
            var defer = $q.defer();
            $http.get('/api/chart?chart=' + (chartIndex != undefined ? chartIndex : '')).success(function (data) {
                defer.resolve(data);
            });
            return defer.promise;
        },
        getProjects: function () {
            var defer = $q.defer();
            $http.get('/api/projects').success(function (data) {
                defer.resolve(data);
            });
            return defer.promise;
        },
        getPeople: function() {
            var defer = $q.defer();
            $http.get('/api/people').success(function (data) {
                defer.resolve(data);
            });
            return defer.promise;
        }
    }
});