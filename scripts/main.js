/**
 * Created by ypling on 5/4/15.
 */
'use strict';

var app = angular.module('ROIClientApp', ['ngRoute', 'ui.bootstrap', 'ROIClientAppLookBackModule', 'ngSanitize'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/planforward', {
                templateUrl: './views/planforward.html',
                controller: 'forwardCtrl'
            })
            .when('/lookback', {
                templateUrl: './views/lookback.html',
                controller: 'backCtrl'
            })
            .when('/myscenarios', {
                templateUrl: './views/myscenarios/list.html',
                controller: 'scenariosCtrl'
            })
            .when('/myscenarios/export', {
                templateUrl: './views/myscenarios/export.html',
                controller: 'scenariosExportCtrl'
            })
            .when('/myscenarios/share', {
                templateUrl: './views/myscenarios/share.html',
                controller: 'scenariosShareCtrl'
            })
            .when('/compare', {
                templateUrl: './views/compare.html',
                controller: 'compareCtrl'
            })
            .otherwise({
                templateUrl: './views/dashboard.html',
                controller: ''
            })
    });
app.controller("indexCtrl",function($scope){
    $scope.menuState = {  show: true, cssLeft:"sidebar-before-left",cssRight:"sidebar-before-right" };

    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
        if(!$scope.menuState.show){
            $scope.menuState.cssLeft="sidebar-after-left";
            $scope.menuState.cssRight="sidebar-after-right";
        }
        else{
            $scope.menuState.cssLeft="sidebar-before-left";
            $scope.menuState.cssRight="sidebar-before-right";
        }



    };

    $scope.users=[];
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var recentDate=" "+ today.toDateString().split(" ").splice(0,3).join("-");
    //var recentDate = " "+today.getMonth()+"/"+today.getDate();

    $scope.users.push({
        name:"Ed",
        recentlyLoginRecord : "Last Logged on"+recentDate
    });
});