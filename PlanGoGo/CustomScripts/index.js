﻿init();

var options;



//googleMapsData();
function init()
{
    
    try{
       

        $(function () {            
            $("#tabs, #subtabs").tabs();
            //GetCountryList();
            

            

            //Everytime check the missing data is cleared or not
            //var reloadTourInfo = setInterval(function () { IntervalChecking(); }, 9000);
            
            
        });
    }
    catch(e)
    {
        alert(e);
    }
}



function IntervalChecking() {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        CheckTheCalculationPartIsDone(angularScope);
    });
}

function DateUpdated() {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.TourInfoUpdate('', 5, '', 0, '');
    });
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



$(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});


