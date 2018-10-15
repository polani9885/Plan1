//Get Category List
function GetCategoryList(angularScope, http) {
    
    $.ajax({
        type: "GET",
        url: localUrl + 'Schedule/GetCategoryList',
        dataType: "json",
        beforeSend: function () {
            
        },
        success: function (data) {
            angularScope.$apply(function () {                
                $(".ngCategorytable").show();
                angularScope.CategoryList = data;
            });
            
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            
        }
    });
}


function GetMasterCategory(angularScope, http) {

    $.ajax({
        type: "GET",
        url: localUrl + 'Schedule/GetMasterCategory',
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {
            angularScope.$apply(function () {
                angularScope.MasterCategoryList = data;
                angularScope.ClickMainCategorySelected(data[0].CategoryId);
            });
            GetCategoryList(angularScope, http);

        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}


function PublicFilterAttractions(angularScope, http) {
    
    var newArr;
    var isFirst = true;
    $("#travelBasic").show();

    if (selectedCategoryList.length > 0) {
        $.each(selectedCategoryList,
            function(i, obj) {
                if (!isFirst) {
                    newArr += ",";
                    newArr += obj.CategoryId + "~" + obj.CategoryName;
                } else {
                    isFirst = false;
                    newArr = obj.CategoryId + "~" + obj.CategoryName;
                }

            });
    }
    
    var countryId = angularScope.countryId;
    


    var cityVisitList = [];
    
    
    if (angularScope.VisitCityList.length > 0) {
        $.each(angularScope.VisitCityList,
            function(key, value) {
                var subListValue = {};

                subListValue.RecordIndex = value.recordIndex;
                subListValue.CityId = value.cityId;
                cityVisitList.push(subListValue);

            });
    }


    var jsonObject = {
        "countryId": countryId,
        "cityVisitList": cityVisitList,
        "MainCategorySelected": angularScope.MainCategorySelected
    };

    
   


    $.ajax({
        type: "POST",
        url: localUrl + 'Schedule/Public_FilterAttractions',
        data: JSON.stringify(jsonObject),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        beforeSend: function () {

        },
        success: function (data) {
            if (data.length > 0) {
                angularScope.$apply(function() {
                    angularScope.CitySelected(data);
                });
            }
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function Public_GetOrderOfAttractionVisit(angularScope, http) {
    
    
    var OrderOfAttractionListTemp = [];
    var OrderOfAttractionListTempSub = {};
    
    $.each(angularScope.OrderOfAttractionList,
        function (key, value) {

            OrderOfAttractionListTempSub.GroupDate =  value.GroupDate;
            OrderOfAttractionListTempSub.ListGetOrderOfAttractionVisit = [];
            counterCount = 0;
            $.each(value.ListGetOrderOfAttractionVisit,
                function(subKey, subValue) {
                    var subListValue = {};
                    subListValue.SourceAttractionId = subValue.SourceAttractionId;
                    subListValue.DestinationAttractionId = subValue.DestinationAttractionId;
                    //subListValue.Distance = subValue.Distance;
                    //subListValue.TravelTime = subValue.TravelTime;
                    //subListValue.TravelModeId = subValue.TravelModeId;
                    //subListValue.SourceAttractionName = subValue.SourceAttractionName;
                    //subListValue.DestinationAttractionName = subValue.DestinationAttractionName;
                    //subListValue.DateAndTime = subValue.DateAndTime;
                    //subListValue.ReachTime = subValue.ReachTime;
                    //subListValue.TimeRequiredToView = subValue.TimeRequiredToView;
                    //subListValue.ViewTime = subValue.ViewTime;
                    //subListValue.TravelType = subValue.TravelType;
                    //subListValue.SourceIcon = subValue.SourceIcon;
                    //subListValue.DestinationIcon = subValue.DestinationIcon;
                    //subListValue.RecordCount = subValue.RecordCount;
                    //subListValue.IsOrderUpdated = subValue.IsOrderUpdated;
                    //subListValue.UpdatedOrder = subValue.UpdatedOrder;
                    //subListValue.IsUpdatedViewTime = subValue.IsUpdatedViewTime;
                    //subListValue.UpdatedTime = subValue.UpdatedTime;
                    //subListValue.IsPersonalRequest = subValue.IsPersonalRequest;

                    OrderOfAttractionListTempSub.ListGetOrderOfAttractionVisit.push(subListValue);
                    
                });
            
            OrderOfAttractionListTemp.push(OrderOfAttractionListTempSub);

        });

    var updatedBreaks = [];

    $.each(angularScope.UpdatedBreaks,
        function(key, value) {
            var temp = {};
            temp.IsUserInterestedBreak = value.IsUserInterestedBreak;
            temp.IsUserInterestedDayBreak = value.IsUserInterestedDayBreak;
            temp.UpdateDayStartTime = convertTo24Hour(value.UpdateDayStartTime);
            temp.UpdatedDinnerTime = convertTo24Hour(value.UpdatedDinnerTime);
            temp.UpdatedLunchTime = convertTo24Hour(value.UpdatedLunchTime);
            temp.IsUserInterestedLunchBreak = value.IsUserInterestedLunchBreak;
            temp.UpdatedBreakTime = convertTo24Hour(value.UpdatedBreakTime);
            temp.UpdateDayEndTime = convertTo24Hour(value.UpdateDayEndTime);
            temp.IsUserInterestedDinnerBreak = value.IsUserInterestedDinnerBreak;
            temp.RequestDate = value.RequestDate;
            temp.IsBreakAdded = value.IsBreakAdded;
            temp.BreakAttractionId = value.BreakAttractionId;
            temp.IsLunchAdded = value.IsLunchAdded;
            temp.LunchAttractionId = value.LunchAttractionId;
            temp.IsDinnerAdded = value.IsDinnerAdded;
            temp.DinnerAttractionId = value.DinnerAttractionId;
            temp.IsUserInterestedBreakFast = value.IsUserInterestedBreakFast;
            temp.UpdatedBreakFastTime = convertTo24Hour(value.UpdatedBreakFastTime);
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


    
    
    var jsonObject = {
        "TravelModeId": angularScope.TravelModeId,
        "AttractionID": angularScope.AttractionID,
        "ListGroupWithDateAttractions": OrderOfAttractionListTemp,
        "CountryId": angularScope.countryId,
        "UpdatedBreaks": updatedBreaks
    };
    var parameter = JSON.stringify(jsonObject);
    
     
    
    $.ajax({
        type: "POST",
        url: localUrl + 'Schedule/Public_GetOrderOfAttractionVisit',
        data: parameter,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
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


//Gettigng the attraction information
function TourInformation(divId, tourInformation, breakInformation) {


    var x = {
        "IsUserInterestedBreak" : breakInformation.IsUserInterestedBreak,
    "IsUserInterestedDayBreak" : breakInformation.IsUserInterestedDayBreak,
    "UpdateDayStartTime" : breakInformation.UpdateDayStartTime,
    "UpdatedDinnerTime" : breakInformation.UpdatedDinnerTime,
    "UpdatedLunchTime" : breakInformation.UpdatedLunchTime,
    "IsUserInterestedLunchBreak" : breakInformation.IsUserInterestedLunchBreak,
    "UpdatedBreakTime" : breakInformation.UpdatedBreakTime,
    "UpdateDayEndTime" : breakInformation.UpdateDayEndTime,
    "IsUserInterestedDinnerBreak" : breakInformation.IsUserInterestedDinnerBreak,
    "RequestDate" : breakInformation.RequestDate,
    "IsBreakAdded" : breakInformation.IsBreakAdded,
    "BreakAttractionId" : breakInformation.BreakAttractionId,
    "IsLunchAdded" : breakInformation.IsLunchAdded,
    "LunchAttractionId" : breakInformation.LunchAttractionId,
    "IsDinnerAdded" : breakInformation.IsDinnerAdded,
    "DinnerAttractionId" : breakInformation.DinnerAttractionId,
    "IsUserInterestedBreakFast" : breakInformation.IsUserInterestedBreakFast,
    "UpdatedBreakFastTime" : breakInformation.UpdatedBreakFastTime,
    "IsBreakFastAdded" : breakInformation.IsBreakFastAdded,
    "BreakFastAttractionId" : breakInformation.BreakFastAttractionId,
    "IsDayBreakAdded" : breakInformation.IsDayBreakAdded,
    "DayBreakAttractionId" : breakInformation.DayBreakAttractionId,
    "NoOfCars" : breakInformation.NoOfCars,
    "AverageMileage" : breakInformation.AverageMileage,
    "BreakExpense" : breakInformation.BreakExpense,
    "BreakFastExpense" : breakInformation.BreakFastExpense,
    "CarRentalExpense" : breakInformation.CarRentalExpense,
    "DayBreakExpense" : breakInformation.DayBreakExpense,
    "LunchExpense" : breakInformation.LunchExpense,
    "NoOfRooms" : breakInformation.NoOfRooms,
    "DinnerExpense" : breakInformation.DinnerExpense,
    "IsNoOfCarsUserUpdated" : breakInformation.IsNoOfCarsUserUpdated,
    "IsAverageMileageUserUpdated" : breakInformation.IsAverageMileageUserUpdated,
    "IsCarRentalExpenseUserUpdated" : breakInformation.IsCarRentalExpenseUserUpdated,
    "IsBreakFastExpenseUserUpdated" : breakInformation.IsBreakFastExpenseUserUpdated,
    "IsLunchExpenseUserUpdated" : breakInformation.IsLunchExpenseUserUpdated,
    "IsBreakExpenseUserUpdated" : breakInformation.IsBreakExpenseUserUpdated,
    "IsDinnerExpenseUserUpdated" : breakInformation.IsDinnerExpenseUserUpdated,
    "IsDayBreakExpenseUserUpdated" : breakInformation.IsDayBreakExpenseUserUpdated,
    "IsNoOfRoomsUserUpdated" : breakInformation.IsNoOfRoomsUserUpdated

    };

    
    
    var jsonObject = { "public_FilterAttractions": tourInformation, "breakInformation": x, "divId": divId };
    //var jsonBrak = ;
    $.ajax({
        type: "POST",
        url: localUrl + 'UserControls/TourInformation',
        data: JSON.stringify(jsonObject),
        dataType: "html",
        contentType: "application/json; charset=utf-8",
        beforeSend: function () {

        },
        success: function (data) {
            $("#" + divId).empty();
            $("#" + divId).append(data);            
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function GetExtraCategoryList(angularScope, http) {

    $.ajax({
        type: "GET",
        url: localUrl + 'Schedule/GetExtraCategoryList',
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {
            angularScope.$apply(function () {
                angularScope.ExtraCategoryList = data;
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}


function AttractionsPhotoInfo(angularScope, http, attractionId, attractionName) {

    $.ajax({
        type: "GET",
        url: localUrl + 'Schedule/AttractionsPhotoInfo',
        dataType: "json",
        data:{attractionId:attractionId, countryId: angularScope.countryId},
        beforeSend: function () {

        },
        aync:false,
        success: function (data) {
            
            angularScope.$apply(function () {
                angularScope.PhotoInfo(attractionId, data, attractionName);
            });
        },
        error: function (result) {
            //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function GetBreakInformation(angularScope, http) {

    $.ajax({
        type: "GET",
        url: localUrl + 'Schedule/GetBreakInformation',
        dataType: "json",
        beforeSend: function () {

        },
        aync: false,
        success: function (data) {
            
            
            angularScope.$apply(function () {
                angularScope.UpdateDayEndTime = convertTo12Hour("22:00:00");
                angularScope.UpdateDayStartTime = convertTo12Hour("09:00:00");

                $.each(data,
                    function (key, value) {
                        
                        if (value.Display === "Break Fast") {
                            angularScope.UpdatedBreakFastTime = convertTo12Hour(value.StartTime);
                        }
                        if (value.Display === "Lunch Time") {
                            angularScope.UpdatedLunchTime = convertTo12Hour(value.StartTime);
                        }
                        if (value.Display === "Break Time") {
                            angularScope.UpdatedBreakTime = convertTo12Hour(value.StartTime);
                        }
                        if (value.Display === "Dinner Time") {
                            angularScope.UpdatedDinnerTime = convertTo12Hour(value.StartTime);
                        }
                    });
            });
        },
        error: function (result) {
            //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}