//Getting City Information
function GetCityList() {    
    $.ajax({
        type: "GET",
        url: '/Schedule/GetCityList',        
        dataType: "json",
        beforeSend: function () {
            $(".blockPage").show();
        },
        success: function (data) {
            cityList = [];
            $.each(data, function (cityKey, cityValue) {
                var item = [];
                item.value = cityValue["CityName"];
                item.data = cityValue["CityId"];
                item.countryId = cityValue["CountryId"];
                cityList.push(item);
            });
            $('#autoCityName').autocomplete({
                source: cityList
            });


            $("#autoCityName").on("autocompleteselect", function (event, ui) {
                
                //this will get the category list
                var scope = angular.element("#controlerIndex").scope();
                scope.$apply(function () {
                    scope.countryId = 0;
                    scope.cityId = 0;
                    scope.GetCategoryList();
                });
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            $(".blockPage").hide();
        }
    });
}

//Get address information
function GetAddressInformation(address) {
    $.ajax({
        type: "GET",
        url: googleAPI + "/geocode/json",
        dataType: "json",
        data: { address: address, key: googleAPIKey },
        beforeSend: function () {
            //$(".blockPage").show();
        },
        success: function (data) {
            
            address = [];

            $.each(data, function (addressKey, addressValue) {
                if (addressKey == "results") {
                    $.each(addressValue, function (resultKey, resultValue) {
                        //$.each(resultValue, function (comKey, comValue) {
                            
                            
                            //if (comKey == "formatted_address") {
                                item = [];
                                item.data = resultValue["place_id"];
                            //}
                        //if (comKey == "place_id") {
                                item.value = resultValue["formatted_address"];
                                //item.value = resultValue["place_id"];
                                address.push(item);
                            //}
                            
                        //});                        
                    });
                }
            });
            //$("#autoAddAttraction").autocomplete({ source: [] });

            //$('#autoAddAttraction').autocomplete("destroy");
            $('#autoAddAttraction').autocomplete({
                source: address
            });

            autCompleteSelectionIsDone = false;
            $("#autoAddAttraction").on("autocompleteselect", function (event, ui) {

                if (!autCompleteSelectionIsDone) {
                    autCompleteSelectionIsDone = true;

                    //this will get the category list
                    var scope = angular.element("#controlerIndex").scope();
                    scope.$apply(function () {
                        var attractionId = "";
                        $.each(recordValue.ListGetOrderOfAttractionVisit, function (groupKey, groupValue) {
                            attractionId += ","+groupValue.DestinationAttractionId;                            
                        });

                        scope.GetPlaceDetails(ui,attractionId);
                    });
                }
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            $(".blockPage").hide();
        }
    });
}

//Get place information
function SelectedPlace(selectedPlace, attractionId) {
    

    
    $.ajax({
        type: "GET",
        //url: googleAPI + "/place/details/json",
        url: webAPIURL+"GoogleMaps/UpdateSearchInformation",
        data: { googleSearchText: selectedPlace, attractionId: attractionId },
        dataType: "jsonp",
        contentType: "application/json",
        //data: { placeid: selectedPlace.item.data, key: googleAPIKey },
        beforeSend: function () {
            //$(".blockPage").show();
        },
        success: function (data) {
            address = [];
            
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            $(".blockPage").hide();
        }
    });
}

function GetCountry() {
    
    $.ajax({
        type: "GET",
        url: '/Home/Admin_GetCountry',
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {
            if ($("#ddlRegisterCountryList") != null) {
                BindingCountryList(data);
            }
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function GetState(countryId) {
    
    $.ajax({
        type: "GET",
        url: '/Home/Admin_MasterStateGetOnCountryId',
        dataType: "json",
        data:{countryId: countryId},
        beforeSend: function () {

        },
        success: function (data) {
            if ($("#ddlRegisterStateList") != null) {
                BindingStateList(data);
            }
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function GetCity(stateId) {
    
    $.ajax({
        type: "GET",
        url: '/Home/Admin_MasterCityGetOnStateId',
        dataType: "json",
        data:{stateId: stateId},
        beforeSend: function () {

        },
        success: function (data) {
            if ($("#ddlRegisterCityList") != null) {
                BindingCityList(data);
            }
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

