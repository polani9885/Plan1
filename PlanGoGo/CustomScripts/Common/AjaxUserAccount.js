function CheckUserNameExisted(username) {
    debugger;
    if (username!=null && username!="") {
        $.ajax({
            type: "GET",
            url: '/UserControls/UserExistChecking',
            dataType: "json",
            data: { userName: username },
            beforeSend: function () {
                $(".blockPage").show();
            },
            success: function (data) {

            },
            error: function (result) {
                alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
            },
            complete: function () {
                $(".blockPage").hide();
            }
        });
    }
}

function LoginCheck() {
    debugger;
    if ($("#txtLoginUsername").val() != null && $("#txtLoginUsername").val() != "") {
        $.ajax({
            type: "GET",
            url: '/UserControls/User_GetUserInformation',
            dataType: "json",
            data: { userName: $("#txtLoginUsername").val(), password: $("#txtLoginPassword").val() },
            beforeSend: function () {
                $(".blockPage").show();
            },
            success: function (data) {
                if (data.length > 0) {
                    $("#lblLoginUsernameCheckError").hide();
                    IsUserLoggedIn();
                } else {
                    $("#lblLoginUsernameCheckError").show();
                }
            },
            error: function (result) {
                alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
            },
            complete: function () {
                $(".blockPage").hide();
            }
        });
    }
}

function IsUserLoggedIn() {
    debugger;
    $.ajax({
        type: "GET",
        url: '/UserControls/IsUserLoggedIn',
        dataType: "json",
        beforeSend: function() {
            $(".blockPage").show();
        },
        success: function(data) {
            if (data.success) {
                userLoggedIn();
            } else {
                userLoggOut();
            }
        },
        error: function(result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function() {
            $(".blockPage").hide();
        }
    });

}

function userLoggedIn() {
    $("#linkLogin").hide();
    $("#linkLogOut").show();
    $("#linkMyAccount").show();
    $("#linkMyPlans").show();
}

function userLoggOut() {
    $("#linkLogin").show();
    $("#linkLogOut").hide();
    $("#linkMyAccount").hide();
    $("#linkMyPlans").hide();
}

function User_InsertingUserInfo() {
    var data = {
        UserName: $("#txtRegisterLogin").val(),
        Email: $("#txtRegisterEmail").val(),
        Password: $("#txtRegisterPassword").val()
    };
    $.ajax({
        type: "POST",
        url: '/UserControls/User_InsertingUserInfo',
        dataType: "json",
        data: data,
        beforeSend: function() {
            $(".blockPage").show();
        },
        success: function(data) {
            if (data.Success) {
                IsUserLoggedIn();
                $("#lblUserRegisterError").hide();
            } else {
                $("#lblUserRegisterError").show();
            }
        },
        error: function(result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function() {
            $(".blockPage").hide();
        }
    });
}

function UserLogOut() {
    $.ajax({
        type: "POST",
        url: '/UserControls/UserLogOut',
        dataType: "json",
        beforeSend: function () {
        },
        success: function (data) {
            if (data.Success) {
                IsUserLoggedIn();
            } 
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            $(".blockPage").hide();
        }
    });
}