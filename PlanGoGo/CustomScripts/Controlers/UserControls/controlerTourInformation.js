var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);
appPlanGoGo.controller('controlerTourInformation', function ($scope, $http) {
    $scope.NotIntereseted = function (attractionID) {
        debugger;
        alert(attractionID);
    };
});