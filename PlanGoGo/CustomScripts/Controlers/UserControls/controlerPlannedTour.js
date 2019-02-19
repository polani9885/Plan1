//var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);
//appPlanGoGo.controller('controlerPlannedTour', function ($scope, $http) {
//    $scope.plannedTour = [];
//    $scope.UserSelectedTripInfo = [];
//    $scope.CountryList = [];
    

//    $scope.init= function() {

//        User_GetTourInformation($scope, $http);
//        GetCountry($scope, $http);
//    }

//    $scope.init();

//    $scope.PlannedTours = function(data) {

//        $scope.plannedTour = [];
//        $.each(data,
//            function(key, value) {
//                var temp = [];
//                temp.TripName = value.TripName;
//                temp.CreatedDate = value.CreatedDate;
//                temp.CountryId = value.CountryId;
//                temp.UserTripId = value.UserTripId;

//                $scope.plannedTour.push(temp);
//            });

//        $scope.$apply();

//    };

//    $scope.EditTripName = function (tourInfo) {
        
//        $scope.UserSelectedTripInfo = tourInfo;
//        $("#popCreateNewTour")
//            .dialog("open");
//        $("#txtTripName").val(tourInfo.TripName);
//        $("#ddlCountry").val(tourInfo.CountryId);


//    };

//    $scope.NavigateToSchedule = function(userTripId) {
//        window.location.href = localUrl + "Schedule/index?userTripId=" + userTripId;
//    };
//});