var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerMissingDistanceAttractionsRecords', function ($scope, $http, NgTableParams) {
    $scope.missingDistanceAttractionsRecords = [];
    $scope.MissingDistanceAttractionsRecordsXAttractions = [];
    $scope.paramMissingDistanceAttractionsRecordsID = getUrlParameter("MissingDistanceAttractionsRecordsID");
    


    $scope.MissingDistanceAttractionsRecordsBinding = function (data) {        
        $scope.missingDistanceAttractionsRecords = data;
    }

    $scope.MissingDistanceAttractionsRecordsXAttractionsGetBinding = function (data) {
        $scope.MissingDistanceAttractionsRecordsXAttractions = data;
    }


    
    if ($scope.paramMissingDistanceAttractionsRecordsID != null) {
        MissingDistanceAttractionsRecordsXAttractionsGet($scope, $http, NgTableParams);
    }
    else {
        MissingDistanceAttractionsRecordsGet($scope, $http, NgTableParams);
    }
});