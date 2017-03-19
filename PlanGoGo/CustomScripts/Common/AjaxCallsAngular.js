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


function PublicFilterAttractions(angularScope, http) {
    
    var newArr;
    var isFirst = true;
    $("#travelBasic").show();
    $.each(selectedCategoryList, function (i, obj) {
        if (!isFirst)
        {
            newArr += ",";
            newArr += [obj.CategoryId + "~" + obj.CategoryName];
        }
        else
        {
            isFirst = false;
            newArr = [obj.CategoryId + "~" + obj.CategoryName];
        }
        
    });        
    
    var jsonObject = { "enterLocationName": $("#autoCityName").val(), "categoryList": newArr };
    $.ajax({
        type: "POST",
        url: '/Schedule/Public_FilterAttractions',
        data: JSON.stringify(jsonObject),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        beforeSend: function () {

        },
        success: function (data) {
            angularScope.$apply(function () {
                angularScope.CitySelected(data);                
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function Public_GetOrderOfAttractionVisit(angularScope, http) {
    debugger;
    var jsonObject = {
        "TravelModeId": angularScope.TravelModeId,
        "SourceAttractionID": angularScope.SourceAttractionID,
        "DestinationAttractionID": angularScope.DestinationAttractionID,
        "AttractionID": angularScope.AttractionID,
        "StartDate": angularScope.StartDate,
        "StartTime": angularScope.StartTime,
        "ListGroupWithDateAttractions": angularScope.OrderOfAttractionList
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
function TourInformation(divId,tourInformation)
{
    
    var jsonObject = { "public_FilterAttractions": tourInformation };
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