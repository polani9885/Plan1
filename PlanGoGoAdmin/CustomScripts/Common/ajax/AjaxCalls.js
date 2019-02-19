//getting the admin users
function Admin_GetUser(angularScope, http, ngTableParams) {

    $.ajax({
        type: "GET",
        url: serverUrl + '/User/Admin_GetUser',
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
        url: serverUrl + '/Country/Admin_GetCountry',
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
        url: serverUrl + '/Country/Admin_GetCountry',
        dataType: "json",
        beforeSend: function () {

        },
        success: function (data) {

            angularScope.$apply(function () {
                angularScope.manageCountry = data;                
                if (data.length > 0) {

                    

                    if (angularScope.paramCountryId > 0) {
                        $.each(data, function (_id, _value) {
                            if (_value["CountryId"] === angularScope.paramCountryId)
                            {
                                angularScope.CountrySelectedValue = _value;
                                return false;
                            }
                        });                        
                    }
                    else {
                        angularScope.CountrySelectedValue = data[0];
                    }
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
function Admin_GetStates(angularScope, http, ngTableParams) {    
    $.ajax({
        type: "GET",
        url: serverUrl + '/MasterState/Admin_GetStates',
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
function Admin_GetCity(angularScope, http, ngTableParams) {
    $.ajax({
        type: "GET",
        url: serverUrl + '/MasterCity/Admin_GetCity',
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
        url: serverUrl + '/MasterCategory/Admin_MasterCategoryGet',
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
        url: serverUrl + '/Attractions/AttractionsOnCityId',
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
        url: serverUrl + '/OpenTime/GetAttractionOpenTime',
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
        url: serverUrl + '/AttractionTravelTimeDistance/AttractionTravelTimeDistanceGet',
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
        url: serverUrl + '/MissingDistanceAttractionsRecords/MissingDistanceAttractionsRecordsGet',
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
        url: serverUrl + '/MissingDistanceAttractionsRecords/MissingDistanceAttractionsRecordsXAttractionsGet',
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

function GetBreakInformation(angularScope, http) {

    $.ajax({
        type: "GET",
        url: serverUrl + '/BreakInformation/GetBreakInformation',
        dataType: "json",
        beforeSend: function () {

        },
        aync: false,
        success: function (data) {
            angularScope.$apply(function () {
                angularScope.masterBreakInfo = data;
                angularScope.masterBreakInfoBinding(data);
            });
        },
        error: function (result) {
            //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function Scheduler_GetTravelMode(angularScope, http) {

    $.ajax({
        type: "GET",
        url: serverUrl + '/MasterTravelMode/Scheduler_GetTravelMode',
        dataType: "json",
        beforeSend: function () {

        },
        aync: false,
        success: function (data) {
            angularScope.$apply(function () {
                angularScope.masterTravelMode = data;
                angularScope.masterTravelModeBinding(data);
            });
        },
        error: function (result) {
            //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function Admin_MasterGoogleTypeGet(angularScope, http) {

    $.ajax({
        type: "GET",
        url: serverUrl + '/MasterGoogleType/Admin_MasterGoogleTypeGet',
        dataType: "json",
        beforeSend: function () {

        },
        aync: false,
        success: function (data) {
            angularScope.$apply(function () {
                angularScope.masterGoogleType = data;
                angularScope.masterGoogleTypeFiltered = data;
                angularScope.masterGoogleTypeBinding(data);
            });
        },
        error: function (result) {
            //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}

function Admin_MasterCategoryXMasterGoogleType(angularScope, http) {

    $.ajax({
        type: "GET",
        url: serverUrl + '/MasterGoogleType/Admin_MasterCategoryXMasterGoogleType',
        dataType: "json",
        beforeSend: function () {

        },
        aync: false,
        success: function (data) {
            angularScope.$apply(function () {
                angularScope.MasterCategoryXMasterGoogleType = data;
            });
        },
        error: function (result) {
            //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}
function Admin_GetMasterPriceInfo(angularScope, http) {

    $.ajax({
        type: "GET",
        url: serverUrl + '/MasterPriceInfo/Admin_GetMasterPriceInfo',
        dataType: "json",
        beforeSend: function () {

        },
        aync: false,
        success: function (data) {
            angularScope.$apply(function () {
                angularScope.masterPriceInfo = data;
                angularScope.masterPriceInfoBinding(data);
            });
        },
        error: function (result) {
            //alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {

        }
    });
}