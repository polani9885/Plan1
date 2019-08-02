"use strict";
exports.__esModule = true;
var BaseAjaxCall_1 = require("../Common/BaseAjaxCall");
var Constants_1 = require("../Common/Constants");
var Error_1 = require("./Error");
var User = /** @class */ (function () {
    function User() {
        this.parameters = {};
        this.errorParameters = {};
    }
    User.prototype.userLoggedIn = function () {
        try {
            $("#linkLogin").hide();
            $("#linkLogOut").show();
            $("#linkPlannedTour").show();
        }
        catch (e) {
            User.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("User", "userLoggedIn", User.prototype.errorParameters, e);
        }
    };
    User.prototype.userLoggOut = function () {
        try {
            $("#linkLogin").show();
            $("#linkLogOut").hide();
            $("#linkPlannedTour").hide();
        }
        catch (e) {
            User.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("User", "userLoggOut", User.prototype.errorParameters, e);
        }
    };
    User.prototype.isUserLoggedIn = function () {
        try {
            $(".blockPage").show();
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParameter("User", "isUserLoggedIn", "GET", Constants_1.Constants.localUrl + 'UserControls/IsUserLoggedIn', this.isUserLoggedInResponse);
        }
        catch (e) {
            User.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("User", "isUserLoggedIn", User.prototype.errorParameters, e);
        }
    };
    User.prototype.isUserLoggedInResponse = function (data, success) {
        try {
            //1 = success
            if (success === 1) {
                if (data.Success) {
                    User.prototype.userLoggedIn();
                }
                else {
                    User.prototype.userLoggOut();
                }
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("User", "isUserLoggedInResponse", User.prototype.errorParameters, e);
        }
    };
    User.prototype.userLogOut = function () {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParameter("User", "userLogOut", "GET", Constants_1.Constants.localUrl + 'UserControls/UserLogOut', this.userLogOutResponse);
        }
        catch (e) {
            User.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("User", "userLogOut", User.prototype.errorParameters, e);
        }
    };
    User.prototype.userLogOutResponse = function (data, success) {
        try {
            //1 = success
            if (success === 1) {
                if (data.Success) {
                    User.prototype.isUserLoggedIn();
                }
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("User", "userLogOutResponse", User.prototype.errorParameters, e);
        }
    };
    User.prototype.checkUserNameExisted = function (username) {
        try {
            if (username !== null && username !== "") {
                this.parameters = {};
                this.parameters.userName = username;
                //before ajax method calling
                $(".blockPage").show();
                BaseAjaxCall_1.BaseAjaxCall.prototype.ajax("User", "checkUserNameExisted", "GET", Constants_1.Constants.localUrl + 'UserControls/UserExistChecking', this.parameters, this.checkUserNameExistedResponse);
            }
        }
        catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.username = username;
            Error_1.Error.prototype.logError("User", "checkUserNameExisted", User.prototype.errorParameters, e);
        }
    };
    User.prototype.checkUserNameExistedResponse = function (data, success) {
        try {
            //1 = success
            if (success === 1) {
                $("#imgCheckUserNameExisted").show();
                $("#imgCheckUserNameExisted").removeAttr("src");
                if (data.Success) {
                    $("#imgCheckUserNameExisted").attr("src", "/Images/User/UI/Correct.png");
                }
                else {
                    $("#imgCheckUserNameExisted").attr("src", "/Images/User/UI/Wrong.png");
                }
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                //Errror should be log properlay
                $(".blockPage").hide();
            }
        }
        catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("User", "checkUserNameExistedResponse", User.prototype.errorParameters, e);
        }
    };
    User.prototype.registerUser = function () {
        try {
            $("#loginController")
                .dialog("close");
            $("#forgetController")
                .dialog("close");
            $("#registerController")
                .dialog("open");
        }
        catch (e) {
            User.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("User", "registerUser", User.prototype.errorParameters, e);
        }
    };
    User.prototype.forgetPassword = function () {
        try {
            $("#loginController")
                .dialog("close");
            $("#registerController")
                .dialog("close");
            $("#forgetController")
                .dialog("open");
        }
        catch (e) {
            User.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("User", "forgetPassword", User.prototype.errorParameters, e);
        }
    };
    User.prototype.loginControl = function () {
        try {
            $("#loginController")
                .dialog("open");
            $("#registerController")
                .dialog("close");
            $("#forgetController")
                .dialog("close");
        }
        catch (e) {
            User.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("User", "loginControl", User.prototype.errorParameters, e);
        }
    };
    User.prototype.loginCheck = function (username, password) {
        try {
            this.parameters = {};
            this.parameters.userName = username;
            this.parameters.password = password;
            //before ajax method calling
            $(".blockPage").show();
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajax("User", "loginCheck", "GET", Constants_1.Constants.localUrl + 'UserControls/User_GetUserInformation', this.parameters, this.loginCheckResponse);
        }
        catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.username = username;
            User.prototype.errorParameters.password = password;
            Error_1.Error.prototype.logError("User", "loginCheck", User.prototype.errorParameters, e);
        }
    };
    User.prototype.loginCheckResponse = function (data, success) {
        try {
            //1 = success
            if (success === 1) {
                if (data !== null) {
                    $("#lblLoginUsernameCheckError").hide();
                    $("#loginController").dialog("close");
                    User.prototype.isUserLoggedIn();
                }
                else {
                    $("#lblLoginUsernameCheckError").show();
                }
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("User", "loginCheckResponse", User.prototype.errorParameters, e);
        }
    };
    User.prototype.userInsertingUserInfo = function (parameters) {
        if (parameters === void 0) { parameters = {}; }
        try {
            $(".blockPage").show();
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajax("User", "userInsertingUserInfo", "POST", Constants_1.Constants.localUrl + 'UserControls/User_InsertingUserInfo', parameters, this.userInsertingUserInfoResponse);
        }
        catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.parameters = parameters;
            Error_1.Error.prototype.logError("User", "userInsertingUserInfo", User.prototype.errorParameters, e);
        }
    };
    User.prototype.userInsertingUserInfoResponse = function (data, success) {
        try {
            //1 = success
            if (success === 1) {
                if (data.Success) {
                    User.prototype.isUserLoggedIn();
                    $("#lblUserRegisterError").hide();
                    $("#registerController").dialog("close");
                }
                else {
                    $("#lblUserRegisterError").show();
                }
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("User", "userInsertingUserInfoResponse", User.prototype.errorParameters, e);
        }
    };
    return User;
}());
exports.User = User;
