var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);



appPlanGoGo.controller('controllerMasterGoogleType', function ($scope, $http, NgTableParams) {
    $scope.masterGoogleType = [];
    $scope.masterGoogleTypeFiltered = [];
    $scope.masterCategory = [];
    $scope.MasterCategoryXMasterGoogleType = [];
    $scope.masterGoogleTypeTableParams = [];

    $scope.masterCategoryBinding = function (data) {
        var int = 0;
    };

    $scope.masterGoogleTypeBinding = function (data) {

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
        $scope.masterGoogleTypeTableParams = new NgTableParams(initialParams, initialSettings);
    };

    $scope.MainCategorySelected = function (param) {
        $scope.masterGoogleTypeFiltered = [];
        if (param > 0) {


            $.each($scope.MasterCategoryXMasterGoogleType,
                function(key, value) {

                    if (param == value.MasterCategoryId) {
                        $.each($scope.masterGoogleType,
                            function(subKey, subValue) {
                                if (subValue.GoogleTypeID === value.MasterGoogleTypeId) {
                                    $scope.masterGoogleTypeFiltered.push(subValue);
                                }
                            });
                    }
                });
        } else {
            $scope.masterGoogleTypeFiltered = $scope.masterGoogleType;
        }

    };


    Admin_MasterGoogleTypeGet($scope, $http);
    Admin_MasterCategoryGet($scope, $http, NgTableParams);
    Admin_MasterCategoryXMasterGoogleType($scope, $http);
});