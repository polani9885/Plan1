function NotIntereseted(attractionId) {
    
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.ctrl.notIntereseted(attractionId);
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

function AddLunchDinnerBreak(sourceAttractionName, breakType, attractionId, divId, sourceLongitude, sourceLatitude, attractionTravelStepsId) {

    $("#addingBreak")
        .dialog("open");

    $("#breakPreviousAttractionName").text(sourceAttractionName);

    if (attractionTravelStepsId > 0) {
        $("#breakDistance").hide();
    } else {
        $("#breakDistance").show();
        $("#breakDistance").val('5');
    }

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
        
        angularScope.AddLunchDinnerBreak(breakType, attractionId, divId, sourceLongitude, sourceLatitude, attractionTravelStepsId);
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
        angularScope.ctrl.tripInfoUpdate();
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
    angularScope.$apply(function () {
        
        angularScope.ctrl.viewTimeUpdate(attractionId, $(object).val());
    });
}



//function persistTab() {
//    $('a[href="#' + tabname + '"]').click();
//}

function taskDate(inputDate) {
    var datemilli = Date.parse(inputDate);
    var d = (new Date(datemilli) + '').split(' ');
    d[2] = d[2] + ',';

    return [d[0], d[1], d[2], d[3]].join(' ');
}

function ExtraBreakSelected(sourceAttractionName,divId, attractionTravelStepsId,dropdownId) {

    var selectedDate = divId.replace("tab_", "");
    selectedDate = selectedDate.replace("_", "/").replace("_", "/");

    var breakInformationId = $("#" + dropdownId).val();
    var displayPrompt = false;
    var promptMessage = "";
    
    if (breakInformationId > 0) {
        var angularScope = angular.element(document.getElementById('main')).scope();
        
        angularScope.$apply(function () {
            $.each(angularScope.UpdatedBreaks,
                function (key, value) {
                    if (value.RequestDate === selectedDate) {
                        
                        switch(breakInformationId) {
                            case "1":
                                {
                                    if (value.BreakFastAttractionId > 0) {
                                        displayPrompt = true;
                                        promptMessage = "Selected Break Fast will be Overwrite";
                                    }
                                break;
                            }
                            case "2":
                                {
                                    
                                    if (value.LunchAttractionId > 0) {
                                        displayPrompt = true;
                                        promptMessage = "Selected Lunch will be Overwrite";
                                    }
                                break;
                            }
                            case "3":
                                {
                                    if (value.BreakAttractionId > 0) {
                                        displayPrompt = true;
                                        promptMessage = "Break will be Overwrite";
                                    }
                                break;
                            }
                            case "4":
                                {
                                    if (value.DinnerAttractionId > 0) {
                                        displayPrompt = true;
                                        promptMessage = "Selected Dinner will be Overwrite";
                                    }
                                break;
                                }
                            case "5":
                            {
                                if (value.DayBreakAttractionId > 0) {
                                    displayPrompt = true;
                                    promptMessage = "Selected Dinner will be Overwrite";
                                }
                                break;
                            }
                        }

                        return false;

                    }
                });
        });


        
        if (displayPrompt === true) {
            var r = confirm(promptMessage);
            if (r === true) {
                AddLunchDinnerBreak(sourceAttractionName, breakInformationId, 0, divId, 0, 0, attractionTravelStepsId);
            }
        } else {
            AddLunchDinnerBreak(sourceAttractionName, breakInformationId, 0, divId, 0, 0, attractionTravelStepsId);
        }
    }
    
}

function mapBreakInfo(recordCount) {
    
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.ctrl.mapBreakInfo(recordCount);
    });
}

function mapStepBreakInfo(attractionTravelStepsId, orderId) {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.ctrl.attractionTravelStepsId = attractionTravelStepsId;
        angularScope.ctrl.orderId = orderId;
        angularScope.ctrl.mapStepBreakInfo(attractionTravelStepsId, orderId);
    });
}

////GetAttractionsNextAttractionsInterval ajax call counter
//var recordCounterGetAttractionsNextAttractions = 0;
////var queCounterGetAttractionsNextAttractions = 1;
//var queValueGetAttractionsNextAttractions = 5;

//function QueGetAttractionsNextAttractions(angularScope) {
    
//        if (angularScope.GetAttractionsNextAttractionsAjaxRequest.length !==
//            recordCounterGetAttractionsNextAttractions) {
//            var differnceValue = angularScope.GetAttractionsNextAttractionsAjaxRequest.length -
//                recordCounterGetAttractionsNextAttractions;
//            if (differnceValue > 0) {
//                if (queCounterGetAttractionsNextAttractions < queValueGetAttractionsNextAttractions) {
//                    for (i = queCounterGetAttractionsNextAttractions;
//                        queCounterGetAttractionsNextAttractions < queValueGetAttractionsNextAttractions;
//                        queCounterGetAttractionsNextAttractions++) {

