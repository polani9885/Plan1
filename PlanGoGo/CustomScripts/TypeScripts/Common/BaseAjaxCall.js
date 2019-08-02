"use strict";
exports.__esModule = true;
var Error_1 = require("../Modules/Error");
var BaseAjaxCall = /** @class */ (function () {
    function BaseAjaxCall() {
        this.temp = {};
        this.errorParameters = {};
    }
    BaseAjaxCall.prototype.ajax = function (className, methodName, type, url, parameter, callback) {
        var _this = this;
        try {
            if (type === "POST") {
                parameter = JSON.stringify(parameter);
            }
            $.ajax({
                type: type,
                url: url,
                dataType: "json",
                data: parameter,
                success: function (data) {
                    callback(data, 1);
                },
                error: function (result) {
                    _this.errorParameters = {};
                    _this.errorParameters.type = type;
                    _this.errorParameters.url = url;
                    _this.errorParameters.parameter = JSON.stringify(parameter);
                    Error_1.Error.prototype.logError(className, methodName, _this.errorParameters, result.status.toString());
                    callback(parameter, 0);
                },
                complete: function () {
                    callback(_this.temp, 3);
                }
            });
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error_1.Error.prototype.logError("BaseAjaxCall", "ajax", this.errorParameters, e);
        }
    };
    BaseAjaxCall.prototype.ajaxWithOutParameter = function (className, methodName, type, url, callback) {
        var _this = this;
        try {
            $.ajax({
                type: type,
                url: url,
                dataType: "json",
                success: function (data) {
                    callback(data, 1);
                },
                error: function (result) {
                    _this.errorParameters = {};
                    _this.errorParameters.type = type;
                    _this.errorParameters.url = url;
                    Error_1.Error.prototype.logError(className, methodName, _this.errorParameters, result.status.toString());
                    callback(_this.temp, 0);
                },
                complete: function () {
                    callback(_this.temp, 3);
                }
            });
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            Error_1.Error.prototype.logError("BaseAjaxCall", "ajaxWithOutParameter", this.errorParameters, e);
        }
    };
    BaseAjaxCall.prototype.ajaxWithCallbackValue = function (className, methodName, type, url, parameter, callbackValue, callback) {
        var _this = this;
        try {
            if (type === "POST") {
                parameter = JSON.stringify(parameter);
            }
            $.ajax({
                type: type,
                url: url,
                dataType: "json",
                data: parameter,
                success: function (data) {
                    callback(data, 1, callbackValue);
                },
                error: function (result) {
                    _this.errorParameters = {};
                    _this.errorParameters.type = type;
                    _this.errorParameters.url = url;
                    _this.errorParameters.parameter = JSON.stringify(parameter);
                    Error_1.Error.prototype.logError(className, methodName, _this.errorParameters, result.status.toString());
                    callback(parameter, 0, callbackValue);
                },
                complete: function () {
                    callback(_this.temp, 3, callbackValue);
                }
            });
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error_1.Error.prototype.logError("BaseAjaxCall", "ajaxWithCallbackValue", this.errorParameters, e);
        }
    };
    BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue = function (className, methodName, type, url, callbackValue, callback) {
        var _this = this;
        try {
            $.ajax({
                type: type,
                url: url,
                dataType: "json",
                success: function (data) {
                    callback(data, 1, callbackValue);
                },
                error: function (result) {
                    _this.errorParameters = {};
                    _this.errorParameters.type = type;
                    _this.errorParameters.url = url;
                    Error_1.Error.prototype.logError(className, methodName, _this.errorParameters, result.status.toString());
                    callback(_this.temp, 0, callbackValue);
                },
                complete: function () {
                    callback(_this.temp, 3, callbackValue);
                }
            });
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            Error_1.Error.prototype.logError("BaseAjaxCall", "ajaxWithOutParametersWithCallbackValue", this.errorParameters, e);
        }
    };
    BaseAjaxCall.prototype.ajaxWithCallbackValueContantType = function (className, methodName, type, url, parameter, callbackValue, callback) {
        var _this = this;
        try {
            if (type === "POST") {
                parameter = JSON.stringify(parameter);
            }
            $.ajax({
                type: type,
                url: url,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: parameter,
                success: function (data) {
                    callback(data, 1, callbackValue);
                },
                error: function (result) {
                    _this.errorParameters = {};
                    _this.errorParameters.type = type;
                    _this.errorParameters.url = url;
                    _this.errorParameters.parameter = JSON.stringify(parameter);
                    Error_1.Error.prototype.logError(className, methodName, _this.errorParameters, result.status.toString());
                    callback(parameter, 0, callbackValue);
                },
                complete: function () {
                    callback(_this.temp, 3, callbackValue);
                }
            });
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error_1.Error.prototype.logError("BaseAjaxCall", "ajaxWithCallbackValueContantType", this.errorParameters, e);
        }
    };
    BaseAjaxCall.prototype.ajaxWithCallbackValueContantTypeDataTypeHtml = function (className, methodName, type, url, parameter, callbackValue, callback) {
        var _this = this;
        try {
            if (type === "POST") {
                parameter = JSON.stringify(parameter);
            }
            $.ajax({
                type: type,
                url: url,
                dataType: "html",
                contentType: "application/json; charset=utf-8",
                data: parameter,
                success: function (data) {
                    callback(data, 1, callbackValue);
                },
                error: function (result) {
                    _this.errorParameters = {};
                    _this.errorParameters.type = type;
                    _this.errorParameters.url = url;
                    _this.errorParameters.parameter = JSON.stringify(parameter);
                    Error_1.Error.prototype.logError(className, methodName, _this.errorParameters, result.status.toString());
                    callback(parameter, 0, callbackValue);
                },
                complete: function () {
                    callback(_this.temp, 3, callbackValue);
                }
            });
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error_1.Error.prototype.logError("BaseAjaxCall", "ajaxWithCallbackValueContantTypeDataTypeHtml", this.errorParameters, e);
        }
    };
    BaseAjaxCall.prototype.ajaxWithCallbackJsonp = function (className, methodName, type, url, parameter, callbackValue, callback) {
        var _this = this;
        try {
            if (type === "POST") {
                parameter = JSON.stringify(parameter);
            }
            $.ajax({
                type: type,
                url: url,
                dataType: 'jsonp',
                jsonp: 'jsonpcallback',
                data: parameter,
                success: function (data) {
                    callback(data, 1, callbackValue);
                },
                error: function (result) {
                    _this.errorParameters = {};
                    _this.errorParameters.type = type;
                    _this.errorParameters.url = url;
                    _this.errorParameters.parameter = JSON.stringify(parameter);
                    Error_1.Error.prototype.logError(className, methodName, _this.errorParameters, result.status.toString());
                    callback(parameter, 0, callbackValue);
                },
                complete: function () {
                    callback(_this.temp, 3, callbackValue);
                }
            });
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error_1.Error.prototype.logError("BaseAjaxCall", "ajaxWithCallbackValueContantType", this.errorParameters, e);
        }
    };
    return BaseAjaxCall;
}());
exports.BaseAjaxCall = BaseAjaxCall;
