function CheckUserNameExisted(username) {
    if (username!=null && username!="") {
        $.ajax({
            type: "GET",
            url: '/UserControls/UserExistChecking',
            dataType: "json",
            data: { userName: username },
            beforeSend: function () {
                $(".blockPage").show();
            },
            success: function (data) {
                $("#imgCheckUserNameExisted").show();
                $("#imgCheckUserNameExisted").removeAttr("src");
                if (data.Success) {
                    $("#imgCheckUserNameExisted").attr("src", "/Images/User/UI/Correct.png");
                } else {
                    $("#imgCheckUserNameExisted").attr("src", "/Images/User/UI/Wrong.png");
                }
            },
            error: function (result) {
                alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
            },
            complete: function () {
                $(".blockPage").hide();
            }
        });
    }
}

function LoginCheck() {
    if ($("#txtLoginUsername").val() != null && $("#txtLoginUsername").val() != "") {
        $.ajax({
            type: "GET",
            url: '/UserControls/User_GetUserInformation',
            dataType: "json",
            data: { userName: $("#txtLoginUsername").val(), password: $("#txtLoginPassword").val() },
            beforeSend: function () {
                $(".blockPage").show();
            },
            success: function (data) {
                if (data != null) {
                    $("#lblLoginUsernameCheckError").hide();
                    $("#loginController").dialog("close");
                    IsUserLoggedIn();
                } else {
                    $("#lblLoginUsernameCheckError").show();
                }
            },
            error: function (result) {
                alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
            },
            complete: function () {
                $(".blockPage").hide();
            }
        });
    }
}

function IsUserLoggedIn() {
    $.ajax({
        type: "GET",
        url: '/UserControls/IsUserLoggedIn',
        dataType: "json",
        beforeSend: function() {
            $(".blockPage").show();
        },
        success: function(data) {
            if (data.Success) {
                userLoggedIn();
            } else {
                userLoggOut();
            }
        },
        error: function(result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function() {
            $(".blockPage").hide();
        }
    });

}

function userLoggedIn() {
    $("#linkLogin").hide();
    $("#linkLogOut").show();
    $("#linkMyAccount").show();
    $("#linkMyPlans").show();
}

function userLoggOut() {
    $("#linkLogin").show();
    $("#linkLogOut").hide();
    $("#linkMyAccount").hide();
    $("#linkMyPlans").hide();
}

function User_InsertingUserInfo() {
    var data = {
        UserName: $("#txtRegisterLogin").val(),
        Email: $("#txtRegisterEmail").val(),
        Password: $("#txtRegisterPassword").val()
    };
    $.ajax({
        type: "POST",
        url: '/UserControls/User_InsertingUserInfo',
        dataType: "json",
        data: data,
        beforeSend: function() {
            $(".blockPage").show();
        },
        success: function(data) {
            if (data.Success) {
                IsUserLoggedIn();
                $("#lblUserRegisterError").hide();
                $("#registerController").dialog("close");
            } else {
                $("#lblUserRegisterError").show();
            }
        },
        error: function(result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function() {
            $(".blockPage").hide();
        }
    });
}

function UserLogOut() {
    $.ajax({
        type: "POST",
        url: '/UserControls/UserLogOut',
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {
            if (data.Success) {
                IsUserLoggedIn();
            } 
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            $(".blockPage").hide();
        }
    });
}

function User_AddUpdateTourName(tourName, userTripId) {
    
    $.ajax({
        type: "GET",
        url: '/UserControls/User_AddUpdateTourName',
        dataType: "json",
        data: { tourName: tourName, userTripId: userTripId },
        beforeSend: function () {
        },
        success: function (data) {
            $("#popCreateNewTour")
                .dialog("close");

            var angularScope = angular.element(document.getElementById('divTourPlan')).scope();
            if (userTripId > 0) {
                
                angularScope.$apply(function() {

                    angularScope.init();
                });
            } else {
                angularScope.$apply(function () {

                    angularScope.NavigateToSchedule(data.UserTripId);
                });
            }
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            $(".blockPage").hide();
        }
    });
}


function User_GetTourInformation(angularScope, http) {
    
    
    $.ajax({
        type: "GET",
        url: '/UserControls/User_GetTourInformation',
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

            angularScope.PlannedTours(data);

        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            
        }
    });
}

function UserGetCityList($scope, $http) {
    $.ajax({
        type: "GET",
        url: '/UserControls/User_GetCityList',
        dataType: "json",
        beforeSend: function () {
            
        },
        success: function (data) {
            var angularScope = angular.element(document.getElementById('main')).scope();

            angularScope.$apply(function() {
                angularScope.VisitCityList = [];
                $.each(data,
                    function(key, value) {
                        var item = [];
                        item.countryId = value.CountryId;
                        item.cityId = value.CityId;
                        item.cityName = value.CityName;
                        item.recordIndex = value.RecordIndex;
                        angularScope.VisitCityList.push(item);
                    });
                
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            
        }
    });
}




function User_InsertCategoryInformation($scope, $http) {

    
    var selectedCategory = [];
    $.each($scope.selectedCategoryList,
        function(key, value) {
            var item = {};
            item.CategoryId = value.GoogleTypeID;
            item.CategoryName = value.TypeName;
            selectedCategory.push(item);
        });

    var jsonObject = { "category": selectedCategory};

    $.ajax({
        type: "GET",
        url: '/UserControls/User_InsertCategoryInformation',
        data: JSON.stringify(jsonObject),
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {
            var angularScope = angular.element(document.getElementById('main')).scope();

            angularScope.$apply(function () {
                angularScope.countryId = data.CountryId;
            });
            UserGetCityList($scope, $http);
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function User_UserTripGetAttractions(angularScope, http) {


    $.ajax({
        type: "GET",
        url: '/UserControls/User_UserTripGetAttractions',
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

            angularScope.UserTripAttractionInfo(data);

        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function User_GetUserStoredAttractinInfo(angularScope, http) {


    $.ajax({
        type: "GET",
        url: '/UserControls/User_GetUserStoredAttractinInfo',
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

            angularScope.$apply(function () {

                angularScope.AttractionInformationRendaring(data);
            });

        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}


function User_RequestedBreaks(angularScope, http) {


    $.ajax({
        type: "GET",
        url: '/UserControls/User_RequestedBreaks',
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

            angularScope.$apply(function () {

                angularScope.RequestedBreaks(data);
            });

        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function User_UserTripBuildStatus(angularScope, http) {


    $.ajax({
        type: "GET",
        url: '/UserControls/User_UserTripBuildStatus',
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

            angularScope.$apply(function () {

                angularScope.UserTripBuildStatus = data;
            });

        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function User_GetNearestRestaruents(angularScope, http) {

    
    $.ajax({
        type: "GET",
        url: '/UserControls/User_GetNearestRestaruents',
        data: { attractionsId: angularScope.breakValue.attractionId, travelModeId: angularScope.TravelModeId, countryId: angularScope.countryId },
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

            angularScope.$apply(function () {

                angularScope.NearLocations = data;
            });

        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

