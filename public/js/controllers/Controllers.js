'use strict';

/* Controllers */

var Controllers = angular.module('TestApp.controllers', []);

Controllers.controller('HomeController', function($scope, Information) {
    Information.getChart().then(function(data) {
        $scope.data = [];
        $scope.colors = [];
        data.forEach(function(input) {
            if (!$scope.labels) $scope.labels = input.label;
            $scope.data.push(input.data);
            $scope.colors.push({backgroundColor: input.color});
        });
        $scope.options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true   // minimum value will be 0.
                    }
                }],
                xAxes: [{
                    gridLines : {
                        display : false
                    }
                }]
            }
        };
    });

    Information.getChart(1).then(function(data) {
        $scope.data1 = [];
        $scope.colors1 = [];
        data.forEach(function(input) {
            if (!$scope.labels1) $scope.labels1 = input.label;
            $scope.data1.push(input.data);
            $scope.colors1.push({backgroundColor: input.color, fill: false, tension: 0});
        });
        $scope.options1 = {
            scales: {
                fill: false,
                yAxes: [{
                    ticks: {
                        beginAtZero: true   // minimum value will be 0.
                    }
                }],
                xAxes: [{
                    gridLines : {
                        display : false
                    }
                }]
            }
        };
    });

    Information.getChart(2).then(function(data) {
        $scope.data2 = [];
        $scope.colors2 = [];
        $scope.labels2 = [];
        $scope.totalHour2 = 0;
        data.forEach(function(input) {
            $scope.labels2.push(input.label);
            $scope.data2.push(input.data);
            $scope.colors2.push(input.color);
            $scope.totalHour2 += input.data;
        });
        $scope.options2 = {
            cutoutPercentage: 50
        };
        $scope.totalHour2 = Math.floor($scope.totalHour2);
    });

    Information.getChart(3).then(function(data) {
        $scope.data3 = [];
        $scope.colors3 = [];
        $scope.labels3 = [];
        data.forEach(function(input) {
            $scope.labels3 = input.label;
            $scope.data3.push(input.data);
            $scope.colors3.push({backgroundColor: input.color, fill:false, tension: 0});
        });
        $scope.options3 = {
            scales: {
                fill: false,
                yAxes: [{
                    ticks: {
                        beginAtZero: true   // minimum value will be 0.
                    }
                }],
                xAxes: [{
                    gridLines : {
                        display : false
                    }
                }]
            }
        };
    });

    Information.getPeople().then(function(data) {
        $scope.totalWorkingHours = 0;
        $scope.totalConversations = 0;
        $scope.totalPeople = data.length;
        $scope.labels4 = [];
        $scope.labels5 = [];
        $scope.data4 = [];
        $scope.data5 = [];
        $scope.colors4 = [];
        $scope.colors5 = [{borderColor: 'rgba(83,200,235,0.8)', pointRadius: 0, fill: false, tension: 0}];
        data.forEach(function(input) {
            if ($scope.labels4.length == 0) $scope.labels4 = input.label;
            if ($scope.labels5.length == 0) $scope.labels5 = input.label;
            if (input.hours.length) {
                $scope.data4.push(input.hours);
                $scope.totalWorkingHours += _.reduce(input.hours, function(prev, next) { return prev + next;}, 0);
                if ($scope.data5.length == 0) {
                    $scope.data5.push(input.hours);
                }
            }
            if (input.messages) $scope.totalConversations += input.messages;
            if (input.color) $scope.colors4.push({backgroundColor: input.color, pointRadius: 0, tension: 0});
        });
        $scope.options4 = {
            scales: {
                fill: false,
                yAxes: [{
                    display:false,
                    ticks: {
                        beginAtZero: true   // minimum value will be 0.
                    },
                    gridLines : {
                        display : false
                    }
                }],
                xAxes: [{
                    display:false,
                    gridLines : {
                        display : false
                    }
                }]
            }
        };

        $scope.options5 = {
            scales: {
                fill: false,
                yAxes: [{
                    display:false,
                    ticks: {
                        beginAtZero: true   // minimum value will be 0.
                    },
                    gridLines : {
                        display : false
                    }
                }],
                xAxes: [{
                    display:false,
                    gridLines : {
                        display : false
                    }
                }]
            }
        };
    });

    Information.getProjects().then(function(data) {
        $scope.projects = data;
    });
});

Controllers.controller('OthersController', function($scope) {
    //other stuff
});