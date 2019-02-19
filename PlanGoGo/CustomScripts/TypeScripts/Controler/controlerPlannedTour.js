"use strict";
var Constants_1 = require("../Common/Constants");
var TourInfo_1 = require("../Modules/TourInfo");
var Error_1 = require("../Modules/Error");
var Validations_1 = require("../Modules/Validations");
var ControlerPlannedTour = (function () {
    function ControlerPlannedTour($scope) {
        var _this = this;
        this.errorParameters = {};
        this.$onInit = function () {
            try {
                TourInfo_1.TourInfo.prototype.userGetTourInformation(_this);
                TourInfo_1.TourInfo.prototype.getCountry(_this);
                $(document).ready(function () {
                    $("#popCreateNewTour").dialog({
                        autoOpen: false,
                        height: 400,
                        width: 350,
                        modal: true,
                        buttons: {
                            "Add": Validations_1.Validations.prototype.tripNameInfo,
                            Cancel: function () {
                                $("#popCreateNewTour").dialog("close");
                            }
                        }
                    });
                });
            }
            catch (e) {
                ControlerPlannedTour.prototype.errorParameters = {};
                Error_1.Error.prototype.logError("ControlerPlannedTour", "$onInit", ControlerPlannedTour.prototype.errorParameters, e);
            }
        };
        try {
            this.scope = $scope;
            this.scope.tourScheduleUrl = Constants_1.Constants.localUrl + "Schedule/index?userTripId=";
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerPlannedTour", "constructor", ControlerPlannedTour.prototype.errorParameters, e);
        }
    }
    ControlerPlannedTour.prototype.plannedTours = function (data) {
        var _this = this;
        try {
            this.scope.$apply(function () {
                var plannedTour = [];
                _this.scope.plannedTour = [];
                $.each(data, function (key, value) {
                    var temp = {};
                    temp.tripName = value.TripName;
                    temp.createdDate = value.CreatedDate;
                    temp.countryId = value.CountryId;
                    temp.userTripId = value.UserTripId;
                    plannedTour.push(temp);
                });
                _this.scope.plannedTour = plannedTour;
            });
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            ControlerPlannedTour.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerPlannedTour", "plannedTours", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.bindingCountryInfo = function (data) {
        var _this = this;
        try {
            this.scope.$apply(function () {
                var countryList = [];
                _this.scope.countryList = [];
                $.each(data, function (attractionKey, attractionValue) {
                    var item = {};
                    item.countryId = attractionValue["CountryId"];
                    item.countryName = attractionValue["CountryName"];
                    countryList.push(item);
                });
                _this.scope.countryList = countryList;
            });
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            ControlerPlannedTour.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerPlannedTour", "bindingCountryInfo", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.editTripName = function (tourInfo) {
        try {
            this.scope.userSelectedTripInfo = tourInfo;
            $("#popCreateNewTour")
                .dialog("open");
            $("#txtTripName").val(tourInfo.tripName);
            $("#ddlCountry").val(tourInfo.countryId);
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            ControlerPlannedTour.prototype.errorParameters.data = tourInfo;
            Error_1.Error.prototype.logError("ControlerPlannedTour", "editTripName", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.createNewTour = function () {
        try {
            this.scope.userSelectedTripInfo = [];
            $("#popCreateNewTour")
                .dialog("open");
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerPlannedTour", "createNewTour", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.navigateToSchedule = function (userTripId) {
        try {
            window.open(this.scope.tourScheduleUrl + userTripId.toString(), '_self');
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerPlannedTour", "navigateToSchedule", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.tripInfo = function () {
    };
    return ControlerPlannedTour;
}());
exports.ControlerPlannedTour = ControlerPlannedTour;
