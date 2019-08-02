"use strict";
exports.__esModule = true;
var IndexDbMain_1 = require("../Plugins/IndexDbMain");
var Constants_1 = require("../Common/Constants");
var GlobalVaraibles_1 = require("../Common/GlobalVaraibles");
var Error_1 = require("../Modules/Error");
var IndexDbWrapper = /** @class */ (function () {
    function IndexDbWrapper() {
        this.errorParameters = {};
        this.indexDbMain = new IndexDbMain_1.IndexDbMain();
        this.isAttractionCategoryDataDone = false;
        this.isDestinationNearByDataDone = false;
        this.isTravelBreakNearByDataDone = false;
        try {
            if ($("#main")) {
                IndexDbWrapper.prototype.controlerIndex = $("#main").scope();
            }
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "constructor", this.errorParameters, e);
        }
    }
    IndexDbWrapper.prototype.creatingUserTripDataBase = function (data) {
        try {
            $.each(data, function (key, value) {
                var tripStartDate = new Date(value.StartDate);
                if (new Date() > tripStartDate) {
                    IndexDbWrapper.prototype.deleteDataBase(value.UserTripId);
                }
                else {
                    IndexDbWrapper.prototype.createDataBase(value.UserTripId);
                }
            });
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbWrapper", "creatingUserTripDataBase", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.deleteDataBase = function (userTripId) {
        try {
            IndexDbMain_1.IndexDbMain.prototype.indexDeleteDatabase(Constants_1.Constants.userTripDataBasePrefix + userTripId);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            Error_1.Error.prototype.logError("IndexDbWrapper", "deleteDataBase", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.createDataBase = function (userTripId) {
        try {
            var dbName = Constants_1.Constants.userTripDataBasePrefix + userTripId;
            var db = IndexDbMain_1.IndexDbMain.prototype.indexCreateDatabase(dbName);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            Error_1.Error.prototype.logError("IndexDbWrapper", "createDataBase", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.storeAttractionCategoryData = function (userTripId, data) {
        try {
            IndexDbMain_1.IndexDbMain.prototype.indexStoreTableData(Constants_1.Constants.userTripDataBasePrefix + userTripId, Constants_1.Constants.tblAttractionCategory, data);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbWrapper", "storeAttractionCategoryData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.storeDestinationNearByData = function (userTripId, data) {
        try {
            IndexDbMain_1.IndexDbMain.prototype.indexStoreTableData(Constants_1.Constants.userTripDataBasePrefix + userTripId, Constants_1.Constants.tblDesinationNearyBy, data);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbWrapper", "storeDestinationNearByData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.openDataBase = function (userTripId, scope) {
        try {
            IndexDbWrapper.prototype.controlerIndex = scope;
            IndexDbMain_1.IndexDbMain.prototype.indexConnectionOpen(Constants_1.Constants.userTripDataBasePrefix + userTripId, IndexDbWrapper.prototype.gettingData);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            Error_1.Error.prototype.logError("IndexDbWrapper", "openDataBase", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.gettingData = function () {
        try {
            IndexDbWrapper.prototype.getAttractionCategoryData();
            IndexDbWrapper.prototype.getDestinationNearByData();
            IndexDbWrapper.prototype.getTravelBreakNearByData();
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "gettingData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.storeTravelBreakNearByData = function (userTripId, data) {
        try {
            IndexDbMain_1.IndexDbMain.prototype.indexStoreTableData(Constants_1.Constants.userTripDataBasePrefix + userTripId, Constants_1.Constants.tblTravelBreakNearBy, data);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbWrapper", "storeTravelBreakNearByData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.getAttractionCategoryData = function () {
        try {
            IndexDbWrapper.prototype.controlerIndex.AttractionXCategory = [];
            IndexDbMain_1.IndexDbMain.prototype.indexGetTableData(Constants_1.Constants.tblAttractionCategory, function (data) {
                IndexDbWrapper.prototype.controlerIndex.attractionXCategory.push(data);
                IndexDbWrapper.prototype.isAttractionCategoryDataDone = true;
            });
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "getAttractionCategoryData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.getDestinationNearByData = function () {
        try {
            IndexDbWrapper.prototype.controlerIndex.GetAttractionsNextAttractions = [];
            IndexDbMain_1.IndexDbMain.prototype.indexGetTableData(Constants_1.Constants.tblDesinationNearyBy, function (data) {
                var temp = [];
                temp.attractionTravelStepsId = data.attractionTravelStepsId;
                temp.data = jQuery.parseJSON(data.data);
                IndexDbWrapper.prototype.controlerIndex.getAttractionsNextAttractions.push(temp);
                IndexDbWrapper.prototype.isDestinationNearByDataDone = true;
            });
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "getDestinationNearByData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.getTravelBreakNearByData = function () {
        try {
            IndexDbWrapper.prototype.controlerIndex.AttractionTravelStepsNearAttractionInfo = [];
            IndexDbMain_1.IndexDbMain.prototype.indexGetTableData(Constants_1.Constants.tblTravelBreakNearBy, function (data) {
                var temp = [];
                temp.orderId = data.orderId;
                temp.attractionTravelStepsId = data.attractionTravelStepsId;
                temp.data = jQuery.parseJSON(data.data);
                IndexDbWrapper.prototype.controlerIndex.attractionTravelStepsNearAttractionInfo.push(temp);
                IndexDbWrapper.prototype.isTravelBreakNearByDataDone = true;
            });
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "getTravelBreakNearByData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.indexdbPreDataLoadIsDone = function (scope) {
        try {
            if ((IndexDbWrapper.prototype.isTravelBreakNearByDataDone &&
                IndexDbWrapper.prototype.isDestinationNearByDataDone &&
                IndexDbWrapper.prototype.isAttractionCategoryDataDone) ||
                Constants_1.Constants.loopCountercounter > 5) {
                scope.loadUserData();
                clearInterval(GlobalVaraibles_1.GlobalVaraibles.loadIndexDb);
            }
            Constants_1.Constants.loopCountercounter = Constants_1.Constants.loopCountercounter + 1;
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "indexdbPreDataLoadIsDone", this.errorParameters, e);
        }
    };
    return IndexDbWrapper;
}());
exports.IndexDbWrapper = IndexDbWrapper;
