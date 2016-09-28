'use strict';

/* Controllers */

var Controllers = angular.module('TestApp.controllers', []);

Controllers.controller('AppController', function($scope, Information, $timeout) {
    var filterTextTimeout;
    $scope.typeheadvalue = [];
    $scope.searchvalue = "";

    $scope.$watch('searchvalue', function (val) {
        if (filterTextTimeout) $timeout.cancel(filterTextTimeout);
        filterTextTimeout = $timeout(function() {
            if (val) {
                Information.getTypehead(val).then(function(data){
                    $scope.typeheadvalue = data;
                });
            } else {
                $scope.typeheadvalue = [];
            }
        }, 450);
    });

    $scope.resetTypeheadvalue = function() {
        $scope.typeheadvalue = [];
    }

});

Controllers.controller('HomeController', function($scope, Information, ModelFactory) {
    $scope.model = ModelFactory.getData();

    Information.getChart().then(function(data) {
        data.forEach(function(input) {
            if ($scope.model.chart.labels.length == 0) $scope.model.chart.labels = input.label;
            $scope.model.chart.data.push(input.data);
            $scope.model.chart.colors.push({backgroundColor: input.color});
        });
        $scope.model.chart.options = {
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
        data.forEach(function(input) {
            if ($scope.model.chart1.labels.length == 0) $scope.model.chart1.labels = input.label;
            $scope.model.chart1.data.push(input.data);
            $scope.model.chart1.colors.push({borderColor: input.color, fill: false, tension: 0});
        });
        $scope.model.chart1.options = {
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

    Information.getChart(2, 'donut').then(function(data) {
        data.forEach(function(input) {
            $scope.model.chart2.labels.push(input.label);
            $scope.model.chart2.data.push(input.data);
            $scope.model.chart2.colors.push(input.color);
            $scope.model.chart2.totalHour += input.data;
        });
        $scope.model.chart2.options = {
            cutoutPercentage: 50
        };
        $scope.model.chart2.totalHour = Math.floor($scope.model.chart2.totalHour);
    });

    Information.getChart(3).then(function(data) {
        data.forEach(function(input) {
            $scope.model.chart3.labels = input.label;
            $scope.model.chart3.data.push(input.data);
            $scope.model.chart3.colors.push({backgroundColor: input.color, fill:false, tension: 0});
        });
        $scope.model.chart3.options = {
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
        $scope.model.people.totalPeople = data.length;
        $scope.model.people.colors2 = [{borderColor: 'rgba(83,200,235,0.8)', pointRadius: 0, fill: false, tension: 0}];
        data.forEach(function(input) {
            if ($scope.model.people.labels1.length == 0) $scope.model.people.labels1 = input.label;
            if ($scope.model.people.labels2.length == 0) $scope.model.people.labels2 = input.label;
            if (input.hours.length) {
                $scope.model.people.data1.push(input.hours);
                $scope.model.people.totalWorkingHours += _.reduce(input.hours, function(prev, next) { return prev + next;}, 0);
                if ($scope.model.people.data2.length == 0) {
                    $scope.model.people.data2.push(input.hours);
                }
            }
            if (input.avatar) $scope.model.people.avatars.push(input.avatar);
            if (input.messages) $scope.model.people.totalConversations += input.messages;
            if (input.color) $scope.model.people.colors1.push({backgroundColor: input.color, pointRadius: 0, tension: 0});
        });
        $scope.model.people.options1 = {
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

        $scope.model.people.options2 = {
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

    $scope.redrawChart = function(event, chartName, days, type, filterText) {
        event.preventDefault();
        var chartIndex = chartName.replace('chart','');
        Information.getChart(chartIndex, type, days).then(function(data) {
            $scope.model[chartName].labels = [];
            $scope.model[chartName].data = [];
            $scope.model[chartName].filterText = filterText;
            data.forEach(function(input) {
                if (type == 'linear') {
                    $scope.model[chartName].labels = input.label;
                } else if (type == 'donut') {
                    $scope.model[chartName].labels.push(input.label);
                }
                $scope.model[chartName].data.push(input.data);
            });
        });
    }

});

Controllers.controller('OthersController', function($scope) {
    //other stuff
});
