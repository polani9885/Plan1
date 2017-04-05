var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);
appPlanGoGo.controller('controlerUserAccount', function ($scope, $http) {
    debugger;
    $scope.userName;
    $scope.UserNameCheck = function () {
        debugger;
        CheckUserName($scope.userName);
    };
});