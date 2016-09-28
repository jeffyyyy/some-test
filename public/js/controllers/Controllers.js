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

    $scope.labels2 = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "111"];
    $scope.data2 = [300, 500, 100, 50];
    $scope.colors2 = ["#83e3ff", "#00afd9", "#2dc0e8", "#53cff3"];
    $scope.options2 = {
        cutoutPercentage: 50
    }

    $scope.data3 = [[20, 28, 29, 22, 20, 10, 6]];
    $scope.labels3 = ["S","M","T","W","T","F","S"];
    $scope.colors3= [{
        backgroundColor: '#ff4c79',
        fill:false,
        tension: 0
    }];
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

    $scope.labels4 = ["30.05", "31.05", "01.06", "02.06", "03.06","04.06","05.06","06.06","07.06","08.06","09.06"];
    $scope.data4 = [
        [0, 30, 20, 42, 56, 39, 30,20,10,20,0],
        [0, 42, 45, 26, 35, 22, 42, 13, 32, 24, 0]
    ];
    $scope.colors4 = [
        {
            backgroundColor: 'rgba(83,200,235,0.8)',
            pointRadius: 0,
            //fill: false,
            tension: 0
        },
        {
            backgroundColor: 'rgba(195,226,244,0.8)',
            pointRadius: 0,
            //fill: false,
            tension: 0
        }
    ]
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


    $scope.labels5 = ["30.05", "31.05", "01.06", "02.06", "03.06","04.06","05.06","06.06","07.06","08.06","09.06"];
    $scope.data5 = [
        [0, 30, 20, 42, 56, 39, 30,20,10,20,0]
    ];
    $scope.colors5 = [
        {
            borderColor: 'rgba(83,200,235,0.8)',
            pointRadius: 0,
            fill: false,
            tension: 0
        }
    ]
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

Controllers.controller('OthersController', function($scope) {
    //other stuff
});