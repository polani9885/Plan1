var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerAttractions', function ($scope, $http, NgTableParams) {

   
    $scope.Attractions = [];
    $scope.AttractionsTableParams = [];

    $scope.AttractionsBinding = function(data) {

        if (data.length > 0) {
            $scope.Attractions = data;

        }

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
        $scope.AttractionsTableParams = new NgTableParams(initialParams, initialSettings);
    };

    AttractionsOnCityId($scope, $http, NgTableParams);
});