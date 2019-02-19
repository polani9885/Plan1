import {Error} from "../Modules/Error";
import {IndexDbWrapper} from "../Plugins/IndexDbWrapper";
import {CommonFunctions} from "../Common/CommonFunctions";
import {TourSchedule} from "../Modules/TourSchedule";
import {GlobalVaraibles} from "../Common/GlobalVaraibles";
import {MapsActions} from "../Modules/MapsActions";
import {Constants} from "../Common/Constants";
import {TourExpenses} from "../Modules/TourExpenses";




export class ControlerIndex implements angular.IController {

    public scope: IControlerIndex;
    public errorParameters: any = {};
    public timeInterval: Array<IDropDownValues> = [];
    public timeBreak: Array<IDropDownValues> = [];
    public dataLoading:boolean= false;

    constructor($scope: IControlerIndex) {
        try {
            
            this.scope = $scope;

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "constructor",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    $onInit = () => {
        try {

            this.scope.categoryList = [];
            this.scope.filterCategoryList = [];
            this.scope.masterCategoryList = [];
            this.scope.travelModeId = 0;
            this.scope.sourceAttractionId = 0;
            this.scope.destinationAttractionId = 0;
            this.scope.attractionList = [];
            this.scope.filterAttractionList = [];
            this.scope.filterAttractionListAutoSelect = [];
            this.scope.attractionListAutoComplete = [];
            this.scope.attractionListBreakAutoComplete = [];
            this.scope.attractionInterestedList = [];
            this.scope.visitCityList = [];
            this.scope.updatedBreaks = [];
            this.scope.userTripBuildStatus = [];
            this.scope.orderOfAttractionList = [];
            this.scope.extraCategoryList = [];
            this.scope.selectedExtraCategoryList = [];
            this.scope.filterNearLocations = [];
            this.scope.images = [];
            this.scope.googleMapsMainMarks = [];
            this.scope.googleMapsLinesMarks = [];
            this.scope.googleMapsStepMarks = [];
            this.scope.userRequestedOrder = [];
            this.scope.attractionTravelStepsNearAttractionInfo = [];
            this.scope.getAttractionsNextAttractions = [];
            this.scope.attractionXCategory = [];
            this.scope.getAttractionsNextAttractionsAjaxRequest = [];
            this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest = [];
            this.scope.getAttractionXCategoryAjaxRequest = [];
            this.scope.mapselectedCategoryList = [];
            this.scope.selectedCategoryList = [];
            this.scope.categoryStyleLeft = [];
            this.scope.categoryStyleRight = [];

            let selfThis: any = this;
            this.scope.oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            this.scope.isDistanceCalcuationMissing = true;
            this.scope.mapLineColor = ["Red", "Green", "Yellow", "Blue", "Black", "Pink", "Orange"];
            this.scope.countryId = 0;
            this.scope.cityId = 0;
            this.scope.currentIndex = 0;
            this.scope.userTripId = 0;
            this.scope.attractionTravelStepsId = 0;
            this.scope.orderId = 0;
            this.scope.googleTravelStep = [];

            this.timeInterval.push({ text: "12:00 AM", value: "00:00:00" });
            this.timeInterval.push({ text: "00:30 AM", value: "00:30:00" });
            this.timeInterval.push({ text: "01:00 AM", value: "01:00:00" });
            this.timeInterval.push({ text: "01:30 AM", value: "01:30:00" });
            this.timeInterval.push({ text: "02:00 AM", value: "02:00:00" });
            this.timeInterval.push({ text: "02:30 AM", value: "02:30:00" });
            this.timeInterval.push({ text: "03:00 AM", value: "03:00:00" });
            this.timeInterval.push({ text: "03:30 AM", value: "03:30:00" });
            this.timeInterval.push({ text: "04:00 AM", value: "04:00:00" });
            this.timeInterval.push({ text: "04:30 AM", value: "04:30:00" });
            this.timeInterval.push({ text: "05:00 AM", value: "05:00:00" });
            this.timeInterval.push({ text: "05:30 AM", value: "05:30:00" });
            this.timeInterval.push({ text: "06:00 AM", value: "06:00:00" });
            this.timeInterval.push({ text: "06:30 AM", value: "06:30:00" });
            this.timeInterval.push({ text: "07:00 AM", value: "07:00:00" });
            this.timeInterval.push({ text: "07:30 AM", value: "07:30:00" });
            this.timeInterval.push({ text: "08:00 AM", value: "08:00:00" });
            this.timeInterval.push({ text: "08:30 AM", value: "08:30:00" });
            this.timeInterval.push({ text: "09:00 AM", value: "09:00:00" });
            this.timeInterval.push({ text: "09:30 AM", value: "09:30:00" });
            this.timeInterval.push({ text: "10:00 AM", value: "10:00:00" });
            this.timeInterval.push({ text: "10:30 AM", value: "10:30:00" });
            this.timeInterval.push({ text: "11:00 AM", value: "11:00:00" });
            this.timeInterval.push({ text: "11:30 AM", value: "11:30:00" });
            this.timeInterval.push({ text: "12:00 PM", value: "12:00:00" });
            this.timeInterval.push({ text: "00:30 PM", value: "12:30:00" });
            this.timeInterval.push({ text: "01:00 PM", value: "13:00:00" });
            this.timeInterval.push({ text: "01:30 PM", value: "13:30:00" });
            this.timeInterval.push({ text: "02:00 PM", value: "14:00:00" });
            this.timeInterval.push({ text: "02:30 PM", value: "14:30:00" });
            this.timeInterval.push({ text: "03:00 PM", value: "15:00:00" });
            this.timeInterval.push({ text: "03:30 PM", value: "15:30:00" });
            this.timeInterval.push({ text: "04:00 PM", value: "16:00:00" });
            this.timeInterval.push({ text: "04:30 PM", value: "16:30:00" });
            this.timeInterval.push({ text: "05:00 PM", value: "17:00:00" });
            this.timeInterval.push({ text: "05:30 PM", value: "17:30:00" });
            this.timeInterval.push({ text: "06:00 PM", value: "18:00:00" });
            this.timeInterval.push({ text: "06:30 PM", value: "18:30:00" });
            this.timeInterval.push({ text: "07:00 PM", value: "19:00:00" });
            this.timeInterval.push({ text: "07:30 PM", value: "19:30:00" });
            this.timeInterval.push({ text: "08:00 PM", value: "20:00:00" });
            this.timeInterval.push({ text: "08:30 PM", value: "20:30:00" });
            this.timeInterval.push({ text: "09:00 PM", value: "21:00:00" });
            this.timeInterval.push({ text: "09:30 PM", value: "21:30:00" });
            this.timeInterval.push({ text: "10:00 PM", value: "22:00:00" });
            this.timeInterval.push({ text: "10:30 PM", value: "22:30:00" });
            this.timeInterval.push({ text: "11:00 PM", value: "23:00:00" });
            this.timeInterval.push({ text: "11:30 PM", value: "23:30:00" });

            this.timeBreak.push({
                text: "00:30",
                value: "00:30"
            });
            this.timeBreak.push({
                text: "01:00",
                value: "01:00"
            });
            this.timeBreak.push({
                text: "01:30",
                value: "01:30"
            });
            this.timeBreak.push({
                text: "02:00",
                value: "02:00"
            });
            this.timeBreak.push({
                text: "02:30",
                value: "02:30"
            });
            this.timeBreak.push({
                text: "03:00",
                value: "03:00"
            });
            this.timeBreak.push({
                text: "03:30",
                value: "03:30"
            });
            this.timeBreak.push({
                text: "04:00",
                value: "04:00"
            });
            this.timeBreak.push({
                text: "04:30",
                value: "04:30"
            });
            this.timeBreak.push({
                text: "05:00",
                value: "05:00"
            });
            this.timeBreak.push({
                text: "05:30",
                value: "05:30"
            });
            this.timeBreak.push({
                text: "06:00",
                value: "06:00"
            });
            this.timeBreak.push({
                text: "06:30",
                value: "06:30"
            });
            this.timeBreak.push({
                text: "07:00",
                value: "07:00"
            });
            this.timeBreak.push({
                text: "07:30",
                value: "07:30"
            });
            this.timeBreak.push({
                text: "08:00",
                value: "08:00"
            });
            this.timeBreak.push({
                text: "08:30",
                value: "08:30"
            });
            this.timeBreak.push({
                text: "09:00",
                value: "09:00"
            });
            this.timeBreak.push({
                text: "09:30",
                value: "09:30"
            });
            this.timeBreak.push({
                text: "10:00",
                value: "10:00"
            });
            this.timeBreak.push({
                text: "10:30",
                value: "10:30"
            });
            this.timeBreak.push({
                text: "11:00",
                value: "11:00"
            });
            this.timeBreak.push({
                text: "11:30",
                value: "11:30"
            });
            this.timeBreak.push({
                text: "12:00",
                value: "12:00"
            });
            this.timeBreak.push({
                text: "13:00",
                value: "13:00"
            });
            this.timeBreak.push({
                text: "14:00",
                value: "14:00"
            });
            this.timeBreak.push({
                text: "15:00",
                value: "15:00"
            });
            this.timeBreak.push({
                text: "16:00",
                value: "16:00"
            });
            this.timeBreak.push({
                text: "17:00",
                value: "17:00"
            });
            this.timeBreak.push({
                text: "18:00",
                value: "18:00"
            });
            this.timeBreak.push({
                text: "19:00",
                value: "19:00"
            });
            this.timeBreak.push({
                text: "20:00",
                value: "20:00"
            });

            //Get User stored information
            this.scope.userTripId = CommonFunctions.prototype.getUrlVars().userTripId;
            IndexDbWrapper.prototype.openDataBase(this.scope.userTripId.toString(), this);

            this.scope.categoryStyleLeft = {
                "float": "left"
            };

            this.scope.categoryStyleRight = {
                "float": "right"
            };

            $("#addingAttraction").dialog({
                autoOpen: false,
                height: 400,
                width: 350,
                modal: true,
                buttons: {
                    "Update": this.addingAttractionInformation,
                    Cancel: function() {
                        $("#addingAttraction").dialog("close");
                    }
                },
            });
            $("#addingBreak").dialog({
                autoOpen: false,
                height: 500,
                width: 900,
                modal: true,
                buttons: {
                    "Update": this.addingAttractionInformation,
                    Cancel: function() {
                        $("#addingBreak").dialog("close");
                    }
                },
            });

            $("#photoSlideShow").dialog({
                autoOpen: false,
                height: 700,
                width: 1000,
                modal: true,
                buttons: {
                    Cancel: function() {
                        $("#photoSlideShow").dialog("close");
                    }
                },
            });


            $("#autoStartLocation").on("autocompleteselect",
                 (event, ui)=> {
                     let parameters: IAutoCompleteSubmit = {} as any;
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                     } else {
                        parameters.address = ui.item.value;
                    }
                     parameters.isSource = 1;
                     parameters.googleSearchText = '';
                     parameters.breakType = 0;
                     parameters.breakDate = '';
                     

                     selfThis.tourInfoUpdate(parameters);


                });

            $("#autoDestinationLocation").on("autocompleteselect",
                (event, ui) =>{
                    let parameters: IAutoCompleteSubmit = {} as any;
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                    } else {
                        parameters.address = ui.item.value;
                    }
                    parameters.isSource = 2;
                    parameters.googleSearchText = '';
                    parameters.breakType = 0;
                    parameters.breakDate = '';

                    selfThis.tourInfoUpdate(parameters);

                });


            $("#placeSeachForAdding").on("autocompleteselect",
                (event, ui) =>{

                    let parameters: IAutoCompleteSubmit = {} as any;
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                    } else {
                        parameters.address = ui.item.value;
                    }
                    parameters.isSource = 3;
                    parameters.googleSearchText = '';
                    parameters.breakType = 0;
                    parameters.breakDate = '';

                    selfThis.tourInfoUpdate(parameters);

                });

            $("#googleMapplaceSeachForAdding").on("autocompleteselect",
                (event, ui) => {
                    debugger;
                    let parameters: IAutoCompleteSubmit= {} as any;
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                    } else {
                        parameters.address = ui.item.value;
                    }
                     parameters.isSource = 3;
                     parameters.googleSearchText = '';
                     parameters.breakType = 0;
                     parameters.breakDate = '';

                    selfThis.tourInfoUpdate(parameters);

                });

