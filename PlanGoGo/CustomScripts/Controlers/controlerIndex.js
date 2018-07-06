
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
    $scope.attractionListAutoComplete = [];
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



    $scope.UpdateDayEndTime = "22:00";
    $scope.UpdateDayStartTime = "09:00";
    $scope.UpdatedLunchTime = "12:00";
    $scope.UpdatedLunchMinimumTime = "01:00";
    $scope.UpdatedBreakTime = "06:00";
    $scope.UpdatedBreakMinimumTime = "00:30";
    $scope.UpdatedDinnerTime = "20:00";
    $scope.UpdateDinnerMinimumTime = "01:00";





    //GetCategoryList($scope, $http);

    $scope.init = function () {
        //Get User stored information
        User_GetTourInformation($scope, $http);
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
    }

    $scope.CategorySelectedAttractionFilter = function () {

        $scope.filterAttractionList = [];
        $($scope.selectedCategoryList).filter(function (index) {
            $($scope.attractionList).filter(function(attractionIndex) {
                if ($scope.selectedCategoryList[index].GoogleTypeID ===
                    $scope.attractionList[attractionIndex].CategoryId) {
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

        if ($scope.VisitCityList.length === 0)
            GetCityList();

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

        if ($scope.VisitCityList.length === 0) {
            GetCityList();
        }
        PublicFilterAttractions($scope, $http);
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

        //it will filter with the selected attraction list
        $scope.CategorySelectedAttractionFilter();


        //getting attraction photo information, we will call if the photo reference is not existed then only
        var isExisted = false;
        $.each(data,
            function (attractionKey, attractionValue) {
                isExisted = false;
                $.each($scope.AttractionPhotoReference,
                    function(photoKey, photoValue) {
                        if (photoValue["AttractionsId"] === attractionValue["AttractionsId"]) {
                            isExisted = true;
                            return false;
                        }
                    });
                if (!isExisted) {
                    AttractionsPhotoInfo($scope, $http, attractionValue["AttractionsId"]);
                }
            });

        

        
    };

    $scope.PhotoInfo = function (attractionId, data) {
        var index = null;
        
        if (data.length > 0) {
            $.each($scope.AttractionPhotoReference,
                function (photoKey, photoValue) {
                    if (photoValue["AttractionsId"] === attractionId) {
                        index = photoKey;
                        return false;
                    }
                });
            if (index !== null) {
                $scope.AttractionPhotoReference.splice(index, 1);
            }

            var item = [];
            item.AttractionsId = attractionId;
            item.PhotoInfo = [];
            $.each(data,
                function(key, value) {
                    item.PhotoInfo.push(value["Photo_reference"]);
                });
            $scope.AttractionPhotoReference.push(item);
        }
    }
    

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
        $scope.StartDate = '';
        $scope.StartTime = '';
        if ($("#autoStartLocation").val() !== "") {
            $scope.SourceAttractionID = $("#autoStartLocation").val();
        }
        if ($("#autoDestinationLocation").val() !== "") {
            $scope.DestinationAttractionID = $("#autoDestinationLocation").val();
        }
        $scope.AttractionID = attractionListConcated;
        if ($("#calStartDateAndTime").val() !== "") {
            $scope.StartDate = $("#calStartDateAndTime").val();
        }
        if ($("#calDropDateAndTime").val() !== "") {
            $scope.StartTime = $("#calDropDateAndTime").val();
        }
    };

    //Ajax return data for the order of attractions
    $scope.AttractionInformationRendaring = function (data)
    {
        //Google Maps data binding
        $scope.GoogleMapMarks(data);

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

        var path = [];
        

        if (!jQuery.isEmptyObject(data)) {
            $.each(data,
                function (key, value) {
                    
                    if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                        $.each(value.ListGetOrderOfAttractionVisit,
                            function (googleKey, googleValue) {
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

                $("#" + value.divId + "_UpdatedLunchMinimumTime").timepicker({ 'timeFormat': 'H:i:s' });
                $("#" + value.divId + "_UpdatedBreakMinimumTime").timepicker({ 'timeFormat': 'H:i:s' });
                $("#" + value.divId + "_UpdateDinnerMinimumTime").timepicker({ 'timeFormat': 'H:i:s' });

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
    }
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
            });

        Public_GetOrderOfAttractionVisit($scope, $http);
    };


    $scope.PlannedTours = function(data) {
        

        $.each(data,
            function(key, value) {
                $scope.countryId = value.CountryId;
                $scope.TravelModeId = value.TravelModeId;
                $scope.StartDate = value.StartDate;
                $scope.SourceAttractionID = value.SourceAttractionID;
                $scope.DestinationAttractionID = value.DestinationAttractionID;
                return false;
            });
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
                temp.divId = "tab_" + value.RequestDate.replace("/", "_").replace("/", "_");
                $scope.UpdatedBreaks.push(temp);
            });
        
        $scope.UpdateUserReqestOrder();
        User_GetUserStoredAttractinInfo($scope, $http);
        User_UserTripBuildStatus($scope, $http);
    }


    $scope.AddLunchDinnerBreak = function (breakType, attractionId, divId) {

        $scope.selectedExtraCategoryList = [];

        $scope.breakValue = [];
        
        $scope.breakValue.breakType = breakType;
        $scope.breakValue.attractionId = attractionId;
        $scope.breakValue.divId = divId;

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
                        if ($scope.selectedCategoryList[index].GoogleTypeID !==
                            attValue) {
                            $scope.FilterNearLocations.push($scope.NearLocations[attractionIndex]);
                            return false;
                        }
                    });
            });
        });
        debugger;
    }

    $scope.init();
});