"use strict";
var Error_1 = require("../Modules/Error");
var BaseAjaxCall_1 = require("../Common/BaseAjaxCall");
var Constants_1 = require("../Common/Constants");
var GlobalVaraibles_1 = require("../Common/GlobalVaraibles");
var TourSchedule = (function () {
    function TourSchedule() {
        this.errorParameters = {};
        this.parameters = {};
    }
    //Public get tour informaiton on tour id
    TourSchedule.prototype.getTourInformationOnTripId = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getTourInformationOnTripId", "GET", Constants_1.Constants.localUrl + 'UserControls/GetTourInformationOnTripId', scope, this.getTourInformationOnTripIdResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getTourInformationOnTripId", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getTourInformationOnTripIdResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.plannedTours(data);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getTourInformationOnTripIdResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Getting the user vising city list
    TourSchedule.prototype.userGetCityList = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userGetCityList", "GET", Constants_1.Constants.localUrl + 'UserControls/User_GetCityList', scope, this.userGetCityListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userGetCityList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userGetCityListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.userGetCityListBind(data);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userGetCityListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userInsertCategoryInformation = function (scope) {
        try {
            TourSchedule.prototype.parameters = {};
            var selectedCategory_1 = [];
            $.each(scope.selectedCategoryList, function (key, value) {
                var item = {};
                item.CategoryId = value.GoogleTypeID;
                item.CategoryName = value.TypeName;
                selectedCategory_1.push(item);
            });
            TourSchedule.prototype.parameters.category = selectedCategory_1;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "userInsertCategoryInformation", "GET", Constants_1.Constants.localUrl + 'UserControls/User_InsertCategoryInformation', TourSchedule.prototype.parameters, scope, this.userInsertCategoryInformationResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userInsertCategoryInformation", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userInsertCategoryInformationResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.$apply(function () {
                    scope.countryId = data.CountryId;
                });
                TourSchedule.prototype.userGetCityList(scope);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userInsertCategoryInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Get trip attractions information
    TourSchedule.prototype.userUserTripGetAttractions = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userUserTripGetAttractions", "GET", Constants_1.Constants.localUrl + 'UserControls/User_UserTripGetAttractions', scope, this.userUserTripGetAttractionsResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripGetAttractions", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userUserTripGetAttractionsResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.userTripAttractionInfo(data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripGetAttractionsResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Getting trip stored attraction information
    TourSchedule.prototype.userGetUserStoredAttractinInfo = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userGetUserStoredAttractinInfo", "GET", Constants_1.Constants.localUrl + 'UserControls/User_GetUserStoredAttractinInfo', scope, this.userGetUserStoredAttractinInfoResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userGetUserStoredAttractinInfo", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userGetUserStoredAttractinInfoResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationRendaring(data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripGetAttractionsResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Trip requested breaks
    TourSchedule.prototype.userRequestedBreaks = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userRequestedBreaks", "GET", Constants_1.Constants.localUrl + 'UserControls/User_RequestedBreaks', scope, this.userRequestedBreaksResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userRequestedBreaks", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userRequestedBreaksResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.requestedBreaks(data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userRequestedBreaksResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Trip build information
    TourSchedule.prototype.userUserTripBuildStatus = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userUserTripBuildStatus", "GET", Constants_1.Constants.localUrl + 'UserControls/User_UserTripBuildStatus', scope, this.userUserTripBuildStatusResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripBuildStatus", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userUserTripBuildStatusResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.UserTripBuildStatus = data;
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripBuildStatusResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Getting attraction nearest restarunts
    TourSchedule.prototype.userGetNearestRestaruents = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionsId = data.breakValue.attractionId;
            TourSchedule.prototype.parameters.travelModeId = data.TravelModeId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            TourSchedule.prototype.parameters.distance = data.breakValue.distance;
            TourSchedule.prototype.parameters.sourceLongitude = data.breakValue.sourceLongitude;
            TourSchedule.prototype.parameters.sourceLatitude = data.breakValue.sourceLatitude;
            TourSchedule.prototype.parameters.attractionTravelStepsId = data.breakValue.attractionTravelStepsId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "userGetNearestRestaruents", "GET", Constants_1.Constants.localUrl + 'UserControls/User_GetNearestRestaruents', TourSchedule.prototype.parameters, scope, this.userGetNearestRestaruentsReponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userGetNearestRestaruents", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userGetNearestRestaruentsReponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.NearLocations = data;
                scope.FilterNearLocations = data;
                scope.ExtraCategorySelectedAttractionFilter();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userGetNearestRestaruentsReponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Auto Complete information
    TourSchedule.prototype.autoComplte = function (scope, data, countryId) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.address = data;
            TourSchedule.prototype.parameters.countryId = countryId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "autoComplte", "GET", Constants_1.Constants.localUrl + 'UserControls/AutoComplte', TourSchedule.prototype.parameters, scope, this.autoComplteResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "autoComplte", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.autoComplteResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionListAutoComplete = [];
                $.each(data, function (attractionKey, attractionValue) {
                    var item = [];
                    item.value = attractionValue["description"];
                    item.data = attractionValue["googleSearchText"];
                    scope.attractionListAutoComplete.push(item);
                });
                //Source Auto Complete Data
                $('#autoStartLocation').autocomplete({
                    source: scope.attractionListAutoComplete
                });
                //Desitnation auto complete information
                $('#autoDestinationLocation').autocomplete({
                    source: scope.attractionListAutoComplete
                });
                //Place search for adding to visit list
                $('#placeSeachForAdding').autocomplete({
                    source: scope.attractionListAutoComplete
                });
                //Place search for adding to visit list
                $('#googleMapplaceSeachForAdding').autocomplete({
                    source: scope.attractionListAutoComplete
                });
                //Source Auto Complete Data
                $('#autoAddAttractionForBreak').autocomplete({
                    source: scope.attractionListAutoComplete
                });
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "autoComplteResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //autocomplet for the break information
    TourSchedule.prototype.autoComplteBreakInfo = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.address = data.address;
            TourSchedule.prototype.parameters.latitude = data.latitude;
            TourSchedule.prototype.parameters.longitude = data.longitude;
            TourSchedule.prototype.parameters.distance = data.distance;
            TourSchedule.prototype.parameters.countryId = scope.countryId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "autoComplteBreakInfo", "GET", Constants_1.Constants.localUrl + 'UserControls/AutoComplteBreakInfo', TourSchedule.prototype.parameters, scope, this.autoComplteBreakInfoResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "autoComplte", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.autoComplteBreakInfoResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                var attractionListBreakAutoComplete_1 = [];
                $.each(data, function (attractionKey, attractionValue) {
                    var item = [];
                    //item.value = attractionValue["vicinity"];
                    //item.data = attractionValue["name"] + ' ' + attractionValue["vicinity"];
                    item.data = attractionValue["name"];
                    item.value = attractionValue["name"] + ' ' + attractionValue["vicinity"];
                    item.name = attractionValue["vicinity"];
                    attractionListBreakAutoComplete_1.push(item);
                });
                //Source Auto Complete Data
                $('#autoAddAttractionForBreak').autocomplete({
                    source: attractionListBreakAutoComplete_1
                });
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "autoComplteBreakInfoResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Trip requirested attractions
    TourSchedule.prototype.userRequestedAttraction = function (scope, autoCompleteInfo) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "userRequestedAttraction", "GET", Constants_1.Constants.localUrl + 'UserControls/UserRequestedAttraction', autoCompleteInfo, scope, this.userRequestedAttractionResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userRequestedAttraction", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userRequestedAttractionResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.updateTrouInfo();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userRequestedAttractionResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Get user tipr required order
    TourSchedule.prototype.getOrderOfRequest = function (scope, countryId) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.countryId = countryId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getOrderOfRequest", "GET", Constants_1.Constants.localUrl + 'UserControls/GetOrderOfRequest', TourSchedule.prototype.parameters, scope, this.getOrderOfRequestResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getOrderOfRequest", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getOrderOfRequestResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getOrderOfRequest(data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getOrderOfRequestResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //insert trip required order
    TourSchedule.prototype.insertUserRequested = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionRequestOrder = data;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "insertUserRequested", "POST", Constants_1.Constants.localUrl + 'UserControls/InsertUserRequested', TourSchedule.prototype.parameters, scope, this.insertUserRequestedResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "insertUserRequested", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.insertUserRequestedResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.publicGetOrderOfAttractionVisit();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "insertUserRequestedResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Checking the missing distance calcuation part is dont or not
    TourSchedule.prototype.checkTheCalculationPartIsDone = function (scope) {
        try {
            if (scope.IsDistanceCalcuationMissing === false) {
                BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "checkTheCalculationPartIsDone", "GET", Constants_1.Constants.localUrl + 'UserControls/CheckTheCalculationPartIsDone', scope, this.checkTheCalculationPartIsDoneResponse);
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "checkTheCalculationPartIsDone", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.checkTheCalculationPartIsDoneResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                if (data.length === 0) {
                    if (GlobalVaraibles_1.GlobalVaraibles.isFullyLoaded === false) {
                        scope.init();
                        GlobalVaraibles_1.GlobalVaraibles.isFullyLoaded = true;
                    }
                }
                else {
                    GlobalVaraibles_1.GlobalVaraibles.isFullyLoaded = false;
                }
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "checkTheCalculationPartIsDoneResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Adding attraction information
    TourSchedule.prototype.addInterestedAttractionList = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionId = data;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "addInterestedAttractionList", "GET", Constants_1.Constants.localUrl + 'UserControls/AddInterestedAttractionList', TourSchedule.prototype.parameters, scope, this.addInterestedAttractionListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "addInterestedAttractionList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.addInterestedAttractionListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationBinding();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "addInterestedAttractionListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //deleting not interested attraction information
    TourSchedule.prototype.deleteNotInterestedAttractionList = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionId = data;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "deleteNotInterestedAttractionList", "GET", Constants_1.Constants.localUrl + 'UserControls/DeleteNotInterestedAttractionList', TourSchedule.prototype.parameters, scope, this.deleteNotInterestedAttractionListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "deleteNotInterestedAttractionList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.deleteNotInterestedAttractionListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationBinding();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "deleteNotInterestedAttractionListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Getting attraction travel steps information
    TourSchedule.prototype.getAttractionTravelStepsNearAttractionInfo = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionTravelStepsId = data.attractionTravelStepsId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            var callBackValues = {};
            callBackValues.scope = scope;
            callBackValues.attractionTravelStepsId = data.attractionTravelStepsId;
            callBackValues.orderId = data.orderId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getAttractionTravelStepsNearAttractionInfo", "GET", Constants_1.Constants.localUrl + 'UserControls/GetAttractionTravelStepsNearAttractionInfo', TourSchedule.prototype.parameters, callBackValues, this.getAttractionTravelStepsNearAttractionInfoResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionTravelStepsNearAttractionInfo", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getAttractionTravelStepsNearAttractionInfoResponse = function (data, success, callBackData) {
        try {
            //1 = success
            if (success === 1) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo--;
                //QueGetAttractionTravelStepsNearAttractionInfo(callBackData.scope);
                callBackData.scope.attractionTravelStepsNearAttractionInfoBinding(callBackData.orderId, callBackData.attractionTravelStepsId, data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo--;
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionTravelStepsNearAttractionInfoResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Get next nearest attractions
    TourSchedule.prototype.getAttractionsNextAttractions = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionsId = data.attractionsId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            var callBackValues = {};
            callBackValues.scope = scope;
            callBackValues.attractionsId = data.attractionsId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getAttractionsNextAttractions", "GET", Constants_1.Constants.localUrl + 'UserControls/GetAttractionsNextAttractions', TourSchedule.prototype.parameters, callBackValues, this.getAttractionsNextAttractionsResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionsNextAttractions", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getAttractionsNextAttractionsResponse = function (data, success, callBackData) {
        try {
            //1 = success
            if (success === 1) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionsNextAttractions--;
                //QueGetAttractionsNextAttractions(callBackData.scope);
                callBackData.scope.getAttractionsNextAttractionsBinding(callBackData.attractionsId, data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionsNextAttractions--;
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionsNextAttractionsResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Get attractions next category
    TourSchedule.prototype.getAttractionXCategory = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionsId = data.attractionsId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            var callBackValues = {};
            callBackValues.scope = scope;
            callBackValues.attractionsId = data.attractionsId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "getAttractionXCategory", "POST", Constants_1.Constants.localUrl + 'UserControls/GetAttractionsNextAttractions', TourSchedule.prototype.parameters, callBackValues, this.getAttractionXCategoryResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionXCategory", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getAttractionXCategoryResponse = function (data, success, callBackData) {
        try {
            //1 = success
            if (success === 1) {
                callBackData.scope.gettingAttractionXCategoryBinding(data);
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionXCategory--;
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionXCategory--;
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionXCategoryResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getBreakInformation = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getBreakInformation", "GET", Constants_1.Constants.localUrl + 'Schedule/GetBreakInformation', scope, this.getBreakInformationResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getBreakInformation", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getBreakInformationResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getBreakInformationBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getBreakInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getExtraCategoryList = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getExtraCategoryList", "GET", Constants_1.Constants.localUrl + 'Schedule/GetExtraCategoryList', scope, this.getExtraCategoryListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getExtraCategoryList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getExtraCategoryListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getExtraCategoryListBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getExtraCategoryListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getMasterCategory = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getMasterCategory", "GET", Constants_1.Constants.localUrl + 'Schedule/GetMasterCategory', scope, this.getMasterCategoryResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getMasterCategory", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getMasterCategoryResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getMasterCategoryResponseBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getMasterCategoryResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getCategoryList = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getCategoryList", "GET", Constants_1.Constants.localUrl + 'Schedule/GetCategoryList', scope, this.getCategoryListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getCategoryList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getCategoryListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getCategoryListBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getCategoryListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.publicFilterAttractions = function (scope, data) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "publicFilterAttractions", "POST", Constants_1.Constants.localUrl + 'Schedule/Public_FilterAttractions', data, scope, this.publicFilterAttractionsResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("TourSchedule", "publicFilterAttractions", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.publicFilterAttractionsResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.publicFilterAttractionsBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getCategoryListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.publicGetOrderOfAttractionVisit = function (scope, data) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "publicGetOrderOfAttractionVisit", "POST", Constants_1.Constants.localUrl + 'Schedule/Public_GetOrderOfAttractionVisit', data, scope, this.publicGetOrderOfAttractionVisitResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("TourSchedule", "publicGetOrderOfAttractionVisit", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.publicGetOrderOfAttractionVisitResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationRendaring(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "publicGetOrderOfAttractionVisitResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.watherAPI = function (scope, param) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.app_id = Constants_1.Constants.prototype.app_id;
            TourSchedule.prototype.parameters.app_code = Constants_1.Constants.prototype.app_code;
            TourSchedule.prototype.parameters.latitude = param.latitude;
            TourSchedule.prototype.parameters.longitude = param.longitude;
            var callBackScope = {};
            callBackScope.scope = scope;
            callBackScope.RecordCount = param.RecordCount;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "watherAPI", "GET", 'https://weather.api.here.com/weather/1.0/report.json', TourSchedule.prototype.parameters, callBackScope, this.watherAPIResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.param = JSON.stringify(param);
            Error_1.Error.prototype.logError("TourSchedule", "watherAPI", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.watherAPIResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.scope.weatherInfoUpdate(data, scope.RecordCount);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "watherAPIResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Gettigng the attraction information
    TourSchedule.prototype.tourInformation = function (data) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantTypeDataTypeHtml("TourSchedule", "tourInformation", "POST", Constants_1.Constants.localUrl + 'UserControls/TourInformation', data, data.divId, this.tourInformationResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("TourSchedule", "tourInformation", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.tourInformationResponse = function (data, success, divId) {
        try {
            //1 = success
            if (success === 1) {
                $("#" + divId).empty();
                $("#" + divId).append(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "tourInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getCityList = function (scope, countryId) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.countryId = countryId;
            $(".blockPage").show();
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getCityList", "GET", Constants_1.Constants.localUrl + 'Schedule/GetCityOnCountryId', TourSchedule.prototype.parameters, scope, this.getCityListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.countryId = countryId;
            Error_1.Error.prototype.logError("TourSchedule", "getCityList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getCityListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getCityListBind(data);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "tourInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.attractionsPhotoInfo = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionId = data.attractionId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            var thisScope = {};
            thisScope.scope = scope;
            thisScope.attractionId = data.attractionId;
            thisScope.attractionName = data.attractionName;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "attractionsPhotoInfo", "GET", Constants_1.Constants.localUrl + 'Schedule/AttractionsPhotoInfo', TourSchedule.prototype.parameters, thisScope, this.attractionsPhotoInfoResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            ;
            Error_1.Error.prototype.logError("TourSchedule", "attractionsPhotoInfo", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.attractionsPhotoInfoResponse = function (data, success, thisScope) {
        try {
            //1 = success
            if (success === 1) {
                thisScope.scope.photoInfo(thisScope.attractionId, data, thisScope.attractionName);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "tourInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    return TourSchedule;
}());
exports.TourSchedule = TourSchedule;
