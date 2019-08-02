"use strict";
exports.__esModule = true;
var Constants = /** @class */ (function () {
    function Constants() {
        //it contain all the autocomplete city information
        this.cityList = [];
        this.selectedCategoryList = [];
        this.attractionList = [];
        this.googleAPI = "https://maps.googleapis.com/maps/api";
        this.googleAPIKey = "AIzaSyBHcSbAr_gsAYNyt-_0m2eKWpvAZxwhX7w";
        this.increment = 0;
        this.autCompleteSelectionIsDone = false;
        this.webAPIURL = "http://localhost:63939/";
        //weather.api
        //used polaniservices@gmail.com
        this.app_id = "TkQvsIq3k3gVat04gzTK";
        this.app_code = "g0w6b1l81r4s1juiPuwEug";
    }
    Constants.localUrl = "http://localhost/PlanGoGo/";
    //index db table names
    Constants.tblDesinationNearyBy = "DesinationNearBy";
    Constants.tblTravelBreakNearBy = "TravelBreakNearBy";
    Constants.tblAttractionCategory = "AttractionCategory";
    Constants.userTripDataBasePrefix = "UserTrip_";
    Constants.loopCountercounter = 0;
    return Constants;
}());
exports.Constants = Constants;
