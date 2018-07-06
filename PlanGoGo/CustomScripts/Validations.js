function LoginValidation() {
    var validationError = false;
    if ($("#txtLoginUsername").val() == null || $("#txtLoginUsername").val() == "") {
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

    if (!validationError) {
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


    if (!validationError) {
        User_InsertingUserInfo();
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


function TripNameInfo() {
    
    $("#lblTourError").hide();
    var validationError = false;
    if ($("#txtTripName").val() == null || $("#txtTripName").val() == "") {
        validationError = true;
    }

    if (!validationError) {
        var userTripId = 0;
        var angularScope = angular.element(document.getElementById('divTourPlan')).scope();
        angularScope.$apply(function () {
            
            userTripId = angularScope.UserSelectedTripInfo.UserTripId;
        });

        if (!userTripId > 0) {
            userTripId = 0;
        }
        
        User_AddUpdateTourName($("#txtTripName").val(), userTripId);
    }
    else {
        $("#lblTourError").show();
    }
}