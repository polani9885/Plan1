var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerManageCategory', function ($scope, $http, NgTableParams) {
    $scope.masterCategory = [];
    $scope.masterCategoryTableParams = [];


    $scope.masterCategoryBinding = function (data) {

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
        $scope.masterCategoryTableParams = new NgTableParams(initialParams, initialSettings);
    }




    Admin_MasterCategoryGet($scope, $http, NgTableParams);
});