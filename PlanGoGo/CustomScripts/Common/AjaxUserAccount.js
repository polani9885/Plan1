//function CheckUserNameExisted(username) {
//    if (username!==null && username!=="") {
//        $.ajax({
//            type: "GET",
//            url: localUrl + 'UserControls/UserExistChecking',
//            dataType: "json",
//            data: { userName: username },
//            beforeSend: function () {
//                $(".blockPage").show();
//            },
//            success: function (data) {
//                $("#imgCheckUserNameExisted").show();
//                $("#imgCheckUserNameExisted").removeAttr("src");
//                if (data.Success) {
//                    $("#imgCheckUserNameExisted").attr("src", "/Images/User/UI/Correct.png");
//                } else {
//                    $("#imgCheckUserNameExisted").attr("src", "/Images/User/UI/Wrong.png");
//                }
//            },
//            error: function (result) {
//                alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
//            },
//            complete: function () {
//                $(".blockPage").hide();
//            }
//        });
//    }
//}

//function LoginCheck() {
//    if ($("#txtLoginUsername").val() !== null && $("#txtLoginUsername").val() !== "") {

//        new EntryPoint.Main().User.loginCheck($("#txtLoginUsername").val(), $("#txtLoginUsername").val());
//        //$.ajax({
//        //    type: "GET",
//        //    url: localUrl + 'UserControls/User_GetUserInformation',
//        //    dataType: "json",
//        //    data: { userName: $("#txtLoginUsername").val(), password: $("#txtLoginPassword").val() },
//        //    beforeSend: function () {
//        //        $(".blockPage").show();
//        //    },
//        //    success: function (data) {

//        //        if (data !== null) {
//        //            $("#lblLoginUsernameCheckError").hide();
//        //            $("#loginController").dialog("close");
//        //            //IsUserLoggedIn();
//        //            new EntryPoint.Main().User.isUserLoggedIn();
//        //        } else {
//        //            $("#lblLoginUsernameCheckError").show();
//        //        }
//        //    },
//        //    error: function (result) {
//        //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
//        //    },
//        //    complete: function () {
//        //        $(".blockPage").hide();
//        //    }
//        //});
//    }
//}

//function IsUserLoggedIn() {
//    $.ajax({
//        type: "GET",
//        url: localUrl + 'UserControls/IsUserLoggedIn',
//        dataType: "json",
//        beforeSend: function() {
//            $(".blockPage").show();
//        },
//        success: function(data) {
//            if (data.Success) {
//                //userLoggedIn();
//                new EntryPoint.User().userLoggedIn();
//            } else {
//                //userLoggOut();
//                new EntryPoint.User().userLoggOut();
//            }
//        },
//        error: function(result) {
//            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
//        },
//        complete: function() {
//            $(".blockPage").hide();
//        }
//    });

//}

//function userLoggedIn() {
//    $("#linkLogin").hide();
//    $("#linkLogOut").show();
//    $("#linkMyAccount").show();
//    $("#linkMyPlans").show();
//}

//function userLoggOut() {
//    $("#linkLogin").show();
//    $("#linkLogOut").hide();
//    $("#linkMyAccount").hide();
//    $("#linkMyPlans").hide();
//}

//function User_InsertingUserInfo() {
//    var data = {
//        UserName: $("#txtRegisterLogin").val(),
//        Email: $("#txtRegisterEmail").val(),
//        Password: $("#txtRegisterPassword").val()
//    };
//    new EntryPoint.Main().User.userInsertingUserInfoResponse(data);
//    //$.ajax({
//    //    type: "POST",
//    //    url: localUrl + 'UserControls/User_InsertingUserInfo',
//    //    dataType: "json",
//    //    data: data,
//    //    beforeSend: function() {
//    //        $(".blockPage").show();
//    //    },
//    //    success: function(data) {
//    //        if (data.Success) {
//    //            //IsUserLoggedIn();
//    //            new EntryPoint.Main().User.isUserLoggedIn();
//    //            $("#lblUserRegisterError").hide();
//    //            $("#registerController").dialog("close");
//    //        } else {
//    //            $("#lblUserRegisterError").show();
//    //        }
//    //    },
//    //    error: function(result) {
//    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
//    //    },
//    //    complete: function() {
//    //        $(".blockPage").hide();
//    //    }
//    //});
//}

