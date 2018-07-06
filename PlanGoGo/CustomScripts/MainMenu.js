init();

function init() {
    $(document).ready(function() {
        

        $("#loginController").dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: {
                "Register": registerUser,
                "Forget Password": forgetPassword,
                Cancel: function() {
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
                Cancel: function() {
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
                Cancel: function() {
                    $("#forgetController").dialog("close");
                }
            },
        });


    });

    IsUserLoggedIn();
}


function UserCheckUserNameExisted() {

    CheckUserNameExisted($("#txtRegisterLogin").val());

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

function loginControl() {
    $("#loginController")
        .dialog("open");
    $("#registerController")
        .dialog("close");
    $("#forgetController")
        .dialog("close");
}



