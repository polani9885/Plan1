
import {Error} from "../Modules/Error";

export class BaseAjaxCall {

    public temp: any = {}
    public errorParameters: any = {};

    public ajax(className:string,methodName:string, type: string, url: string, parameter: any, callback: Function): void {
        try {
            if (type === "POST") {
                parameter = JSON.stringify(parameter);
            }
            $.ajax({
                type: type,
                url: url,
                dataType: "json",
                data: parameter,
                success: (data) => {
                    callback(data, 1);
                },
                error: (result) => {
                    this.errorParameters = {};
                    this.errorParameters.type = type;
                    this.errorParameters.url = url;
                    this.errorParameters.parameter = JSON.stringify(parameter);
                    Error.prototype.logError(className, methodName, this.errorParameters, result.status.toString());
                    callback(parameter, 0);
                },
                complete: () => {
                    callback(this.temp, 3);
                }
            });
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error.prototype.logError("BaseAjaxCall", "ajax", this.errorParameters, e);
        }
    }

    public ajaxWithOutParameter(className: string, methodName: string,type: string, url: string, callback: Function): void {
        try {
            $.ajax({
                type: type,
                url: url,
                dataType: "json",
                success: (data) => {
                    callback(data, 1);
                },
                error: (result) => {
                    this.errorParameters = {};
                    this.errorParameters.type = type;
                    this.errorParameters.url = url;
                    Error.prototype.logError(className, methodName, this.errorParameters, result.status.toString());

                    callback(this.temp, 0);
                },
                complete: () => {
                    callback(this.temp, 3);
                }
            });
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            Error.prototype.logError("BaseAjaxCall", "ajaxWithOutParameter", this.errorParameters, e);
        }
    }

    public ajaxWithCallbackValue(className: string, methodName: string,type: string, url: string, parameter: any,callbackValue:any, callback: Function): void {
        try {
            if (type === "POST") {
                parameter = JSON.stringify(parameter);
            }
            $.ajax({
                type: type,
                url: url,
                dataType: "json",
                data: parameter,
                success: (data) => {
                    callback(data, 1, callbackValue);
                },
                error: (result) => {

                    this.errorParameters = {};
                    this.errorParameters.type = type;
                    this.errorParameters.url = url;
                    this.errorParameters.parameter = JSON.stringify(parameter);
                    Error.prototype.logError(className, methodName, this.errorParameters, result.status.toString());

                    callback(parameter, 0, callbackValue);
                },
                complete: () => {
                    callback(this.temp, 3, callbackValue);
                }
            });
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error.prototype.logError("BaseAjaxCall", "ajaxWithCallbackValue", this.errorParameters, e);
        }
    }
    public ajaxWithOutParametersWithCallbackValue(className: string, methodName: string,type: string, url: string, callbackValue: any, callback: Function): void {
        try {
            $.ajax({
                type: type,
                url: url,
                dataType: "json",
                success: (data) => {
                    callback(data, 1, callbackValue);
                },
                error: (result) => {
                    this.errorParameters = {};
                    this.errorParameters.type = type;
                    this.errorParameters.url = url;
                    Error.prototype.logError(className, methodName, this.errorParameters, result.status.toString());

                    callback(this.temp, 0, callbackValue);
                },
                complete: () => {
                    callback(this.temp, 3, callbackValue);
                }
            });
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            Error.prototype.logError("BaseAjaxCall", "ajaxWithOutParametersWithCallbackValue", this.errorParameters, e);
        }
    }
    public ajaxWithCallbackValueContantType(className: string, methodName: string,type: string, url: string, parameter: any, callbackValue: any, callback: Function): void {
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
                success: (data) => {
                    callback(data, 1, callbackValue);
                },
                error: (result) => {
                    this.errorParameters = {};
                    this.errorParameters.type = type;
                    this.errorParameters.url = url;
                    this.errorParameters.parameter = JSON.stringify(parameter);
                    Error.prototype.logError(className, methodName, this.errorParameters, result.status.toString());

                    callback(parameter, 0, callbackValue);
                },
                complete: () => {
                    callback(this.temp, 3, callbackValue);
                }
            });
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error.prototype.logError("BaseAjaxCall", "ajaxWithCallbackValueContantType", this.errorParameters, e);
        }
    }

    public ajaxWithCallbackValueContantTypeDataTypeHtml(className: string, methodName: string, type: string, url: string, parameter: any, callbackValue: any, callback: Function): void {
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
                success: (data) => {
                    callback(data, 1, callbackValue);
                },
                error: (result) => {
                    this.errorParameters = {};
                    this.errorParameters.type = type;
                    this.errorParameters.url = url;
                    this.errorParameters.parameter = JSON.stringify(parameter);
                    Error.prototype.logError(className, methodName, this.errorParameters, result.status.toString());

                    callback(parameter, 0, callbackValue);
                },
                complete: () => {
                    callback(this.temp, 3, callbackValue);
                }
            });
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error.prototype.logError("BaseAjaxCall", "ajaxWithCallbackValueContantTypeDataTypeHtml", this.errorParameters, e);
        }
    }

    public ajaxWithCallbackJsonp(className: string, methodName: string, type: string, url: string, parameter: any, callbackValue: any, callback: Function): void {
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
                success: (data) => {
                    callback(data, 1, callbackValue);
                },
                error: (result) => {
                    this.errorParameters = {};
                    this.errorParameters.type = type;
                    this.errorParameters.url = url;
                    this.errorParameters.parameter = JSON.stringify(parameter);
                    Error.prototype.logError(className, methodName, this.errorParameters, result.status.toString());

                    callback(parameter, 0, callbackValue);
                },
                complete: () => {
                    callback(this.temp, 3, callbackValue);
                }
            });
        } catch (e) {
            this.errorParameters = {};
            this.errorParameters.type = type;
            this.errorParameters.url = url;
            this.errorParameters.parameter = JSON.stringify(parameter);
            Error.prototype.logError("BaseAjaxCall", "ajaxWithCallbackValueContantType", this.errorParameters, e);
        }
    }

}