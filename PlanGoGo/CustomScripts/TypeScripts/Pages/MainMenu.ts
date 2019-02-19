
import {User} from "../Modules/User";
import {Error} from "../Modules/Error";

export class MainMenu {

    public errorParameters: any = {};

    public init() {
        try {
        $(document).ready(function () {


            $("#loginController").dialog({
                autoOpen: false,
                height: 400,
                width: 350,
                modal: true,
                buttons: {
                    "Register": User.prototype.registerUser,
                    "Forget Password": User.prototype.forgetPassword,
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
                    "Login": User.prototype.loginControl,
                    "Forget Password": User.prototype.forgetPassword,
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
                    "Login": User.prototype.loginControl,
                    "Register": User.prototype.registerUser,
                    Cancel: function () {
                        $("#forgetController").dialog("close");
                    }
                },
            });


        });

        User.prototype.isUserLoggedIn();
        } catch (e) {
            MainMenu.prototype.errorParameters = {};
            Error.prototype.logError("MainMenu", "init", MainMenu.prototype.errorParameters, e);
        }
    }
}