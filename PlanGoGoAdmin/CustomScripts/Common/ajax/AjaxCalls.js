//getting the admin users
function Admin_GetUser(angularScope, http, ngTableParams) {

    $.ajax({
        type: "GET",
        url: '/User/Admin_GetUser',
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {
            
            angularScope.$apply(function () {                
                angularScope.manageUsers = data;
                angularScope.manageUsersBinding(data);
                //angularScope.manageUsersTableParams = createUsingFullOptions(data, ngTableParams);
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

//getting the admin users
function Admin_GetCountry(angularScope, http, ngTableParams) {

    $.ajax({
        type: "GET",
        url: '/Country/Admin_GetCountry',
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.manageCountry = data;
                angularScope.manageCountryBinding(data);                
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}




//getting the Country List
function Admin_GetCountryList(angularScope, http, ngTableParams) {
    
    $.ajax({
        type: "GET",
        url: '/Country/Admin_GetCountry',
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.manageCountry = data;                
                if (data.length > 0) {

                    

                    if (angularScope.paramCountryId > 0) {
                        $.each(data, function (_id, _value) {
                            if (_value["CountryId"] == angularScope.paramCountryId)
                            {
                                angularScope.CountrySelectedValue = _value;
                                return false;
                            }
                        });                        
                    }
                    else {
                        angularScope.CountrySelectedValue = data[0];
                    }
                    Admin_GetStates(angularScope, http, ngTableParams, angularScope.CountrySelectedValue);
                }
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

//Getting the states
function Admin_GetStates(angularScope, http, ngTableParams,countryId) {    
    $.ajax({
        type: "GET",
        url: '/MasterState/Admin_GetStates',
        data: { CountryId: countryId.CountryId },
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.manageStates = data;
                angularScope.manageStatesBinding(data);
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

//Getting the City
function Admin_GetCity(angularScope, http, ngTableParams, stateId) {
    $.ajax({
        type: "GET",
        url: '/MasterCity/Admin_GetCity',
        data: { StateId: stateId.StateId },
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.manageCity = data;
                angularScope.manageCityBinding(data);
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

//Getting the City
function Admin_MasterCategoryGet(angularScope, http, ngTableParams) {
    $.ajax({
        type: "GET",
        url: '/MasterCategory/Admin_MasterCategoryGet',        
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.masterCategory = data;
                angularScope.masterCategoryBinding(data);
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

//Getting the attractions
function AttractionsOnCityId(angularScope, http, ngTableParams) {
    
    $.ajax({
        type: "GET",
        url: '/Attractions/AttractionsOnCityId',
        data:{CityId:angularScope.CitySelectedValue.CityId},
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {                
                angularScope.AttractionsBinding(data);
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}
//Getting attraction Opentime
function GetAttractionOpenTime(angularScope, http, ngTableParams) {
    
    $.ajax({
        type: "GET",
        url: '/OpenTime/GetAttractionOpenTime',
        data: { AttractionId: angularScope.paramAttractionId },
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.manageOpenTimeBinding(data);
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function AttractionTravelTimeDistanceGet(angularScope, http, ngTableParams) {
    
    $.ajax({
        type: "GET",
        url: '/AttractionTravelTimeDistance/AttractionTravelTimeDistanceGet',
        data: { attractionId: angularScope.paramAttractionId },
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.manageAttractionTravelTimeDistanceBinding(data);
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function MissingDistanceAttractionsRecordsGet(angularScope, http, ngTableParams) {
    
    $.ajax({
        type: "GET",
        url: '/MissingDistanceAttractionsRecords/MissingDistanceAttractionsRecordsGet',       
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.MissingDistanceAttractionsRecordsBinding(data);
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function MissingDistanceAttractionsRecordsXAttractionsGet(angularScope, http, ngTableParams) {
    $.ajax({
        type: "GET",
        url: '/MissingDistanceAttractionsRecords/MissingDistanceAttractionsRecordsXAttractionsGet',
        data: { MissingDistanceAttractionsRecordsID: angularScope.paramMissingDistanceAttractionsRecordsID },
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.MissingDistanceAttractionsRecordsXAttractionsGetBinding(data);
            });
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}