'use strict';

var App = angular.module('TestApp', ['ngRoute', "chart.js", 'TestApp.controllers']);

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController'
    }).
   /* when('/time-management', {
     templateUrl: '/views/time-management',
     controller: 'TimeManagementController',
    /!* resolve: {
     session: setSession
     }*!/
     }).*/
    otherwise({
        redirectTo: '/'
    });
}]);



