"use strict";
exports.__esModule = true;
var Error_1 = require("../Modules/Error");
var BaseAjaxCall_1 = require("../Common/BaseAjaxCall");
var Constants_1 = require("../Common/Constants");
var IndexDbWrapper_1 = require("../Plugins/IndexDbWrapper");
var TourInfo = /** @class */ (function () {
    function TourInfo() {
        this.errorParameters = {};
        this.parameters = {};
        try {
            if ($("#divTourPlan")) {
                TourInfo.prototype.controlerPlanedTour = $("#divTourPlan").scope();
            }
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourInfo", "constructor", TourInfo.prototype.errorParameters, e);
        }
    }
    TourInfo.prototype.userAddUpdateTourName = function (tourName, userTripId, countryId) {
        try {
            this.parameters = {};
            this.parameters.tourName = tourName;
            this.parameters.userTripId = userTripId;
            this.parameters.countryId = countryId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourInfo", "userAddUpdateTourName", "GET", Constants_1.Constants.localUrl + 'UserControls/User_AddUpdateTourName', this.parameters, userTripId, this.userAddUpdateTourNameResponse);
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.tourName = tourName;
            TourInfo.prototype.errorParameters.userTripId = userTripId;
            TourInfo.prototype.errorParameters.countryId = countryId;
            Error_1.Error.prototype.logError("TourInfo", "userAddUpdateTourName", TourInfo.prototype.errorParameters, e);
        }
    };
    TourInfo.prototype.userAddUpdateTourNameResponse = function (data, success, userTripId) {
        try {
            //1 = success
            if (success === 1) {
                $("#popCreateNewTour")
                    .dialog("close");
                TourInfo.prototype.controlerPlanedTour = $("#divTourPlan").scope();
                if (userTripId > 0) {
                    TourInfo.prototype.controlerPlanedTour.$apply(function () {
                        TourInfo.prototype.controlerPlanedTour.ctrl.$onInit();
                    });
                }
                else {
                    TourInfo.prototype.controlerPlanedTour.$apply(function () {
                        TourInfo.prototype.controlerPlanedTour.ctrl.navigateToSchedule(data.UserTripId);
                    });
                }
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
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.data = JSON.stringify(data);
            TourInfo.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourInfo", "userAddUpdateTourNameResponse", TourInfo.prototype.errorParameters, e);
        }
    };
    //Getting the user tour information
    TourInfo.prototype.userGetTourInformation = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourInfo", "userGetTourInformation", "GET", Constants_1.Constants.localUrl + 'UserControls/User_GetTourInformation', scope, this.userGetTourInformationResponse);
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourInfo", "userGetTourInformation", TourInfo.prototype.errorParameters, e);
        }
    };
    TourInfo.prototype.userGetTourInformationResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.plannedTours(data);
                //Creating local database
                IndexDbWrapper_1.IndexDbWrapper.prototype.creatingUserTripDataBase(data);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                TourInfo.prototype.userGetTourInformation(scope);
                $(".blockPage").hide();
            }
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.data = JSON.stringify(data);
            TourInfo.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourInfo", "userGetTourInformationResponse", TourInfo.prototype.errorParameters, e);
        }
    };
    TourInfo.prototype.getCountry = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourInfo", "getCountry", "GET", Constants_1.Constants.localUrl + 'UserControls/GetCountry', scope, this.getCountryResponse);
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourInfo", "getCountry", TourInfo.prototype.errorParameters, e);
        }
    };
    TourInfo.prototype.getCountryResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.bindingCountryInfo(data);
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
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.data = JSON.stringify(data);
            TourInfo.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourInfo", "getCountryResponse", TourInfo.prototype.errorParameters, e);
        }
    };
    return TourInfo;
}());
exports.TourInfo = TourInfo;
