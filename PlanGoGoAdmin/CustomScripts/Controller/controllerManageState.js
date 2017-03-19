var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerManageState', function ($scope, $http, NgTableParams) {
    
    $scope.manageStates = [];
    $scope.manageStatesTableParams = [];
    $scope.manageCountry = [];
    $scope.CountrySelectedValue = 0;
    $scope.paramCountryId = getUrlParameter("CountryId");
    
    

    $scope.manageStatesBinding = function (data) {

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
        $scope.manageStatesTableParams = new NgTableParams(initialParams, initialSettings);
    }


    $scope.CountryDropDownSelected = function () {

        Admin_GetStates($scope, $http, NgTableParams, $scope.CountrySelectedValue);
    };

    $scope.SubmitClick = function () {        
        $("#CountryId").val($("#ddlCountryId").val());
    };
      
    
    Admin_GetCountryList($scope, $http, NgTableParams);
});