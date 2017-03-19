function NotIntereseted(attractionId) {
    debugger;
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.NotIntereseted(attractionId);
    });
    //alert(attractionId);
}

//Opening the dialog for edit the view time
function editTourInformation(timeRequiredToView, recordCounter) {
    
    $("#editTour")
        .data("recordCounter",recordCounter)
        .dialog("open");
    
    if (timeRequiredToView.toString().indexOf(':') == -1)
    {
        timeRequiredToView = timeRequiredToView + ":00";
    }
    $("#ViewTime").val(timeRequiredToView); 
}


//Opening the dialog for adding attraction the view time
function addingAttraction(recordCounter) {

    $("#addingAttraction")
        .data("recordCounter", recordCounter)
        .dialog("open");

    
}

//Changing the Order List
function IsOrderUpdated(destinationAttractionId, recordCount,isUp) {
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        angularScope.IsOrderUpdated(destinationAttractionId, recordCount, isUp);
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


function loginControl() {
    $("#loginController")
     .dialog("open");
    $("#registerController")
  .dialog("close");
    $("#forgetController")
    .dialog("close");
}