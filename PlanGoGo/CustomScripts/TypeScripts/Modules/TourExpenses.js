"use strict";
var Error_1 = require("../Modules/Error");
var BaseAjaxCall_1 = require("../Common/BaseAjaxCall");
var Constants_1 = require("../Common/Constants");
var TourExpenses = (function () {
    function TourExpenses() {
        this.errorParameters = {};
        this.parameters = {};
    }
    TourExpenses.prototype.userUserTripUpdate = function (scope, data) {
        try {
            TourExpenses.prototype.parameters = {};
            TourExpenses.prototype.parameters.noOfPersons = data.NoOfPersons;
            TourExpenses.prototype.parameters.noOfCars = data.NoOfCars;
            TourExpenses.prototype.parameters.carMileage = data.CarMileage;
            TourExpenses.prototype.parameters.fuelPrice = data.FuelPrice;
            TourExpenses.prototype.parameters.drivingBreak = data.DrivingBreak;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourExpenses", "userUserTripUpdate", "GET", Constants_1.Constants.localUrl + 'UserControls/User_UserTrip_Update', TourExpenses.prototype.parameters, scope, this.userUserTripUpdateResponse);
        }
        catch (e) {
            TourExpenses.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourExpenses", "userUserTripUpdate", TourExpenses.prototype.errorParameters, e);
        }
    };
    TourExpenses.prototype.userUserTripUpdateResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourExpenses.prototype.errorParameters = {};
            TourExpenses.prototype.errorParameters.data = JSON.stringify(data);
            TourExpenses.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourExpenses", "userUserTripUpdateResponse", TourExpenses.prototype.errorParameters, e);
        }
    };
    return TourExpenses;
}());
exports.TourExpenses = TourExpenses;
