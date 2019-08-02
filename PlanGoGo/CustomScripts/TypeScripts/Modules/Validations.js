"use strict";
exports.__esModule = true;
var Error_1 = require("../Modules/Error");
var TourInfo_1 = require("../Modules/TourInfo");
var User_1 = require("../Modules/User");
var Validations = /** @class */ (function () {
    function Validations() {
        this.errorParameters = {};
    }
    Validations.prototype.tripNameInfo = function () {
        try {
            $("#lblTourError").hide();
            var validationError = false;
            if ($("#txtTripName").val() == null || $("#txtTripName").val() == "") {
                validationError = true;
            }
            if (!validationError) {
                var userTripId_1 = 0;
                var angularScope_1 = angular.element(document.getElementById('divTourPlan')).scope();
                angularScope_1.$apply(function () {
                    userTripId_1 = angularScope_1.userSelectedTripInfo.userTripId;
                });
                if (!userTripId_1) {
                    userTripId_1 = 0;
                }
                TourInfo_1.TourInfo.prototype.userAddUpdateTourName($("#txtTripName").val(), userTripId_1, $("#ddlCountry").val());
            }
            else {
                $("#lblTourError").show();
            }
        }
        catch (e) {
            Validations.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("Validations", "tripNameInfo", Validations.prototype.errorParameters, e);
        }
    };
    Validations.prototype.loginValidation = function () {
        try {
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
                User_1.User.prototype.loginCheck($("#txtLoginUsername").val(), $("#txtLoginUsername").val());
            }
        }
        catch (e) {
            Validations.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("Validations", "loginValidation", Validations.prototype.errorParameters, e);
        }
    };
    Validations.prototype.registerValidation = function () {
        try {
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
                var data = {
                    userName: $("#txtRegisterLogin").val(),
                    email: $("#txtRegisterEmail").val(),
                    password: $("#txtRegisterPassword").val()
                };
                User_1.User.prototype.userInsertingUserInfo(data);
            }
        }
        catch (e) {
            Validations.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("Validations", "registerValidation", Validations.prototype.errorParameters, e);
        }
    };
    Validations.prototype.forgetValidation = function () {
        try {
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
        catch (e) {
            Validations.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("Validations", "forgetValidation", Validations.prototype.errorParameters, e);
        }
    };
    return Validations;
}());
exports.Validations = Validations;
