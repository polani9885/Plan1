var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerMasterTravelMode', function ($scope, $http, NgTableParams) {
    $scope.masterTravelMode = [];
    $scope.masterTravelModeTableParams = [];


    $scope.masterTravelModeBinding = function(data) {

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
        $scope.masterTravelModeTableParams = new NgTableParams(initialParams, initialSettings);
    };




    Scheduler_GetTravelMode($scope, $http);
});