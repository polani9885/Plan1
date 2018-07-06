var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);
appPlanGoGo.controller('controlerUserAccount', function ($scope, $http) {
    
    $scope.userName;
    $scope.UserNameCheck = function () {
        
        CheckUserName($scope.userName);
    };
});