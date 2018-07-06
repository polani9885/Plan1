var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);
appPlanGoGo.controller('controlerPlannedTour', function ($scope, $http) {
    $scope.plannedTour = [];
    $scope.UserSelectedTripInfo = [];
    

    $scope.init= function() {

        User_GetTourInformation($scope, $http);
    }

    $scope.init();

    $scope.PlannedTours = function(data) {

        $scope.plannedTour = [];
        $.each(data,
            function(key, value) {
                var temp = [];
                temp.TripName = value.TripName;
                temp.CreatedDate = value.CreatedDate;
                temp.UserTripId = value.UserTripId;

                $scope.plannedTour.push(temp);
            });

        $scope.$apply();

    };

    $scope.EditTripName = function (tourInfo) {
        
        $scope.UserSelectedTripInfo = tourInfo;
        $("#popCreateNewTour")
            .dialog("open");
        $("#txtTripName").val(tourInfo.TripName);


    };

    $scope.NavigateToSchedule = function(userTripId) {
        window.location.href = "/Schedule/index?userTripId=" + userTripId;
    };
});