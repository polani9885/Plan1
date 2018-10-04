function CheckUserNameExisted(username) {
    if (username!==null && username!=="") {
        $.ajax({
            type: "GET",
            url: localUrl + 'UserControls/UserExistChecking',
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
    if ($("#txtLoginUsername").val() !== null && $("#txtLoginUsername").val() !== "") {
        $.ajax({
            type: "GET",
            url: localUrl + 'UserControls/User_GetUserInformation',
            dataType: "json",
            data: { userName: $("#txtLoginUsername").val(), password: $("#txtLoginPassword").val() },
            beforeSend: function () {
                $(".blockPage").show();
            },
            success: function (data) {
                
                if (data !== null) {
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
        url: localUrl + 'UserControls/IsUserLoggedIn',
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
        url: localUrl + 'UserControls/User_InsertingUserInfo',
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
        url: localUrl + 'UserControls/UserLogOut',
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

function User_AddUpdateTourName(tourName, userTripId, countryId) {
    
    $.ajax({
        type: "GET",
        url: localUrl + 'UserControls/User_AddUpdateTourName',
        dataType: "json",
        data: { tourName: tourName, userTripId: userTripId, countryId: countryId },
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
        url: localUrl + 'UserControls/User_GetTourInformation',
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

function GetTourInformationOnTripId(angularScope, http) {

    
    $.ajax({
        type: "GET",
        url: localUrl + 'UserControls/GetTourInformationOnTripId',
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
        url: localUrl + 'UserControls/User_GetCityList',
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
        url: localUrl + 'UserControls/User_InsertCategoryInformation',
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
        url: localUrl + 'UserControls/User_UserTripGetAttractions',
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
        url: localUrl + 'UserControls/User_GetUserStoredAttractinInfo',
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
        url: localUrl + 'UserControls/User_RequestedBreaks',
        dataType: "json",
        async:false,
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
        url: localUrl + 'UserControls/User_UserTripBuildStatus',
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
        url: localUrl + 'UserControls/User_GetNearestRestaruents',
        data: { attractionsId: angularScope.breakValue.attractionId, travelModeId: angularScope.TravelModeId, countryId: angularScope.countryId, distance: angularScope.breakValue.distance, sourceLongitude: angularScope.breakValue.sourceLongitude, sourceLatitude: angularScope.breakValue.sourceLatitude },
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

            angularScope.$apply(function () {

                angularScope.NearLocations = data;
                angularScope.FilterNearLocations = data;
                angularScope.ExtraCategorySelectedAttractionFilter();
            });

        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function User_UserTrip_Update(angularScope, http, data) {

    $.ajax({
        type: "GET",
        url: localUrl + 'UserControls/User_UserTrip_Update',
        data: { noOfPersons: data.NoOfPersons, noOfCars: data.NoOfCars, carMileage: data.CarMileage, fuelPrice: data.FuelPrice },
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function AutoComplte(angularScope, http, data) {

    $.ajax({
        type: "GET",
        url: localUrl + 'UserControls/AutoComplte',
        data: { address: data, countryId: angularScope.countryId },
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

            angularScope.$apply(function() {

                angularScope.attractionListAutoComplete = [];
                $.each(data,
                    function(attractionKey, attractionValue) {
                        var item = [];
                        item.value = attractionValue["description"];
                        item.data = attractionValue["description"];
                        angularScope.attractionListAutoComplete.push(item);
                    });
                //Source Auto Complete Data
                $('#autoStartLocation').autocomplete({
                    source: angularScope.attractionListAutoComplete
                });

                //Desitnation auto complete information
                $('#autoDestinationLocation').autocomplete({
                    source: angularScope.attractionListAutoComplete
                });

                //Place search for adding to visit list
                $('#placeSeachForAdding').autocomplete({
                    source: angularScope.attractionListAutoComplete
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


function AutoComplteBreakInfo(angularScope, http, data) {

    $.ajax({
        type: "GET",
        url: localUrl + 'UserControls/AutoComplteBreakInfo',
        data: {
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude,
            distance: data.distance,
            countryId: angularScope.countryId
        },
        dataType: "json",
        beforeSend: function() {
        },
        success: function(data) {

            var attractionListBreakAutoComplete = [];
            $.each(data,
                function(attractionKey, attractionValue) {
                    var item = [];
                    //item.value = attractionValue["vicinity"];
                    //item.data = attractionValue["name"] + ' ' + attractionValue["vicinity"];
                    item.data = attractionValue["name"];
                    item.value = attractionValue["name"] + ' ' + attractionValue["vicinity"];
                    item.name = attractionValue["vicinity"];
                    attractionListBreakAutoComplete.push(item);
                });
            //Source Auto Complete Data
            $('#autoAddAttractionForBreak').autocomplete({
                source: attractionListBreakAutoComplete
            });

        },
        error: function(result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function() {

        }
    });
}


function GetCountry(angularScope, http) {

    $.ajax({
        type: "GET",
        url: localUrl + 'UserControls/GetCountry',
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {

            angularScope.$apply(function () {

                angularScope.CountryList = [];
                $.each(data,
                    function (attractionKey, attractionValue) {
                        var item = [];
                        item.value = attractionValue["CountryId"];
                        item.data = attractionValue["CountryName"];
                        angularScope.CountryList.push(item);
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

function UserRequestedAttraction(angularScope, data, isSource, googleSearchText, breakType, breakDate) {
    
    $.ajax({
        type: "GET",
        url: localUrl + 'UserControls/UserRequestedAttraction',
        data: {
            address: data,
            countryId: angularScope.countryId,
            isSource: isSource,
            startDate: angularScope.StartDate,
            googleSearchText: googleSearchText,
            breakType: breakType,
            breakDate: breakDate
        },
        dataType: "json",
        beforeSend: function() {
        },
        success: function(data) {
            angularScope.init();
        },
        error: function(result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function() {

        }
    });
}

function GetOrderOfRequest(angularScope) {

    $.ajax({
        type: "GET",
        url: localUrl + 'UserControls/GetOrderOfRequest',
        data: {
            countryId: angularScope.countryId
        },
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {
            angularScope.GetOrderOfRequest(data);
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function InsertUserRequested(angularScope, http, data) {

    var jsonObject = {
        "attractionRequestOrder": data
    };
    
    $.ajax({
        type: "POST",
        url: localUrl + 'UserControls/InsertUserRequested',
        data: JSON.stringify(jsonObject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {
            Public_GetOrderOfAttractionVisit(angularScope, http);
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

