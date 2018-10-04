
var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);
appPlanGoGo.controller('controlerIndex', function ($scope, $http) {
    
    $scope.CategoryList = [];
    $scope.filterCategoryList = [];
    $scope.MasterCategoryList = [];
    $scope.TravelModeId;
    $scope.SourceAttractionID;
    $scope.DestinationAttractionID;
    $scope.AttractionID;
    $scope.StartDate;
    $scope.StartTime;
    $scope.attractionList = [];
    $scope.filterAttractionList = [];
    $scope.filterAttractionListAutoSelect = [];
    $scope.attractionListAutoComplete = [];
    $scope.attractionListBreakAutoComplete = [];
    //$scope.notInterestedList = [];
    $scope.attractionInterestedList = [];
    $scope.countryId = 0;
    $scope.cityId = 0;
    $scope.selectedCityLabel = "";
    $scope.VisitCityList = [];
    $scope.MainCategorySelected;
    $scope.CategoryPlaceSearch;
    $scope.UpdatedBreaks = [];
    $scope.UserTripBuildStatus = [];

    $scope.OrderOfAttractionList = [];
    $scope.ExtraCategoryList = [];
    $scope.breakValue = [];
    $scope.NearLocations = [];
    $scope.selectedExtraCategoryList = [];

    $scope.FilterNearLocations = [];
    $scope.AttractionPhotoReference = [];

    $scope.UserRequestedOrder = [];

    $scope.OneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    



    





    //GetCategoryList($scope, $http);

    $scope.init = function () {
        //Get User stored information
        GetBreakInformation($scope, $http);
        GetTourInformationOnTripId($scope, $http);
        $scope.ExtraCategoryList = [];
        GetExtraCategoryList($scope, $http);
        
    };

    

    $scope.GetCategoryList = function () {        
        GetMasterCategory($scope, $http);
    };

    $scope.CategorySelected = function (categoryList) {
        //selectedCategoryList
        
        var isRecordFound = false;
        $.each($scope.selectedCategoryList, function (categoryKey, categoryValue) {
            if (categoryValue["GoogleTypeID"] === categoryList.GoogleTypeID) {
                isRecordFound = true;
                $scope.selectedCategoryList.splice(categoryKey, 1);
                return false;
            } else {
                isRecordFound = false;
            }
        });        
        if (!isRecordFound) {
            var item = [];
            item.GoogleTypeID = categoryList.GoogleTypeID;
            item.CategoryName = categoryList.TypeName;
            $scope.selectedCategoryList.push(item);
        }

        //This feature need fix and implment it later
       // User_InsertCategoryInformation($scope, $http);
        
        //it will filter with the selected attraction list
        $scope.CategorySelectedAttractionFilter();
    };

    $scope.ClickMainCategorySelected = function (mainCategoryId) {
        $scope.MainCategorySelected = mainCategoryId;
        $scope.filterCategoryList = [];
        $scope.selectedCategoryList = [];
        
        $($scope.CategoryList).filter(function(index) {
            if ($scope.CategoryList[index].MasterCategoryId === mainCategoryId) {
                $scope.filterCategoryList.push($scope.CategoryList[index]);
                //Once main category selected,under main category list sub category pushed into the selected category list
                $scope.selectedCategoryList.push($scope.CategoryList[index]);
            }
        });
        
        //it will filter with the selected attraction list
        $scope.CategorySelectedAttractionFilter();

        PublicFilterAttractions($scope, $http);
    }

    $scope.CategorySelectedAttractionFilter = function () {


        var isNotFilterd = false;


        $scope.filterAttractionList = [];
        $($scope.selectedCategoryList).filter(function (index) {
            $($scope.attractionList).filter(function(attractionIndex) {
                if ($scope.selectedCategoryList[index].GoogleTypeID ===
                    $scope.attractionList[attractionIndex].CategoryId) {

                    isNotFilterd = false;
                    //filtering attractions from the category which user already selected
                    $.each($scope.OrderOfAttractionList,
                        function(key, value) {

                            if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                                $.each(value.ListGetOrderOfAttractionVisit,
                                    function (googleKey, googleValue) {
                                        if (googleValue.SourceAttractionId ===
                                            $scope.attractionList[attractionIndex].AttractionsId ||
                                            googleValue.DestinationAttractionId ===
                                            $scope.attractionList[attractionIndex].AttractionsId) {
                                            isNotFilterd = true;
                                        }
                                    });
                            }
                        });

                    if (!isNotFilterd)
                        $scope.filterAttractionList.push($scope.attractionList[attractionIndex]);
                }
            });
        });
        $scope.CategoryPlaceSearch = "";
        $scope.FilterInterestedAttraction();
    }

    $scope.CssMainCategory = function (mainCategoryId) {
        if (mainCategoryId === $scope.MainCategorySelected) {
            return true;
        }
        return false;
    }

    $scope.addCitites = function () {

        

        var existed = false;
        var recordIndex = $scope.VisitCityList.length;
        if ($scope.selectedCityLabel !== "") {
            $.each($scope.VisitCityList,
                function (key, value) {
                    if (value.cityName === $scope.selectedCityLabel) {
                        existed = true;
                        return false;
                    }
                });
            if (!existed) {
                var item = [];
                item.countryId = $scope.countryId;
                item.cityId = $scope.cityId;
                item.cityName = $scope.selectedCityLabel;
                item.recordIndex = recordIndex;
                $scope.VisitCityList.push(item);
            }
        }

        $("#autoCityName").val("");
    };


    $scope.CityNotIntereseted = function (cityId) {
        var recordOrder = 0;
        $.each($scope.VisitCityList,
            function(key, value) {
                if (value.cityId === cityId) {
                    recordOrder = key;
                    return false;
                }
            });
        $scope.VisitCityList.splice(recordOrder, 1);
        
    };


    $scope.IsCityOrderUpdated = function (cityId, recordIndex, isUp) {
        

        if (isUp) {
            $.each($scope.VisitCityList,
                function (key, value) {
                    if (value.recordIndex === recordIndex) {
                        value.recordIndex = recordIndex - 1;
                    } else {
                        if (value.recordIndex === recordIndex - 1) {
                            value.recordIndex = recordIndex;
                        }
                    }
                });
        } else {
            $.each($scope.VisitCityList,
                function (key, value) {
                    if (value.recordIndex === recordIndex + 1) {
                        value.recordIndex = recordIndex;
                    } else {
                        if (value.recordIndex === recordIndex) {
                            value.recordIndex = recordIndex + 1;
                        }
                    }
                });
        }
        
    }

    //City Selected
    $scope.CitySelected=function(data) {
        
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

        //it will filter with the selected attraction list
        $scope.CategorySelectedAttractionFilter();
    };

    
    

    //Getting the order of Attractions
    $scope.AttractionInformationBinding=function() {


        $scope.UpdateUserReqestOrder();

        Public_GetOrderOfAttractionVisit($scope, $http);
    };

    $scope.UpdateUserReqestOrder = function() {
        var attractionListConcated;
        var isFirst = false;
        $.each($scope.attractionInterestedList, function (attractionKey, attractionValue) {
            if (!isFirst) {
                isFirst = true;
                $scope.SourceAttractionID = $scope.DestinationAttractionID = attractionListConcated = attractionValue["AttractionsId"];
            }
            else {
                attractionListConcated += "," + attractionValue["AttractionsId"];
            }
        });

        //We need to make dynamic
        $scope.TravelModeId = 1;
        $scope.AttractionID = attractionListConcated;
    };

    //Ajax return data for the order of attractions
    $scope.AttractionInformationRendaring = function (data) {
        
        //Break information is updating because for Expense calculation
        User_RequestedBreaks($scope, $http);

        //Google Maps data binding
        $scope.GoogleMapMarks(data);

        $scope.OrderOfAttractionList = data;

        
        GetOrderOfRequest($scope);
        
        
        $scope.ItenateDynamicDatesCreation(data);
    };

    //displaying the google maps information with the current attraction information
    $scope.GoogleMapMarks = function (data) {
        var googleMaps;
        var isFirst = true;
        
        var path = [];
        

        if (!jQuery.isEmptyObject(data)) {
            $.each(data,
                function (key, value) {
                    
                    if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                        $.each(value.ListGetOrderOfAttractionVisit,
                            function (googleKey, googleValue) {

                                
                                
                                if (googleValue.SourceLatitude !== null &&
                                    googleValue.SourceLongitude !== null && googleValue.DestinationLatitude!== null && 
                                    googleValue.DestinationLongitude !== null
                                ) {

                                    
                                    if (isFirst) {
                                        isFirst = false;
                                        googleMaps = new GMaps({
                                            div: '#googleMaps',
                                            lat: googleValue.SourceLatitude,
                                            lng: googleValue.SourceLongitude
                                        });

                                        googleMaps.addMarker({
                                            lat: googleValue.SourceLatitude,
                                            lng: googleValue.SourceLongitude,
                                            title: googleValue.SourceAttractionName,
                                            infoWindow: {
                                                content: googleValue.SourceAttractionName +
                                                    "<br/>" +
                                                    googleValue.SourceSearchText +
                                                    "<br/>"
                                            }
                                        });


                                    }
                                }
                                if (googleValue.SourceLatitude !== null &&
                                    googleValue.SourceLongitude !== null &&
                                    googleValue.DestinationLatitude !== null &&
                                    googleValue.DestinationLongitude !== null) {
                                    if (googleValue.DestinationLatitude !== null) {
                                        googleMaps.addMarker({
                                            lat: googleValue.DestinationLatitude,
                                            lng: googleValue.DestinationLongitude,
                                            title: googleValue.DestinationAttractionName,
                                            infoWindow: {
                                                content: googleValue.DestinationAttractionName +
                                                    "<br/>" +
                                                    googleValue.DestinationSearchText +
                                                    "<br/>"
                                            }
                                        });

                                        var sourceCoordinates = [];
                                        sourceCoordinates.push(googleValue.SourceLatitude);
                                        sourceCoordinates.push(googleValue.SourceLongitude);

                                        path.push(sourceCoordinates);

                                        var destinatinoCoordinates = [];
                                        destinatinoCoordinates.push(googleValue.DestinationLatitude);
                                        destinatinoCoordinates.push(googleValue.DestinationLongitude);

                                        path.push(destinatinoCoordinates);


                                    }
                                }

                                
                               
                            });

                        googleMaps.drawPolyline({
                            path: path,
                            strokeColor: '#131540',
                            strokeOpacity: 0.6,
                            strokeWeight: 6
                        });
                    }
                });
        }

        

        $("#googleMaps").width("800px");
        $("#googleMaps").height("400px");
        $("#googleMaps").focus();
    };


    $scope.ItenateDynamicDatesCreation = function (data) {
        $("div#subtabs").tabs();
        $("div#subtabs ul").empty();
        $("div#subtabs").find('div').remove();;

        var isDayExists = false;
        var num_tabs = $("div#subtabs ul li").length + 1;

        var breakInformation = [];
        $.each(data,
            function (groupKey, groupValue) {
                breakInformation = [];
                isDayExists = false;
                var divId;
                $.each($scope.UpdatedBreaks,
                    function (dateKey, dateValue) {
                        if (groupValue.GroupDate === dateValue.RequestDate) {
                            isDayExists = true;
                            breakInformation = dateValue;
                            return false;
                        }
                    });

                
                divId = "tab_" + groupValue.GroupDate.replace("/", "_").replace("/", "_");
                if (!isDayExists) {
                    var temp = [];
                    temp.RequestDate = groupValue.GroupDate;
                    temp.IsUserInterestedDayBreak = 1;
                    temp.UpdateDayEndTime = $scope.UpdateDayEndTime;
                    temp.UpdateDayStartTime = $scope.UpdateDayStartTime;
                    temp.IsUserInterestedLunchBreak = 1;
                    temp.UpdatedLunchTime = $scope.UpdatedLunchTime;
                    temp.UpdatedLunchMinimumTime = $scope.UpdatedLunchMinimumTime;
                    temp.IsUserInterestedBreak = 1;
                    temp.UpdatedBreakTime = $scope.UpdatedBreakTime;
                    temp.UpdatedBreakMinimumTime = $scope.UpdatedBreakMinimumTime;
                    temp.IsUserInterestedDinnerBreak = 1;
                    temp.UpdatedDinnerTime = $scope.UpdatedDinnerTime;
                    temp.UpdateDinnerMinimumTime = $scope.UpdateDinnerMinimumTime;
                    temp.IsUserInterestedBreakFast = 1;
                    temp.UpdatedBreakFastTime = $scope.UpdatedBreakFastTime;
                    temp.UpdatedBreakFastMinimumTime = $scope.UpdatedBreakFastMinimumTime;
                    temp.divId = divId;
                    breakInformation = temp;
                    $scope.UpdatedBreaks.push(temp);
                }

                

                $("div#subtabs ul").append(
                    "<li><a href='#tab_" +
                    groupValue.GroupDate.replace("/", "_").replace("/", "_") +
                    "'>" +
                    groupValue.GroupDate +
                    "</a></li>"
                );

                
                $("div#subtabs").append(
                    "<div id='"+divId +
                    "'>" +
                    TourInformation(divId,
                        groupValue.ListGetOrderOfAttractionVisit, breakInformation
                    ) +
                    "</div>"
                );
                $("div#subtabs").tabs("refresh");
                
                
                //$("#" + divId + "_UpdateDayStartTime").timepicker();
                
            }
        );
        $("div#subtabs ul li").find('a:first').triggerHandler('click');
        $scope.TourTabClick();
        //$("#"+firstDate).triggerHandler('click');
    };
    $scope.TourTabClick = function() {
        $.each($scope.UpdatedBreaks,
            function(key, value) {
                $("#" + value.divId + "_UpdateDayStartTime").timepicker({ 'timeFormat': 'h:i A' });
                $("#" + value.divId + "_UpdateDayEndTime").timepicker({ 'timeFormat': 'h:i A' });
                $("#" + value.divId + "_UpdatedLunchTime").timepicker({ 'timeFormat': 'h:i A' });
                $("#" + value.divId + "_UpdatedBreakTime").timepicker({ 'timeFormat': 'h:i A' });
                $("#" + value.divId + "_UpdatedDinnerTime").timepicker({ 'timeFormat': 'h:i A' });
                $("#" + value.divId + "_UpdatedBreakFast").timepicker({ 'timeFormat': 'h:i A' });

                $("#" + value.divId + "_UpdatedLunchMinimumTime").timepicker({ 'timeFormat': 'H:i:s' });
                $("#" + value.divId + "_UpdatedBreakMinimumTime").timepicker({ 'timeFormat': 'H:i:s' });
                $("#" + value.divId + "_UpdateDinnerMinimumTime").timepicker({ 'timeFormat': 'H:i:s' });
                $("#" + value.divId + "_UpdatedBreakFastMinimumTime").timepicker({ 'timeFormat': 'H:i:s' });

            });
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
        $.each($scope.attractionInterestedList, function (attractionKey, attractionValue) {
            if (attractionValue.AttractionsId === attractionID) {
                //$scope.notInterestedList.push(attractionValue);
                attractionIndex = attractionKey;
                return false;
            }
        });
        
        //removing the not inetreseted attraction from the attraction list
        $scope.attractionInterestedList.splice(attractionIndex, 1);
        $scope.filterAttractionList.push($scope.attractionInterestedList[attractionIndex]);
        
        //reloading the attraction information
        $scope.AttractionInformationBinding();
    };

    $scope.Interested = function (attraction) {
        
        var isExisted = false;
        if ($scope.attractionInterestedList !== null) {
            $.each($scope.attractionInterestedList,
                function(key, value) {
                    if (value.AttractionsId === attraction.AttractionsId) {
                        isExisted = true;
                    }
                }
            );
        }

        if (!isExisted) {
            $scope.attractionInterestedList.push(attraction);
            //reloading the attraction information
            $scope.AttractionInformationBinding();
        }

        $scope.FilterInterestedAttraction();
    };


    $scope.IsOrderUpdated = function (destinationAttractionId, recordCount, isUp) {
        var isFound = false;
        $.each($scope.OrderOfAttractionList, function (recordKey, recordValue) {
            
            $.each(recordValue.ListGetOrderOfAttractionVisit, function (groupKey, groupValue) {
                if (groupValue.DestinationAttractionId === destinationAttractionId) {
                    if (isUp === true) {
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

   
    
    //editing the tour information
    $scope.UpdateTourInformation = function (recordCount, updatedTime) {        
        var isFound = false;
        $.each($scope.OrderOfAttractionList, function (recordKey, recordValue) {
            $.each(recordValue.ListGetOrderOfAttractionVisit, function (groupKey, groupValue) {
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
        Public_GetOrderOfAttractionVisit($scope, $http);
    };

    $scope.GetPlaceDetails = function (selectedAttraction) {
        GetPlaceDetails(selectedAttraction);
    };

    $scope.categoryClick = function (categoryId) {
        $('div[relattr="cat_tab"]').hide();
        $('#cat_' + categoryId).show();
    };

    $scope.categoryFilter = function () {
        var tempFilterAttractionList = $scope.filterAttractionList;
        $scope.filterAttractionList = [];
        
        $(tempFilterAttractionList).filter(function (index) {
            if (tempFilterAttractionList[index].AttractionName.toLowerCase().indexOf($scope.CategoryPlaceSearch.toLowerCase()) !== -1) {
                $scope.filterAttractionList.push(tempFilterAttractionList[index]);
            }
        });

        if ($scope.filterAttractionList.length === 0) {
            AutoComplte($scope, $http, $("#placeSeachForAdding").val());
        }
        
    }

    $scope.InsertBreakInformation = function (attractionInfo) {
        
        var indexCounter = 0;
        $.each($scope.UpdatedBreaks,
            function (key, value) {

                if ($("#hdSelectedDivId").val() === value.divId) {
                    indexCounter = key;
                    return false;
                }
            });
        

        switch ($("#hdSelectedBreakType").val()) {
        case "1":
        {
            $scope.UpdatedBreaks[indexCounter].IsBreakFastAdded = true;
            $scope.UpdatedBreaks[indexCounter].BreakFastAttractionId = attractionInfo.AttractionsId;
            break;
        }
        case "2":
        {
            $scope.UpdatedBreaks[indexCounter].IsLunchAdded = true;
            $scope.UpdatedBreaks[indexCounter].LunchAttractionId = attractionInfo.AttractionsId;
            break;
        }
        case "3":
        {
            $scope.UpdatedBreaks[indexCounter].IsBreakAdded = true;
            $scope.UpdatedBreaks[indexCounter].BreakAttractionId = attractionInfo.AttractionsId;
            break;
        }
        case "4":
        {
            $scope.UpdatedBreaks[indexCounter].IsDinnerAdded = true;
            $scope.UpdatedBreaks[indexCounter].DinnerAttractionId = attractionInfo.AttractionsId;
            break;
        }
        case "5":
        {
            $scope.UpdatedBreaks[indexCounter].IsDayBreakAdded = true;
            $scope.UpdatedBreaks[indexCounter].DayBreakAttractionId = attractionInfo.AttractionsId;
            break;
        }
        }

        $("#addingBreak")
            .dialog("close");

        Public_GetOrderOfAttractionVisit($scope, $http);


    };

    $scope.BreakInformationUpdate = function (divId) {
        
        var indexCounter = 0;
        $.each($scope.UpdatedBreaks,
            function (key, value) {
                
                if (divId === value.divId) {
                    indexCounter = key;
                    return false;
                }
            });
        
        
        //$scope.UpdatedBreaks[indexCounter].IsUserInterestedDayBreak = $("#" + divId + "_IsUserInterestedDayBreak").prop('checked');
        $scope.UpdatedBreaks[indexCounter].UpdateDayEndTime = $("#" + divId + "_UpdateDayEndTime").val();
        $scope.UpdatedBreaks[indexCounter].UpdateDayStartTime = $("#" + divId + "_UpdateDayStartTime").val();
        $scope.UpdatedBreaks[indexCounter].IsUserInterestedLunchBreak = $("#" + divId + "_IsUserInterestedLunchBreak").prop('checked');
        $scope.UpdatedBreaks[indexCounter].UpdatedLunchTime = $("#" + divId + "_UpdatedLunchTime").val();
        $scope.UpdatedBreaks[indexCounter].UpdatedLunchMinimumTime = $("#" + divId + "_UpdatedLunchMinimumTime").val();
        $scope.UpdatedBreaks[indexCounter].IsUserInterestedBreak = $("#" + divId + "_IsUserInterestedBreak").prop('checked');
        $scope.UpdatedBreaks[indexCounter].UpdatedBreakTime = $("#" + divId + "_UpdatedBreakTime").val();
        $scope.UpdatedBreaks[indexCounter].UpdatedBreakMinimumTime = $("#" + divId + "_UpdatedBreakMinimumTime").val();
        $scope.UpdatedBreaks[indexCounter].IsUserInterestedDinnerBreak = $("#" + divId + "_IsUserInterestedDinnerBreak").prop('checked');
        $scope.UpdatedBreaks[indexCounter].UpdatedDinnerTime = $("#" + divId + "_UpdatedDinnerTime").val();
        $scope.UpdatedBreaks[indexCounter].UpdateDinnerMinimumTime = $("#" + divId + "_UpdateDinnerMinimumTime").val();
        $scope.UpdatedBreaks[indexCounter].IsUserInterestedBreakFast = $("#" + divId + "_IsUserInterestedBreakFast").prop('checked');
        $scope.UpdatedBreaks[indexCounter].UpdatedBreakFastTime = $("#" + divId + "_UpdatedBreakFast").val();
        $scope.UpdatedBreaks[indexCounter].UpdatedBreakFastMinimumTime = $("#" + divId + "_UpdatedBreakFastMinimumTime").val();

        
        $.each($scope.UpdatedBreaks,
            function(key, value) {
                if (value.IsUserInterestedLunchBreak) {
                    $("#" + value.divId + "_UpdatedLunchTime_tr").show();
                    $("#" + value.divId + "_UpdatedLunchMinimumTime_tr").show();
                } else {
                    $("#" + value.divId + "_UpdatedLunchTime_tr").hide();
                    $("#" + value.divId + "_UpdatedLunchMinimumTime_tr").hide();
                }

                if (value.IsUserInterestedBreak) {
                    $("#" + value.divId + "_UpdatedBreakTime_tr").show();
                    $("#" + value.divId + "_UpdatedBreakMinimumTime_tr").show();
                } else {
                    $("#" + value.divId + "_UpdatedBreakTime_tr").hide();
                    $("#" + value.divId + "_UpdatedBreakMinimumTime_tr").hide();
                    
                }

                if (value.IsUserInterestedDinnerBreak) {
                    $("#" + value.divId + "_UpdatedDinnerTime_tr").show();
                    $("#" + value.divId + "_UpdateDinnerMinimumTime_tr").show();
                } else {
                    $("#" + value.divId + "_UpdatedDinnerTime_tr").hide();
                    $("#" + value.divId + "_UpdateDinnerMinimumTime_tr").hide();
                    
                }
                if (value.IsUserInterestedBreakFast) {
                    $("#" + value.divId + "_UpdatedBreakFast_tr").show();
                    $("#" + value.divId + "_UpdatedBreakFastMinimumTime_tr").show();
                } else {
                    $("#" + value.divId + "_UpdatedBreakFast_tr").hide();
                    $("#" + value.divId + "_UpdatedBreakFastMinimumTime_tr").hide();

                }
            });

        Public_GetOrderOfAttractionVisit($scope, $http);
    };


    $scope.DayExpenseInformationUpdate = function (divId,strId) {

        var indexCounter = 0;
        $.each($scope.UpdatedBreaks,
            function (key, value) {

                if (divId === value.divId) {
                    indexCounter = key;
                    return false;
                }
            });

        switch (strId) {
        case divId + "_NoOfCars":
        {
            $scope.UpdatedBreaks[indexCounter].NoOfCars = $("#" + divId + "_NoOfCars").val();
            $scope.UpdatedBreaks[indexCounter].IsNoOfCarsUserUpdated = true;
            break;
        }
        case divId + "_AverageMileage":
        {
            $scope.UpdatedBreaks[indexCounter].AverageMileage = $("#" + divId + "_AverageMileage").val();
            $scope.UpdatedBreaks[indexCounter].IsAverageMileageUserUpdated = true;


            break;
        }
        case divId + "_CarRentalExpense":
        {
            $scope.UpdatedBreaks[indexCounter].CarRentalExpense = $("#" + divId + "_CarRentalExpense").val();
            $scope.UpdatedBreaks[indexCounter].IsCarRentalExpenseUserUpdated = true;
            break;
        }
        case divId + "_NoOfRooms":
        {
            $scope.UpdatedBreaks[indexCounter].NoOfRooms = $("#" + divId + "_NoOfRooms").val();
            $scope.UpdatedBreaks[indexCounter].IsNoOfRoomsUserUpdated = true;
            break;
        }
        case divId + "_DayBreakExpense":
        {
            $scope.UpdatedBreaks[indexCounter].DayBreakExpense = $("#" + divId + "_DayBreakExpense").val();
            $scope.UpdatedBreaks[indexCounter].IsDayBreakExpenseUserUpdated = true;
            break;
        }
        case divId + "_BreakFastExpense":
        {
            $scope.UpdatedBreaks[indexCounter].BreakFastExpense = $("#" + divId + "_BreakFastExpense").val();
            $scope.UpdatedBreaks[indexCounter].IsBreakFastExpenseUserUpdated = true;
            break;
        }
        case divId + "_LunchExpense":
        {
            $scope.UpdatedBreaks[indexCounter].LunchExpense = $("#" + divId + "_LunchExpense").val();
            $scope.UpdatedBreaks[indexCounter].IsLunchExpenseUserUpdated = true;
            break;
        }
        case divId + "_BreakExpense":
        {
            $scope.UpdatedBreaks[indexCounter].BreakExpense = $("#" + divId + "_BreakExpense").val();
            $scope.UpdatedBreaks[indexCounter].IsBreakExpenseUserUpdated = true;
            break;
        }
        case divId + "_DinnerExpense":
        {
            $scope.UpdatedBreaks[indexCounter].DinnerExpense = $("#" + divId + "_DinnerExpense").val();
            $scope.UpdatedBreaks[indexCounter].IsDinnerExpenseUserUpdated = true;
            break;
        }
        }

        
        Public_GetOrderOfAttractionVisit($scope, $http);

    };


    $scope.PlannedTours = function(data) {

      
        
        $scope.countryId = data.CountryId;
        $scope.TravelModeId = data.TravelModeId;
        $scope.StartDate = data.StartDate;
        $scope.SourceAttractionID = data.SourceAttractionID;
        $scope.DestinationAttractionID = data.DestinationAttractionID;
        $("#expense_Persons").val(data.NoOfPersons);
        $("#expense_Cars").val(data.NoOfCars);
        $("#expense_PerGallon").val(data.CarMileage);
        $("#expense_PerGallonPrice").val(data.FuelPrice);
        $("#autoStartLocation").val(data.SourceAttractionName);
        $("#autoDestinationLocation").val(data.DestinationAttractionName);

        //calling the auto complete for filling the city information
        GetCityList($scope, $http);
        
        UserGetCityList($scope, $http);
        $scope.GetCategoryList();
        User_UserTripGetAttractions($scope, $http);

        

    };

    $scope.UserTripAttractionInfo = function (data) {
        $scope.attractionInterestedList = [];
        $.each(data,
            function(key, value) {
                var item = [];
                item.AttractionsId = value.AttractionId;
                $scope.attractionInterestedList.push(item);
            });
        $scope.FilterInterestedAttraction();
        User_RequestedBreaks($scope, $http);

        $scope.UpdateUserReqestOrder();
        User_GetUserStoredAttractinInfo($scope, $http);
        User_UserTripBuildStatus($scope, $http);

        $scope.BuildExpenseInfo();
    };

    $scope.FilterInterestedAttraction = function() {
        var tempFilterAttractionList = $scope.filterAttractionList;
        var attractionNotInsert = false;
        $scope.filterAttractionList = [];
        $(tempFilterAttractionList).filter(function (index) {
            attractionNotInsert = false;
            $.each($scope.attractionInterestedList,
                function (inKey, inValue) {
                    if (inValue.AttractionsId === tempFilterAttractionList[index].AttractionsId) {
                        attractionNotInsert = true;
                        return false;
                    }
                });

            if (!attractionNotInsert) {
                $scope.filterAttractionList.push(tempFilterAttractionList[index]);
            }
        });
    };

    $scope.RequestedBreaks = function(data) {
        $scope.UpdatedBreaks = [];

        
        $.each(data,
            function(key, value) {
                var temp = [];
                
                temp.RequestDate = value.RequestDate;
                temp.IsUserInterestedDayBreak = value.IsUserInterestedDayBreak;
                if (value.UpdateDayEndTime === null) {
                    temp.UpdateDayEndTime = $scope.UpdateDayEndTime;
                } else {
                    temp.UpdateDayEndTime = convertTo12Hour(value.UpdateDayEndTime);
                }
                if (value.UpdateDayStartTime === null) {
                    temp.UpdateDayStartTime = $scope.UpdateDayStartTime;
                } else {
                    temp.UpdateDayStartTime = convertTo12Hour(value.UpdateDayStartTime);
                }
                temp.IsUserInterestedLunchBreak = value.IsUserInterestedLunchBreak;
                if (value.UpdatedLunchTime === null) {
                    temp.UpdatedLunchTime = $scope.UpdatedLunchTime;
                } else {
                    temp.UpdatedLunchTime = convertTo12Hour(value.UpdatedLunchTime);
                }
                if (value.UpdatedLunchMinimumTime === null) {
                    temp.UpdatedLunchMinimumTime = $scope.UpdatedLunchMinimumTime;
                } else {
                    temp.UpdatedLunchMinimumTime = convertTo12Hour(value.UpdatedLunchMinimumTime);
                }
                temp.IsUserInterestedBreak = value.IsUserInterestedBreak;
                if (value.UpdatedBreakTime === null) {
                    temp.UpdatedBreakTime = $scope.UpdatedBreakTime;
                } else {
                    temp.UpdatedBreakTime = convertTo12Hour(value.UpdatedBreakTime);
                }
                if (value.UpdatedBreakMinimumTime === null) {
                    temp.UpdatedBreakMinimumTime = $scope.UpdatedBreakMinimumTime;
                } else {
                    temp.UpdatedBreakMinimumTime = convertTo12Hour(value.UpdatedBreakMinimumTime);
                }
                temp.IsUserInterestedDinnerBreak = value.IsUserInterestedDinnerBreak;
                if (value.UpdatedDinnerTime === null) {
                    temp.UpdatedDinnerTime = $scope.UpdatedDinnerTime;
                } else {
                    temp.UpdatedDinnerTime = convertTo12Hour(value.UpdatedDinnerTime);
                }
                if (value.UpdateDinnerMinimumTime === null) {
                    temp.UpdateDinnerMinimumTime = $scope.UpdateDinnerMinimumTime;
                } else {
                    temp.UpdateDinnerMinimumTime = convertTo12Hour(value.UpdateDinnerMinimumTime);
                }
                temp.IsUserInterestedBreakFast = value.IsUserInterestedBreakFast;
                if (value.UpdatedBreakFastTime === null) {
                    temp.UpdatedBreakFastTime = $scope.UpdatedBreakFastTime;
                } else {
                    temp.UpdatedBreakFastTime = convertTo12Hour(value.UpdatedBreakFastTime);
                }
                if (value.UpdatedBreakFastMinimumTime === null) {
                    temp.UpdatedBreakFastMinimumTime = $scope.UpdatedBreakFastMinimumTime;
                } else {
                    temp.UpdatedBreakFastMinimumTime = convertTo12Hour(value.UpdatedBreakFastMinimumTime);
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
                $scope.UpdatedBreaks.push(temp);
            });
    }


    $scope.AddLunchDinnerBreak = function (breakType, attractionId, divId, sourceLongitude, sourceLatitude) {
        
        

        $scope.breakValue = [];
        
        $scope.breakValue.breakType = breakType;
        $scope.breakValue.attractionId = attractionId;
        $scope.breakValue.divId = divId;
        $scope.breakValue.sourceLongitude = sourceLongitude;
        $scope.breakValue.sourceLatitude = sourceLatitude;
        $scope.BreakAttractionCalling();
    };

    $scope.BreakAttractionCalling = function() {

        
        $scope.breakValue.distance = $("#breakDistance").val();

        User_GetNearestRestaruents($scope, $http);
    };

    $scope.ExtraCategorySelected = function (categoryList) {
        
        var isRecordFound = false;
        $.each($scope.selectedExtraCategoryList, function (categoryKey, categoryValue) {
            if (categoryValue["GoogleTypeID"] === categoryList.GoogleTypeID) {
                isRecordFound = true;
                $scope.selectedExtraCategoryList.splice(categoryKey, 1);
                return false;
            } else {
                isRecordFound = false;
            }
        });
        if (!isRecordFound) {
            var item = [];
            item.GoogleTypeID = categoryList.GoogleTypeID;
            item.CategoryName = categoryList.TypeName;
            $scope.selectedExtraCategoryList.push(item);
        }

        //This feature need fix and implment it later
        // User_InsertCategoryInformation($scope, $http);

        //it will filter with the selected attraction list
        $scope.ExtraCategorySelectedAttractionFilter();
    };

    $scope.ExtraCategorySelectedAttractionFilter = function() {
        
        $scope.FilterNearLocations = [];
        $($scope.selectedExtraCategoryList).filter(function(index) {
            $($scope.NearLocations).filter(function(attractionIndex) {
                $.each($scope.NearLocations[attractionIndex].AllCategoriesId,
                    function(attKey, attValue) {
                        if ($scope.selectedExtraCategoryList[index].GoogleTypeID ===
                            attValue) {
                            $scope.FilterNearLocations.push($scope.NearLocations[attractionIndex]);
                            return false;
                        }
                    });
            });
        });
    }

    $scope.imageSlideShow = function(attractionsId, attractionName) {
        AttractionsPhotoInfo($scope, $http, attractionsId, attractionName);
    };

    $scope.PhotoInfo = function (attractionId, data, attractionName) {
        //$('.demo').gallerybox();
        $scope.AttractionPhotoReference = [];
        
        if (data.length > 0) {

            $("#photoSlideShow ul").empty();
            $.each(data,
                function (key, value) {
                    $("#photoSlideShow").append(
                        "<img src='"+value["PhotoURL"]+"' alt='"+attractionName+"' class='demo'/>"
                    );
                });

            $('.demo').gallerybox();
            
            $("#photoSlideShow img")[0].click();
            //$("#photoSlideShow ul").find('a:first').triggerHandler('click');
        }
    };

    $scope.CategoriesTabClick = function () {
        //debugger;
        $scope.ClickMainCategorySelected($scope.MasterCategoryList[0].CategoryId);
    }


    $scope.BuildExpenseInfo = function () {
        
        var attractionCount = 0;
        var distance = 0;
        var BreakFastExpense = 0;
        var LunchExpense = 0;
        var BreakExpense = 0;
        var DayBreakExpense = 0;
        var CarRentalExpense = 0;
        var DinnerExpense = 0;
        var FuelExpense = 0;
        var TotalExpense = 0;

        $.each($scope.UpdatedBreaks,
            function(key, value) {
                attractionCount = attractionCount + value.NoOfAttractions;
                distance = distance + parseFloat(value.Distance);
                BreakFastExpense = BreakFastExpense + (value.BreakFastExpense * $("#expense_Persons").val());
                LunchExpense = LunchExpense +
                    (value.LunchExpense * ($("#expense_Persons").val() <= 0 ? 1 : $("#expense_Persons").val()));
                BreakExpense = BreakExpense + (value.BreakExpense * $("#expense_Persons").val());
                DayBreakExpense = DayBreakExpense + (value.DayBreakExpense * value.NoOfRooms);
                CarRentalExpense = CarRentalExpense + value.CarRentalExpense;
                DinnerExpense = DinnerExpense + (value.DinnerExpense * $("#expense_Persons").val());
            });
        
        FuelExpense = (distance / $("#expense_PerGallon").val()) * $("#expense_Cars").val() * $("#expense_PerGallonPrice").val();

        TotalExpense = BreakFastExpense +
            LunchExpense +
            BreakExpense +
            DayBreakExpense +
            CarRentalExpense +
            DinnerExpense + FuelExpense;
        

        $("#expense_Days").html($scope.UpdatedBreaks.length);
        $("#expense_AttractionsList").html(attractionCount);
        $("#expense_Distance").html(parseFloat(distance).toFixed(2));
        $("#expense_BreakFastExpense").html(BreakFastExpense);
        $("#expense_LunchExpense").html(LunchExpense);
        $("#expense_BreakExpense").html(BreakExpense);
        $("#expense_DinnerExpense").html(DinnerExpense);
        $("#expense_DayExpense").html(DayBreakExpense);
        $("#expense_RentalExpense").html(CarRentalExpense);
        $("#expense_FuelExpense").html(FuelExpense.toFixed(2));
        $("#expense_Expense").html(TotalExpense.toFixed(2));


    };

    $scope.TripInfoUpdate = function() {
        var temp = {
            NoOfPersons: $("#expense_Persons").val(),
            NoOfCars: $("#expense_Cars").val(),
            CarMileage: $("#expense_PerGallon").val(),
            FuelPrice: $("#expense_PerGallonPrice").val()
        };

        
        User_UserTrip_Update($scope, $http, temp);

        $scope.BuildExpenseInfo();
    };

    $scope.IgnoreMyExpenseChanges = function (divId) {
        var indexCounter = 0;
        $.each($scope.UpdatedBreaks,
            function (key, value) {

                if (divId === value.divId) {
                    indexCounter = key;
                    return false;
                }
            });

        $scope.UpdatedBreaks[indexCounter].IsNoOfCarsUserUpdated = false;
        $scope.UpdatedBreaks[indexCounter].IsAverageMileageUserUpdated = false;
        $scope.UpdatedBreaks[indexCounter].IsCarRentalExpenseUserUpdated = false;
        $scope.UpdatedBreaks[indexCounter].IsBreakFastExpenseUserUpdated = false;
        $scope.UpdatedBreaks[indexCounter].IsLunchExpenseUserUpdated = false;
        $scope.UpdatedBreaks[indexCounter].IsBreakExpenseUserUpdated = false;
        $scope.UpdatedBreaks[indexCounter].IsDinnerExpenseUserUpdated = false;
        $scope.UpdatedBreaks[indexCounter].IsDayBreakExpenseUserUpdated = false;
        $scope.UpdatedBreaks[indexCounter].IsNoOfRoomsUserUpdated = false;

        Public_GetOrderOfAttractionVisit($scope, $http);
    };

    $scope.SearchAutoComplete=function() {

        if ($("#autoStartLocation").val().length > 3) {
            AutoComplte($scope, $http, $("#autoStartLocation").val());
        }

        if ($("#autoDestinationLocation").val().length > 3) {
            AutoComplte($scope, $http, $("#autoDestinationLocation").val());
        }
    }

    $scope.TourInfoUpdate = function (data, isSource, googleSearchText, breakType, breakDate) {
        UserRequestedAttraction($scope, data, isSource, googleSearchText, breakType, breakDate);
    }


    $scope.BreakAttractionCallingAutoComplete = function () {

        var data = {};
        data.address = $("#autoAddAttractionForBreak").val();
        data.latitude = $("#hdSourceLatitude").val();
        data.longitude = $("#hdSourceLongitude").val();
        data.distance = $("#breakDistance").val();
        AutoComplteBreakInfo($scope, $http,data);
    };

    $scope.ViewTimeUpdate = function (attractionId, viewTime) {
        
        $.each($scope.UserRequestedOrder, function (recordKey, recordValue) {
            if (recordValue.AttractionId === attractionId) {
                recordValue.StayTime = viewTime;
            }
        });

        var attractionRequestOrder = [];
        $.each($scope.UserRequestedOrder,
            function(orderKey, orderValue) {
                
                if (jQuery.type(orderValue.StayTime) !== "undefined") {
                    var temp = {};
                    temp.AttractionId = orderValue.AttractionId;
                    temp.OrderNumber = orderValue.OrderNumber;
                    temp.BreakInformationId = orderValue.BreakInformationId;
                    temp.StayTime = orderValue.StayTime;
                    temp.IsRequestedAfterBreakFast = orderValue.IsRequestedAfterBreakFast;
                    temp.IsRequestedAfterLunch = orderValue.IsRequestedAfterLunch;
                    temp.IsRequestedAfterBreak = orderValue.IsRequestedAfterBreak;
                    temp.IsRequestedAfterDinner = orderValue.IsRequestedAfterDinner;
                    attractionRequestOrder.push(temp);
                }
            });
        
        InsertUserRequested($scope, $http, attractionRequestOrder);
        
    };

    $scope.GetOrderOfRequest = function(data) {
        
        $scope.UserRequestedOrder = [];
        if (data !== null) {
            $.each($scope.OrderOfAttractionList,
                function(key, value) {
                    $.each(value.ListGetOrderOfAttractionVisit,
                        function (googleKey, googleValue) {

                            var temp = [];
                            temp.AttractionId = googleValue.DestinationAttractionId;
                            temp.OrderNumber = googleValue.RecordCount;
                            temp.BreakInformationId = googleValue.BreakInformationId;
                            
                            if (data !== null && data.length > 0) {
                                $.each(data,
                                    function(orderKey, orderValue) {


                                        if (googleValue.DestinationAttractionId === orderValue.AttractionId) {
                                            temp.StayTime = orderValue.StayTime;
                                            temp.IsRequestedAfterBreakFast = orderValue.IsRequestedAfterBreakFast;
                                            temp.IsRequestedAfterLunch = orderValue.IsRequestedAfterLunch;
                                            temp.IsRequestedAfterBreak = orderValue.IsRequestedAfterBreak;
                                            temp.IsRequestedAfterDinner = orderValue.IsRequestedAfterDinner;
                                            return false;

                                        } else {

                                            temp.StayTime = googleValue.TimeRequiredToView;
                                            temp.IsRequestedAfterBreakFast = false;
                                            temp.IsRequestedAfterLunch = false;
                                            temp.IsRequestedAfterBreak = false;
                                            temp.IsRequestedAfterDinner = false;
                                        }

                                    });
                            } else {
                                temp.StayTime = googleValue.TimeRequiredToView;
                                temp.IsRequestedAfterBreakFast = false;
                                temp.IsRequestedAfterLunch = false;
                                temp.IsRequestedAfterBreak = false;
                                temp.IsRequestedAfterDinner = false;

                            }

                            $scope.UserRequestedOrder.push(temp);
                        });
                });
        }

        

    };
    

    $scope.init();
});