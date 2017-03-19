var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerOpenTime', function ($scope, $http, NgTableParams) {
    $scope.OpenTime = [];
    debugger;
    $scope.paramAttractionId = getUrlParameter("AttractionsId");
    $scope.AttractionId = 0;

    GetAttractionOpenTime($scope, $http, NgTableParams);

    $scope.manageOpenTimeBinding = function (data) {
        if (data.length > 0) {           
            $scope.OpenTime = data;
            $scope.AttractionId = data[0].AttractionId;
        }
    }
});