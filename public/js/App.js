'use strict';

var App = angular.module('TestApp', ['ngRoute', "chart.js", 'TestApp.controllers', 'TestApp.services', 'TestApp.filters', 'TestApp.factory']);

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController'
    }).
    when('/time-management', {
     templateUrl: '/views/time-management.html',
     controller: 'OthersController'
    }).
    when('/inbox', {
        templateUrl: '/views/inbox.html',
        controller: 'OthersController'
    }).
    when('/calendar', {
        templateUrl: '/views/calendar.html',
        controller: 'OthersController'
    }).
    when('/analytics', {
        templateUrl: '/views/analytics.html',
        controller: 'OthersController'
    }).
    when('/settings', {
        templateUrl: '/views/settings.html',
        controller: 'OthersController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);

App.run(['$route', '$rootScope', '$location', '$window', function ($route, $rootScope, $location, $window) {
    var original = $location.path;
    $location.path = function (path, reload) {
        if (reload === false) {
            var lastRoute = $route.current;
            var un = $rootScope.$on('$locationChangeSuccess', function () {
                $route.current = lastRoute;
                un();
            });
        }
        return original.apply($location, [path]);
    };

    $rootScope.$on('$routeChangeSuccess', function(event) {
        $rootScope.activeRoute = $location.path();
    });

}]);


