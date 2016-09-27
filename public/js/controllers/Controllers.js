'use strict';

/* Controllers */

var Controllers = angular.module('TestApp.controllers', []);

Controllers.controller('HomeController', function($scope, $http, $location) {
    $scope.labels = ["30.05", "31.05", "01.06", "02.06", "03.06","04.06","05.06","06.06","07.06","08.06","09.06"];
    //$scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [40, 30, 20, 42, 56, 39, 30,20,10,20,34],
        [35, 42, 45, 26, 35, 22, 42, 13, 32, 24, 12]
    ];
    $scope.colors = [
        {
            backgroundColor: 'rgba(83,200,235,0.8)'
        },
        {
            backgroundColor: 'rgba(195,226,244,0.8)'
        }
    ]
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

    $scope.labels1 = ["30.05", "31.05", "01.06", "02.06", "03.06","04.06","05.06","06.06","07.06","08.06","09.06"];
    //$scope.series = ['Series A', 'Series B'];
    $scope.data1 = [
        [40, 30, 20, 42, 56, 39, 30,20,10,20,34],
        [35, 42, 45, 26, 35, 22, 42, 13, 32, 24, 12]
    ];
    $scope.colors1 = [
        {
            backgroundColor: 'rgba(83,200,235,0.8)',
            fill: false,
            tension: 0
        },
        {
            backgroundColor: 'rgba(195,226,244,0.8)',
            fill: false,
            tension: 0
        }
    ]
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
