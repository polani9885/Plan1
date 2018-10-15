﻿function NotIntereseted(attractionId) {
    
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.NotIntereseted(attractionId);
    });
    //alert(attractionId);
}




//Opening the dialog for adding attraction the view time
function addingAttraction(recordCounter) {

    $("#addingAttraction")
        .data("recordCounter", recordCounter)
        .dialog("open");

    
}

//Changing the Order List
function IsOrderUpdated(destinationAttractionId, recordCount, isUp, breakInformationId) {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.IsOrderUpdated(destinationAttractionId, recordCount, isUp, breakInformationId);
    });
}


//Updating the tour information
function UpdateTourInformation() {
    
    var parameter = $(this).data("recordCounter");
    
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.UpdateTourInformation(parameter,$("#ViewTime").val());
    });
    $(this).dialog("close");
    
    //return valid;
}


function addingAttractionInformation() {
    var parameter = $(this).data("recordCounter");

    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.UpdateTourInformation(parameter, $("#ViewTime").val());
    });
    $(this).dialog("close");
}








function BreakInformationUpdate(divId) {
    
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.BreakInformationUpdate(divId);
    });
    //alert(attractionId);
}

function convertTo24Hour(time) {
    var hours = parseInt(time.substr(0, 2));
    if (time.indexOf('AM') !== -1 && hours === 12) {
        time = time.replace('12', '0');
    }
    if (time.indexOf('PM') !== -1 && hours < 12) {
        time = time.replace(hours, (hours + 12));
    }
    return time.replace(/(AM|PM)/, '');
}


function convertTo12Hour(time) {   // Take a time in 24 hour format and format it in 12 hour format
    var time_part_array = time.split(":");
    var ampm = 'AM';
    

    if (time_part_array[0] >= 12) {
        ampm = 'PM';
    }

    if (time_part_array[0] > 12) {
        time_part_array[0] = time_part_array[0] - 12;
    }

    formatted_time = time_part_array[0] + ':' + time_part_array[1] + ':' + time_part_array[2] + ' ' + ampm;

    return formatted_time;
}

function AddLunchDinnerBreak(sourceAttractionName, breakType, attractionId, divId, sourceLongitude, sourceLatitude) {

    $("#addingBreak")
        .dialog("open");

    $("#breakPreviousAttractionName").text(sourceAttractionName);

    $("#breakDistance").val('5');

    $("#hdSelectedDivId").val(divId);
    $("#hdSelectedBreakType").val(breakType);
    $("#hdSourceLongitude").val(sourceLongitude);
    $("#hdSourceLatitude").val(sourceLatitude);

    $("#chkExtraCategory input:checkbox").each(function () {
        $(this).prop('checked', true);
    });

    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {

        //Extra category by default making it is selected
        angularScope.selectedExtraCategoryList = [];
        $.each(angularScope.ExtraCategoryList,
            function(categoryKey, categoryValue) {
                var item = [];
                item.GoogleTypeID = categoryValue.GoogleTypeID;
                item.CategoryName = categoryValue.TypeName;
                angularScope.selectedExtraCategoryList.push(item);
            });
        
        angularScope.AddLunchDinnerBreak(breakType, attractionId, divId, sourceLongitude, sourceLatitude);
    });
    
}

function BreakAttractionCalling() {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.BreakAttractionCalling();
    });
}

function TripInfoUpdate() {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.TripInfoUpdate();
    });
}

function DayExpenseInformationUpdate(divId, strId) {
    
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.DayExpenseInformationUpdate(divId, strId);
    });
}
function IgnoreMyExpenseChanges() {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.IgnoreMyExpenseChanges();
    });
}

function ViewTimeUpdate(attractionId, object) {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function() {
        angularScope.ViewTimeUpdate(attractionId, $(object).val());
    });
}

function tabClicked(tabName) {
    tabname = tabName;
}

function persistTab() {
    $('a[href="#' + tabname + '"]').click();
}

function taskDate(inputDate) {
    var datemilli = Date.parse(inputDate);
    var d = (new Date(datemilli) + '').split(' ');
    d[2] = d[2] + ',';

    return [d[0], d[1], d[2], d[3]].join(' ');
}


