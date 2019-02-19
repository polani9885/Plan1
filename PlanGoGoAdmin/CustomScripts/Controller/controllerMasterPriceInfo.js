﻿var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerMasterPriceInfo', function ($scope, $http, NgTableParams) {
    $scope.masterPriceInfo = [];
    $scope.masterPriceInfoTableParams = [];


    $scope.masterPriceInfoBinding = function (data) {

        var initialParams = {
            page: 1,
            count: 10 // initial page size
        };
        var initialSettings = {
            // page size buttons (right set of buttons in demo)
            counts: [],
            total: data.length,
            // determines the pager buttons (left set of buttons in demo)
            paginationMaxBlocks: 13,
            paginationMinBlocks: 2,
            dataset: data
        };
        $scope.masterPriceInfoTableParams = new NgTableParams(initialParams, initialSettings);
    }




    Admin_GetMasterPriceInfo($scope, $http);
});