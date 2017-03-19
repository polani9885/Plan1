var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerManageCity', function ($scope, $http, NgTableParams) {

    $scope.manageCity = [];
    $scope.manageCityTableParams = [];
    $scope.manageCountry = [];
    $scope.manageStates = [];
    $scope.CountrySelectedValue = 0;
    $scope.StateSelectedValue = 0;
    $scope.paramStateId = getUrlParameter("StateId");

    $scope.manageStatesBinding = function (data) {
        if (data.length > 0) {
            debugger;
            Admin_GetCity($scope, $http, NgTableParams, data[0]);
            $scope.StateSelectedValue = data[0];
        }
    }

    $scope.manageCityBinding = function (data) {

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
        $scope.manageCityTableParams = new NgTableParams(initialParams, initialSettings);
    }


    $scope.CountryDropDownSelected = function () {        
        Admin_GetStates($scope, $http, NgTableParams, $scope.CountrySelectedValue);
    };

    $scope.StateDropDownSelected = function () {

        Admin_GetCity($scope, $http, NgTableParams, $scope.StateSelectedValue);
    };

    $scope.SubmitClick = function () {
        $("#CountryId").val($("#ddlCountryId").val());
    };


    Admin_GetCountryList($scope, $http, NgTableParams);
});