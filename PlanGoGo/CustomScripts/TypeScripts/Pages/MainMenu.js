"use strict";
var User_1 = require("../Modules/User");
var Error_1 = require("../Modules/Error");
var MainMenu = (function () {
    function MainMenu() {
        this.errorParameters = {};
    }
    MainMenu.prototype.init = function () {
        try {
            $(document).ready(function () {
                $("#loginController").dialog({
                    autoOpen: false,
                    height: 400,
                    width: 350,
                    modal: true,
                    buttons: {
                        "Register": User_1.User.prototype.registerUser,
                        "Forget Password": User_1.User.prototype.forgetPassword,
                        Cancel: function () {
                            $("#loginController").dialog("close");
                        }
                    }
                });
                $("#registerController").dialog({
                    autoOpen: false,
                    height: 400,
                    width: 350,
                    modal: true,
                    buttons: {
                        "Login": User_1.User.prototype.loginControl,
                        "Forget Password": User_1.User.prototype.forgetPassword,
                        Cancel: function () {
                            $("#registerController").dialog("close");
                        }
                    }
                });
                $("#forgetController").dialog({
                    autoOpen: false,
                    height: 400,
                    width: 350,
                    modal: true,
                    buttons: {
                        "Login": User_1.User.prototype.loginControl,
                        "Register": User_1.User.prototype.registerUser,
                        Cancel: function () {
                            $("#forgetController").dialog("close");
                        }
                    }
                });
            });
            User_1.User.prototype.isUserLoggedIn();
        }
        catch (e) {
            MainMenu.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("MainMenu", "init", MainMenu.prototype.errorParameters, e);
        }
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;
