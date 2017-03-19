var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerAttractionTravelTimeDistance', function ($scope, $http, NgTableParams) {



    $scope.manageAttractionTravelTimeDistance = [];
    
    $scope.paramAttractionId = getUrlParameter("AttractionsId");

    $scope.manageAttractionTravelTimeDistanceBinding = function (data) {
        if (data.length > 0) {
            $scope.manageAttractionTravelTimeDistance = data;            
        }
    }    

    AttractionTravelTimeDistanceGet($scope, $http, NgTableParams);
});