            $("#autoAddAttractionForBreak").on("autocompleteselect",
                (event, ui) =>{
                    let parameters: IAutoCompleteSubmit = {} as any;
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                    } else {
                        parameters.address = ui.item.value;
                    }
                    parameters.isSource = 4;
                    parameters.googleSearchText = '';
                    parameters.breakType = $("#hdSelectedBreakType").val();
                    parameters.breakDate = $("#hdSelectedDivId").val();

                    selfThis.tourInfoUpdate(parameters);


                    $("#addingBreak")
                        .dialog("close");
                });

            //Index dataload is done or not
            GlobalVaraibles.loadIndexDb = setInterval(() => {
                    IndexDbWrapper.prototype.indexdbPreDataLoadIsDone(this);
                },
                900);

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "$onInit",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    //this method will called from the IndexWrapper
    public loadUserData() {
        try {
            TourSchedule.prototype.getBreakInformation(this);
            TourSchedule.prototype.getTourInformationOnTripId(this);
            this.scope.extraCategoryList = [];
            TourSchedule.prototype.getExtraCategoryList(this);
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "loadUserData",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public getBreakInformationBind(data: any) {
        try {
            
            var self = this.scope;
            this.scope.$apply(() => {
                this.scope.updateDayEndTime = CommonFunctions.prototype.convertTo12Hour("22:00:00");
                this.scope.updateDayStartTime = CommonFunctions.prototype.convertTo12Hour("09:00:00");

                $.each(data,
                    (key, value) =>{

                        if (value.Display === "Break Fast") {
                            self.updatedBreakFastTime =
                                CommonFunctions.prototype.convertTo12Hour(value.StartTime);
                        }
                        if (value.Display === "Lunch Time") {
                            self.updatedLunchTime = CommonFunctions.prototype.convertTo12Hour(value.StartTime);
                        }
                        if (value.Display === "Break Time") {
                            self.updatedBreakTime = CommonFunctions.prototype.convertTo12Hour(value.StartTime);
                        }
                        if (value.Display === "Dinner Time") {
                            self.updatedDinnerTime = CommonFunctions.prototype.convertTo12Hour(value.StartTime);
                        }
                    });
            });
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "getBreakInformationBind",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public getExtraCategoryListBind(data: any) {
        try {
            this.scope.$apply(() => {
                this.scope.extraCategoryList = data;
            });
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "getExtraCategoryListBind",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public getCategoryList() {
        try {
            TourSchedule.prototype.getMasterCategory(this);
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "getCategoryList",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public getMasterCategoryResponseBind(data: any) {
        try {
            this.scope.$apply(() => {
                this.scope.masterCategoryList = data;
                this.clickMainCategorySelected(data[0].CategoryId);
            });
            TourSchedule.prototype.getCategoryList(this);
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "getMasterCategoryResponseBind",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public getCategoryListBind(data: any) {
        try {
            this.scope.$apply(() => {
                $(".ngCategorytable").show();
                this.scope.categoryList = data;
            });
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "getCategoryListBind",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public clickMainCategorySelected(mainCategoryId: number) {
        var self = this;
        try {
            this.scope.mainCategorySelected = mainCategoryId;
            this.scope.filterCategoryList = [];
            this.scope.selectedCategoryList = [];

            $(this.scope.categoryList).filter((index) => {
                if (self.scope.categoryList[index].MasterCategoryId === mainCategoryId) {
                    self.scope.filterCategoryList.push(self.scope.categoryList[index]);
                    //Once main category selected,under main category list sub category pushed into the selected category list
                    self.scope.selectedCategoryList.push(self.scope.categoryList[index]);
                }
            });

            //it will filter with the selected attraction list
            this.categorySelectedAttractionFilter();
            this.publicFilterAttractions();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.mainCategoryId = mainCategoryId;
            Error.prototype.logError("ControlerIndex",
                "clickMainCategorySelected",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public categorySelectedAttractionFilter() {
        var self = this;

        try {

            var isNotFilterd = false;

            this.scope.filterAttractionList = [];
            $(this.scope.selectedCategoryList).filter((index) => {
                $(self.scope.attractionList).filter((attractionIndex) => {
                    if (self.scope.selectedCategoryList[index].GoogleTypeID ===
                        self.scope.attractionList[attractionIndex].CategoryId) {

                        isNotFilterd = false;
                        //filtering attractions from the category which user already selected
                        $.each(self.scope.orderOfAttractionList,
                            (key, value) => {

                                if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                                    $.each(value.ListGetOrderOfAttractionVisit,
                                        (googleKey, googleValue) => {
                                            if (googleValue.SourceAttractionId ===
                                                self.scope.attractionList[attractionIndex].AttractionsId ||
                                                googleValue.DestinationAttractionId ===
                                                self.scope.attractionList[attractionIndex].AttractionsId) {
                                                isNotFilterd = true;
                                            }
                                        });
                                }
                            });

                        if (!isNotFilterd)
                            self.scope.filterAttractionList.push(self.scope.attractionList[attractionIndex]);
                    }
                });
            });
            this.scope.categoryPlaceSearch = "";
            this.filterInterestedAttraction();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "categorySelectedAttractionFilter",
                ControlerIndex.prototype.errorParameters,
                e);
        }

    }

    public filterInterestedAttraction() {
        try {
            var tempFilterAttractionList = this.scope.filterAttractionList;
            var attractionNotInsert = false;
            this.scope.filterAttractionList = [];
            $(tempFilterAttractionList).filter(index => {
                attractionNotInsert = false;
                $.each(this.scope.attractionInterestedList,
                    (inKey, inValue) => {
                        if (inValue.AttractionsId === tempFilterAttractionList[index].AttractionsId) {
                            attractionNotInsert = true;
                            return false;
                        }
                    });

                if (!attractionNotInsert) {
                    this.scope.filterAttractionList.push(tempFilterAttractionList[index]);
                }
            });

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "filterInterestedAttraction",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public publicFilterAttractions() {

        try {
            let newArr: any;
            let isFirst: boolean = true;

            $("#travelBasic").show();
            
            if (this.scope.selectedCategoryList.length > 0) {
                $.each(this.scope.selectedCategoryList,
                    (i, obj) => {
                        if (!isFirst) {
                            newArr += ",";
                            newArr += obj.CategoryId + "~" + obj.CategoryName;
                        } else {
                            isFirst = false;
                            newArr = obj.CategoryId + "~" + obj.CategoryName;
                        }

                    });
            }

            let cityVisitList: any = [];


            if (this.scope.visitCityList.length > 0) {
                $.each(this.scope.visitCityList,
                    (key, value) => {
                        let subListValue: any = {};

                        subListValue.RecordIndex = value.recordIndex;
                        subListValue.CityId = value.cityId;
                        cityVisitList.push(subListValue);

                    });
            }

            let jsonObject: any = {
                "countryId": this.scope.countryId,
                "cityVisitList": cityVisitList,
                "MainCategorySelected": this.scope.mainCategorySelected
            };
            
            TourSchedule.prototype.publicFilterAttractions(this, jsonObject);

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "publicFilterAttractions",
                ControlerIndex.prototype.errorParameters,
                e);
        }

    }

    public publicFilterAttractionsBind(data: any) {

        try {
            if (data.length > 0) {
                this.scope.$apply(() => {
                    this.citySelected(data);
                });
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "publicFilterAttractionsBind",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public citySelected(data) {
        try {
            let self: any = this.scope;
            this.scope.attractionList = [];
            $.each(data,
                (attractionKey, attractionValue) => {
                    let item: any = [];
                    item.value = attractionValue["GoogleSearchText"];
                    item.data = attractionValue["AttractionsId"];
                    self.attractionListAutoComplete.push(item);
                    item = attractionValue;
                    self.attractionList.push(item);
                });

            //it will filter with the selected attraction list
            this.categorySelectedAttractionFilter();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "citySelected",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public categorySelected(categoryList: any) {
        try {
            let self: any = this.scope;
            var isRecordFound = false;
            $.each(this.scope.selectedCategoryList,
                (categoryKey, categoryValue) => {
                    if (categoryValue["GoogleTypeID"] === categoryList.GoogleTypeID) {
                        isRecordFound = true;
                        self.selectedCategoryList.splice(categoryKey, 1);
                        return false;
                    } else {
                        isRecordFound = false;
                    }
                });
            if (!isRecordFound) {
                let item: any = [];
                item.GoogleTypeID = categoryList.GoogleTypeID;
                item.CategoryName = categoryList.TypeName;
                self.selectedCategoryList.push(item);
            }

            //This feature need fix and implment it later
            // User_InsertCategoryInformation($scope, $http);

            //it will filter with the selected attraction list
            this.categorySelectedAttractionFilter();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.categoryList = categoryList;
            Error.prototype.logError("ControlerIndex",
                "categorySelected",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public mapCategorySelected(categoryList) {
        try {
            let self: any = this.scope;

            let isRecordFound: boolean = false;
            $.each(self.mapselectedCategoryList,
                (categoryKey, categoryValue) => {
                    if (categoryValue["GoogleTypeID"] === categoryList.GoogleTypeID) {
                        isRecordFound = true;
                        self.mapselectedCategoryList.splice(categoryKey, 1);
                        return false;
                    } else {
                        isRecordFound = false;
                    }
                });
            if (!isRecordFound) {
                let item: any = [];
                item.GoogleTypeID = categoryList.GoogleTypeID;
                item.CategoryName = categoryList.TypeName;
                self.mapselectedCategoryList.push(item);
            }

            if (self.attractionTravelStepsId > 0 && self.orderId > 0) {
                this.mapStepBreakInfo(self.attractionTravelStepsId, self.orderId);
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.categoryList = categoryList;
            Error.prototype.logError("ControlerIndex",
                "mapCategorySelected",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public mapStepBreakInfo(attractionTravelStepsId: number, orderId: number) {
        try {
            
            let self: any = this.scope;
            var markerdata = [];
            self.attractionTravelStepsId = attractionTravelStepsId;
            self.orderId = orderId;
            var filterNearAttractionInfo = [];
            if (self.mapselectedCategoryList.length > 0) {
                $.each(self.attractionTravelStepsNearAttractionInfo,
                    (key, value) => {
                        if (value.attractionTravelStepsId === attractionTravelStepsId && value.orderId === orderId) {
                            $.each(value.data,
                                (dataKey, dataValue) => {
                                    $.each(self.attractionXCategory,
                                        (xKey, xValue) => {
                                            if (dataValue.AttractionsId === xValue.AttractionId) {
                                                $.each(self.mapselectedCategoryList,
                                                    (mapKey, mapValue) => {
                                                        if (xValue.CategoryId === mapValue.GoogleTypeID) {
                                                            filterNearAttractionInfo.push(value);
                                                        }
                                                    });
                                            }
                                        });

                                });
                        }
                    });
            } else {
                filterNearAttractionInfo = self.attractionTravelStepsNearAttractionInfo;
            }
            
            this.addNearByMarks(filterNearAttractionInfo);
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionTravelStepsId = attractionTravelStepsId;
            ControlerIndex.prototype.errorParameters.orderId = orderId;
            Error.prototype.logError("ControlerIndex",
                "mapStepBreakInfo",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public addNearByMarks(filterNearAttractionInfo: any) {
        try {
            
            let self: any = this.scope;
            this.clearMarks();
            debugger;
            $.each(filterNearAttractionInfo,
                (key, value) => {
                    if (value.attractionTravelStepsId === self.attractionTravelStepsId)
                        debugger;
                    if (value.attractionTravelStepsId === self.attractionTravelStepsId &&
                        value.orderId === self.orderId) {
                        
                        $.each(value.data,
                            (stepKey, stepValue) => {

                                
                                //building the display Content
                                let destinationContent: string = "<span class='mapAttractionName'>" +
                                    stepValue.SourceAttractionName +
                                    "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<span class='mapAttractionAddress'>" +
                                    stepValue.SourceSearchText +
                                    "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<a target='_blank' href='https://www.google.com/search?q=" +
                                    stepValue.SourceAttractionName +
                                    "'>Look in Google search</a>";
                                destinationContent += "<br/>";
                                destinationContent += "<br/>";
                                if (stepValue.Distance !== null) {
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "Distance: " +
                                        "</span>";
                                    destinationContent += "<span class='mapAttractionSideText'>" +
                                        stepValue.Distance +
                                        "</span>";
                                    destinationContent += "<br/>";
                                }
                                if (stepValue.TravelTimeHours !== null) {
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "Distance Cover Time: " +
                                        "</span>";
                                    destinationContent += "<span cladestinationContent += ss='mapAttractionSideText'>" +
                                        stepValue.TravelTimeHours +
                                        " hh" +
                                        "</span>";
                                    destinationContent += "<br/>";
                                }
                                if (stepValue.SourceRating !== null) {
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "Rating: " +
                                        "</span>";
                                    destinationContent += "<span class='mapAttractionSideText'>" +
                                        stepValue.SourceRating +
                                        "</span>";
                                    destinationContent += "<br/>";
                                }
                                if (stepValue.SourceRatingTotal !== null) {
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "Total Rating: " +
                                        "</span>";
                                    destinationContent += "<span class='mapAttractionSideText'>" +
                                        stepValue.SourceRatingTotal +
                                        "</span>";
                                    destinationContent += "<br/>";
                                }
                                if (stepValue.FoodExpense > 0) {
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "Food Expense: " +
                                        "</span>";
                                    destinationContent += "<span class='mapAttractionSideText'>" +
                                        stepValue.FoodExpense +
                                        "</span>";
                                    destinationContent += "<br/>";
                                }
                                if (stepValue.StayExpense > 0) {
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "Stay Expense: " +
                                        "</span>";
                                    destinationContent += "<span class='mapAttractionSideText'>" +
                                        stepValue.StayExpense +
                                        "</span>";
                                    destinationContent += "<br/>";
                                }

                                destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                    "Add this attraction: " +
                                    "</span>";
                                destinationContent +=
                                    "<button type='button' onclick='userInterested(" +
                                    stepValue.AttractionsId +
                                    ")'>Interested</button>";
                                destinationContent += "<br/>";

                                
                                let markerdata: any = [];
                                markerdata.lat = stepValue.SourceLatitude;
                                markerdata.lng = stepValue.SourceLongitude;
                                markerdata.title = stepValue.SourceAttractionName;
                                markerdata.content = destinationContent;
                                markerdata.IsNearLocation = true;
                                markerdata.label = "0";

                                var markInfo = MapsActions.prototype.addMarderk(markerdata, self.googleMaps,false);

                                self.googleMapsStepMarks.push(markInfo);
                            });


                        return false;
                    }
                });
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.filterNearAttractionInfo = filterNearAttractionInfo;
            Error.prototype.logError("ControlerIndex",
                "addNearByMarks",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public isMapCategoryExist(googleTypeId: number) {
        try {
            var v = -1;
            
            $.each(this.scope.mapselectedCategoryList,
                (key, value) => {

                    if (value.GoogleTypeID === googleTypeId) {
                        v = key;
                        return false;
                    }
                });

            return v;
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.googleTypeId = googleTypeId;
            Error.prototype.logError("ControlerIndex",
                "isMapCategoryExist",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public cssMainCategory(mainCategoryId: number) {
        try {
            if (mainCategoryId === this.scope.mainCategorySelected) {
                return true;
            }
            return false;
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.mainCategoryId = mainCategoryId;
            Error.prototype.logError("ControlerIndex",
                "cssMainCategory",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public addCitites() {

        try {
            
            let self: any = this.scope;
            let existed: boolean = false;
            let recordIndex: number = this.scope.visitCityList.length;
            if (this.scope.selectedCityLabel !== "") {
                $.each(this.scope.visitCityList,
                    (key, value) => {
                        if (value.cityName === self.selectedCityLabel) {
                            existed = true;
                            return false;
                        }
                    });
                if (!existed) {
                    let item: any = [];
                    item.countryId = self.countryId;
                    item.cityId = self.cityId;
                    item.cityName = self.selectedCityLabel;
                    item.recordIndex = recordIndex;
                    self.VisitCityList.push(item);
                }
            }

            $("#autoCityName").val("");
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "addCitites",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public cityNotIntereseted(cityId: number) {
        try {
            let self: any = this.scope;
            let recordOrder: number = 0;
            $.each(self.visitCityList,
                (key, value) => {
                    if (value.cityId === cityId) {
                        recordOrder = key;
                        return false;
                    }
                });
            self.visitCityList.splice(recordOrder, 1);
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.cityId = cityId;
            Error.prototype.logError("ControlerIndex",
                "cityNotIntereseted",
                ControlerIndex.prototype.errorParameters,
                e);
        }

    }

    public isCityOrderUpdated(cityId: number, recordIndex: number, isUp: boolean) {
        try {
            let self: any = this.scope;

            if (isUp) {
                $.each(self.visitCityList,
                    (key, value) => {
                        if (value.recordIndex === recordIndex) {
                            value.recordIndex = recordIndex - 1;
                        } else {
                            if (value.recordIndex === recordIndex - 1) {
                                value.recordIndex = recordIndex;
                            }
                        }
                    });
            } else {
                $.each(self.visitCityList,
                    (key, value) => {
                        if (value.recordIndex === recordIndex + 1) {
                            value.recordIndex = recordIndex;
                        } else {
                            if (value.recordIndex === recordIndex) {
                                value.recordIndex = recordIndex + 1;
                            }
                        }
                    });
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.cityId = cityId;
            ControlerIndex.prototype.errorParameters.recordIndex = recordIndex;
            ControlerIndex.prototype.errorParameters.isUp = isUp;
            Error.prototype.logError("ControlerIndex",
                "isCityOrderUpdated",
                ControlerIndex.prototype.errorParameters,
                e);
        }

    }

    //Getting the order of Attractions
    public attractionInformationBinding() {
        try {
            TourSchedule.prototype.userUserTripGetAttractions(this);

            this.updateUserReqestOrder();

            this.publicGetOrderOfAttractionVisit();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "attractionInformationBinding",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public userTripAttractionInfo(data: any) {
        try {
            let self = this.scope;
            self.attractionInterestedList = [];
            $.each(data,
                (key, value) => {
                    let item: any = [];
                    item.AttractionsId = value.AttractionId;
                    self.attractionInterestedList.push(item);
                });

            this.filterInterestedAttraction();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "userTripAttractionInfo",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public updateUserReqestOrder = function() {
        try {
            let self: any = this.scope;
            let isFirst: boolean = false;
            $.each(self.attractionInterestedList,
                (attractionKey, attractionValue) => {
                    if (!isFirst) {
                        isFirst = true;
                        self.sourceAttractionID = self.destinationAttractionID =
                            attractionValue["AttractionsId"];
                    }
                });

            //We need to make dynamic
            self.travelModeId = 1;
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "updateUserReqestOrder",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public publicGetOrderOfAttractionVisit() {
        try {
            let self: any = this.scope;
            let orderOfAttractionListTemp: any = [];
            let orderOfAttractionListTempSub: any = {};

            $.each(self.orderOfAttractionList,
                (key, value) => {

                    orderOfAttractionListTempSub.GroupDate = value.GroupDate;
                    orderOfAttractionListTempSub.ListGetOrderOfAttractionVisit = [];
                    let counterCount: number = 0;
                    $.each(value.ListGetOrderOfAttractionVisit,
                        (subKey, subValue) => {
                            let subListValue: any = {};
                            subListValue.SourceAttractionId = subValue.SourceAttractionId;
                            subListValue.DestinationAttractionId = subValue.DestinationAttractionId;
                            orderOfAttractionListTempSub.ListGetOrderOfAttractionVisit.push(subListValue);

                        });

                    orderOfAttractionListTemp.push(orderOfAttractionListTempSub);

                });

            let updatedBreaks: any = [];

            $.each(self.updatedBreaks,
                (key, value) => {
                    let temp: any = {};

                    temp.IsUserInterestedBreak = value.IsUserInterestedBreak;
                    temp.IsUserInterestedDayBreak = value.IsUserInterestedDayBreak;
                    temp.UpdateDayStartTime = CommonFunctions.prototype.convertTo24Hour(value.UpdateDayStartTime);
                    temp.UpdatedDinnerTime = CommonFunctions.prototype.convertTo24Hour(value.UpdatedDinnerTime);
                    temp.UpdatedLunchTime = CommonFunctions.prototype.convertTo24Hour(value.UpdatedLunchTime);
                    temp.IsUserInterestedLunchBreak = value.IsUserInterestedLunchBreak;
                    temp.UpdatedBreakTime = CommonFunctions.prototype.convertTo24Hour(value.UpdatedBreakTime);
                    temp.UpdateDayEndTime = CommonFunctions.prototype.convertTo24Hour(value.UpdateDayEndTime);
                    temp.IsUserInterestedDinnerBreak = value.IsUserInterestedDinnerBreak;
                    temp.RequestDate = value.RequestDate;
                    temp.IsBreakAdded = value.IsBreakAdded;
                    temp.BreakAttractionId = value.BreakAttractionId;
                    temp.IsLunchAdded = value.IsLunchAdded;
                    temp.LunchAttractionId = value.LunchAttractionId;
                    temp.IsDinnerAdded = value.IsDinnerAdded;
                    temp.DinnerAttractionId = value.DinnerAttractionId;
                    temp.IsUserInterestedBreakFast = value.IsUserInterestedBreakFast;
                    temp.UpdatedBreakFastTime = CommonFunctions.prototype.convertTo24Hour(value.UpdatedBreakFastTime);
                    temp.IsBreakFastAdded = value.IsBreakFastAdded;
                    temp.BreakFastAttractionId = value.BreakFastAttractionId;
                    temp.IsDayBreakAdded = value.IsDayBreakAdded;
                    temp.DayBreakAttractionId = value.DayBreakAttractionId;
                    temp.NoOfCars = value.NoOfCars;
                    temp.AverageMileage = value.AverageMileage;
                    temp.BreakExpense = value.BreakExpense;
                    temp.BreakFastExpense = value.BreakFastExpense;
                    temp.CarRentalExpense = value.CarRentalExpense;
                    temp.DayBreakExpense = value.DayBreakExpense;
                    temp.LunchExpense = value.LunchExpense;
                    temp.NoOfRooms = value.NoOfRooms;
                    temp.DinnerExpense = value.DinnerExpense;
                    temp.IsNoOfCarsUserUpdated = value.IsNoOfCarsUserUpdated;
                    temp.IsAverageMileageUserUpdated = value.IsAverageMileageUserUpdated;
                    temp.IsCarRentalExpenseUserUpdated = value.IsCarRentalExpenseUserUpdated;
                    temp.IsBreakFastExpenseUserUpdated = value.IsBreakFastExpenseUserUpdated;
                    temp.IsLunchExpenseUserUpdated = value.IsLunchExpenseUserUpdated;
                    temp.IsBreakExpenseUserUpdated = value.IsBreakExpenseUserUpdated;
                    temp.IsDinnerExpenseUserUpdated = value.IsDinnerExpenseUserUpdated;
                    temp.IsDayBreakExpenseUserUpdated = value.IsDayBreakExpenseUserUpdated;
                    temp.IsNoOfRoomsUserUpdated = value.IsNoOfRoomsUserUpdated;

                    updatedBreaks.push(temp);
                });


            let jsonObject: any = {
                "TravelModeId": self.TravelModeId,
                "ListGroupWithDateAttractions": orderOfAttractionListTemp,
                "CountryId": self.countryId,
                "UpdatedBreaks": updatedBreaks
            };

            TourSchedule.prototype.publicGetOrderOfAttractionVisit(this, jsonObject);

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "publicGetOrderOfAttractionVisit",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    //Ajax return data for the order of attractions
    public attractionInformationRendaring(data: any) {
        try {
            let self: any = this.scope;
            //Break information is updating because for Expense calculation
            TourSchedule.prototype.userRequestedBreaks(this);

            
            //Google Maps data binding
            this.googleMapMarks(data, false);

            self.orderOfAttractionList = data;
            TourSchedule.prototype.getOrderOfRequest(this, this.scope.countryId);


            this.itenateDynamicDatesCreation(data);
            
            if (!this.dataLoading && data.length === 0) {
                this.dataLoading = true;
                this.publicGetOrderOfAttractionVisit();
            }

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "attractionInformationRendaring",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public requestedBreaks(data: any) {
        try {
            let self: any = this.scope;
            self.updatedBreaks = [];


            $.each(data,
                (key, value) => {
                    let temp: any = [];

                    temp.RequestDate = value.RequestDate;
                    temp.IsUserInterestedDayBreak = value.IsUserInterestedDayBreak;
                    if (value.UpdateDayEndTime === null) {
                        temp.UpdateDayEndTime = self.updateDayEndTime;
                    } else {
                        temp.UpdateDayEndTime = CommonFunctions.prototype.convertTo12Hour(value.UpdateDayEndTime);
                    }
                    if (value.UpdateDayStartTime === null) {
                        temp.UpdateDayStartTime = self.updateDayStartTime;
                    } else {
                        temp.UpdateDayStartTime = CommonFunctions.prototype.convertTo12Hour(value.UpdateDayStartTime);
                    }
                    temp.IsUserInterestedLunchBreak = value.IsUserInterestedLunchBreak;
                    if (value.UpdatedLunchTime === null) {
                        temp.UpdatedLunchTime = self.updatedLunchTime;
                    } else {
                        temp.UpdatedLunchTime = CommonFunctions.prototype.convertTo12Hour(value.UpdatedLunchTime);
                    }

                    temp.IsUserInterestedBreak = value.IsUserInterestedBreak;
                    if (value.UpdatedBreakTime === null) {
                        temp.UpdatedBreakTime = self.updatedBreakTime;
                    } else {
                        temp.UpdatedBreakTime = CommonFunctions.prototype.convertTo12Hour(value.UpdatedBreakTime);
                    }

                    temp.IsUserInterestedDinnerBreak = value.IsUserInterestedDinnerBreak;
                    if (value.UpdatedDinnerTime === null) {
                        temp.UpdatedDinnerTime = self.updatedDinnerTime;
                    } else {
                        temp.UpdatedDinnerTime = CommonFunctions.prototype.convertTo12Hour(value.UpdatedDinnerTime);
                    }

                    temp.IsUserInterestedBreakFast = value.IsUserInterestedBreakFast;
                    if (value.UpdatedBreakFastTime === null) {
                        temp.UpdatedBreakFastTime = self.updatedBreakFastTime;
                    } else {
                        temp.UpdatedBreakFastTime =
                            CommonFunctions.prototype.convertTo12Hour(value.UpdatedBreakFastTime);
                    }


                    temp.IsBreakAdded = value.IsBreakAdded;
                    temp.BreakAttractionId = value.BreakAttractionId;
                    temp.IsLunchAdded = value.IsLunchAdded;
                    temp.LunchAttractionId = value.LunchAttractionId;
                    temp.IsDinnerAdded = value.IsDinnerAdded;
                    temp.DinnerAttractionId = value.DinnerAttractionId;
                    temp.IsDayBreakAdded = value.IsDayBreakAdded;
                    temp.DayBreakAttractionId = value.DayBreakAttractionId;
                    temp.NoOfCars = value.NoOfCars;
                    temp.AverageMileage = value.AverageMileage;
                    temp.NoOfRooms = value.NoOfRooms;
                    temp.BreakFastExpense = value.BreakFastExpense;
                    temp.LunchExpense = value.LunchExpense;
                    temp.BreakExpense = value.BreakExpense;
                    temp.DayBreakExpense = value.DayBreakExpense;
                    temp.CarRentalExpense = value.CarRentalExpense;
                    temp.NoOfAttractions = value.NoOfAttractions;
                    temp.Distance = value.Distance;
                    temp.DinnerExpense = value.DinnerExpense;
                    temp.IsNoOfCarsUserUpdated = value.IsNoOfCarsUserUpdated;
                    temp.IsAverageMileageUserUpdated = value.IsAverageMileageUserUpdated;
                    temp.IsCarRentalExpenseUserUpdated = value.IsCarRentalExpenseUserUpdated;
                    temp.IsBreakFastExpenseUserUpdated = value.IsBreakFastExpenseUserUpdated;
                    temp.IsLunchExpenseUserUpdated = value.IsLunchExpenseUserUpdated;
                    temp.IsBreakExpenseUserUpdated = value.IsBreakExpenseUserUpdated;
                    temp.IsDinnerExpenseUserUpdated = value.IsDinnerExpenseUserUpdated;
                    temp.IsDayBreakExpenseUserUpdated = value.IsDayBreakExpenseUserUpdated;
                    temp.IsNoOfRoomsUserUpdated = value.IsNoOfRoomsUserUpdated;

                    temp.divId = "tab_" + value.RequestDate.replace("/", "_").replace("/", "_");
                    self.updatedBreaks.push(temp);
                    
                });
            this.buildExpenseInfo();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "requestedBreaks",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    //displaying the google maps information with the current attraction information
    public googleMapMarks(data: any, isFromReset:boolean) {
        try {
            
            let self: any = this.scope;
            let isFirst: boolean = true;
            let isMarkExist: boolean = false;
            let mainMarksData: any = [];

            let markerdata: any = [];
            let index: number = 0;
            let selfThis: any = this;
            let dayCount: number = 0;
            if (!jQuery.isEmptyObject(data)) {
                $.each(data,
                    (key, value) => {
                        dayCount++;
                        if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                            $.each(value.ListGetOrderOfAttractionVisit,
                                (googleKey, googleValue) => {
                                    

                                    if (googleValue.SourceLatitude !== null &&
                                        googleValue.SourceLongitude !== null &&
                                        googleValue.DestinationLatitude !== null &&
                                        googleValue.DestinationLongitude !== null
                                    ) {

                                        
                                        if (isFirst) {
                                            isFirst = false;
                                            if (isFromReset === false) {
                                                (window as any).googleMapsMethodInfo(
                                                    googleValue.SourceLatitude,
                                                    googleValue.SourceLongitude);
                                            } else {
                                                //cleaning the map information
                                                selfThis.clearMapsInfo();
                                            }


                                            markerdata = [];
                                            markerdata.lat = googleValue.SourceLatitude;
                                            //this special adding because to resolve the conflict between the source and destination location
                                            markerdata.lng =
                                                googleValue.SourceLongitude;
                                            markerdata.title = googleValue.SourceAttractionName;
                                            markerdata.label = googleValue.RecordCount.toString();
                                            markerdata.content = "<span class='mapDayText'>Day -" +
                                                dayCount +
                                                " </span> - <span class='mapDay'> " +
                                                value.GroupDate +
                                                " </span>" +
                                                "<br/>" +
                                                "<span class='mapAttractionName'>" +
                                                googleValue.SourceAttractionName +
                                                "</span>" +
                                                "<br/>" +
                                                "Start Location" +
                                                "<br/>" +
                                                "Start:" +
                                                
                                                "<select onchange=\"dayStartInformationUpdate('" + value.GroupDate+"',this)\">";
                                            
                                            $.each(selfThis.timeInterval,
                                                (timeKey, timeValue) => {
                                                    markerdata.content += "<option value='" +
                                                        timeValue.value +
                                                        "'";
                                                    if (googleValue.DateAndTime+":00" === timeValue.value) {
                                                        markerdata.content += " selected >";
                                                    } else {
                                                        markerdata.content += ">";
                                                    }

                                                    markerdata.content += timeValue.text + "</option>";

                                                });
                                            markerdata.content += "</select>"+

                                                
                                                "<br/>";

                                            markerdata.textContent = "Day-" + dayCount + " - " + value.GroupDate;

                                            mainMarksData.push(markerdata);

                                            
                                        }

                                        //building the display Content
                                        var destinationContent = "<span class='mapDayText'>Day -" +
                                            dayCount +
                                            " </span> - <span class='mapDay'> " +
                                            value.GroupDate +
                                            " </span>" +
                                            "<br/>"+
                                            "<span class='mapAttractionSideHeadign'>" + "From: " + "</span>";
                                        destinationContent += "<span class='mapAttractionName'>" +
                                            googleValue.SourceAttractionName +
                                            "</span>";
                                        destinationContent += "<br/>";
                                        destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                            "To: " +
                                            "</span>";
                                        destinationContent += "<span class='mapAttractionName'>" +
                                            googleValue.DestinationAttractionName +
                                            "</span>";
                                        destinationContent += "<br/>";
                                        destinationContent += "<span class='mapAttractionAddress'>" +
                                            googleValue.DestinationSearchText +
                                            "</span>";
                                        destinationContent += "<br/>";
                                        destinationContent += "<br/>";
                                        destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                            "Distance: " +
                                            "</span>";
                                        destinationContent += "<span class='mapAttractionSideText'>" +
                                            googleValue.Distance +
                                            "</span>";
                                        destinationContent += "<br/>";
                                        destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                            "Distance Cover Time: " +
                                            "</span>";
                                        destinationContent += "<span class='mapAttractionSideText'>" +
                                            googleValue.TravelTime +
                                            " hh" +
                                            "</span>";
                                        destinationContent += "<br/>";
                                        destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                            "Reach Time: " +
                                            "</span>";
                                        destinationContent += "<span class='mapAttractionSideText'>" +
                                            CommonFunctions.prototype.convertTo12Hour(googleValue.ReachTime) +
                                            "</span>";
                                        destinationContent += "<br/>";
                                        destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                            "Stay for View: " +
                                            "</span>";
                                        destinationContent += "<span class='mapAttractionSideText'>";

                                        destinationContent +=
                                            "<select onchange='ViewTimeUpdate(" + googleValue.DestinationAttractionId + ",this)' >";

                                        $.each(selfThis.timeBreak,
                                            (intervalKey, intervalValue) => {

                                                destinationContent += "<option value='" +
                                                    intervalValue.value +
                                                    "' ";
                                                if (intervalValue.value === googleValue.TimeRequiredToView) {
                                                    destinationContent += " selected >";
                                                } else {
                                                    destinationContent += ">";
                                                }

                                                destinationContent += intervalValue.text +
                                                    "</option>";
                                            });

                                        destinationContent += "</select>";

                                        destinationContent += "</span>";
                                        destinationContent += "<br/>";
                                        destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                            "Complete Event: " +
                                            "</span>";
                                        destinationContent += "<span class='mapAttractionSideText'>" +
                                            CommonFunctions.prototype.convertTo12Hour(googleValue.EventEndTime) +
                                            "</span>";
                                        destinationContent += "<br/>";
                                        destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                            "I don't want to visit this: " +
                                            '<img src="' +
                                            Constants.localUrl +
                                            '/Images/Custome/red_x.png" alt= "Not Intereseted" width= "15px" height= "15px" onclick= "NotIntereseted(' +
                                            googleValue.DestinationAttractionId +
                                            ')" />' +
                                            "</span>";
                                        destinationContent += "<br/>";
                                        if (googleValue.IsNeedDrivningBreak) {
                                            destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                                "It is a long journey do you want to take break  <button type='button' onclick='mapBreakInfo(" +
                                                googleValue.RecordCount +
                                                ")'>Yes</button>" +
                                                "</span>";
                                        }
                                        var title = googleValue.RecordCount.toString() +
                                            " " +
                                            googleValue.DestinationAttractionName;

                                        isMarkExist = false;
                                        $.each(mainMarksData,
                                            (markDataKey, markDataValue) => {
                                                //Merging two marks, if user vising multiple times
                                                if (markDataValue.lat === googleValue.DestinationLatitude &&
                                                    markDataValue.lng === googleValue.DestinationLongitude) {

                                                    markDataValue.label =
                                                        markDataValue.label + "," + (googleValue.RecordCount+1).toString();
                                                    markDataValue.content =
                                                        markDataValue.content +
                                                        "<br/>" +
                                                        "---------------------------" +
                                                        "<br/>" +
                                                        destinationContent;
                                                    markDataValue.textContent = markDataValue.textContent +
                                                        " || " +
                                                        "Day-" +
                                                        dayCount +
                                                        " - " +
                                                        value.GroupDate;
                                                    isMarkExist = true;
                                                }
                                            });
                                        
                                        if (!isMarkExist) {
                                            markerdata = [];
                                            markerdata.lat = googleValue.DestinationLatitude;
                                            markerdata.lng = googleValue.DestinationLongitude;
                                            markerdata.title = title;
                                            markerdata.label = (googleValue.RecordCount+1).toString();
                                            markerdata.content = destinationContent;

                                            markerdata.textContent = "Day-" + dayCount + " - " + value.GroupDate;

                                            mainMarksData.push(markerdata);
                                        }


                                        var isExist = false;
                                        $.each(self.GetAttractionsNextAttractions,
                                            (nextAttractionskey, nextAttractionsvalue) => {
                                                //if (nextAttractionsvalue.AttractionsId === AttractionsId) {
                                                //    isExist = true;
                                                //    return false;
                                                //}
                                            });

                                        if (isExist === false) {
                                            self.getAttractionsNextAttractionsAjaxRequest.push(googleValue
                                                .DestinationAttractionId);
                                            this.queGetAttractionsNextAttractions();
                                        }


                                        //If user select the Yes then we are reloading the map and opening the title window of map
                                        $.each(value.DrivingSteps,
                                            (stepKey, stepValue) => {


                                                var recordStepCounter = 1;
                                                $.each(stepValue.DirectionSteps,
                                                    (sKey, sValue) => {

                                                        var isNearAttractionInfovalueExist = false;
                                                        
                                                        $.each(self.attractionTravelStepsNearAttractionInfo,
                                                            (nearAttractionInfokey, nearAttractionInfovalue) => {
                                                                if (nearAttractionInfovalue.attractionTravelStepsId ===
                                                                    sValue.AttractionTravelStepsId &&
                                                                    nearAttractionInfovalue.orderId ===
                                                                    sValue.OrderId) {
                                                                    isNearAttractionInfovalueExist = true;
                                                                    return false;
                                                                }
                                                            });

                                                        if (isNearAttractionInfovalueExist === false) {


                                                            let sValuetemp: any = [];
                                                            sValuetemp.AttractionTravelStepsId =
                                                                sValue.AttractionTravelStepsId;
                                                            sValuetemp.OrderId = sValue.OrderId;
                                                            self
                                                                .getAttractionTravelStepsNearAttractionInfoAjaxRequest
                                                                .push(
                                                                    sValuetemp);


                                                            this.queGetAttractionTravelStepsNearAttractionInfo();

                                                            //This varaible will be used to get categories Id on the final call
                                                            self.checkItFinalRequestOrNot = [];
                                                            self.checkItFinalRequestOrNot.AttractionTravelStepsId =
                                                                sValue.AttractionTravelStepsId;
                                                            self.checkItFinalRequestOrNot.OrderId = sValue.OrderId;


                                                        }

                                                        recordStepCounter++;


                                                    });


                                            });


                                        var sourceCoordinates = [];
                                        var destinatinoCoordinates = [];
                                        //Writing the PloyLine
                                        var path = [];

                                        if (googleValue.TravelTimeSeconds > 0) {
                                            if (googleValue.IsNeedDrivningBreak) {

                                                $.each(value.DrivingSteps,
                                                    (stepKey, stepValue) => {

                                                        if (stepValue.RecordCount === googleValue.RecordCount) {
                                                            $.each(stepValue.DirectionSteps,
                                                                (sKey, sValue) => {

                                                                    sourceCoordinates = [];
                                                                    sourceCoordinates.push(sValue.Start_location_lat);
                                                                    sourceCoordinates.push(sValue.Start_location_lng);
                                                                    path.push(sourceCoordinates);

                                                                    destinatinoCoordinates = [];
                                                                    destinatinoCoordinates.push(sValue
                                                                        .End_location_lat);
                                                                    destinatinoCoordinates.push(sValue
                                                                        .End_location_lng);
                                                                    path.push(destinatinoCoordinates);
                                                                });

                                                        }
                                                    });

                                            } else {
                                                sourceCoordinates = [];
                                                sourceCoordinates.push(googleValue.SourceLatitude);
                                                sourceCoordinates.push(googleValue.SourceLongitude);
                                                path.push(sourceCoordinates);

                                                destinatinoCoordinates = [];
                                                destinatinoCoordinates.push(googleValue.DestinationLatitude);
                                                destinatinoCoordinates.push(googleValue.DestinationLongitude);
                                                path.push(destinatinoCoordinates);
                                            }

                                            if (index === self.mapLineColor.length) {
                                                index = 0;
                                            }
                                            if (path.length > 0) {

                                                self.googleMapsLinesMarks.push(self.googleMaps.drawPolyline({
                                                    path: path,
                                                    strokeColor: self.mapLineColor[index],
                                                    strokeOpacity: 0.6,
                                                    strokeWeight: 6
                                                }));
                                                index++;
                                            }
                                        }
                                    }
                                });
                        }
                    });

                $.each(mainMarksData,
                    (key, value) => {
                        
                        self.googleMapsMainMarks.push(MapsActions.prototype.addMarderk(value, self.googleMaps, false));
                        MapsActions.prototype.writeTextOnMap(value, self.googleMaps);
                    });
                
            }
            $("#googleMaps").width("800px");
            $("#googleMaps").height("400px");
            $("#googleMaps").focus();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "googleMapMarks",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public queGetAttractionTravelStepsNearAttractionInfo() {
        try {
            
            if (this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest.length !==
                GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo) {
                let differnceValue:number = this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest.length -
                    GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo;
                if (differnceValue > 0) {
                    if (GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo <
                        GlobalVaraibles.queValueGetAttractionTravelStepsNearAttractionInfo) {
                        for (let i: number = GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo;
                            GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo <
                                GlobalVaraibles.queValueGetAttractionTravelStepsNearAttractionInfo;
                            GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo++) {

                            if (GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo <
                                this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest.length) {
                                let parameters: any = {};
                                parameters.attractionTravelStepsId =
                                    this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest[
                                        GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo]
                                    .AttractionTravelStepsId;
                                parameters.countryId = this.scope.countryId;
                                parameters.orderId = this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest[
                                    GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo].OrderId;
                                
                                TourSchedule.prototype.getAttractionTravelStepsNearAttractionInfo(this, parameters);

                                GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo++;
                            } else {
                                break;
                            }
                        }
                    }
                }
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "queGetAttractionTravelStepsNearAttractionInfo",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public queGetAttractionsNextAttractions() {
        try {
            if (this.scope.getAttractionsNextAttractionsAjaxRequest.length !==
                GlobalVaraibles.recordCounterGetAttractionsNextAttractions) {
                var differnceValue = this.scope.getAttractionsNextAttractionsAjaxRequest.length -
                    GlobalVaraibles.recordCounterGetAttractionsNextAttractions;
                if (differnceValue > 0) {
                    if (GlobalVaraibles.queCounterGetAttractionsNextAttractions <
                        GlobalVaraibles.queValueGetAttractionsNextAttractions) {
                        for (let i: number = GlobalVaraibles.queCounterGetAttractionsNextAttractions;
                            GlobalVaraibles.queCounterGetAttractionsNextAttractions <
                                GlobalVaraibles.queValueGetAttractionsNextAttractions;
                            GlobalVaraibles.queCounterGetAttractionsNextAttractions++) {

                            if (GlobalVaraibles.recordCounterGetAttractionsNextAttractions <
                                this.scope.getAttractionsNextAttractionsAjaxRequest.length) {
                                let parameters: any = {};
                                parameters.attractionsId = this.scope.getAttractionsNextAttractionsAjaxRequest[
                                    GlobalVaraibles.recordCounterGetAttractionsNextAttractions];
                                parameters.countryId = this.scope.countryId;

                                TourSchedule.prototype.getAttractionsNextAttractions(this,
                                    parameters);

                                GlobalVaraibles.recordCounterGetAttractionsNextAttractions++;
                            } else {
                                break;
                            }
                        }
                    }
                }
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "queGetAttractionsNextAttractions",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public attractionTravelStepsNearAttractionInfoBinding(orderId: number, attractionTravelStepsId: number, data: any) {
        try {
            
            var isExist = false;
            $.each(this.scope.attractionTravelStepsNearAttractionInfo,
                (key, value) => {
                    if (value.attractionTravelStepsId === attractionTravelStepsId && value.orderId === orderId) {
                        isExist = true;
                        return false;
                    }
                });

            if (isExist === false && data.length > 0) {
                let temp: any = [];
                temp.orderId = orderId;
                temp.attractionTravelStepsId = attractionTravelStepsId;
                temp.data = data;
                if (this.scope.attractionTravelStepsNearAttractionInfo === null ||
                    jQuery.type(this.scope.attractionTravelStepsNearAttractionInfo) === "undefined") {
                    this.scope.attractionTravelStepsNearAttractionInfo = [];
                }
                this.scope.attractionTravelStepsNearAttractionInfo.push(temp);

                //string data into the Indexdb
                let tempData: any = [];
                tempData.orderId = orderId;
                tempData.attractionTravelStepsId = attractionTravelStepsId;
                tempData.data = JSON.stringify(data);
                IndexDbWrapper.prototype.storeTravelBreakNearByData(this.scope.userTripId.toString(), tempData);
            }


            if (this.scope.checkItFinalRequestOrNot.AttractionTravelStepsId === attractionTravelStepsId &&
                this.scope.checkItFinalRequestOrNot.OrderId === orderId) {
                this.gettingAttractionXCategory();
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.orderId = orderId;
            ControlerIndex.prototype.errorParameters.attractionTravelStepsId = attractionTravelStepsId;
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "attractionTravelStepsNearAttractionInfoBinding",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public gettingAttractionXCategory() {
        try {
            let self = this.scope;
            let getRecordInfo: any = [];
            $.each(self.attractionTravelStepsNearAttractionInfo,
                (key, value) => {
                    $.each(value.data,
                        (dataKey, dataValue) => {
                            var exist = false;

                            $.each(self.attractionXCategory,
                                (attKey, attValue) => {
                                    if (dataValue.AttractionsId === attValue.AttractionId) {
                                        exist = true;
                                        return false;
                                    }
                                });
                            if (exist === false) {
                                let temp: any = {};
                                temp.ID = dataValue.AttractionsId;
                                getRecordInfo.push(temp);
                                if (getRecordInfo.length > 25) {
                                    self.getAttractionXCategoryAjaxRequest.push(getRecordInfo);
                                    this.queGetAttractionXCategory();
                                    return false;
                                }
                            }
                        });
                });

            if (getRecordInfo.length > 0) {
                let data: any = [];
                data.attractionsId = getRecordInfo;
                data.countryId = this.scope.countryId;
                TourSchedule.prototype.getAttractionXCategory(this, data);
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "gettingAttractionXCategory",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public queGetAttractionXCategory() {
        try {
            if (this.scope.getAttractionXCategoryAjaxRequest.length !==
                GlobalVaraibles.recordCounterGetAttractionXCategory) {
                var differnceValue = this.scope.getAttractionXCategoryAjaxRequest.length -
                    GlobalVaraibles.recordCounterGetAttractionXCategory;
                if (differnceValue > 0) {
                    if (GlobalVaraibles.queCounterGetAttractionXCategory <
                        GlobalVaraibles.queValueGetAttractionXCategory) {
                        for (let i: any = GlobalVaraibles.queValueGetAttractionXCategory;
                            GlobalVaraibles.queCounterGetAttractionXCategory <
                                GlobalVaraibles.queValueGetAttractionXCategory;
                            GlobalVaraibles.queCounterGetAttractionXCategory++) {

                            if (GlobalVaraibles.recordCounterGetAttractionXCategory <
                                this.scope.getAttractionXCategoryAjaxRequest.length) {

                                let parameters: any = {};
                                parameters.attractionsId =
                                    this.scope.getAttractionXCategoryAjaxRequest[GlobalVaraibles
                                        .recordCounterGetAttractionXCategory];
                                parameters.countryId = this.scope.countryId;

                                TourSchedule.prototype.getAttractionXCategory(this, parameters);

                                GlobalVaraibles.recordCounterGetAttractionXCategory++;
                            } else {
                                break;
                            }
                        }
                    }
                }
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "queGetAttractionXCategory",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public gettingAttractionXCategoryBinding(data: any) {
        try {
            let self: any = this.scope;
            $.each(data,
                (key, value) => {
                    let temp: any = [];
                    temp.AttractionId = value.AttractionId;
                    temp.CategoryId = value.CategoryId;
                    if (self.attractionXCategory === null || jQuery.type(self.attractionXCategory) === "undefined") {
                        self.attractionXCategory = [];
                    }
                    self.attractionXCategory.push(temp);


                    //stroing data into the index db
                    IndexDbWrapper.prototype.storeAttractionCategoryData(self.UserTripId, temp);
                });
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "gettingAttractionXCategoryBinding",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public getAttractionsNextAttractionsBinding(attractionsId: number, data: any) {
        try {
            let self: any = this.scope;
            var isExist = false;
            $.each(self.getAttractionsNextAttractions,
                (key, value) => {
                    if (value.AttractionsId === attractionsId) {
                        isExist = true;
                        return false;
                    }
                });

            if (isExist === false && data.length > 0) {
                let temp: any = [];
                temp.attractionTravelStepsId = attractionsId;
                temp.data = data;
                if (self.getAttractionsNextAttractions === null ||
                    jQuery.type(self.getAttractionsNextAttractions) === "undefined") {
                    self.getAttractionsNextAttractions = [];
                }
                self.getAttractionsNextAttractions.push(temp);

                let tempData: any = [];
                tempData.attractionTravelStepsId = attractionsId;
                tempData.data = JSON.stringify(data);

                IndexDbWrapper.prototype.storeDestinationNearByData(self.userTripId, tempData);
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            ControlerIndex.prototype.errorParameters.attractionsId = attractionsId;
            Error.prototype.logError("ControlerIndex",
                "getAttractionsNextAttractionsBinding",
                ControlerIndex.prototype.errorParameters,
                e);
        }

    }

    public getOrderOfRequest(data: any) {
        try {
            let self: any = this.scope;
            self.userRequestedOrder = [];


            if (data !== null && data.length > 0) {

                $.each(data,
                    (orderKey, orderValue) => {
                        let temp: any = [];
                        temp.AttractionId = orderValue.AttractionId;
                        temp.OrderNumber = orderValue.OrderNumber;
                        temp.BreakInformationId = orderValue.BreakInformationId;


                        temp.StayTime = orderValue.StayTime;
                        temp.IsRequestedAfterBreakFast = orderValue.IsRequestedAfterBreakFast;
                        temp.IsRequestedAfterLunch = orderValue.IsRequestedAfterLunch;
                        temp.IsRequestedAfterBreak = orderValue.IsRequestedAfterBreak;
                        temp.IsRequestedAfterDinner = orderValue.IsRequestedAfterDinner;


                        self.userRequestedOrder.push(temp);

                    });
            }


            //enabling the flag is distance calculation is missing or not
            self.isDistanceCalcuationMissing = true;
            if (self.orderOfAttractionList.length === 0) {
                self.isDistanceCalcuationMissing = false;
            }
            $.each(self.orderOfAttractionList,
                (key, value) => {
                    $.each(value.ListGetOrderOfAttractionVisit,
                        function(googleKey, googleValue) {


                            if (googleValue.IsDistanceCalculationMissing === 1 ||
                                googleValue.IsDistanceCalculationMissing === true) {
                                self.isDistanceCalcuationMissing = false;
                                return false;
                            }

                        });
                });

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "getOrderOfRequest",
                ControlerIndex.prototype.errorParameters,
                e);
        }

    }

    public itenateDynamicDatesCreation(data: any) {
        try {
            let self: any = this.scope;
            $("div#subtabs").tabs();
            $("div#subtabs ul").empty();
            $("div#subtabs").find('div').remove();;

            let isDayExists: boolean = false;
            let num_tabs: number = $("div#subtabs ul li").length + 1;

            let breakInformation: any = [];
            $.each(data,
                (groupKey, groupValue) => {
                    breakInformation = [];
                    isDayExists = false;
                    var divId;
                    $.each(self.updatedBreaks,
                        (dateKey, dateValue) => {
                            if (groupValue.GroupDate === dateValue.RequestDate) {
                                isDayExists = true;
                                breakInformation = dateValue;
                                return false;
                            }
                        });


                    divId = "tab_" + groupValue.GroupDate.replace("/", "_").replace("/", "_");
                    if (!isDayExists) {
                        let temp: any = [];
                        temp.RequestDate = groupValue.GroupDate;
                        temp.IsUserInterestedDayBreak = 1;
                        temp.UpdateDayEndTime = self.updateDayEndTime;
                        temp.UpdateDayStartTime = self.updateDayStartTime;
                        temp.IsUserInterestedLunchBreak = 1;
                        temp.UpdatedLunchTime = self.updatedLunchTime;
                        temp.IsUserInterestedBreak = 1;
                        temp.UpdatedBreakTime = self.updatedBreakTime;
                        temp.IsUserInterestedDinnerBreak = 1;
                        temp.UpdatedDinnerTime = self.updatedDinnerTime;
                        temp.IsUserInterestedBreakFast = 1;
                        temp.UpdatedBreakFastTime = self.updatedBreakFastTime;
                        temp.divId = divId;
                        breakInformation = temp;
                        self.updatedBreaks.push(temp);
                    }


                    $("div#subtabs ul").append(
                        "<li><a href='#tab_" +
                        groupValue.GroupDate.replace("/", "_").replace("/", "_") +
                        "' ng-click='ctrl.tabClicked(\"tab_" +
                        groupValue.GroupDate.replace("/", "_").replace("/", "_") +
                        "\")'>" +
                        groupValue.GroupDate +
                        "</a></li>"
                    );


                    $("div#subtabs").append(
                        "<div id='" +
                        divId +
                        "'>" +
                        this.tourInformation(divId,
                            groupValue.ListGetOrderOfAttractionVisit,
                            breakInformation
                        ) +
                        "</div>"
                    );
                    $("div#subtabs").tabs("refresh");


                    //$("#" + divId + "_UpdateDayStartTime").timepicker();

                }
            );
            
            if (GlobalVaraibles.tabname.length === 0) {
                $("div#subtabs ul li").find('a:first').triggerHandler('click');
            } else {
                this.persistTab();
            }
            

            this.weatherUpdate(data);
            //$("#"+firstDate).triggerHandler('click');

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "itenateDynamicDatesCreation",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public persistTab() {
        try {
            $('a[href="#' + GlobalVaraibles.tabname + '"]').click();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "persistTab",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

   

    public weatherUpdate(data: any) {
        try {
            let d: Date = new Date();
            let destidate: Date = new Date();
            let numberOfDaysToAdd: number = 6;
            destidate.setDate(destidate.getDate() + numberOfDaysToAdd);

            if (!jQuery.isEmptyObject(data)) {
                $.each(data,
                    (key, value) => {
                        let currentDate: Date = new Date(value.GroupDate);

                        if (currentDate.getTime() >= d.getTime() && currentDate.getTime() <= destidate.getTime()) {
                            if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                                $.each(value.ListGetOrderOfAttractionVisit,
                                    (googleKey, googleValue) => {


                                        if (googleValue.DestinationLatitude !== null &&
                                            googleValue.DestinationLongitude !== null) {
                                            if (googleValue.DestinationLatitude !== null) {

                                                let destinatinoCoordinates: any = [];
                                                destinatinoCoordinates.DestinationLatitude =
                                                    googleValue.DestinationLatitude;
                                                destinatinoCoordinates.DestinationLongitude =
                                                    googleValue.DestinationLongitude;
                                                destinatinoCoordinates.RecordCount = googleValue.RecordCount;
                                                TourSchedule.prototype.watherAPI(this, destinatinoCoordinates);

                                            }
                                        }


                                    });

                            }
                        }
                    });
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "weatherUpdate",
                ControlerIndex.prototype.errorParameters,
                e);
        }

    }

    public weatherInfoUpdate(watherData: any, recordCount: number) {
        try {
            let self: any = this.scope;
            let d: Date = new Date();
            let destidate: Date = new Date();
            let numberOfDaysToAdd: number = 6;
            destidate.setDate(destidate.getDate() + numberOfDaysToAdd);

            if (!jQuery.isEmptyObject(watherData)) {
                if (!jQuery.isEmptyObject(self.orderOfAttractionList)) {
                    $.each(self.orderOfAttractionList,
                        (key, value) => {

                            var currentDate = new Date(value.GroupDate);

                            $.each(watherData.dailyForecasts.forecastLocation.forecast,
                                (weatherKey, weatherValue) => {
                                    var currentDate = new Date(weatherValue.utcTime);

                                    if (this.taskDate(weatherValue.utcTime) === this.taskDate(value.GroupDate)) {
                                        $("#weather_" + recordCount).empty();
                                        $("#weather_" + recordCount)
                                            .prepend('<img alt="weather" src="' + weatherValue.iconLink + '" />');
                                        $("#weather_" + recordCount)
                                            .prepend('<span class="tooltiptext">' +
                                                "Description : " +
                                                weatherValue.description +
                                                "<br/>" +
                                                "Sky Description : " +
                                                weatherValue.skyDescription +
                                                "<br/>" +
                                                "High Temperature : " +
                                                weatherValue.highTemperature +
                                                "<br/>" +
                                                "Low Temperature : " +
                                                weatherValue.lowTemperature +
                                                "<br/>" +
                                                "Humidity : " +
                                                weatherValue.humidity +
                                                "<br/>" +
                                                "Rain Fall : " +
                                                weatherValue.rainFall +
                                                "<br/>" +
                                                "Snow Fall : " +
                                                weatherValue.snowFall +
                                                "<br/>" +
                                                "Wind Speed : " +
                                                weatherValue.windSpeed +
                                                "<br/>" +
                                                "UV : " +
                                                weatherValue.uvDesc +
                                                '</span>');

                                        return false;
                                    }
                                });


                        });
                }
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.watherData = watherData;
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            Error.prototype.logError("ControlerIndex",
                "weatherInfoUpdate",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public taskDate(inputDate: string) {
        try {
            var datemilli = Date.parse(inputDate);
            var d = (new Date(datemilli) + '').split(' ');
            d[2] = d[2] + ',';

            return [d[0], d[1], d[2], d[3]].join(' ');
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.inputDate = inputDate;
            Error.prototype.logError("ControlerIndex",
                "taskDate",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public tourInformation(divId: string, tourInformation: any, breakInformation: any) {
        try {
            var x = {
                "IsUserInterestedBreak": breakInformation.IsUserInterestedBreak,
                "IsUserInterestedDayBreak": breakInformation.IsUserInterestedDayBreak,
                "UpdateDayStartTime": breakInformation.UpdateDayStartTime,
                "UpdatedDinnerTime": breakInformation.UpdatedDinnerTime,
                "UpdatedLunchTime": breakInformation.UpdatedLunchTime,
                "IsUserInterestedLunchBreak": breakInformation.IsUserInterestedLunchBreak,
                "UpdatedBreakTime": breakInformation.UpdatedBreakTime,
                "UpdateDayEndTime": breakInformation.UpdateDayEndTime,
                "IsUserInterestedDinnerBreak": breakInformation.IsUserInterestedDinnerBreak,
                "RequestDate": breakInformation.RequestDate,
                "IsBreakAdded": breakInformation.IsBreakAdded,
                "BreakAttractionId": breakInformation.BreakAttractionId,
                "IsLunchAdded": breakInformation.IsLunchAdded,
                "LunchAttractionId": breakInformation.LunchAttractionId,
                "IsDinnerAdded": breakInformation.IsDinnerAdded,
                "DinnerAttractionId": breakInformation.DinnerAttractionId,
                "IsUserInterestedBreakFast": breakInformation.IsUserInterestedBreakFast,
                "UpdatedBreakFastTime": breakInformation.UpdatedBreakFastTime,
                "IsBreakFastAdded": breakInformation.IsBreakFastAdded,
                "BreakFastAttractionId": breakInformation.BreakFastAttractionId,
                "IsDayBreakAdded": breakInformation.IsDayBreakAdded,
                "DayBreakAttractionId": breakInformation.DayBreakAttractionId,
                "NoOfCars": breakInformation.NoOfCars,
                "AverageMileage": breakInformation.AverageMileage,
                "BreakExpense": breakInformation.BreakExpense,
                "BreakFastExpense": breakInformation.BreakFastExpense,
                "CarRentalExpense": breakInformation.CarRentalExpense,
                "DayBreakExpense": breakInformation.DayBreakExpense,
                "LunchExpense": breakInformation.LunchExpense,
                "NoOfRooms": breakInformation.NoOfRooms,
                "DinnerExpense": breakInformation.DinnerExpense,
                "IsNoOfCarsUserUpdated": breakInformation.IsNoOfCarsUserUpdated,
                "IsAverageMileageUserUpdated": breakInformation.IsAverageMileageUserUpdated,
                "IsCarRentalExpenseUserUpdated": breakInformation.IsCarRentalExpenseUserUpdated,
                "IsBreakFastExpenseUserUpdated": breakInformation.IsBreakFastExpenseUserUpdated,
                "IsLunchExpenseUserUpdated": breakInformation.IsLunchExpenseUserUpdated,
                "IsBreakExpenseUserUpdated": breakInformation.IsBreakExpenseUserUpdated,
                "IsDinnerExpenseUserUpdated": breakInformation.IsDinnerExpenseUserUpdated,
                "IsDayBreakExpenseUserUpdated": breakInformation.IsDayBreakExpenseUserUpdated,
                "IsNoOfRoomsUserUpdated": breakInformation.IsNoOfRoomsUserUpdated

            };


            let jsonObject: any = {
                "public_FilterAttractions": tourInformation,
                "breakInformation": x,
                "divId": divId
            };

            TourSchedule.prototype.tourInformation(jsonObject);

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.divId = divId;
            ControlerIndex.prototype.errorParameters.tourInformation = tourInformation;
            ControlerIndex.prototype.errorParameters.breakInformation = breakInformation;
            Error.prototype.logError("ControlerIndex",
                "tourInformation",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public googleMapStepMarks(data: any, recordCount: number) {
        try {
            let self: any = this.scope;
            let isFirst: boolean = true;
            let isBreakAdd: boolean = false;

            let markerdata: any = [];
            let index: number = 0;
            this.clearTravelStep();
            

            if (!jQuery.isEmptyObject(data)) {
                $.each(data,
                    (key, value) => {
                        
                        if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                            $.each(value.ListGetOrderOfAttractionVisit,
                                (googleKey, googleValue) => {
                                    

                                    if (googleValue.SourceLatitude !== null &&
                                        googleValue.SourceLongitude !== null &&
                                        googleValue.DestinationLatitude !== null &&
                                        googleValue.DestinationLongitude !== null
                                    ) {

                                        //If user select the Yes then we are reloading the map and opening the title window of map
                                        if (googleValue.RecordCount === recordCount) {

                                            $.each(value.DrivingSteps,
                                                function(stepKey, stepValue) {

                                                    if (stepValue.RecordCount === googleValue.RecordCount) {
                                                        var recordStepCounter = 1;
                                                        $.each(stepValue.DirectionSteps,
                                                            function(sKey, sValue) {

                                                                if (sValue.Distance_Value > 1000) {
                                                                    var stepTitle =
                                                                        "<span class='mapAttractionSideHeadign'>" +
                                                                            "Start Time: " +
                                                                            "</span>";
                                                                    stepTitle +=
                                                                        "<span class='mapAttractionSideText'>" +
                                                                        sValue.StartDateTime +
                                                                        "</span>";
                                                                    stepTitle += "<br/>";
                                                                    stepTitle +=
                                                                        "<span class='mapAttractionSideHeadign'>" +
                                                                        "End Time: " +
                                                                        "</span>";
                                                                    stepTitle +=
                                                                        "<span class='mapAttractionSideText'>" +
                                                                        sValue.EndDateTime +
                                                                        "</span>";
                                                                    stepTitle += "<br/>";
                                                                    stepTitle +=
                                                                        "<span class='mapAttractionSideHeadign'>" +
                                                                        "Distance Covered: " +
                                                                        "</span>";
                                                                    stepTitle +=
                                                                        "<span class='mapAttractionSideText'>" +
                                                                        sValue.DistanceCovered +
                                                                        "</span>";
                                                                    stepTitle += "<br/>";
                                                                    stepTitle +=
                                                                        "<span class='mapAttractionSideHeadign'>" +
                                                                        "Distance Covered Time: " +
                                                                        "</span>";
                                                                    stepTitle +=
                                                                        "<span class='mapAttractionSideText'>" +
                                                                        sValue.DistanceCoveredTime +
                                                                        "</span>";
                                                                    stepTitle += "<br/>";
                                                                    stepTitle +=
                                                                        "<span class='mapAttractionSideHeadign'>" +
                                                                        "Check Neary by Events <button type='button' onclick='mapStepBreakInfo(" +
                                                                        sValue.AttractionTravelStepsId +
                                                                        "," +
                                                                        sValue.OrderId +
                                                                        ")'>Yes</button>" +
                                                                        "</span>";

                                                                    markerdata = [];
                                                                    markerdata.lat = sValue.End_location_lat;
                                                                    markerdata.lng = sValue.End_location_lng;
                                                                    markerdata.title = recordStepCounter;
                                                                    markerdata.label = recordStepCounter.toString();
                                                                    markerdata.content = stepTitle;

                                                                    self.googleTravelStep.push(MapsActions.prototype
                                                                        .addMarderk(markerdata, self.googleMaps,true));

                                                                    recordStepCounter++;
                                                                }

                                                            });
                                                    }
                                                });

                                        }


                                        var sourceCoordinates = [];
                                        var destinatinoCoordinates = [];
                                        //Writing the PloyLine
                                        var path = [];
                                        if (googleValue.RecordCount === recordCount || recordCount === 0) {
                                            if (googleValue.TravelTimeSeconds > 0) {
                                                if (googleValue.IsNeedDrivningBreak) {

                                                    $.each(value.DrivingSteps,
                                                        (stepKey, stepValue) => {

                                                            if (stepValue.RecordCount === googleValue.RecordCount) {
                                                                $.each(stepValue.DirectionSteps,
                                                                    (sKey, sValue) => {

                                                                        sourceCoordinates = [];
                                                                        sourceCoordinates.push(
                                                                            sValue.Start_location_lat);
                                                                        sourceCoordinates.push(
                                                                            sValue.Start_location_lng);
                                                                        path.push(sourceCoordinates);

                                                                        destinatinoCoordinates = [];
                                                                        destinatinoCoordinates.push(sValue
                                                                            .End_location_lat);
                                                                        destinatinoCoordinates.push(sValue
                                                                            .End_location_lng);
                                                                        path.push(destinatinoCoordinates);
                                                                    });

                                                            }
                                                        });

                                                } else {
                                                    sourceCoordinates = [];
                                                    sourceCoordinates.push(googleValue.SourceLatitude);
                                                    sourceCoordinates.push(googleValue.SourceLongitude);
                                                    path.push(sourceCoordinates);

                                                    destinatinoCoordinates = [];
                                                    destinatinoCoordinates.push(googleValue.DestinationLatitude);
                                                    destinatinoCoordinates.push(googleValue.DestinationLongitude);
                                                    path.push(destinatinoCoordinates);
                                                }

                                                if (index === self.mapLineColor.length) {
                                                    index = 0;
                                                }
                                                if (path.length > 0) {
                                                    self.googleMapsLinesMarks.push(self.googleMaps
                                                        .drawPolyline({
                                                            path: path,
                                                            strokeColor: self.mapLineColor[index],
                                                            strokeOpacity: 0.6,
                                                            strokeWeight: 6
                                                        }));
                                                    index++;
                                                }
                                            }
                                        }


                                    }

                                });


                        }

                    });
            }


            $("#googleMaps").width("800px");
            $("#googleMaps").height("400px");
            $("#googleMaps").focus();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            Error.prototype.logError("ControlerIndex",
                "googleMapStepMarks",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    //not intereseted attraction capturing and stroing into the list
    public notIntereseted(attractionId: number) {
        try {
            let isExisted: boolean = false;
            $.each(this.scope.attractionInterestedList,
                (attractionKey, attractionValue) => {
                    if (attractionValue.AttractionsId === attractionId) {
                        //$scope.notInterestedList.push(attractionValue);
                        isExisted = true;
                        return false;
                    }
                });

            if (isExisted) {
                TourSchedule.prototype.deleteNotInterestedAttractionList(this, attractionId);
            } else {
                alert("Attraction not in the list selected");
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionId = attractionId;
            Error.prototype.logError("ControlerIndex",
                "notIntereseted",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public interested(attraction: any) {
        try {

            var isExisted = false;
            if (this.scope.attractionInterestedList !== null) {
                $.each(this.scope.attractionInterestedList,
                    (key, value) => {
                        if (value.AttractionsId === attraction.AttractionsId) {
                            isExisted = true;
                            return false;
                        }
                    }
                );
            }

            if (!isExisted) {
                TourSchedule.prototype.addInterestedAttractionList(this, attraction.AttractionsId);
            } else {
                alert("Attraction Already selected");
            }

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attraction = attraction;
            Error.prototype.logError("ControlerIndex",
                "interested",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    //editing the tour information
    public updateTourInformation(recordCount: number, updatedTime: any) {
        try {
            let isFound: boolean = false;
            $.each(this.scope.orderOfAttractionList,
                (recordKey, recordValue) => {
                    $.each(recordValue.ListGetOrderOfAttractionVisit,
                        (groupKey, groupValue) => {
                            if (groupValue.RecordCount === recordCount) {
                                groupValue.UpdatedTime = updatedTime;
                                groupValue.IsUpdatedViewTime = true;
                                isFound = true;
                                return false;
                            }
                        });
                    if (isFound) {
                        return false;
                    }
                });
            this.publicGetOrderOfAttractionVisit();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            ControlerIndex.prototype.errorParameters.updatedTime = updatedTime;
            Error.prototype.logError("ControlerIndex",
                "updateTourInformation",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }


    public categoryClick(categoryId: number) {
        try {
            $('div[relattr="cat_tab"]').hide();
            $('#cat_' + categoryId).show();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.categoryId = categoryId;
            Error.prototype.logError("ControlerIndex",
                "categoryClick",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public categoryFilter() {
        try {
            let self: any = this.scope;
            var tempFilterAttractionList = this.scope.filterAttractionList;
            this.scope.filterAttractionList = [];

            $(tempFilterAttractionList).filter((index) => {
                if (tempFilterAttractionList[index].AttractionName.toLowerCase()
                    .indexOf(self.categoryPlaceSearch.toLowerCase()) !==
                    -1) {
                    self.filterAttractionList.push(tempFilterAttractionList[index]);
                }
            });

            if ($("#placeSeachForAdding").val().length > 3 || $("#googleMapplaceSeachForAdding").val().length > 3) {

                TourSchedule.prototype.autoComplte(this,
                    ($("#placeSeachForAdding").val() === ''
                        ? $("#googleMapplaceSeachForAdding").val()
                        : $("#placeSeachForAdding").val()),self.countryId);
            }

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "categoryFilter",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public insertBreakInformation(attractionInfo: any) {
        try {
            let self: any = this.scope;
            var indexCounter = 0;
            $.each(self.updatedBreaks,
                (key, value) => {

                    if ($("#hdSelectedDivId").val() === value.divId) {
                        indexCounter = key;
                        return false;
                    }
                });


            switch ($("#hdSelectedBreakType").val()) {
            case "1":
            {
                self.updatedBreaks[indexCounter].IsBreakFastAdded = true;
                self.UpdatedBreaks[indexCounter].BreakFastAttractionId = attractionInfo.AttractionsId;
                break;
            }
            case "2":
            {
                self.updatedBreaks[indexCounter].IsLunchAdded = true;
                self.updatedBreaks[indexCounter].LunchAttractionId = attractionInfo.AttractionsId;
                break;
            }
            case "3":
            {
                self.updatedBreaks[indexCounter].IsBreakAdded = true;
                self.updatedBreaks[indexCounter].BreakAttractionId = attractionInfo.AttractionsId;
                break;
            }
            case "4":
            {
                self.updatedBreaks[indexCounter].IsDinnerAdded = true;
                self.updatedBreaks[indexCounter].DinnerAttractionId = attractionInfo.AttractionsId;
                break;
            }
            case "5":
            {
                self.updatedBreaks[indexCounter].IsDayBreakAdded = true;
                self.updatedBreaks[indexCounter].DayBreakAttractionId = attractionInfo.AttractionsId;
                break;
            }
            }

            $("#addingBreak")
                .dialog("close");

            this.publicGetOrderOfAttractionVisit();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionInfo = attractionInfo;
            Error.prototype.logError("ControlerIndex",
                "insertBreakInformation",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public breakInformationUpdate(divId: string) {
        try {
            let self: any = this.scope;
            let indexCounter: number = 0;
            $.each(self.updatedBreaks,
                (key, value) => {

                    if (divId === value.divId) {
                        indexCounter = key;
                        return false;
                    }
                });


            //$scope.UpdatedBreaks[indexCounter].IsUserInterestedDayBreak = $("#" + divId + "_IsUserInterestedDayBreak").prop('checked');
            self.updatedBreaks[indexCounter].UpdateDayEndTime =
                (jQuery.type($("#" + divId + "_UpdateDayEndTime").val()) === "undefined")
                ? "00:00:00"
                : $("#" + divId + "_UpdateDayEndTime").val();
            self.updatedBreaks[indexCounter].UpdateDayStartTime =
                (jQuery.type($("#" + divId + "_UpdateDayStartTime").val()) === "undefined")
                ? "00:00:00"
                : $("#" + divId + "_UpdateDayStartTime").val();
            self.updatedBreaks[indexCounter].IsUserInterestedLunchBreak =
                (jQuery.type($("#" + divId + "_IsUserInterestedLunchBreak").val()) === "undefined")
                ? false
                : $("#" + divId + "_IsUserInterestedLunchBreak").prop('checked');
            self.updatedBreaks[indexCounter].UpdatedLunchTime =
                (jQuery.type($("#" + divId + "_UpdatedLunchTime").val()) === "undefined")
                ? "00:00:00"
                : $("#" + divId + "_UpdatedLunchTime").val();
            self.updatedBreaks[indexCounter].IsUserInterestedBreak =
                (jQuery.type($("#" + divId + "_IsUserInterestedBreak").val()) === "undefined")
                ? false
                : $("#" + divId + "_IsUserInterestedBreak").prop('checked');
            self.updatedBreaks[indexCounter].UpdatedBreakTime =
                (jQuery.type($("#" + divId + "_UpdatedBreakTime").val()) === "undefined")
                ? "00:00:00"
                : $("#" + divId + "_UpdatedBreakTime").val();
            self.updatedBreaks[indexCounter].IsUserInterestedDinnerBreak =
                (jQuery.type($("#" + divId + "_IsUserInterestedDinnerBreak").val()) === "undefined")
                ? false
                : $("#" + divId + "_IsUserInterestedDinnerBreak").prop('checked');
            self.updatedBreaks[indexCounter].UpdatedDinnerTime =
                (jQuery.type($("#" + divId + "_UpdatedDinnerTime").val()) === "undefined")
                ? "00:00:00"
                : $("#" + divId + "_UpdatedDinnerTime").val();
            self.updatedBreaks[indexCounter].IsUserInterestedBreakFast =
                (jQuery.type($("#" + divId + "_IsUserInterestedBreakFast").val()) === "undefined")
                ? false
                : $("#" + divId + "_IsUserInterestedBreakFast").prop('checked');
            self.updatedBreaks[indexCounter].UpdatedBreakFastTime =
                (jQuery.type($("#" + divId + "_UpdatedBreakFast").val()) === "undefined")
                ? "00:00:00"
                : $("#" + divId + "_UpdatedBreakFast").val();


            this.publicGetOrderOfAttractionVisit();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.divId = divId;
            Error.prototype.logError("ControlerIndex",
                "breakInformationUpdate",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public dayExpenseInformationUpdate(divId: string, strId: string) {
        try {
            let self: any = this.scope;
            let indexCounter: number = 0;
            $.each(self.updatedBreaks,
                (key, value) => {

                    if (divId === value.divId) {
                        indexCounter = key;
                        return false;
                    }
                });

            switch (strId) {
            case divId + "_NoOfCars":
            {
                self.updatedBreaks[indexCounter].NoOfCars = $("#" + divId + "_NoOfCars").val();
                self.updatedBreaks[indexCounter].IsNoOfCarsUserUpdated = true;
                break;
            }
            case divId + "_AverageMileage":
            {
                self.updatedBreaks[indexCounter].AverageMileage = $("#" + divId + "_AverageMileage").val();
                self.updatedBreaks[indexCounter].IsAverageMileageUserUpdated = true;


                break;
            }
            case divId + "_CarRentalExpense":
            {
                self.updatedBreaks[indexCounter].CarRentalExpense = $("#" + divId + "_CarRentalExpense").val();
                self.updatedBreaks[indexCounter].IsCarRentalExpenseUserUpdated = true;
                break;
            }
            case divId + "_NoOfRooms":
            {
                self.updatedBreaks[indexCounter].NoOfRooms = $("#" + divId + "_NoOfRooms").val();
                self.updatedBreaks[indexCounter].IsNoOfRoomsUserUpdated = true;
                break;
            }
            case divId + "_DayBreakExpense":
            {
                self.updatedBreaks[indexCounter].DayBreakExpense = $("#" + divId + "_DayBreakExpense").val();
                self.updatedBreaks[indexCounter].IsDayBreakExpenseUserUpdated = true;
                break;
            }
            case divId + "_BreakFastExpense":
            {
                self.updatedBreaks[indexCounter].BreakFastExpense = $("#" + divId + "_BreakFastExpense").val();
                self.updatedBreaks[indexCounter].IsBreakFastExpenseUserUpdated = true;
                break;
            }
            case divId + "_LunchExpense":
            {
                self.updatedBreaks[indexCounter].LunchExpense = $("#" + divId + "_LunchExpense").val();
                self.updatedBreaks[indexCounter].IsLunchExpenseUserUpdated = true;
                break;
            }
            case divId + "_BreakExpense":
            {
                self.updatedBreaks[indexCounter].BreakExpense = $("#" + divId + "_BreakExpense").val();
                self.updatedBreaks[indexCounter].IsBreakExpenseUserUpdated = true;
                break;
            }
            case divId + "_DinnerExpense":
            {
                self.updatedBreaks[indexCounter].DinnerExpense = $("#" + divId + "_DinnerExpense").val();
                self.updatedBreaks[indexCounter].IsDinnerExpenseUserUpdated = true;
                break;
            }
            }
            this.publicGetOrderOfAttractionVisit();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.divId = divId;
            ControlerIndex.prototype.errorParameters.strId = strId;
            Error.prototype.logError("ControlerIndex",
                "dayExpenseInformationUpdate",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }


    public plannedTours(data: any) {

        try {
            
            let self: any = this.scope;

            self.countryId = data.CountryId;
            self.travelModeId = data.TravelModeId;
            self.startDate = data.StartDate;
            self.sourceAttractionID = data.SourceAttractionID;
            self.destinationAttractionID = data.DestinationAttractionID;
            $("#expense_Persons").val(data.NoOfPersons);
            $("#expense_Cars").val(data.NoOfCars);
            $("#expense_PerGallon").val(data.CarMileage);
            $("#expense_PerGallonPrice").val(data.FuelPrice);
            $("#autoStartLocation").val(data.SourceAttractionName);
            $("#autoDestinationLocation").val(data.DestinationAttractionName);
            $("#expense_DrivingBreak").val(data.DrivingBreak);

            //calling the auto complete for filling the city information
            TourSchedule.prototype.getCityList(this, this.scope.countryId);
            TourSchedule.prototype.userGetCityList(this);

            
            TourSchedule.prototype.userUserTripGetAttractions(this);
            TourSchedule.prototype.userRequestedBreaks(this);


            this.updateUserReqestOrder();
            TourSchedule.prototype.userGetUserStoredAttractinInfo(this);
            TourSchedule.prototype.userUserTripBuildStatus(this);


            

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "plannedTours",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }


    public getCityListBind(data: any) {
        try {
            let self: any = this.scope;
            let selfThis: any = this;
            let cityList: any = [];
            $.each(data,
                (cityKey, cityValue) => {


                    let item: any = [];
                    item.value = cityValue.CityName;
                    item.data = cityValue.CityId;
                    item.countryId = cityValue.CountryId;
                    cityList.push(item);

                });
            $('#autoCityName').autocomplete({
                source: cityList
            });


            $("#autoCityName").on("autocompleteselect",
                function(event, ui) {
                    //this will get the category list
                    self.selectedCityLabel = "";
                    self.$apply(() => {
                        self.countryId = ui.item.countryId;
                        self.cityId = ui.item.data;
                        self.selectedCityLabel = ui.item.label;
                        selfThis.getCategoryList();
                    });
                });
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "getCityListBind",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public userGetCityListBind(data: any) {
        try {
            
            let self: any = this.scope;
            self.$apply(() => {
                self.visitCityList = [];
                $.each(data,
                    (key, value) => {
                        let item: any = [];
                        item.countryId = value.CountryId;
                        item.cityId = value.CityId;
                        item.cityName = value.CityName;
                        item.recordIndex = value.RecordIndex;
                        self.visitCityList.push(item);
                    });
            });
            this.getCategoryList();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerIndex",
                "userGetCityListBind",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public buildExpenseInfo() {
        try {
            
            let self: any = this.scope;
            let attractionCount: number = 0;
            let distance: number = 0;
            let breakFastExpense: number = 0;
            let lunchExpense: number = 0;
            let breakExpense: number = 0;
            let dayBreakExpense: number = 0;
            let carRentalExpense: number = 0;
            let dinnerExpense: number = 0;
            let fuelExpense: number = 0;
            let totalExpense: number = 0;
            
            $.each(self.updatedBreaks,
                (key, value) => {
                    attractionCount = attractionCount + value.NoOfAttractions;
                    distance = distance + parseFloat(value.Distance > 0 ? 0 : value.Distance);
                    breakFastExpense = breakFastExpense + (value.BreakFastExpense * $("#expense_Persons").val());
                    lunchExpense = lunchExpense +
                        (value.LunchExpense * ($("#expense_Persons").val() <= 0 ? 1 : $("#expense_Persons").val()));
                    breakExpense = breakExpense + (value.BreakExpense * $("#expense_Persons").val());
                    dayBreakExpense = dayBreakExpense + (value.DayBreakExpense * value.NoOfRooms);
                    carRentalExpense = carRentalExpense + value.CarRentalExpense;
                    dinnerExpense = dinnerExpense + (value.DinnerExpense * $("#expense_Persons").val());
                });

            fuelExpense = (distance / $("#expense_PerGallon").val()) *
                $("#expense_Cars").val() *
                $("#expense_PerGallonPrice").val();

            totalExpense = breakFastExpense +
                lunchExpense +
                breakExpense +
                dayBreakExpense +
                carRentalExpense +
                dinnerExpense +
                fuelExpense;


            $("#expense_Days").html(self.updatedBreaks.length);
            $("#expense_AttractionsList").html(attractionCount.toString());
            $("#expense_Distance").html(parseFloat(distance.toString()).toFixed(2));
            $("#expense_BreakFastExpense").html(breakFastExpense.toString());
            $("#expense_LunchExpense").html(lunchExpense.toString());
            $("#expense_BreakExpense").html(breakExpense.toString());
            $("#expense_DinnerExpense").html(dinnerExpense.toString());
            $("#expense_DayExpense").html(dayBreakExpense.toString());
            $("#expense_RentalExpense").html(carRentalExpense.toString());
            $("#expense_FuelExpense").html(fuelExpense.toFixed(2));
            $("#expense_Expense").html(totalExpense.toFixed(2));

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};

            Error.prototype.logError("ControlerIndex",
                "buildExpenseInfo",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public addLunchDinnerBreak(breakType: any,
        attractionId: number,
        divId: string,
        sourceLongitude: string,
        sourceLatitude: string,
        attractionTravelStepsId: number) {
        try {
            this.scope.breakValue = [];

            this.scope.breakValue.breakType = breakType;
            this.scope.breakValue.attractionId = attractionId;
            this.scope.breakValue.divId = divId;
            this.scope.breakValue.sourceLongitude = sourceLongitude;
            this.scope.breakValue.sourceLatitude = sourceLatitude;
            this.scope.breakValue.attractionTravelStepsId = attractionTravelStepsId;
            this.breakAttractionCalling();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};

            Error.prototype.logError("ControlerIndex",
                "addLunchDinnerBreak",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public breakAttractionCalling() {
        try {

            this.scope.breakValue.distance = $("#breakDistance").val();
            TourSchedule.prototype.userGetNearestRestaruents(this, this.scope);


        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "breakAttractionCalling",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public extraCategorySelected(categoryList: any) {
        try {
            let self: any = this.scope;
            var isRecordFound = false;
            $.each(self.selectedExtraCategoryList,
                (categoryKey, categoryValue) => {
                    if (categoryValue["GoogleTypeID"] === categoryList.GoogleTypeID) {
                        isRecordFound = true;
                        self.selectedExtraCategoryList.splice(categoryKey, 1);
                        return false;
                    } else {
                        isRecordFound = false;
                    }
                });
            if (!isRecordFound) {
                let item: any = [];
                item.GoogleTypeID = categoryList.GoogleTypeID;
                item.CategoryName = categoryList.TypeName;
                self.selectedExtraCategoryList.push(item);
            }

            //This feature need fix and implment it later
            // User_InsertCategoryInformation($scope, $http);

            //it will filter with the selected attraction list
            this.extraCategorySelectedAttractionFilter();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.categoryList = categoryList;
            Error.prototype.logError("ControlerIndex",
                "extraCategorySelected",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public extraCategorySelectedAttractionFilter() {
        try {
            let self: any = this.scope;
            self.filterNearLocations = [];
            $(self.selectedExtraCategoryList).filter((index) => {
                $(self.nearLocations).filter((attractionIndex) => {
                    $.each(self.NearLocations[attractionIndex].AllCategoriesId,
                        (attKey, attValue) => {
                            if (self.selectedExtraCategoryList[index].GoogleTypeID ===
                                attValue) {
                                self.filterNearLocations.push(self.nearLocations[attractionIndex]);
                                return false;
                            }
                        });
                });
            });
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};

            Error.prototype.logError("ControlerIndex",
                "extraCategorySelectedAttractionFilter",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public imageSlideShow(attractionsId: number, attractionName: string) {
        try {
            let parameters: any = {};
            parameters.attractionId = attractionsId;
            parameters.countryId = this.scope.countryId;
            parameters.attractionName = attractionName;

            TourSchedule.prototype.attractionsPhotoInfo(this, parameters);
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionsId = attractionsId;
            ControlerIndex.prototype.errorParameters.attractionName = attractionName;
            Error.prototype.logError("ControlerIndex",
                "imageSlideShow",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public photoInfo(attractionId: number, data: any, attractionName: string) {
        try {
            let self: any = this.scope;

            self.images = [];
            self.currentIndex = 0;

            if (data.length > 0) {
                $("#photoSlideShow")
                    .dialog("open");
                var counter = 0;

                $.each(data,
                    (key, value) => {

                        let temp: any = [];
                        temp.src = value["PhotoURL"];
                        temp.id = counter;
                        counter = counter + 1;
                        temp.title = attractionName + ' - Pic ' + counter;
                        self.images.push(temp);
                    });
                this.displaySlideImage();


            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionId = attractionId;
            ControlerIndex.prototype.errorParameters.data = data;
            ControlerIndex.prototype.errorParameters.attractionName = attractionName;
            Error.prototype.logError("ControlerIndex",
                "photoInfo",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public displaySlideImage() {
        try {
            let self: any = this.scope;
            $.each(self.images,
                (key, value) => {
                    $("#photoSlideShow .slider .slide #" + value.id).hide();
                });

            $("#photoSlideShow .slider .slide #" + self.images[self.currentIndex].id).show();

            window.scrollTo(Constants.prototype.mouseX, Constants.prototype.mouseY);
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "displaySlideImage",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public next() {
        try {
            let self: any = this.scope;
            self.currentIndex < self.images.length - 1 ? self.currentIndex++ : self.currentIndex = 0;
            self.displaySlideImage();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "next",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public prev() {
        try {
            let self: any = this.scope;
            self.currentIndex > 0 ? self.currentIndex-- : self.currentIndex = self.images.length - 1;
            self.displaySlideImage();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "prev",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public categoriesTabClick() {
        try {
            let self: any = this.scope;
            
            this.clickMainCategorySelected(self.masterCategoryList[0].CategoryId);
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "categoriesTabClick",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }


    public tripInfoUpdate() {
        try {
            let self: any = this.scope;
            let temp: any = {
                NoOfPersons: $("#expense_Persons").val(),
                NoOfCars: $("#expense_Cars").val(),
                CarMileage: $("#expense_PerGallon").val(),
                FuelPrice: $("#expense_PerGallonPrice").val(),
                DrivingBreak: $("#expense_DrivingBreak").val()
            };
            TourExpenses.prototype.userUserTripUpdate(this, temp);


            this.buildExpenseInfo();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "tripInfoUpdate",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public ignoreMyExpenseChanges(divId: string) {
        try {
            let self: any = this.scope;
            let indexCounter: number = 0;
            $.each(self.updatedBreaks,
                (key, value) => {

                    if (divId === value.divId) {
                        indexCounter = key;
                        return false;
                    }
                });

            self.updatedBreaks[indexCounter].IsNoOfCarsUserUpdated = false;
            self.updatedBreaks[indexCounter].IsAverageMileageUserUpdated = false;
            self.updatedBreaks[indexCounter].IsCarRentalExpenseUserUpdated = false;
            self.updatedBreaks[indexCounter].IsBreakFastExpenseUserUpdated = false;
            self.updatedBreaks[indexCounter].IsLunchExpenseUserUpdated = false;
            self.updatedBreaks[indexCounter].IsBreakExpenseUserUpdated = false;
            self.updatedBreaks[indexCounter].IsDinnerExpenseUserUpdated = false;
            self.updatedBreaks[indexCounter].IsDayBreakExpenseUserUpdated = false;
            self.updatedBreaks[indexCounter].IsNoOfRoomsUserUpdated = false;
            this.publicGetOrderOfAttractionVisit();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.divId = divId;
            Error.prototype.logError("ControlerIndex",
                "ignoreMyExpenseChanges",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public searchAutoComplete() {
        try {
            let self: any = this.scope;

            if ($("#autoStartLocation").val().length > 3) {
                TourSchedule.prototype.autoComplte(this, $("#autoStartLocation").val(),self.countryId);
            }

            if ($("#autoDestinationLocation").val().length > 3) {
                TourSchedule.prototype.autoComplte(this, $("#autoDestinationLocation").val(), self.countryId);
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "searchAutoComplete",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public tourInfoUpdate(autoCompleteInfo:IAutoCompleteSubmit) {
        try {
            let self: any = this.scope;
           
            
            autoCompleteInfo.startTime = self.startTime;
            autoCompleteInfo.startDate = self.startDate;
            autoCompleteInfo.countryId = self.countryId;
            TourSchedule.prototype.userRequestedAttraction(this, autoCompleteInfo);


        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.autoCompleteInfo = JSON.stringify(autoCompleteInfo);
            
            Error.prototype.logError("ControlerIndex",
                "tourInfoUpdate",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }


    public breakAttractionCallingAutoComplete() {
        try {
            let self: any = this.scope;

            let data: any = {};
            data.address = $("#autoAddAttractionForBreak").val();
            data.latitude = $("#hdSourceLatitude").val();
            data.longitude = $("#hdSourceLongitude").val();
            data.distance = $("#breakDistance").val();
            TourSchedule.prototype.autoComplte(this, $("#autoAddAttractionForBreak").val(), self.countryId);

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "breakAttractionCallingAutoComplete",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public viewTimeUpdate(attractionId: number, viewTime: string) {
        try {
            let self: any = this.scope;

            let indexCounter: number = 0;
            let recordExist: boolean = false;
            let recordValue: any = [];
            recordValue.StayTime = viewTime;

            $.each(self.userRequestedOrder,
                (key, value) => {

                    if (attractionId === value.AttractionId) {

                        recordValue.AttractionId = value.AttractionId;
                        recordValue.OrderNumber = value.OrderNumber;
                        recordValue.IsRequestedAfterBreakFast = value.IsRequestedAfterBreakFast;
                        recordValue.IsRequestedAfterLunch = value.IsRequestedAfterLunch;
                        recordValue.IsRequestedAfterBreak = value.IsRequestedAfterBreak;
                        recordValue.IsRequestedAfterDinner = value.IsRequestedAfterDinner;
                        indexCounter = key;
                        recordExist = true;
                        return false;
                    }
                });

            if (recordExist) {
                self.userRequestedOrder.splice(indexCounter, 1);

            } else {
                recordValue.AttractionId = attractionId;
                recordValue.OrderNumber = 0;
                recordValue.IsRequestedAfterBreakFast = false;
                recordValue.IsRequestedAfterLunch = false;
                recordValue.IsRequestedAfterBreak = false;
                recordValue.IsRequestedAfterDinner = false;
            }

            self.userRequestedOrder.push(recordValue);


            this.updateTourInfoForCustomChanges();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionId = attractionId;
            ControlerIndex.prototype.errorParameters.viewTime = viewTime;
            Error.prototype.logError("ControlerIndex",
                "viewTimeUpdate",
                ControlerIndex.prototype.errorParameters,
                e);
        }

    }


    public isOrderUpdated(destinationAttractionId: number,
        recordCount: number,
        isUp: boolean,
        breakInformationId: number) {
        try {
            let self: any = this.scope;


            let indexCounter: number = 0;
            let recordExist: boolean = false;
            let recordValue: any = [];

            $.each(self.UserRequestedOrder,
                (key, value) => {

                    if (destinationAttractionId === value.AttractionId) {

                        recordValue.AttractionId = value.AttractionId;
                        recordValue.StayTime = value.StayTime;
                        recordValue.OrderNumber = value.OrderNumber;
                        recordValue.IsRequestedAfterBreakFast = value.IsRequestedAfterBreakFast;
                        recordValue.IsRequestedAfterLunch = value.IsRequestedAfterLunch;
                        recordValue.IsRequestedAfterBreak = value.IsRequestedAfterBreak;
                        recordValue.IsRequestedAfterDinner = value.IsRequestedAfterDinner;
                        indexCounter = key;
                        recordExist = true;
                        return false;
                    }
                });

            if (recordExist) {
                self.userRequestedOrder.splice(indexCounter, 1);

            } else {
                recordValue.AttractionId = destinationAttractionId;
                recordValue.OrderNumber = recordCount;
                recordValue.IsRequestedAfterBreakFast = false;
                recordValue.IsRequestedAfterLunch = false;
                recordValue.IsRequestedAfterBreak = false;
                recordValue.IsRequestedAfterDinner = false;
            }


            switch (breakInformationId) {
            case 1:
            {
                recordValue.IsRequestedAfterBreakFast = true;
                break;
            }
            case 2:
            {
                recordValue.IsRequestedAfterLunch = true;
                break;
            }
            case 3:
            {
                recordValue.IsRequestedAfterBreak = true;
                break;
            }
            case 4:
            {
                recordValue.IsRequestedAfterDinner = true;
                break;
            }
            default:
            {
                if (isUp) {
                    recordValue.OrderNumber = recordCount + 1;
                } else {
                    recordValue.OrderNumber = recordCount - 1;
                }
                break;
            }
            }

            self.userRequestedOrder.push(recordValue);


            this.updateTourInfoForCustomChanges();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.destinationAttractionId = destinationAttractionId;
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            ControlerIndex.prototype.errorParameters.isUp = isUp;
            ControlerIndex.prototype.errorParameters.breakInformationId = breakInformationId;
            Error.prototype.logError("ControlerIndex",
                "isOrderUpdated",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public updateTourInfoForCustomChanges() {
        try {
            let self: any = this.scope;
            let attractionRequestOrder: any = [];
            $.each(self.userRequestedOrder,
                (orderKey, orderValue) => {


                    let temp: any = {};
                    temp.AttractionId = orderValue.AttractionId;
                    temp.OrderNumber = orderValue.OrderNumber;
                    temp.BreakInformationId = orderValue.BreakInformationId;
                    if (jQuery.type(orderValue.StayTime) !== "undefined") {
                        temp.StayTime = orderValue.StayTime;
                    } else {
                        temp.StayTime = "00:00";
                    }
                    temp.IsRequestedAfterBreakFast = orderValue.IsRequestedAfterBreakFast;
                    temp.IsRequestedAfterLunch = orderValue.IsRequestedAfterLunch;
                    temp.IsRequestedAfterBreak = orderValue.IsRequestedAfterBreak;
                    temp.IsRequestedAfterDinner = orderValue.IsRequestedAfterDinner;
                    attractionRequestOrder.push(temp);

                });
            TourSchedule.prototype.insertUserRequested(this, attractionRequestOrder);


        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "updateTourInfoForCustomChanges",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public updateTrouInfo() {
        try {
            this.publicGetOrderOfAttractionVisit();

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "updateTrouInfo",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public mapBreakInfo(recordCount: number) {
        try {
            let self: any = this.scope;
            
        //$scope.OrderOfAttractionList
            if (recordCount === 0)
                this.googleMapMarks(self.orderOfAttractionList, true);
            else {
                this.googleMapStepMarks(self.orderOfAttractionList, recordCount);
            }
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            Error.prototype.logError("ControlerIndex",
                "mapBreakInfo",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public addingAttractionInformation() {
        try {
            var parameter = $(this).data("recordCounter");


            this.updateTourInformation(parameter, $("#ViewTime").val());

            $(this).dialog("close");
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "addingAttractionInformation",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public tabClicked(tabName) {
        try {
            GlobalVaraibles.tabname = tabName;
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.tabName = tabName;
            Error.prototype.logError("ControlerIndex",
                "tabClicked",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

    public clearMapsInfo() {
        try {
            let self: any = this.scope;
            self.googleMaps.removeMarkers(self.googleMapsStepMarks);
            self.googleMaps.removeMarkers(self.googleMapsMainMarks);
            self.googleMaps.removeMarkers(self.googleTravelStep);
            self.googleMaps.removePolylines();
            self.googleMapsStepMarks = [];
            self.googleMapsMainMarks = [];
            self.googleTravelStep = [];
            self.googleMaps.removeOverlays();
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "clearMapsInfo",
                ControlerIndex.prototype.errorParameters,
                e);
        }   
    }

    public clearTravelStep() {
        try {
            let self: any = this.scope;
            self.googleMaps.removeMarkers(self.googleTravelStep);
            self.googleTravelStep = [];
            self.googleMaps.removeMarkers(self.googleMapsStepMarks);
            self.googleMapsStepMarks = [];
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "clearTravelStep",
                ControlerIndex.prototype.errorParameters,
                e);
        } 
    }
    public clearMarks() {
        try {
            let self: any = this.scope;
            self.googleMaps.removeMarkers(self.googleMapsStepMarks);
            self.googleMapsStepMarks = [];
        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error.prototype.logError("ControlerIndex",
                "clearMarks",
                ControlerIndex.prototype.errorParameters,
                e);
        } 
    }


    public dayStartInformationUpdate(requestDate: string, requestTime: string) {
        
        try {
            let self: any = this.scope;
            self.startTime = requestTime;
            let parameters: any = {};
            parameters.data = "";
            parameters.isSource = 6;
            parameters.googleSearchText = "";
            parameters.breakType = 0;
            parameters.breakDate = "";
            parameters.startTime = self.startTime;
            parameters.countryId = self.countryId;
            parameters.StartDate = self.startDate;
            TourSchedule.prototype.userRequestedAttraction(this, parameters);

        } catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.requestDate = requestDate;
            ControlerIndex.prototype.errorParameters.requestTime = requestTime;
            Error.prototype.logError("ControlerIndex",
                "dayStartInformationUpdate",
                ControlerIndex.prototype.errorParameters,
                e);
        }
    }

}