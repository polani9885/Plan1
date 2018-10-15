//Getting City Information
function GetCityList(angularScope, http) {
    $.ajax({
        type: "GET",
        url: localUrl + 'Schedule/GetCityOnCountryId',
        dataType: "json",
        data:{countryId:angularScope.countryId},
        beforeSend: function () {
            $(".blockPage").show();
        },
        success: function (data) {
            
            cityList = [];
            var scope = angular.element("#controlerIndex").scope();
            $.each(data,
                function(cityKey, cityValue) {


                    var item = [];
                    item.value = cityValue.CityName;
                    item.data = cityValue.CityId;
                    item.countryId = cityValue.CountryId;
                    cityList.push(item);

                });
            $('#autoCityName').autocomplete({
                source: cityList
            });


            $("#autoCityName").on("autocompleteselect", function (event, ui) {
                //this will get the category list
                scope.selectedCityLabel = "";
                scope.$apply(function () {
                    scope.countryId = ui.item.countryId;
                    scope.cityId = ui.item.data;
                    scope.selectedCityLabel = ui.item.label;
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

function GetCountryList() {
    
    $.ajax({
        type: "GET",
        url: localUrl + 'Home/Admin_GetCountry',
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {
            if ($("#ddlRegisterCountryList") !== null) {
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
        url: localUrl + 'Home/Admin_MasterStateGetOnCountryId',
        dataType: "json",
        data:{countryId: countryId},
        beforeSend: function () {

        },
        success: function (data) {
            if ($("#ddlRegisterStateList") !== null) {
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
        url: localUrl + 'Home/Admin_MasterCityGetOnStateId',
        dataType: "json",
        data:{stateId: stateId},
        beforeSend: function () {

        },
        success: function (data) {
            if ($("#ddlRegisterCityList") !== null) {
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

function watherAPI(angularScope,param) {
    $.ajax({
        type: "GET",
        url: "https://weather.api.here.com/weather/1.0/report.json",
        dataType: 'jsonp',
        jsonp: 'jsonpcallback',
        data: {
            app_id : app_id,
            app_code:app_code,
            product:"forecast_7days_simple",
            latitude: param.DestinationLatitude,
            longitude: param.DestinationLongitude
        },
        beforeSend: function () {

        },
        success: function (data) {
            angularScope.weatherInfoUpdate(data, param.RecordCount);
        },
        error: function (result) {
            
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

