
import {IndexDbMain} from "../Plugins/IndexDbMain";

import {Constants} from "../Common/Constants";
import {GlobalVaraibles} from "../Common/GlobalVaraibles";
import {Error} from "../Modules/Error";



export class IndexDbWrapper {
    public controlerIndex: any;
    public errorParameters: any = {};

    public indexDbMain: IndexDbMain = new IndexDbMain();


    public isAttractionCategoryDataDone = false;
    public isDestinationNearByDataDone = false;
    public isTravelBreakNearByDataDone = false;


    constructor() {
        try {
            if ($("#main")) {
                IndexDbWrapper.prototype.controlerIndex = $("#main").scope();
            }
        } catch (e) {
            this.errorParameters = {};
            Error.prototype.logError("IndexDbWrapper", "constructor", this.errorParameters, e);
        }
    }

    public creatingUserTripDataBase(data: any) {
        try {
            $.each(data,
                function(key, value) {
                    var tripStartDate = new Date(value.StartDate);

                    if (new Date() > tripStartDate) {
                        IndexDbWrapper.prototype.deleteDataBase(value.UserTripId);
                    } else {
                        IndexDbWrapper.prototype.createDataBase(value.UserTripId);
                    }
                });
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.data = JSON.stringify(data);
            Error.prototype.logError("IndexDbWrapper", "creatingUserTripDataBase", this.errorParameters, e);
        }
    }

    public deleteDataBase(userTripId: string) {
        try {

            IndexDbMain.prototype.indexDeleteDatabase(
                Constants.userTripDataBasePrefix + userTripId);
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            Error.prototype.logError("IndexDbWrapper", "deleteDataBase", this.errorParameters, e);
        }
    }

    public createDataBase(userTripId: string) {
        try {
            var dbName = Constants.userTripDataBasePrefix + userTripId;
            var db = IndexDbMain.prototype.indexCreateDatabase(dbName);
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            Error.prototype.logError("IndexDbWrapper", "createDataBase", this.errorParameters, e);
        }
    }

    public storeAttractionCategoryData(userTripId: string, data: any) {
        try {
            IndexDbMain.prototype.indexStoreTableData(
                Constants.userTripDataBasePrefix + userTripId,
                Constants.tblAttractionCategory,
                data);
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            this.errorParameters.data = JSON.stringify(data);
            Error.prototype.logError("IndexDbWrapper", "storeAttractionCategoryData", this.errorParameters, e);
        }
    }

    public storeDestinationNearByData(userTripId: string, data: any) {
        try {
            IndexDbMain.prototype.indexStoreTableData(
                Constants.userTripDataBasePrefix + userTripId,
                Constants.tblDesinationNearyBy,
                data);
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            this.errorParameters.data = JSON.stringify(data);
            Error.prototype.logError("IndexDbWrapper", "storeDestinationNearByData", this.errorParameters, e);
        }
    }

    public openDataBase(userTripId: string, scope: any) {
        try {
            IndexDbWrapper.prototype.controlerIndex = scope;

            IndexDbMain.prototype.indexConnectionOpen(
                Constants.userTripDataBasePrefix + userTripId,
                IndexDbWrapper.prototype.gettingData);
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            Error.prototype.logError("IndexDbWrapper", "openDataBase", this.errorParameters, e);
        }
    }

    public gettingData() {
        try {
            IndexDbWrapper.prototype.getAttractionCategoryData();
            IndexDbWrapper.prototype.getDestinationNearByData();
            IndexDbWrapper.prototype.getTravelBreakNearByData();
        } catch (e) {
            this.errorParameters = {};
            Error.prototype.logError("IndexDbWrapper", "gettingData", this.errorParameters, e);
        }
    }

    public storeTravelBreakNearByData(userTripId: string, data: any) {
        try {
            IndexDbMain.prototype.indexStoreTableData(
                Constants.userTripDataBasePrefix + userTripId,
                Constants.tblTravelBreakNearBy,
                data);
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            this.errorParameters.data = JSON.stringify(data);
            Error.prototype.logError("IndexDbWrapper", "storeTravelBreakNearByData", this.errorParameters, e);
        }
    }

    public getAttractionCategoryData() {
        try {
            IndexDbWrapper.prototype.controlerIndex.AttractionXCategory = [];
            IndexDbMain.prototype.indexGetTableData(Constants.tblAttractionCategory,
                function(data) {

                    IndexDbWrapper.prototype.controlerIndex.attractionXCategory.push(data);
                    IndexDbWrapper.prototype.isAttractionCategoryDataDone = true;
                });
        } catch (e) {
            this.errorParameters = {};
            Error.prototype.logError("IndexDbWrapper", "getAttractionCategoryData", this.errorParameters, e);
        }
    }

    public getDestinationNearByData() {
        try {
            IndexDbWrapper.prototype.controlerIndex.GetAttractionsNextAttractions = [];
            IndexDbMain.prototype.indexGetTableData(Constants.tblDesinationNearyBy,
                function(data) {


                    let temp: any = [];
                    temp.attractionTravelStepsId = data.attractionTravelStepsId;
                    temp.data = jQuery.parseJSON(data.data);
                    IndexDbWrapper.prototype.controlerIndex.getAttractionsNextAttractions.push(temp);

                    IndexDbWrapper.prototype.isDestinationNearByDataDone = true;
                });
        } catch (e) {
            this.errorParameters = {};
            Error.prototype.logError("IndexDbWrapper", "getDestinationNearByData", this.errorParameters, e);
        }
    }

    public getTravelBreakNearByData() {
        try {
            IndexDbWrapper.prototype.controlerIndex.AttractionTravelStepsNearAttractionInfo = [];
            IndexDbMain.prototype.indexGetTableData(Constants.tblTravelBreakNearBy,
                function(data) {
                    

                    let temp: any = [];
                    temp.orderId = data.orderId;
                    temp.attractionTravelStepsId = data.attractionTravelStepsId;
                    temp.data = jQuery.parseJSON(data.data);
                    IndexDbWrapper.prototype.controlerIndex.attractionTravelStepsNearAttractionInfo.push(temp);

                    IndexDbWrapper.prototype.isTravelBreakNearByDataDone = true;
                });
        } catch (e) {
            this.errorParameters = {};
            Error.prototype.logError("IndexDbWrapper", "getTravelBreakNearByData", this.errorParameters, e);
        }
    }


    public indexdbPreDataLoadIsDone(scope:any) {
        try {
            if ((IndexDbWrapper.prototype.isTravelBreakNearByDataDone &&
                    IndexDbWrapper.prototype.isDestinationNearByDataDone &&
                    IndexDbWrapper.prototype.isAttractionCategoryDataDone) ||
                Constants.loopCountercounter > 5) {

                scope.loadUserData();
                clearInterval(GlobalVaraibles.loadIndexDb);
            }
            Constants.loopCountercounter = Constants.loopCountercounter + 1;
        } catch (e) {
            this.errorParameters = {};
            Error.prototype.logError("IndexDbWrapper", "indexdbPreDataLoadIsDone", this.errorParameters, e);
        }
    }

}