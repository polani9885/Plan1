var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerAttractions', function ($scope, $http, NgTableParams) {

    
    
    $scope.manageCountry = [];
    $scope.manageStates = [];
    $scope.manageCity = [];
    $scope.masterCategory = [];
    $scope.Attractions = [];
    

    $scope.manageCityTableParams = [];
    $scope.CountrySelectedValue = 0;
    $scope.StateSelectedValue = 0;
    $scope.CitySelectedValue = 0;
    $scope.CategorySelectedValue = 0;
    $scope.paramCityId = getUrlParameter("CityId");

    $scope.manageCountryBinding = function (data) {
        if (data.length > 0) {            
            $scope.manageCountry = data;
            $scope.CountrySelectedValue = data[0];
            Admin_GetStates($scope, $http, NgTableParams, $scope.CountrySelectedValue);
        }
    }

    $scope.manageStatesBinding = function (data) {
        if (data.length > 0) {
            debugger;
            Admin_GetCity($scope, $http, NgTableParams, data[0]);
            $scope.StateSelectedValue = data[0];
        }
    }


    $scope.masterCategoryBinding = function (data) {
        if (data.length > 0) {
            $scope.masterCategory = data;
            $scope.CategorySelectedValue = data[0];
        }
    }


    $scope.manageCityBinding = function (data) {
        if (data.length > 0) {
            $scope.manageCity = data;
            $scope.CitySelectedValue = data[0];
            AttractionsOnCityId($scope, $http, NgTableParams);
        }
    }

    $scope.AttractionsBinding = function (data) {
        if (data.length > 0) {
            $scope.Attractions = data;
            
        }
    }

    $scope.CountryDropDownSelected = function () {
        Admin_GetStates($scope, $http, NgTableParams, $scope.CountrySelectedValue);
    };

    $scope.StateDropDownSelected = function () {

        Admin_GetCity($scope, $http, NgTableParams, $scope.StateSelectedValue);
    };

    $scope.CityDropDownSelected = function () {
        AttractionsOnCityId(angularScope, http, ngTableParams);
    }

    Admin_GetCountry($scope, $http, NgTableParams);

    Admin_MasterCategoryGet($scope, $http, NgTableParams);
});