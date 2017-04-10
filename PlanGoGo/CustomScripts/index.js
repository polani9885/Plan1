init();
//googleMapsData();
function init()
{
    
    try{
        //calling the auto complete for filling the city information
        GetCityList();

        $(function () {            
            $("#tabs, #subtabs").tabs();        
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

$(document).ready(function () {
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
                $("#editTour").dialog("close");
            }
        },
    });

    $("#loginController").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Register": registerUser,
            "Forget Password": forgetPassword,
            Cancel: function () {
                $("#loginController").dialog("close");
            }
        },
    });

    $("#registerController").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Login": loginControl,
            "Forget Password": forgetPassword,
            Cancel: function () {
                $("#registerController").dialog("close");
            }
        },
    });

    $("#forgetController").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Login": loginControl,
            "Register": registerUser,            
            Cancel: function () {
                $("#forgetController").dialog("close");
            }
        },
    });

    GetCountry();

});


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

function registerUser() {
    $("#loginController")
    .dialog("close");
    $("#forgetController")
    .dialog("close");
    $("#registerController")
    .dialog("open");
}

function forgetPassword() {
    $("#loginController")
    .dialog("close");
    $("#registerController")
   .dialog("close");
    $("#forgetController")
    .dialog("open");
}

function LoginValidation() {    
    var validationError = false;
    if ($("#txtLoginUsername").val() == null || $("#txtLoginUsername").val()=="") {
        $("#lblLoginUsernameError").show();
        validationError = true;
    }
    else {
        $("#lblLoginUsernameError").hide();
    }

    if ($("#txtLoginPassword").val() == null || $("#txtLoginPassword").val() == "") {
        $("#lblLoginPasswordError").show();
        validationError = true;
    }
    else {
        $("#lblLoginPasswordError").hide();
    }

    if (validationError) {
        LoginCheck();
    }
}

function RegisterValidation() {
    var validationError = false;
    if ($("#txtRegisterLogin").val() == null || $("#txtRegisterLogin").val() == "") {
        $("#lblRegisterUsernameError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterUsernameError").hide();
    }

    if ($("#txtRegisterPassword").val() == null || $("#txtRegisterPassword").val() == "") {
        $("#lblRegisterPasswordError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterPasswordError").hide();
    }

    if ($("#txtRegisterConfirmPassword").val() == null || $("#txtRegisterConfirmPassword").val() == "") {
        $("#lblRegisterConfirmPasswordError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterConfirmPasswordError").hide();
    }


    if ($("#txtRegisterPassword").val() != $("#txtRegisterConfirmPassword").val()) {
        $("#lblRegisterPasswordConfirmPasswordError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterPasswordConfirmPasswordError").hide();
    }


    if ($("#txtRegisterEmail").val() == null || $("#txtRegisterEmail").val() == "") {
        $("#lblRegisterEmailError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterEmailError").hide();
    }

    if ($("#ddlRegisterCountryList").val() == null || $("#ddlRegisterCountryList").val() == "") {
        $("#lblRegisterCountryError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterCountryError").hide();
    }

    if ($("#ddlRegisterStateList").val() == null || $("#ddlRegisterStateList").val() == "") {
        $("#lblRegisterStateError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterStateError").hide();
    }

    if ($("#ddlRegisterCityList").val() == null || $("#ddlRegisterCityList").val() == "") {
        $("#lblRegisterCityError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterCityError").hide();
    }

    if ($("#txtRegisterAddressOne").val() == null || $("#txtRegisterAddressOne").val() == "") {
        $("#lblRegisterAddressOneError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterAddressOneError").hide();
    }

    if ($("#txtRegisterZipCode").val() == null || $("#txtRegisterZipCode").val() == "") {
        $("#lblRegisterZipError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterZipError").hide();
    }

    if ($("#txtRegisterPhoneNumber").val() == null || $("#txtRegisterPhoneNumber").val() == "") {
        $("#lblRegisterPhoneNumberError").show();
        validationError = true;
    }
    else {
        $("#lblRegisterPhoneNumberError").hide();
    }    

    if (!validationError) {

    }
}

function ForgetValidation() {
    $("#lblForgetError").hide();
    var validationError = false;
    if ($("#txtForgetLogin").val() == null || $("#txtForgetLogin").val() == "") {        
        validationError = true;
    }    

    if (validationError && ($("#txtForgetEmail").val() == null || $("#txtForgetEmail").val() == "")) {        
        validationError = true;
    }
    else {
        validationError = false;
    }    

    if (!validationError) {

    }
    else {
        $("#lblForgetError").show();
    }
}