//                        if (recordCounterGetAttractionsNextAttractions <
//                            angularScope.GetAttractionsNextAttractionsAjaxRequest.length) {
                            
//                            GetAttractionsNextAttractions(angularScope,
//                                angularScope.GetAttractionsNextAttractionsAjaxRequest[
//                                    recordCounterGetAttractionsNextAttractions]);
//                            recordCounterGetAttractionsNextAttractions++;
//                        }
//                        else {
//                            break;
//                        }
//                    }
//                }
//            }
//        } 
//}

//GetAttractionTravelStepsNearAttractionInfo ajax call counter
var recordCounterGetAttractionTravelStepsNearAttractionInfo = 0;
//var queCounterGetAttractionTravelStepsNearAttractionInfo = 1;
var queValueGetAttractionTravelStepsNearAttractionInfo = 5;

function QueGetAttractionTravelStepsNearAttractionInfo(angularScope) {

    if (angularScope.GetAttractionTravelStepsNearAttractionInfoAjaxRequest.length !==
        recordCounterGetAttractionTravelStepsNearAttractionInfo) {
        var differnceValue = angularScope.GetAttractionTravelStepsNearAttractionInfoAjaxRequest.length -
            recordCounterGetAttractionTravelStepsNearAttractionInfo;
        if (differnceValue > 0) {
            if (queCounterGetAttractionTravelStepsNearAttractionInfo < queValueGetAttractionTravelStepsNearAttractionInfo) {
                for (i = queCounterGetAttractionTravelStepsNearAttractionInfo;
                    queCounterGetAttractionTravelStepsNearAttractionInfo < queValueGetAttractionTravelStepsNearAttractionInfo;
                    queCounterGetAttractionTravelStepsNearAttractionInfo++) {

                    if (recordCounterGetAttractionTravelStepsNearAttractionInfo <
                        angularScope.GetAttractionTravelStepsNearAttractionInfoAjaxRequest.length) {
                        
                        GetAttractionTravelStepsNearAttractionInfo(angularScope,
                            angularScope.GetAttractionTravelStepsNearAttractionInfoAjaxRequest[
                                recordCounterGetAttractionTravelStepsNearAttractionInfo].AttractionTravelStepsId,
                            angularScope.GetAttractionTravelStepsNearAttractionInfoAjaxRequest[
                                recordCounterGetAttractionTravelStepsNearAttractionInfo].OrderId);
                        recordCounterGetAttractionTravelStepsNearAttractionInfo++;
                    } else {
                        break;
                    }
                }
            }
        }
    }
}

////GetAttractionXCategory aja call counter
//var recordCounterGetAttractionXCategory = 0;
////var queCounterGetAttractionXCategory = 1;
//var queValueGetAttractionXCategory = 3;

//function QueGetAttractionXCategory(angularScope) {
    
//    if (angularScope.GetAttractionXCategoryAjaxRequest.length !==
//        recordCounterGetAttractionXCategory) {
//        var differnceValue = angularScope.GetAttractionXCategoryAjaxRequest.length -
//            recordCounterGetAttractionXCategory;
//        if (differnceValue > 0) {
//            if (queCounterGetAttractionXCategory < queValueGetAttractionXCategory) {
//                for (i = queValueGetAttractionXCategory;
//                    queCounterGetAttractionXCategory < queValueGetAttractionXCategory;
//                    queCounterGetAttractionXCategory++) {

//                    if (recordCounterGetAttractionXCategory <
//                        angularScope.GetAttractionXCategoryAjaxRequest.length) {

//                        GetAttractionXCategory(angularScope, angularScope.GetAttractionXCategoryAjaxRequest[recordCounterGetAttractionXCategory]);
                        
//                        recordCounterGetAttractionXCategory++;
//                    } else {
//                        break;
//                    }
//                }
//            }
//        }
//    }
//}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {

    return new EntryPoint.Main().CommonFunctions.getUrlVars();
    //var vars = [], hash;
    
    //var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    //for (var i = 0; i < hashes.length; i++) {
    //    hash = hashes[i].split('=');
    //    vars.push(hash[0]);
    //    vars[hash[0]] = hash[1];
    //}
    //return vars;
}


function userInterested(data) {
    
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        AddInterestedAttractionList(angularScope, data);
    });
    
}


function dayStartInformationUpdate(requestDate, object) {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        
        angularScope.ctrl.dayStartInformationUpdate(requestDate, object.value);
    });
}