function UserLogOut() {
    new EntryPoint.Main().User.userLogOut();

    //$.ajax({
    //    type: "POST",
    //    url: localUrl + 'UserControls/UserLogOut',
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {
    //        if (data.Success) {
    //            //IsUserLoggedIn();
    //            new EntryPoint.User().isUserLoggedIn();
    //        } 
    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {
    //        $(".blockPage").hide();
    //    }
    //});
}

function User_AddUpdateTourName(tourName, userTripId, countryId) {
    
    new EntryPoint.Main().TourInfo.userAddUpdateTourName(tourName, userTripId, countryId);

    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_AddUpdateTourName',
    //    dataType: "json",
    //    data: { tourName: tourName, userTripId: userTripId, countryId: countryId },
    //    beforeSend: function () {
    //    },
    //    success: function (data) {
    //        $("#popCreateNewTour")
    //            .dialog("close");

    //        var angularScope = angular.element(document.getElementById('divTourPlan')).scope();
    //        if (userTripId > 0) {
                
    //            angularScope.$apply(function() {

    //                angularScope.init();
    //            });
    //        } else {
    //            angularScope.$apply(function () {

    //                angularScope.NavigateToSchedule(data.UserTripId);
    //            });
    //        }
    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {
    //        $(".blockPage").hide();
    //    }
    //});
}


function User_GetTourInformation(angularScope, http) {
    new EntryPoint.Main().TourInfo.userGetTourInformation(angularScope);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_GetTourInformation',
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {

    //        angularScope.PlannedTours(data);

    //        //Creating local database
    //        new EntryPoint.Main().IndexDbWrapper.creatingUserTripDataBase(data);

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {
            
    //    }
    //});
}

function GetTourInformationOnTripId(angularScope, http) {
    new EntryPoint.Main().TourSchedule.getTourInformationOnTripId(angularScope);
    
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/GetTourInformationOnTripId',
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {

    //        angularScope.PlannedTours(data);

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}


function UserGetCityList($scope, $http) {
    new EntryPoint.Main().TourSchedule.userGetCityList($scope);

    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_GetCityList',
    //    dataType: "json",
    //    beforeSend: function () {
            
    //    },
    //    success: function (data) {
    //        var angularScope = angular.element(document.getElementById('main')).scope();

    //        angularScope.$apply(function() {
    //            angularScope.VisitCityList = [];
    //            $.each(data,
    //                function(key, value) {
    //                    var item = [];
    //                    item.countryId = value.CountryId;
    //                    item.cityId = value.CityId;
    //                    item.cityName = value.CityName;
    //                    item.recordIndex = value.RecordIndex;
    //                    angularScope.VisitCityList.push(item);
    //                });
                
    //        });
    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {
            
    //    }
    //});
}




function User_InsertCategoryInformation($scope, $http) {
    new EntryPoint.Main().TourSchedule.userInsertCategoryInformation($scope);
    
    //var selectedCategory = [];
    //$.each($scope.selectedCategoryList,
    //    function(key, value) {
    //        var item = {};
    //        item.CategoryId = value.GoogleTypeID;
    //        item.CategoryName = value.TypeName;
    //        selectedCategory.push(item);
    //    });

    //var jsonObject = { "category": selectedCategory};

    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_InsertCategoryInformation',
    //    data: JSON.stringify(jsonObject),
    //    dataType: "json",
    //    beforeSend: function () {

    //    },
    //    success: function (data) {
    //        var angularScope = angular.element(document.getElementById('main')).scope();

    //        angularScope.$apply(function () {
    //            angularScope.countryId = data.CountryId;
    //        });
    //        UserGetCityList($scope, $http);
    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function User_UserTripGetAttractions(angularScope, http) {
    new EntryPoint.Main().TourSchedule.userUserTripGetAttractions(angularScope);

    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_UserTripGetAttractions',
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {
            
    //        angularScope.UserTripAttractionInfo(data);

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function User_GetUserStoredAttractinInfo(angularScope, http) {
    new EntryPoint.Main().TourSchedule.userGetUserStoredAttractinInfo(angularScope);

    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_GetUserStoredAttractinInfo',
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {
    //        angularScope.$apply(function () {
    //            angularScope.AttractionInformationRendaring(data);
    //        });

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}


function User_RequestedBreaks(angularScope, http) {

    new EntryPoint.Main().TourSchedule.userRequestedBreaks(angularScope);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_RequestedBreaks',
    //    dataType: "json",
    //    async:false,
    //    beforeSend: function () {
    //    },
    //    success: function (data) {

    //        angularScope.$apply(function () {

    //            angularScope.RequestedBreaks(data);
    //        });

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function User_UserTripBuildStatus(angularScope, http) {
    new EntryPoint.Main().TourSchedule.userUserTripBuildStatus(angularScope);

    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_UserTripBuildStatus',
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {

    //        angularScope.$apply(function () {

    //            angularScope.UserTripBuildStatus = data;
    //        });

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function User_GetNearestRestaruents(angularScope, http) {
    new EntryPoint.Main().TourSchedule.userGetNearestRestaruents(angularScope);
    
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_GetNearestRestaruents',
    //    data: { attractionsId: angularScope.breakValue.attractionId, travelModeId: angularScope.TravelModeId, countryId: angularScope.countryId, distance: angularScope.breakValue.distance, sourceLongitude: angularScope.breakValue.sourceLongitude, sourceLatitude: angularScope.breakValue.sourceLatitude, attractionTravelStepsId: angularScope.breakValue.attractionTravelStepsId },
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {

    //        angularScope.$apply(function () {

    //            angularScope.NearLocations = data;
    //            angularScope.FilterNearLocations = data;
    //            angularScope.ExtraCategorySelectedAttractionFilter();
    //        });

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function User_UserTrip_Update(angularScope, http, data) {
    new EntryPoint.Main().TourExpenses.userUserTripUpdate(angularScope, data);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/User_UserTrip_Update',
    //    data: { noOfPersons: data.NoOfPersons, noOfCars: data.NoOfCars, carMileage: data.CarMileage, fuelPrice: data.FuelPrice, drivingBreak: data.DrivingBreak },
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function AutoComplte(angularScope, http, data) {
    new EntryPoint.Main().TourSchedule.autoComplte(angularScope, data);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/AutoComplte',
    //    data: { address: data, countryId: angularScope.countryId },
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {

    //        angularScope.$apply(function() {

    //            angularScope.attractionListAutoComplete = [];
    //            $.each(data,
    //                function(attractionKey, attractionValue) {
    //                    var item = [];
    //                    item.value = attractionValue["description"];
    //                    item.data = attractionValue["description"];
    //                    angularScope.attractionListAutoComplete.push(item);
    //                });
    //            //Source Auto Complete Data
    //            $('#autoStartLocation').autocomplete({
    //                source: angularScope.attractionListAutoComplete
    //            });
                
    //            //Desitnation auto complete information
    //            $('#autoDestinationLocation').autocomplete({
    //                source: angularScope.attractionListAutoComplete
    //            });

    //            //Place search for adding to visit list
    //            $('#placeSeachForAdding').autocomplete({
    //                source: angularScope.attractionListAutoComplete
    //            });
                
    //            //Source Auto Complete Data
    //            $('#autoAddAttractionForBreak').autocomplete({
    //                source: angularScope.attractionListAutoComplete
    //            });
    //        });

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}


function AutoComplteBreakInfo(angularScope, http, data) {
    new EntryPoint.Main().TourSchedule.autoComplteBreakInfo(angularScope, data);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/AutoComplteBreakInfo',
    //    data: {
    //        address: data.address,
    //        latitude: data.latitude,
    //        longitude: data.longitude,
    //        distance: data.distance,
    //        countryId: angularScope.countryId
    //    },
    //    dataType: "json",
    //    beforeSend: function() {
    //    },
    //    success: function(data) {

    //        var attractionListBreakAutoComplete = [];
    //        $.each(data,
    //            function(attractionKey, attractionValue) {
    //                var item = [];
    //                //item.value = attractionValue["vicinity"];
    //                //item.data = attractionValue["name"] + ' ' + attractionValue["vicinity"];
    //                item.data = attractionValue["name"];
    //                item.value = attractionValue["name"] + ' ' + attractionValue["vicinity"];
    //                item.name = attractionValue["vicinity"];
    //                attractionListBreakAutoComplete.push(item);
    //            });
    //        //Source Auto Complete Data
    //        $('#autoAddAttractionForBreak').autocomplete({
    //            source: attractionListBreakAutoComplete
    //        });

    //    },
    //    error: function(result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function() {

    //    }
    //});
}


function GetCountry(angularScope, http) {
    new EntryPoint.Main().TourInfo.getCountry(angularScope);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/GetCountry',
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {

    //        angularScope.$apply(function () {

    //            angularScope.CountryList = [];
    //            $.each(data,
    //                function (attractionKey, attractionValue) {
    //                    var item = [];
    //                    item.value = attractionValue["CountryId"];
    //                    item.data = attractionValue["CountryName"];
    //                    angularScope.CountryList.push(item);
    //                });
    //        });

    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function UserRequestedAttraction(angularScope, data, isSource, googleSearchText, breakType, breakDate) {
    var tempdata = [];
    tempdata.data = data;
    tempdata.isSource = isSource;
    tempdata.googleSearchText = googleSearchText;
    tempdata.breakType = breakType;
    tempdata.breakDate = breakDate;
    new EntryPoint.Main().TourSchedule.getCountry(angularScope, tempdata);

    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/UserRequestedAttraction',
    //    data: {
    //        address: data,
    //        countryId: angularScope.countryId,
    //        isSource: isSource,
    //        startDate: angularScope.StartDate,
    //        googleSearchText: googleSearchText,
    //        breakType: breakType,
    //        breakDate: breakDate
    //    },
    //    dataType: "json",
    //    beforeSend: function() {
    //    },
    //    success: function(data) {
    //        angularScope.UpdateTrouInfo();
    //    },
    //    error: function(result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function() {

    //    }
    //});
}

function GetOrderOfRequest(angularScope) {
    new EntryPoint.Main().TourSchedule.getOrderOfRequest(angularScope);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/GetOrderOfRequest',
    //    data: {
    //        countryId: angularScope.countryId
    //    },
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {
            
    //        angularScope.GetOrderOfRequest(data);
    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function InsertUserRequested(angularScope, http, data) {
    new EntryPoint.Main().TourSchedule.insertUserRequested(angularScope, data);
    //var jsonObject = {
    //    "attractionRequestOrder": data
    //};

    //$.ajax({
    //    type: "POST",
    //    url: localUrl + 'UserControls/InsertUserRequested',
    //    data: JSON.stringify(jsonObject),
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {
    //        Public_GetOrderOfAttractionVisit(angularScope, http);
    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}


function CheckTheCalculationPartIsDone(angularScope) {
    new EntryPoint.Main().TourSchedule.checkTheCalculationPartIsDone(angularScope);
    //if (angularScope.IsDistanceCalcuationMissing === false) {
    //    $.ajax({
    //        type: "GET",
    //        url: localUrl + 'UserControls/CheckTheCalculationPartIsDone',
    //        dataType: "json",
    //        beforeSend: function() {
    //        },
    //        success: function (data) {
                
    //            if (data.length === 0) {
    //                if (isFullyLoaded === false) {
    //                    angularScope.init();
    //                    isFullyLoaded = true;
    //                }
    //            } else {
    //                isFullyLoaded = false;
    //            }
    //        },
    //        error: function(result) {
    //            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //        },
    //        complete: function() {

    //        }
    //    });
    //}
}

function AddInterestedAttractionList(angularScope, attractionId) {
    new EntryPoint.Main().TourSchedule.addInterestedAttractionList(angularScope, attractionId);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/AddInterestedAttractionList',
    //    data: {
    //        attractionId: attractionId
    //    },
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {

    //        angularScope.AttractionInformationBinding();
    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function DeleteNotInterestedAttractionList(angularScope, attractionId) {
    new EntryPoint.Main().TourSchedule.deleteNotInterestedAttractionList(angularScope, attractionId);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/DeleteNotInterestedAttractionList',
    //    data: {
    //        attractionId: attractionId
    //    },
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {
    //        angularScope.AttractionInformationBinding();
    //    },
    //    error: function (result) {
    //        alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function GetAttractionTravelStepsNearAttractionInfo(angularScope, attractionTravelStepsId, orderId) {
    var data = [];
    data.attractionTravelStepsId = attractionTravelStepsId;
    data.orderId = orderId;
    new EntryPoint.Main().TourSchedule.getAttractionTravelStepsNearAttractionInfo(angularScope, data);


    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/GetAttractionTravelStepsNearAttractionInfo',
    //    data: {
    //        attractionTravelStepsId: attractionTravelStepsId,
    //        countryId: angularScope.countryId
    //    },
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {
    //        queCounterGetAttractionTravelStepsNearAttractionInfo--;
    //        QueGetAttractionTravelStepsNearAttractionInfo(angularScope);
    //        angularScope.AttractionTravelStepsNearAttractionInfoBinding(orderId, attractionTravelStepsId, data);
    //    },
    //    error: function (result) {
    //        queCounterGetAttractionTravelStepsNearAttractionInfo--;

    //        QueGetAttractionTravelStepsNearAttractionInfo(angularScope);
    //        //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function GetAttractionsNextAttractions(angularScope, attractionsId) {
    var data = [];
    data.attractionsId = attractionsId;
    new EntryPoint.Main().TourSchedule.getAttractionsNextAttractions(angularScope, data);
    //$.ajax({
    //    type: "GET",
    //    url: localUrl + 'UserControls/GetAttractionsNextAttractions',
    //    data: {
    //        attractionsId: attractionsId,
    //        countryId: angularScope.countryId
    //    },
    //    dataType: "json",
    //    beforeSend: function () {
    //    },
    //    success: function (data) {
    //        queCounterGetAttractionsNextAttractions--;
    //        QueGetAttractionsNextAttractions(angularScope);
    //        angularScope.GetAttractionsNextAttractionsBinding(attractionsId, data);
    //    },
    //    error: function (result) {
    //        queCounterGetAttractionsNextAttractions--;
            
    //        QueGetAttractionsNextAttractions(angularScope);

    //        //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function () {

    //    }
    //});
}

function GetAttractionXCategory(angularScope, attractionsId) {

    var data = [];
    data.attractionsId = attractionsId;

    new EntryPoint.Main().TourSchedule.getAttractionXCategory(angularScope, data);
    //var jsonObject = { "attractionsId": attractionsId, "countryId": angularScope.countryId };
    
    //$.ajax({
    //    type: "POST",
    //    url: localUrl + 'UserControls/GetAttractionXCategory',
    //    data: JSON.stringify(jsonObject),
    //    dataType: "json",
    //    contentType: "application/json; charset=utf-8",
    //    beforeSend: function() {
    //    },
    //    success: function(data) {
    //        angularScope.GettingAttractionXCategoryBinding(data);
    //        queCounterGetAttractionXCategory--;
    //        QueGetAttractionXCategory(angularScope);
    //    },
    //    error: function (result) {
    //        queCounterGetAttractionXCategory--;
    //        QueGetAttractionXCategory(angularScope);
    //        //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
    //    },
    //    complete: function() {

    //    }
    //});


}

