
var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);
appPlanGoGo.controller('controlerIndex', function ($scope, $http) {
    
    $scope.CategoryList = [];
    $scope.MasterCategoryList = [];
    $scope.TravelModeId;
    $scope.SourceAttractionID;
    $scope.DestinationAttractionID;
    $scope.AttractionID;
    $scope.StartDate;
    $scope.StartTime;
    $scope.attractionList = [];
    $scope.attractionListAutoComplete = [];
    $scope.notInterestedList = [];
    $scope.countryId = 0;
    $scope.cityId = 0;

    $scope.OrderOfAttractionList = [];



    //GetCategoryList($scope, $http);

    $scope.GetCategoryList = function () {        
        GetMasterCategory($scope, $http);
    };

    $scope.CategorySelected = function (categoryList) {
        //selectedCategoryList
        
        var isRecordFound = false;
        $.each(selectedCategoryList, function (categoryKey, categoryValue) {            
            if(categoryValue["CategoryId"]==categoryList.CategoryId)
            {                
                isRecordFound = true;
                selectedCategoryList.splice(categoryKey, 1);
                return false;
            }
            else
            {
                isRecordFound = false;
            }
        });        
        if (!isRecordFound) {
            var item = [];
            item.CategoryId = categoryList.GoogleTypeID;
            item.CategoryName = categoryList.TypeName;
            selectedCategoryList.push(item);
        }
        //It will get the all the attractions information
        PublicFilterAttractions($scope, $http);
    };

    //City Selected
    $scope.CitySelected=function(data) {
        
        //Google Maps data binding
        $scope.GoogleMapMarks(data);

        $scope.attractionList = [];
        $.each(data, function (attractionKey, attractionValue)
        {
            var item = [];            
            item.value = attractionValue["GoogleSearchText"];
            item.data = attractionValue["AttractionsId"];
            $scope.attractionListAutoComplete.push(item);
            item = attractionValue;
            $scope.attractionList.push(item);            
        });

        
        //Source Auto Complete Data
        $('#autoStartLocation').autocomplete({
            source: $scope.attractionListAutoComplete
        });


        $("#autoStartLocation").on("autocompleteselect", function (event, ui) {

            //this will get the category list
            //var scope = angular.element("#controlerIndex").scope();
            //scope.$apply(function () {
            //    scope.GetCategoryList();
            //});
        });

        //Desitnation auto complete information
        $('#autoDestinationLocation').autocomplete({
            source: $scope.attractionList
        });


        $("#autoDestinationLocation").on("autocompleteselect", function (event, ui) {

            //this will get the category list
            //var scope = angular.element("#controlerIndex").scope();
            //scope.$apply(function () {
            //    scope.GetCategoryList();
            //});
        });

        $scope.AttractionInformationBinding();

    };

    //Getting the order of Attractions
    $scope.AttractionInformationBinding=function()
    {
        
        var attractionListConcated;
        var isFirst=false;
        $.each($scope.attractionList, function (attractionKey, attractionValue) {
            if(!isFirst)
            {
                isFirst = true;
                $scope.SourceAttractionID = $scope.DestinationAttractionID = attractionListConcated = attractionValue["AttractionsId"];
            }
            else
            {                
                attractionListConcated += "," + attractionValue["AttractionsId"];
            }
        });

        //We need to make dynamic
        $scope.TravelModeId = 1;
        $scope.StartDate = '';
        $scope.StartTime = '';
        if ($("#autoStartLocation").val() != "")
        {
            $scope.SourceAttractionID = $("#autoStartLocation").val();
        }
        if ($("#autoDestinationLocation").val() != "")
        {
            $scope.DestinationAttractionID = $("#autoDestinationLocation").val();
        }        
        $scope.AttractionID = attractionListConcated;
        if ($("#calStartDateAndTime").val() != "") {
            $scope.StartDate = $("#calStartDateAndTime").val();
        }
        if ($("#calDropDateAndTime").val() != "") {
            $scope.StartTime = $("#calDropDateAndTime").val();
        }

        Public_GetOrderOfAttractionVisit($scope, $http);
    };

    //Ajax return data for the order of attractions
    $scope.AttractionInformationRendaring = function (data)
    {
        
        //$scope.$apply(function () {
        $scope.OrderOfAttractionList = data;
        //$scope.$apply();
        //});
        $scope.ItenateDynamicDatesCreation(data);
    };

    //displaying the google maps information with the current attraction information
    $scope.GoogleMapMarks = function (data) {
        var googleMaps;
        var isFirst = true;
        
        

        $.each(data, function (googleKey,googleValue) {
            if(isFirst)
            {
                isFirst = false;
                googleMaps = new GMaps({
                    div: '#googleMaps',
                    lat: googleValue.Latitude,
                    lng: googleValue.Longitude
                });
            }

            googleMaps.addMarker({
                lat: googleValue.Latitude,
                lng: googleValue.Longitude,
                title: googleValue.AttractionName,
                infoWindow: {
                    content: googleValue.AttractionName + "<br/>" + googleValue.AddressOne + "<br/>" + googleValue.AddressTwo + "<br/>"
                }
            });
        });

        $("#googleMaps").width("800px");
        $("#googleMaps").height("400px");
        $("#googleMaps").focus();
    };


    $scope.ItenateDynamicDatesCreation = function (data) {
        $("div#subtabs").tabs();
        $("div#subtabs ul").empty();
        $("div#subtabs").find('div').remove();;
       
       
        var num_tabs = $("div#subtabs ul li").length + 1;
        

        $.each(data, function (groupKey, groupValue) {
            
            $("div#subtabs ul").append(
                "<li><a href='#tab_" + groupValue.GroupDate.replace("/", "_").replace("/", "_") + "'>" + groupValue.GroupDate + "</a></li>"
            );
            $("div#subtabs").append(
                        "<div id='tab_" + groupValue.GroupDate.replace("/", "_").replace("/", "_") + "'>" +
                        TourInformation(
                                            "tab_" + groupValue.GroupDate.replace("/", "_").replace("/", "_")
                                            , groupValue.ListGetOrderOfAttractionVisit
                                        ) + "</div>"
                    );
            $("div#subtabs").tabs("refresh");
        }
        );
        $("div#subtabs ul li").find('a:first').triggerHandler('click');
        //$("#"+firstDate).triggerHandler('click');
    };

    $scope.CategoryStyleLeft = {
        "float":"left"
    };

    $scope.CategoryStyleRight = {
        "float": "right"
    };

    //not intereseted attraction capturing and stroing into the list
    $scope.NotIntereseted = function (attractionID) {
        var attractionIndex = 0;        
        $.each($scope.attractionList, function (attractionKey, attractionValue) {
            if (attractionValue.AttractionsId == attractionID) {
                $scope.notInterestedList.push(attractionValue);
                attractionIndex = attractionKey;
                return false;
            }
        });
        
        //removing the not inetreseted attraction from the attraction list
        $scope.attractionList.splice(attractionIndex, 1);
        
        //reloading the attraction information
        $scope.AttractionInformationBinding();
    };


    $scope.IsOrderUpdated = function (destinationAttractionId, recordCount, isUp) {
        var isFound = false;
        $.each($scope.OrderOfAttractionList, function (recordKey, recordValue) {
            
            $.each(recordValue.ListGetOrderOfAttractionVisit, function (groupKey, groupValue) {
                if (groupValue.DestinationAttractionId == destinationAttractionId) {
                    if (isUp = true) {
                        groupValue.UpdatedOrder = recordCount - 1;
                    }
                    else {
                        groupValue.UpdatedOrder = recordCount + 1;
                    }
                groupValue.IsOrderUpdated = true;
                isFound = true;
                return false;
            }
            });
            if (isFound) {
                return false;
            }
        });
        Public_GetOrderOfAttractionVisit($scope, $http);
    }

    $scope.Interested = function (attractionID) {
        
        var attractionIndex = 0;
        $.each($scope.notInterestedList, function (attractionKey, attractionValue) {
            if (attractionValue.AttractionsId == attractionID) {
                $scope.attractionList.push(attractionValue);
                attractionIndex = attractionKey;
                return false;
            }
        });
        
        //removing the not inetreseted attraction from the attraction list
        $scope.notInterestedList.splice(attractionIndex, 1);

        //reloading the attraction information
        $scope.AttractionInformationBinding();
    };
    
    //editing the tour information
    $scope.UpdateTourInformation = function (recordCount, updatedTime) {        
        var isFound = false;
        $.each($scope.OrderOfAttractionList, function (recordKey, recordValue) {
            $.each(recordValue.ListGetOrderOfAttractionVisit, function (groupKey, groupValue) {
                if (groupValue.RecordCount == recordCount) {
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
        Public_GetOrderOfAttractionVisit($scope, $http);
    };

    $scope.GetPlaceDetails = function (selectedAttraction) {
        GetPlaceDetails(selectedAttraction);
    };

    $scope.categoryClick = function (categoryId) {
        $('div[relattr="cat_tab"]').hide();
        $('#cat_' + categoryId).show();
    };

});