//Get Category List
function GetCategoryList(angularScope, http) {
    
    $.ajax({
        type: "GET",
        url: '/Schedule/GetCategoryList',
        dataType: "json",
        beforeSend: function () {
            
        },
        success: function (data) {
            angularScope.$apply(function () {                
                $(".ngCategorytable").show();
                angularScope.CategoryList = data;
                angularScope.ClickMainCategorySelected(angularScope.MainCategorySelected);
            });

            //inserting the categoryid into the global varaible
            //$.each(data, function (categoryKey, categoryValue) {
            //    item = [];
            //    item.CategoryID = categoryValue["CategoryId"];
            //    item.CategoryName = categoryValue.CategoryName;
            //    selectedCategoryList.push(item);
            //});

            //It will get the all the attractions information
            PublicFilterAttractions(angularScope, http);
            
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
        url: '/Schedule/GetMasterCategory',
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
    $.each(selectedCategoryList, function (i, obj) {
        if (!isFirst)
        {
            newArr += ",";
            newArr += obj.CategoryId + "~" + obj.CategoryName;
        }
        else
        {
            isFirst = false;
            newArr = obj.CategoryId + "~" + obj.CategoryName;
        }
        
    });
    var cityId = 0;
    var countryId = 0;
    if (angularScope.countryId > 0 && angularScope.cityId > 0) {
        cityId = angularScope.cityId;
        countryId = angularScope.countryId;
    } else {
        cityId = $("#autoCityName").data().uiAutocomplete.selectedItem.data;
        countryId = $("#autoCityName").data().uiAutocomplete.selectedItem.countryId;
        angularScope.cityId = cityId;
        angularScope.countryId = countryId;
    }


    var cityVisitList = [];
    
    var isCityFount = false;
    $.each(angularScope.VisitCityList,
        function (key, value) {
            var subListValue = {};
            if (value.cityId === cityId) {
                isCityFount = true;
            }
            debugger;
            subListValue.RecordIndex = value.recordIndex;
            subListValue.CityId = value.cityId;
            cityVisitList.push(subListValue);

        });
    if (!isCityFount) {
        var subListValue = {};
        subListValue.RecordIndex = (angularScope.VisitCityList.length == null ? 0 : angularScope.VisitCityList.length) +
            1;
        subListValue.CityId = cityId;
        cityVisitList.push(subListValue);
    } 
    


    var jsonObject = { "countryId": countryId, "cityVisitList": cityVisitList };

    
   


    $.ajax({
        type: "POST",
        url: '/Schedule/Public_FilterAttractions',
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
            temp.RequestDate = value.RequestDate;
            temp.UpdateDayEndTime = convertTo24Hour(value.UpdateDayEndTime);
            temp.UpdateDayStartTime = convertTo24Hour(value.UpdateDayStartTime);
            temp.IsUserInterestedLunchBreak = value.IsUserInterestedLunchBreak;
            temp.UpdatedLunchTime = convertTo24Hour(value.UpdatedLunchTime);
            temp.UpdatedLunchMinimumTime = value.UpdatedLunchMinimumTime;
            temp.IsUserInterestedBreak = value.IsUserInterestedBreak;
            temp.UpdatedBreakTime = convertTo24Hour(value.UpdatedBreakTime);
            temp.UpdatedBreakMinimumTime = value.UpdatedBreakMinimumTime;
            temp.IsUserInterestedDinnerBreak = value.IsUserInterestedDinnerBreak;
            temp.UpdatedDinnerTime = convertTo24Hour(value.UpdatedDinnerTime);
            temp.UpdateDinnerMinimumTime = value.UpdateDinnerMinimumTime;
            updatedBreaks.push(temp);
        });


    debugger;
    
    var jsonObject = {
        "TravelModeId": angularScope.TravelModeId,
        "SourceAttractionID": angularScope.SourceAttractionID,
        "DestinationAttractionID": angularScope.DestinationAttractionID,
        "AttractionID": angularScope.AttractionID,
        "StartDate": angularScope.StartDate,
        "StartTime": angularScope.StartTime,
        "ListGroupWithDateAttractions": OrderOfAttractionListTemp,
        "CountryId": angularScope.countryId,
        "UpdatedBreaks": updatedBreaks
    };
    var parameter = JSON.stringify(jsonObject);
    
     
    
    $.ajax({
        type: "POST",
        url: '/Schedule/Public_GetOrderOfAttractionVisit',
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
function TourInformation(divId,tourInformation,breakInformation) {
    

    var x = {
        "RequestDate": breakInformation.RequestDate,
        "IsUserInterestedDayBreak": breakInformation.IsUserInterestedDayBreak,
        "UpdateDayEndTime": breakInformation.UpdateDayEndTime,
        "UpdateDayStartTime": breakInformation.UpdateDayStartTime,
        "IsUserInterestedLunchBreak": breakInformation.IsUserInterestedLunchBreak,
        "UpdatedLunchTime": breakInformation.UpdatedLunchTime,
        "UpdatedLunchMinimumTime": breakInformation.UpdatedLunchMinimumTime,
        "IsUserInterestedBreak": breakInformation.IsUserInterestedBreak,
        "UpdatedBreakTime": breakInformation.UpdatedBreakTime,
        "UpdatedBreakMinimumTime": breakInformation.UpdatedBreakMinimumTime,
        "IsUserInterestedDinnerBreak": breakInformation.IsUserInterestedDinnerBreak,
        "UpdatedDinnerTime": breakInformation.UpdatedDinnerTime,
        "UpdateDinnerMinimumTime": breakInformation.UpdateDinnerMinimumTime
    };


    
    var jsonObject = { "public_FilterAttractions": tourInformation, "breakInformation": x, "divId": divId };
    //var jsonBrak = ;
    $.ajax({
        type: "POST",
        url: '/UserControls/TourInformation',
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