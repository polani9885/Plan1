init();

var options;
//googleMapsData();
function init()
{
    
    try{
        //calling the auto complete for filling the city information
        GetCityList();

        $(function () {            
            $("#tabs, #subtabs").tabs();
            GetCountry();
            $("#editTour").dialog({
                autoOpen: false,
                height: 400,
                width: 350,
                modal: true,
                buttons: {
                    "Update": UpdateTourInformation,
                    Cancel: function () {
                        $("#editTour").dialog("close");
                    }
                },
            });

            $("#addingAttraction").dialog({
                autoOpen: false,
                height: 400,
                width: 350,
                modal: true,
                buttons: {
                    "Update": addingAttractionInformation,
                    Cancel: function () {
                        $("#addingAttraction").dialog("close");
                    }
                },
            });
            $("#addingBreak").dialog({
                autoOpen: false,
                height: 500,
                width: 900,
                modal: true,
                buttons: {
                    "Update": addingAttractionInformation,
                    Cancel: function () {
                        $("#addingBreak").dialog("close");
                    }
                },
            });
        });
    }
    catch(e)
    {
        alert(e);
    }
}

//displaying the google maps information with the current attraction information
function googleMapsData() {
    var googleMaps;
    $(document).ready(function () {
        //prettyPrint();
        googleMaps = new GMaps({
            div: '#googleMaps',
            lat: -12.043333,
            lng: -77.028333
        });
        googleMaps.addMarker({
            lat: -12.043333,
            lng: -77.03,
            title: 'Lima',
            details: {
                database_id: 42,
                author: 'HPNeo'
            },
            click: function (e) {
                if (console.log)
                    console.log(e);
                alert('You clicked in this marker');
            }
        });
        googleMaps.addMarker({
            lat: -12.042,
            lng: -77.028333,
            title: 'Marker with InfoWindow',
            infoWindow: {
                content: '<p>HTML Content</p>'
            }
        });
    });
}



function BindingCountryList(data) {
    var mySelect = $('#ddlRegisterCountryList');
    var isFirst = false;
    $.each(data, function (val, text) {
        if (!isFirst) {
            GetState(text["CountryId"]);
            isFirst = true;
        }
        mySelect.append(
            $('<option></option>').val(text["CountryId"]).html(text["CountryName"])
        );
    });
}

function BindingStateList(data) {
    var mySelect = $('#ddlRegisterStateList');
    var isFirst = false;
    $.each(data, function (val, text) {
        if (!isFirst) {
            GetCity(text["StateId"]);
            isFirst = true;
        }
        mySelect.append(
            $('<option></option>').val(text["StateId"]).html(text["StateName"])
        );
    });
}

function BindingCityList(data) {
    var isFirst = false;
    var mySelect = $('#ddlRegisterCityList');
    $.each(data, function (val, text) {
        mySelect.append(
            $('<option></option>').val(text["CityId"]).html(text["CityName"])
        );
    });
}

function CountrySelected() {
    GetState($('#ddlRegisterCountryList').val());
}

function StateSelected() {
    GetCity($('#ddlRegisterStateList').val());
}


//Seleting the time
$(document).ready(function () {
    $('#ViewTime').timepicker({
        showNowButton: true,
        showDeselectButton: true,
        defaultTime: '',  // removes the highlighted time for when the input is empty.
        showCloseButton: true
    });

});




function getAttractions() {    
    GetAddressInformation($("#autoAddAttraction").val());
}

