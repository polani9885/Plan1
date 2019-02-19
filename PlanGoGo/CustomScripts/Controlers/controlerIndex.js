
var appPlanGoGo = angular.module('AppPlanGoGo', ["ngTable"]);
appPlanGoGo.controller('controlerIndex', function ($scope, $http) {
    
    $scope.CategoryList = [];
    $scope.filterCategoryList = [];
    $scope.MasterCategoryList = [];
    $scope.TravelModeId;
    $scope.SourceAttractionID;
    $scope.DestinationAttractionID;
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
    $scope.images = [];
    $scope.googleMapsMainMarks = [];
    $scope.googleMapsLinesMarks = [];
    $scope.googleMapsStepMarks = [];

    $scope.UserRequestedOrder = [];
    $scope.AttractionTravelStepsNearAttractionInfo = [];
    $scope.GetAttractionsNextAttractions = [];

    $scope.checkItFinalRequestOrNot = [];
    $scope.AttractionXCategory = [];

    $scope.currentIndex = 0;

    $scope.OneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    $scope.IsDistanceCalcuationMissing = true;

    $scope.MapLineColor = ["Red","Green","Yellow","Blue","Black","Pink","Orange"];

    $scope.GetAttractionsNextAttractionsAjaxRequest = [];

    $scope.GetAttractionTravelStepsNearAttractionInfoAjaxRequest = [];
    $scope.GetAttractionXCategoryAjaxRequest = [];

    $scope.UserTripId = 0;

    $scope.MapselectedCategoryList = [];

    $scope.attractionTravelStepsId = 0;
    $scope.orderId = 0;

    





    //GetCategoryList($scope, $http);

    $scope.init = function () {
        
        //Get User stored information
        $scope.UserTripId = getUrlVars().userTripId;
        new EntryPoint.Main().IndexDbWrapper.openDataBase($scope.UserTripId, $scope);
        
    };

    //this method will called from the IndexWrapper
    $scope.LoadUserData = function () {
        
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

    $scope.MapCategorySelected = function (categoryList) {
        //selectedCategoryList
        var isRecordFound = false;
        $.each($scope.MapselectedCategoryList, function (categoryKey, categoryValue) {
            if (categoryValue["GoogleTypeID"] === categoryList.GoogleTypeID) {
                isRecordFound = true;
                $scope.MapselectedCategoryList.splice(categoryKey, 1);
                return false;
            } else {
                isRecordFound = false;
            }
        });
        if (!isRecordFound) {
            var item = [];
            item.GoogleTypeID = categoryList.GoogleTypeID;
            item.CategoryName = categoryList.TypeName;
            $scope.MapselectedCategoryList.push(item);
        }

        if ($scope.attractionTravelStepsId > 0 && $scope.orderId > 0) {
            $scope.mapStepBreakInfo($scope.attractionTravelStepsId, $scope.orderId);
        }
    };

    $scope.ClickMainCategorySelected = function(mainCategoryId) {
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
    };

    $scope.isMapCategoryExist = function(googleTypeId) {
        var v = -1;

        $.each($scope.MapselectedCategoryList,
            function(key, value) {

                if (value.GoogleTypeID === googleTypeId) {
                    v = key;
                    return false;
                }
            });

        return v;
    };

    $scope.CategorySelectedAttractionFilter = function() {


        var isNotFilterd = false;


        $scope.filterAttractionList = [];
        $($scope.selectedCategoryList).filter(function(index) {
            $($scope.attractionList).filter(function(attractionIndex) {
                if ($scope.selectedCategoryList[index].GoogleTypeID ===
                    $scope.attractionList[attractionIndex].CategoryId) {

                    isNotFilterd = false;
                    //filtering attractions from the category which user already selected
                    $.each($scope.OrderOfAttractionList,
                        function(key, value) {

                            if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                                $.each(value.ListGetOrderOfAttractionVisit,
                                    function(googleKey, googleValue) {
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
    };

    $scope.CssMainCategory = function(mainCategoryId) {
        if (mainCategoryId === $scope.MainCategorySelected) {
            return true;
        }
        return false;
    };

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


    $scope.IsCityOrderUpdated = function(cityId, recordIndex, isUp) {


        if (isUp) {
            $.each($scope.VisitCityList,
                function(key, value) {
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
                function(key, value) {
                    if (value.recordIndex === recordIndex + 1) {
                        value.recordIndex = recordIndex;
                    } else {
                        if (value.recordIndex === recordIndex) {
                            value.recordIndex = recordIndex + 1;
                        }
                    }
                });
        }

    };

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
        
        User_UserTripGetAttractions($scope, $http);
        $scope.UpdateUserReqestOrder();

        Public_GetOrderOfAttractionVisit($scope, $http);
    };

    $scope.UpdateUserReqestOrder = function() {
        
        var isFirst = false;
        $.each($scope.attractionInterestedList, function (attractionKey, attractionValue) {
            if (!isFirst) {
                isFirst = true;
                $scope.SourceAttractionID = $scope.DestinationAttractionID = attractionListConcated = attractionValue["AttractionsId"];
            }
        });

        //We need to make dynamic
        $scope.TravelModeId = 1;
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
    $scope.GoogleMapMarks = function(data) {
        var isFirst = true;
        var isBreakAdd = false;
        
        var markerdata = [];
        var index = 0;

        if (!jQuery.isEmptyObject(data)) {
            $.each(data,
                function(key, value) {

                    if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                        $.each(value.ListGetOrderOfAttractionVisit,
                            function(googleKey, googleValue) {


                                if (googleValue.SourceLatitude !== null &&
                                    googleValue.SourceLongitude !== null &&
                                    googleValue.DestinationLatitude !== null &&
                                    googleValue.DestinationLongitude !== null
                                ) {


                                    if (isFirst) {
                                        isFirst = false;
                                        googleMaps = new GMaps({
                                            div: '#googleMaps',
                                            lat: googleValue.SourceLatitude,
                                            lng: googleValue.SourceLongitude
                                        });

                                        
                                            markerdata = [];
                                            markerdata.lat = googleValue.SourceLatitude;
                                        //this special adding because to resolve the conflict between the source and destination location
                                            markerdata.lng = (parseFloat(googleValue.SourceLongitude)+.0001).toString();
                                            markerdata.title = googleValue.SourceAttractionName;
                                            markerdata.label = googleValue.RecordCount.toString();
                                            markerdata.content = googleValue.SourceAttractionName +
                                                "<br/>" +
                                                "Start Location" +
                                                "<br/>" +
                                                "GroupDate:" +
                                                value.GroupDate +
                                                "<br/>" +
                                                "Start:" +
                                                googleValue.DateAndTime +
                                                "<br/>";

                                            $scope.googleMapsMainMarks.push(AddMarderk(markerdata));
                                    }

                                    //building the display Content
                                    var destinationContent =
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
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "Date: " +
                                        "</span>";
                                    destinationContent +=
                                        "<span class='mapAttractionSideText'>" +
                                        value.GroupDate +
                                        "</span>";
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
                                        googleValue.ReachTime +
                                        " hh" +
                                        "</span>";
                                    destinationContent += "<br/>";
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "Stay for View: " +
                                        "</span>";
                                    destinationContent += "<span class='mapAttractionSideText'>" +
                                        googleValue.TimeRequiredToView +
                                        " hh" +
                                        "</span>";
                                    destinationContent += "<br/>";
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "Complete Event: " +
                                        "</span>";
                                    destinationContent += "<span class='mapAttractionSideText'>" +
                                        googleValue.EventEndTime +
                                        " hh" +
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

                                    


                                        markerdata = [];
                                        markerdata.lat = googleValue.DestinationLatitude;
                                        markerdata.lng = googleValue.DestinationLongitude;
                                        markerdata.title = title;
                                        markerdata.label = googleValue.RecordCount.toString();
                                        markerdata.content = destinationContent;

                                        $scope.googleMapsMainMarks.push(AddMarderk(markerdata));

                                    
                                        var isExist = false;
                                        $.each($scope.GetAttractionsNextAttractions,
                                            function(nextAttractionskey, nextAttractionsvalue) {
                                                if (nextAttractionsvalue.AttractionsId === AttractionsId) {
                                                    isExist = true;
                                                    return false;
                                                }
                                            });

                                        if (isExist === false) {
                                            $scope.GetAttractionsNextAttractionsAjaxRequest.push(googleValue
                                                .DestinationAttractionId);
                                            QueGetAttractionsNextAttractions($scope);
                                        }
                                    


                                    //If user select the Yes then we are reloading the map and opening the title window of map
                                    $.each(value.DrivingSteps,
                                        function(stepKey, stepValue) {

                                            
                                                var recordStepCounter = 1;
                                                $.each(stepValue.DirectionSteps,
                                                    function(sKey, sValue) {

                                                        var isNearAttractionInfovalueExist = false;
                                                        
                                                        $.each($scope.AttractionTravelStepsNearAttractionInfo,
                                                            function(nearAttractionInfokey, nearAttractionInfovalue) {
                                                                if (nearAttractionInfovalue.attractionTravelStepsId ===
                                                                    sValue.AttractionTravelStepsId &&
                                                                    nearAttractionInfovalue.orderId ===
                                                                    sValue.OrderId) {
                                                                    isNearAttractionInfovalueExist = true;
                                                                    return false;
                                                                }
                                                            });

                                                        if (isNearAttractionInfovalueExist === false) {

                                                            
                                                            var sValuetemp = [];
                                                            sValuetemp.AttractionTravelStepsId =
                                                                sValue.AttractionTravelStepsId;
                                                            sValuetemp.OrderId = sValue.OrderId;
                                                            $scope
                                                                .GetAttractionTravelStepsNearAttractionInfoAjaxRequest.push(
                                                                    sValuetemp);
                                                            

                                                            QueGetAttractionTravelStepsNearAttractionInfo($scope);

                                                            //This varaible will be used to get categories Id on the final call
                                                            $scope.checkItFinalRequestOrNot = [];
                                                            $scope.checkItFinalRequestOrNot.AttractionTravelStepsId =
                                                                sValue.AttractionTravelStepsId;
                                                            $scope.checkItFinalRequestOrNot.OrderId = sValue.OrderId;


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
                                                function(stepKey, stepValue) {

                                                    if (stepValue.RecordCount === googleValue.RecordCount) {
                                                        $.each(stepValue.DirectionSteps,
                                                            function(sKey, sValue) {

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

                                        if (index === $scope.MapLineColor.length) {
                                            index = 0;
                                        }
                                        if (path.length > 0) {
                                            
                                            $scope.googleMapsLinesMarks.push(googleMaps.drawPolyline({
                                                path: path,
                                                strokeColor: $scope.MapLineColor[index],
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
        }
        $("#googleMaps").width("800px");
        $("#googleMaps").height("400px");
        $("#googleMaps").focus();
    };

    $scope.GoogleMapStepMarks = function (data, recordCount) {
        var isFirst = true;
        var isBreakAdd = false;

        var markerdata = [];
        var index = 0;
        
        if (!jQuery.isEmptyObject(data)) {
            $.each(data,
                function (key, value) {

                    if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                        $.each(value.ListGetOrderOfAttractionVisit,
                            function (googleKey, googleValue) {


                                if (googleValue.SourceLatitude !== null &&
                                    googleValue.SourceLongitude !== null &&
                                    googleValue.DestinationLatitude !== null &&
                                    googleValue.DestinationLongitude !== null
                                ) {

                                    //If user select the Yes then we are reloading the map and opening the title window of map
                                    if (googleValue.RecordCount === recordCount) {

                                        $.each(value.DrivingSteps,
                                            function (stepKey, stepValue) {

                                                if (stepValue.RecordCount === googleValue.RecordCount) {
                                                    var recordStepCounter = 1;
                                                    $.each(stepValue.DirectionSteps,
                                                        function (sKey, sValue) {

                                                            if (sValue.Distance_Value > 1000) {
                                                                var stepTitle =
                                                                    "<span class='mapAttractionSideHeadign'>" +
                                                                        "Start Time: " +
                                                                        "</span>";
                                                                stepTitle += "<span class='mapAttractionSideText'>" +
                                                                    sValue.StartDateTime +
                                                                    "</span>";
                                                                stepTitle += "<br/>";
                                                                stepTitle += "<span class='mapAttractionSideHeadign'>" +
                                                                    "End Time: " +
                                                                    "</span>";
                                                                stepTitle += "<span class='mapAttractionSideText'>" +
                                                                    sValue.EndDateTime +
                                                                    "</span>";
                                                                stepTitle += "<br/>";
                                                                stepTitle += "<span class='mapAttractionSideHeadign'>" +
                                                                    "Distance Covered: " +
                                                                    "</span>";
                                                                stepTitle += "<span class='mapAttractionSideText'>" +
                                                                    sValue.DistanceCovered +
                                                                    "</span>";
                                                                stepTitle += "<br/>";
                                                                stepTitle += "<span class='mapAttractionSideHeadign'>" +
                                                                    "Distance Covered Time: " +
                                                                    "</span>";
                                                                stepTitle += "<span class='mapAttractionSideText'>" +
                                                                    sValue.DistanceCoveredTime +
                                                                    "</span>";
                                                                stepTitle += "<br/>";
                                                                stepTitle += "<span class='mapAttractionSideHeadign'>" +
                                                                    "Check Neary by Events <button type='button' onclick='mapStepBreakInfo(" + sValue.AttractionTravelStepsId + "," + sValue.OrderId + ")'>Yes</button>" +
                                                                    "</span>";

                                                                markerdata = [];
                                                                markerdata.lat = sValue.End_location_lat;
                                                                markerdata.lng = sValue.End_location_lng;
                                                                markerdata.title = recordStepCounter;
                                                                markerdata.label = recordStepCounter.toString();
                                                                markerdata.content = stepTitle;

                                                                AddMarderk(markerdata);

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
                                                    function (stepKey, stepValue) {

                                                        if (stepValue.RecordCount === googleValue.RecordCount) {
                                                            $.each(stepValue.DirectionSteps,
                                                                function (sKey, sValue) {

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

                                            if (index === $scope.MapLineColor.length) {
                                                index = 0;
                                            }
                                            if (path.length > 0) {
                                                $scope.googleMapsLinesMarks.push(googleMaps.drawPolyline({
                                                    path: path,
                                                    strokeColor: $scope.MapLineColor[index],
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
                    temp.IsUserInterestedBreak = 1;
                    temp.UpdatedBreakTime = $scope.UpdatedBreakTime;
                    temp.IsUserInterestedDinnerBreak = 1;
                    temp.UpdatedDinnerTime = $scope.UpdatedDinnerTime;
                    temp.IsUserInterestedBreakFast = 1;
                    temp.UpdatedBreakFastTime = $scope.UpdatedBreakFastTime;
                    temp.divId = divId;
                    breakInformation = temp;
                    $scope.UpdatedBreaks.push(temp);
                }

                

                $("div#subtabs ul").append(
                    "<li><a href='#tab_" +
                    groupValue.GroupDate.replace("/", "_").replace("/", "_") +
                    "' onclick='tabClicked(\"tab_" +
                    groupValue.GroupDate.replace("/", "_").replace("/", "_") +
                    "\")'>" +
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
        if (tabname.length === 0) {
            $("div#subtabs ul li").find('a:first').triggerHandler('click');
        } else {
            persistTab();
        }
        $scope.TourTabClick();

        $scope.WeatherUpdate(data);
        //$("#"+firstDate).triggerHandler('click');
    };
    $scope.TourTabClick = function() {
       
    };

    $scope.CategoryStyleLeft = {
        "float":"left"
    };

    $scope.CategoryStyleRight = {
        "float": "right"
    };

    //not intereseted attraction capturing and stroing into the list
    $scope.NotIntereseted = function (attractionID) {
        
        var isExisted = 0;
        $.each($scope.attractionInterestedList, function (attractionKey, attractionValue) {
            if (attractionValue.AttractionsId === attractionID) {
                //$scope.notInterestedList.push(attractionValue);
                isExisted = true;
                return false;
            }
        });

        if (isExisted) {
            DeleteNotInterestedAttractionList($scope, attractionID);
        } else {
            alert("Attraction not in the list selected");
        }
        
    };

    $scope.Interested = function (attraction) {

        
        var isExisted = false;
        if ($scope.attractionInterestedList !== null) {
            $.each($scope.attractionInterestedList,
                function(key, value) {
                    if (value.AttractionsId === attraction.AttractionsId) {
                        isExisted = true;
                        return false;
                    }
                }
            );
        }

        if (!isExisted) {
            AddInterestedAttractionList($scope, attraction.AttractionsId);
        } else {
            alert("Attraction Already selected");
        }

        
    };


    

   
    
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

    $scope.categoryFilter = function() {
        var tempFilterAttractionList = $scope.filterAttractionList;
        $scope.filterAttractionList = [];

        $(tempFilterAttractionList).filter(function(index) {
            if (tempFilterAttractionList[index].AttractionName.toLowerCase()
                .indexOf($scope.CategoryPlaceSearch.toLowerCase()) !==
                -1) {
                $scope.filterAttractionList.push(tempFilterAttractionList[index]);
            }
        });

        if ($scope.filterAttractionList.length === 0) {
            AutoComplte($scope, $http, $("#placeSeachForAdding").val());
        }

    };

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
        $scope.UpdatedBreaks[indexCounter].UpdateDayEndTime = (jQuery.type($("#" + divId + "_UpdateDayEndTime").val()) === "undefined") ? "00:00:00" : $("#" + divId + "_UpdateDayEndTime").val();
        $scope.UpdatedBreaks[indexCounter].UpdateDayStartTime = (jQuery.type($("#" + divId + "_UpdateDayStartTime").val()) === "undefined") ? "00:00:00" : $("#" + divId + "_UpdateDayStartTime").val();
        $scope.UpdatedBreaks[indexCounter].IsUserInterestedLunchBreak = (jQuery.type($("#" + divId + "_IsUserInterestedLunchBreak").val()) === "undefined") ? false : $("#" + divId + "_IsUserInterestedLunchBreak").prop('checked');
        $scope.UpdatedBreaks[indexCounter].UpdatedLunchTime = (jQuery.type($("#" + divId + "_UpdatedLunchTime").val()) === "undefined") ? "00:00:00" : $("#" + divId + "_UpdatedLunchTime").val();
        $scope.UpdatedBreaks[indexCounter].IsUserInterestedBreak = (jQuery.type($("#" + divId + "_IsUserInterestedBreak").val()) === "undefined") ? false : $("#" + divId + "_IsUserInterestedBreak").prop('checked');
        $scope.UpdatedBreaks[indexCounter].UpdatedBreakTime = (jQuery.type($("#" + divId + "_UpdatedBreakTime").val()) === "undefined") ? "00:00:00" : $("#" + divId + "_UpdatedBreakTime").val();
        $scope.UpdatedBreaks[indexCounter].IsUserInterestedDinnerBreak = (jQuery.type($("#" + divId + "_IsUserInterestedDinnerBreak").val()) === "undefined") ? false : $("#" + divId + "_IsUserInterestedDinnerBreak").prop('checked');
        $scope.UpdatedBreaks[indexCounter].UpdatedDinnerTime = (jQuery.type($("#" + divId + "_UpdatedDinnerTime").val()) === "undefined") ? "00:00:00" : $("#" + divId + "_UpdatedDinnerTime").val();
        $scope.UpdatedBreaks[indexCounter].IsUserInterestedBreakFast = (jQuery.type($("#" + divId + "_IsUserInterestedBreakFast").val()) === "undefined") ? false : $("#" + divId + "_IsUserInterestedBreakFast").prop('checked');
        $scope.UpdatedBreaks[indexCounter].UpdatedBreakFastTime = (jQuery.type($("#" + divId + "_UpdatedBreakFast").val()) === "undefined") ? "00:00:00" : $("#" + divId + "_UpdatedBreakFast").val();

        

        

        Public_GetOrderOfAttractionVisit($scope, $http);
    };


    //$scope.HideBreakInfo = function() {

    //    $.each($scope.UpdatedBreaks,
    //        function (key, value) {
    //            debugger;
    //            if (value.IsUserInterestedLunchBreak) {
    //                $("#" + value.divId + "_UpdatedLunchTime_tr").show();
    //            } else {
    //                $("#" + value.divId + "_UpdatedLunchTime_tr").hide();
    //            }

    //            if (value.IsUserInterestedBreak) {
    //                $("#" + value.divId + "_UpdatedBreakTime_tr").show();
    //            } else {
    //                $("#" + value.divId + "_UpdatedBreakTime_tr").hide();

    //            }

    //            if (value.IsUserInterestedDinnerBreak) {
    //                $("#" + value.divId + "_UpdatedDinnerTime_tr").show();
    //            } else {
    //                $("#" + value.divId + "_UpdatedDinnerTime_tr").hide();

    //            }
    //            if (value.IsUserInterestedBreakFast) {
    //                $("#" + value.divId + "_UpdatedBreakFast_tr").show();
    //            } else {
    //                $("#" + value.divId + "_UpdatedBreakFast_tr").hide();

    //            }
    //        });
    //};


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
        $("#expense_DrivingBreak").val(data.DrivingBreak);

        //calling the auto complete for filling the city information
        GetCityList($scope, $http);
        
        UserGetCityList($scope, $http);
        $scope.GetCategoryList();
        User_UserTripGetAttractions($scope, $http);
        User_RequestedBreaks($scope, $http);

        $scope.UpdateUserReqestOrder();
        User_GetUserStoredAttractinInfo($scope, $http);
        User_UserTripBuildStatus($scope, $http);

        $scope.BuildExpenseInfo();
        

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
                
                temp.IsUserInterestedBreak = value.IsUserInterestedBreak;
                if (value.UpdatedBreakTime === null) {
                    temp.UpdatedBreakTime = $scope.UpdatedBreakTime;
                } else {
                    temp.UpdatedBreakTime = convertTo12Hour(value.UpdatedBreakTime);
                }
                
                temp.IsUserInterestedDinnerBreak = value.IsUserInterestedDinnerBreak;
                if (value.UpdatedDinnerTime === null) {
                    temp.UpdatedDinnerTime = $scope.UpdatedDinnerTime;
                } else {
                    temp.UpdatedDinnerTime = convertTo12Hour(value.UpdatedDinnerTime);
                }
                
                temp.IsUserInterestedBreakFast = value.IsUserInterestedBreakFast;
                if (value.UpdatedBreakFastTime === null) {
                    temp.UpdatedBreakFastTime = $scope.UpdatedBreakFastTime;
                } else {
                    temp.UpdatedBreakFastTime = convertTo12Hour(value.UpdatedBreakFastTime);
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
    };


    $scope.AddLunchDinnerBreak = function (breakType, attractionId, divId, sourceLongitude, sourceLatitude, attractionTravelStepsId) {

        $scope.breakValue = [];
        
        $scope.breakValue.breakType = breakType;
        $scope.breakValue.attractionId = attractionId;
        $scope.breakValue.divId = divId;
        $scope.breakValue.sourceLongitude = sourceLongitude;
        $scope.breakValue.sourceLatitude = sourceLatitude;
        $scope.breakValue.attractionTravelStepsId = attractionTravelStepsId;
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
    };

    $scope.imageSlideShow = function(attractionsId, attractionName) {
        AttractionsPhotoInfo($scope, $http, attractionsId, attractionName);
    };

    $scope.PhotoInfo = function (attractionId, data, attractionName) {
        
        $scope.images = [];
        $scope.currentIndex = 0;
        
        if (data.length > 0) {
            $("#photoSlideShow")
                .dialog("open");
            var counter = 0;
            
            $.each(data,
                function (key, value) {

                    var temp = [];
                    temp.src = value["PhotoURL"];
                    temp.id = counter;
                    counter = counter + 1;
                    temp.title = attractionName + ' - Pic '+  counter;
                    $scope.images.push(temp);
                });
            $scope.displaySlideImage();


        }
    };

    $scope.displaySlideImage = function() {
        $.each($scope.images,
            function(key, value) {
                $("#photoSlideShow .slider .slide #" + value.id).hide();
            });

        $("#photoSlideShow .slider .slide #" + $scope.images[$scope.currentIndex].id).show();

        window.scrollTo(mouseX, mouseY);
    };

    $scope.next = function () {
        $scope.currentIndex < $scope.images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
        $scope.displaySlideImage();
    };

    $scope.prev = function () {
        $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.images.length - 1;
        $scope.displaySlideImage();
    };

    $scope.CategoriesTabClick = function() {
        //debugger;
        $scope.ClickMainCategorySelected($scope.MasterCategoryList[0].CategoryId);
    };


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
            FuelPrice: $("#expense_PerGallonPrice").val(),
            DrivingBreak: $("#expense_DrivingBreak").val()
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

    $scope.SearchAutoComplete = function() {

        if ($("#autoStartLocation").val().length > 3) {
            AutoComplte($scope, $http, $("#autoStartLocation").val());
        }

        if ($("#autoDestinationLocation").val().length > 3) {
            AutoComplte($scope, $http, $("#autoDestinationLocation").val());
        }
    };

    $scope.TourInfoUpdate = function(data, isSource, googleSearchText, breakType, breakDate) {
        UserRequestedAttraction($scope, data, isSource, googleSearchText, breakType, breakDate);
    };


    $scope.BreakAttractionCallingAutoComplete = function () {

        var data = {};
        data.address = $("#autoAddAttractionForBreak").val();
        data.latitude = $("#hdSourceLatitude").val();
        data.longitude = $("#hdSourceLongitude").val();
        data.distance = $("#breakDistance").val();
        AutoComplte($scope, $http, $("#autoAddAttractionForBreak").val());
    };

    $scope.ViewTimeUpdate = function (attractionId, viewTime) {

        var indexCounter = 0;
        var recordExist = false;
        var recordValue = [];
        recordValue.StayTime = viewTime;

        $.each($scope.UserRequestedOrder,
            function (key, value) {

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
            $scope.UserRequestedOrder.splice(indexCounter, 1);

        } else {
            recordValue.AttractionId = attractionId;
            recordValue.OrderNumber = 0;
            recordValue.IsRequestedAfterBreakFast = false;
            recordValue.IsRequestedAfterLunch = false;
            recordValue.IsRequestedAfterBreak = false;
            recordValue.IsRequestedAfterDinner = false;
        }

        $scope.UserRequestedOrder.push(recordValue);


        $scope.UpdateTourInfoForCustomChanges();

    };


    $scope.IsOrderUpdated = function (destinationAttractionId, recordCount, isUp, breakInformationId) {
        

        var indexCounter = 0;
        var recordExist = false;
        var recordValue = [];
        
        $.each($scope.UserRequestedOrder,
            function (key, value) {

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
            $scope.UserRequestedOrder.splice(indexCounter, 1);

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

        $scope.UserRequestedOrder.push(recordValue);


        $scope.UpdateTourInfoForCustomChanges();
    };

    $scope.UpdateTourInfoForCustomChanges = function() {
        var attractionRequestOrder = [];
        $.each($scope.UserRequestedOrder,
            function(orderKey, orderValue) {


                var temp = {};
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

        InsertUserRequested($scope, $http, attractionRequestOrder);
    };

    

    $scope.GetOrderOfRequest = function(data) {

        $scope.UserRequestedOrder = [];


        if (data !== null && data.length > 0) {

            $.each(data,
                function(orderKey, orderValue) {
                    var temp = [];
                    temp.AttractionId = orderValue.AttractionId;
                    temp.OrderNumber = orderValue.OrderNumber;
                    temp.BreakInformationId = orderValue.BreakInformationId;


                    temp.StayTime = orderValue.StayTime;
                    temp.IsRequestedAfterBreakFast = orderValue.IsRequestedAfterBreakFast;
                    temp.IsRequestedAfterLunch = orderValue.IsRequestedAfterLunch;
                    temp.IsRequestedAfterBreak = orderValue.IsRequestedAfterBreak;
                    temp.IsRequestedAfterDinner = orderValue.IsRequestedAfterDinner;


                    $scope.UserRequestedOrder.push(temp);

                });
        }


        //enabling the flag is distance calculation is missing or not
        $scope.IsDistanceCalcuationMissing = true;
        if ($scope.OrderOfAttractionList.length === 0) {
            $scope.IsDistanceCalcuationMissing = false;
        }
        $.each($scope.OrderOfAttractionList,
            function(key, value) {
                $.each(value.ListGetOrderOfAttractionVisit,
                    function(googleKey, googleValue) {


                        if (googleValue.IsDistanceCalculationMissing === 1 ||
                            googleValue.IsDistanceCalculationMissing === true) {
                            $scope.IsDistanceCalcuationMissing = false;
                            return false;
                        }

                    });
            });

        

    };


    $scope.WeatherUpdate = function(data) {
        var d = new Date();
        var destidate = new Date();
        var numberOfDaysToAdd = 6;
        destidate.setDate(destidate.getDate() + numberOfDaysToAdd);
        
        if (!jQuery.isEmptyObject(data)) {
            $.each(data,
                function (key, value) {
                    var currentDate = new Date(value.GroupDate);

                    
                    
                    if (currentDate.getTime() >= d.getTime() && currentDate.getTime() <= destidate.getTime()) {
                        if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                            $.each(value.ListGetOrderOfAttractionVisit,
                                function(googleKey, googleValue) {

                                    
                                    if (googleValue.DestinationLatitude !== null &&
                                        googleValue.DestinationLongitude !== null) {
                                        if (googleValue.DestinationLatitude !== null) {

                                            var destinatinoCoordinates = [];
                                            destinatinoCoordinates.DestinationLatitude =
                                                googleValue.DestinationLatitude;
                                            destinatinoCoordinates.DestinationLongitude =
                                                googleValue.DestinationLongitude;
                                            destinatinoCoordinates.RecordCount = googleValue.RecordCount;
                                            watherAPI($scope, destinatinoCoordinates);
                                            
                                        }
                                    }


                                });

                        }
                    }
                });
        }

    };
    $scope.weatherInfoUpdate = function (watherData, recordCount) {

        
        var d = new Date();
        var destidate = new Date();
        var numberOfDaysToAdd = 6;
        destidate.setDate(destidate.getDate() + numberOfDaysToAdd);

        if (!jQuery.isEmptyObject(watherData)) {
            if (!jQuery.isEmptyObject($scope.OrderOfAttractionList)) {
                $.each($scope.OrderOfAttractionList,
                    function (key, value) {
                        
                        var currentDate = new Date(value.GroupDate);

                        $.each(watherData.dailyForecasts.forecastLocation.forecast,
                            function(weatherKey, weatherValue) {
                                var currentDate = new Date(weatherValue.utcTime);
                                
                                if (taskDate(weatherValue.utcTime) === taskDate(value.GroupDate)) {
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
    };

    $scope.UpdateTrouInfo = function() {
        $scope.init();
        Public_GetOrderOfAttractionVisit($scope, $http);
    };

    $scope.AttractionTravelStepsNearAttractionInfoBinding = function (orderId, attractionTravelStepsId, data) {
        
        var isExist = false;
        $.each($scope.AttractionTravelStepsNearAttractionInfo,
            function(key, value) {
                if (value.attractionTravelStepsId === attractionTravelStepsId && value.orderId === orderId) {
                    isExist = true;
                    return false;
                }
            });

        if (isExist === false && data.length > 0) {
            var temp = [];
            temp.orderId = orderId;
            temp.attractionTravelStepsId = attractionTravelStepsId;
            temp.data = data;
            if ($scope.AttractionTravelStepsNearAttractionInfo === null || jQuery.type($scope.AttractionTravelStepsNearAttractionInfo) === "undefined") {
                $scope.AttractionTravelStepsNearAttractionInfo = [];
            }
            $scope.AttractionTravelStepsNearAttractionInfo.push(temp);

            //string data into the Indexdb
            var tempData = [];
            tempData.orderId = orderId;
            tempData.attractionTravelStepsId = attractionTravelStepsId;
            tempData.data = JSON.stringify(data);
            new EntryPoint.Main().IndexDbWrapper.storeTravelBreakNearByData($scope.UserTripId, tempData);
        }

        
        
        if ($scope.checkItFinalRequestOrNot.AttractionTravelStepsId === attractionTravelStepsId &&
            $scope.checkItFinalRequestOrNot.OrderId === orderId) {
            $scope.GettingAttractionXCategory();
        }
    };

    $scope.GettingAttractionXCategory = function () {
        
        var getRecordInfo = [];
            $.each($scope.AttractionTravelStepsNearAttractionInfo,
                function (key, value) {
                    $.each(value.data,
                        function (dataKey, dataValue) {
                            var exist = false;
                            
                            $.each($scope.AttractionXCategory,
                                function (attKey, attValue) {
                                    if (dataValue.AttractionsId === attValue.AttractionId) {
                                        exist = true;
                                        return false;
                                    }
                                });
                            if (exist === false) {
                                var temp = {};
                                temp.ID = dataValue.AttractionsId;
                                getRecordInfo.push(temp);
                                if (getRecordInfo.length > 25) {
                                    $scope.GetAttractionXCategoryAjaxRequest.push(getRecordInfo);
                                    QueGetAttractionXCategory($scope);
                                    return false;
                                }
                            }
                        });
                });
        
        if (getRecordInfo.length > 0) {
            GetAttractionXCategory($scope, getRecordInfo);
        }
    };

    $scope.GettingAttractionXCategoryBinding = function (data) {
        
        $.each(data,
            function(key, value) {
                var temp = [];
                temp.AttractionId = value.AttractionId;
                temp.CategoryId = value.CategoryId;
                if ($scope.AttractionXCategory === null || jQuery.type($scope.AttractionXCategory) === "undefined") {
                    $scope.AttractionXCategory = [];
                }
                $scope.AttractionXCategory.push(temp);


                //stroing data into the index db
                new EntryPoint.Main().IndexDbWrapper.storeAttractionCategoryData($scope.UserTripId, temp);
            });
    };

    $scope.GetAttractionsNextAttractionsBinding = function (attractionsId, data) {

        var isExist = false;
        $.each($scope.GetAttractionsNextAttractions,
            function (key, value) {
                if (value.AttractionsId === AttractionsId) {
                    isExist = true;
                    return false;
                }
            });
        
        if (isExist === false && data.length>0) {
            var temp = [];
            temp.attractionTravelStepsId = AttractionsId;
            temp.data = data;
            if ($scope.GetAttractionsNextAttractions === null || jQuery.type($scope.GetAttractionsNextAttractions) === "undefined") {
                $scope.GetAttractionsNextAttractions = [];
            }
            $scope.GetAttractionsNextAttractions.push(temp);

            var tempData = [];
            tempData.attractionTravelStepsId = AttractionsId;
            tempData.data = JSON.stringify(data);
            
            new EntryPoint.Main().IndexDbWrapper.storeDestinationNearByData($scope.UserTripId, tempData);
        }

    };

    $scope.mapBreakInfo = function (recordCount) {
        
        //$scope.OrderOfAttractionList
        if (recordCount === 0)
            $scope.GoogleMapMarks($scope.OrderOfAttractionList);
        else
            $scope.GoogleMapStepMarks($scope.OrderOfAttractionList, recordCount);
    };

    $scope.mapStepBreakInfo = function(attractionTravelStepsId, orderId) {
        var markerdata = [];

        var filterNearAttractionInfo = [];
        if ($scope.MapselectedCategoryList.length > 0) {
            $.each($scope.AttractionTravelStepsNearAttractionInfo,
                function(key, value) {
                    if (value.attractionTravelStepsId === attractionTravelStepsId && value.orderId === orderId) {
                        $.each(value.data,
                            function(dataKey, dataValue) {
                                $.each($scope.AttractionXCategory,
                                    function(xKey, xValue) {
                                        if (dataValue.AttractionsId === xValue.AttractionId) {
                                            $.each($scope.MapselectedCategoryList,
                                                function(mapKey, mapValue) {
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
            filterNearAttractionInfo = $scope.AttractionTravelStepsNearAttractionInfo;
        }

        $scope.AddNearByMarks(filterNearAttractionInfo);
    };

    $scope.AddNearByMarks = function(filterNearAttractionInfo) {

        googleMaps.removeMarkers($scope.googleMapsStepMarks);
        $.each(filterNearAttractionInfo,
            function(key, value) {
                if (value.attractionTravelStepsId === attractionTravelStepsId && value.orderId === orderId) {

                    $.each(value.data,
                        function(stepKey, stepValue) {


                            //building the display Content
                            var destinationContent = "<span class='mapAttractionName'>" +
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


                            markerdata = [];
                            markerdata.lat = stepValue.SourceLatitude;
                            markerdata.lng = stepValue.SourceLongitude;
                            markerdata.title = stepValue.AttractionName;
                            markerdata.content = destinationContent;
                            markerdata.IsNearLocation = true;

                            var markInfo = AddMarderk(markerdata);

                            $scope.googleMapsStepMarks.push(markInfo);
                        });


                    return false;
                }
            });
    };

    $scope.init();
});

