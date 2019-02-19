var EntryPoint =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NormalAjax = __webpack_require__(1);
var NormalAjax1 = NormalAjax.NormalAjax;
var User = __webpack_require__(5);
var User1 = User.User;
var Constants = __webpack_require__(4);
var Constants1 = Constants.Constants;
var IndexDbWrapper = __webpack_require__(6);
var IndexDbWrapper1 = IndexDbWrapper.IndexDbWrapper;
var TourInfo = __webpack_require__(9);
var TourInfo1 = TourInfo.TourInfo;
var TourSchedule = __webpack_require__(10);
var TourSchedule1 = TourSchedule.TourSchedule;
var TourExpenses = __webpack_require__(11);
var TourExpenses1 = TourExpenses.TourExpenses;
var MainMenu = __webpack_require__(12);
var MainMenu1 = MainMenu.MainMenu;
var ControlerPlannedTour = __webpack_require__(13);
var ControlerPlannedTour1 = ControlerPlannedTour.ControlerPlannedTour;
var ControlerIndex = __webpack_require__(15);
var ControlerIndex1 = ControlerIndex.ControlerIndex;
var Validations = __webpack_require__(14);
var Validations1 = Validations.Validations;
var CommonFunctions = __webpack_require__(16);
var CommonFunctions1 = CommonFunctions.CommonFunctions;
var GlobalVaraibles = __webpack_require__(8);
var GlobalVaraibles1 = GlobalVaraibles.GlobalVaraibles;
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
        this.Constants = new Constants1();
        this.NormalAjax = new NormalAjax1();
        this.User = new User1();
        this.IndexDbWrapper = new IndexDbWrapper1();
        this.TourInfo = new TourInfo1();
        this.TourSchedule = new TourSchedule1();
        this.TourExpenses = new TourExpenses1();
        this.MainMenu = new MainMenu1();
        this.Validations = new Validations1();
        this.CommonFunctions = new CommonFunctions1();
    }
    return Main;
}(GlobalVaraibles1));
exports.Main = Main;
var appPlanGoGo = angular.module('AppPlanGoGo', []);
appPlanGoGo.controller("ControlerPlannedTour", ControlerPlannedTour1);
appPlanGoGo.controller("ControlerIndex", ControlerIndex1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BaseAjaxCall_1 = __webpack_require__(2);
var Constants_1 = __webpack_require__(4);
var NormalAjax = (function () {
    function NormalAjax() {
        this.baseAjax = new BaseAjaxCall_1.BaseAjaxCall();
        this.constants = new Constants_1.Constants();
    }
    return NormalAjax;
}());
exports.NormalAjax = NormalAjax;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Error_1 = __webpack_require__(3);
var BaseAjaxCall = (function () {
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Error = (function () {
    function Error() {
    }
    Error.prototype.logError = function (className, methodName, parameters, error) {
        console.log("Class Name:" +
            className +
            ", MethodName:" +
            methodName +
            ", Error:" +
            error +
            ",parameters:" +
            JSON.stringify(parameters));
    };
    return Error;
}());
exports.Error = Error;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Constants = (function () {
    function Constants() {
        //it contain all the autocomplete city information
        this.cityList = [];
        this.selectedCategoryList = [];
        this.attractionList = [];
        this.googleAPI = "https://maps.googleapis.com/maps/api";
        this.googleAPIKey = "AIzaSyBHcSbAr_gsAYNyt-_0m2eKWpvAZxwhX7w";
        this.increment = 0;
        this.autCompleteSelectionIsDone = false;
        this.webAPIURL = "http://localhost:63939/";
        //weather.api
        //used polaniservices@gmail.com
        this.app_id = "TkQvsIq3k3gVat04gzTK";
        this.app_code = "g0w6b1l81r4s1juiPuwEug";
    }
    Constants.localUrl = "http://localhost/PlanGoGo/";
    //index db table names
    Constants.tblDesinationNearyBy = "DesinationNearBy";
    Constants.tblTravelBreakNearBy = "TravelBreakNearBy";
    Constants.tblAttractionCategory = "AttractionCategory";
    Constants.userTripDataBasePrefix = "UserTrip_";
    Constants.loopCountercounter = 0;
    return Constants;
}());
exports.Constants = Constants;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BaseAjaxCall_1 = __webpack_require__(2);
var Constants_1 = __webpack_require__(4);
var Error_1 = __webpack_require__(3);
var User = (function () {
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IndexDbMain_1 = __webpack_require__(7);
var Constants_1 = __webpack_require__(4);
var GlobalVaraibles_1 = __webpack_require__(8);
var Error_1 = __webpack_require__(3);
var IndexDbWrapper = (function () {
    function IndexDbWrapper() {
        this.errorParameters = {};
        this.indexDbMain = new IndexDbMain_1.IndexDbMain();
        this.isAttractionCategoryDataDone = false;
        this.isDestinationNearByDataDone = false;
        this.isTravelBreakNearByDataDone = false;
        try {
            if ($("#main")) {
                IndexDbWrapper.prototype.controlerIndex = $("#main").scope();
            }
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "constructor", this.errorParameters, e);
        }
    }
    IndexDbWrapper.prototype.creatingUserTripDataBase = function (data) {
        try {
            $.each(data, function (key, value) {
                var tripStartDate = new Date(value.StartDate);
                if (new Date() > tripStartDate) {
                    IndexDbWrapper.prototype.deleteDataBase(value.UserTripId);
                }
                else {
                    IndexDbWrapper.prototype.createDataBase(value.UserTripId);
                }
            });
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbWrapper", "creatingUserTripDataBase", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.deleteDataBase = function (userTripId) {
        try {
            IndexDbMain_1.IndexDbMain.prototype.indexDeleteDatabase(Constants_1.Constants.userTripDataBasePrefix + userTripId);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            Error_1.Error.prototype.logError("IndexDbWrapper", "deleteDataBase", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.createDataBase = function (userTripId) {
        try {
            var dbName = Constants_1.Constants.userTripDataBasePrefix + userTripId;
            var db = IndexDbMain_1.IndexDbMain.prototype.indexCreateDatabase(dbName);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            Error_1.Error.prototype.logError("IndexDbWrapper", "createDataBase", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.storeAttractionCategoryData = function (userTripId, data) {
        try {
            IndexDbMain_1.IndexDbMain.prototype.indexStoreTableData(Constants_1.Constants.userTripDataBasePrefix + userTripId, Constants_1.Constants.tblAttractionCategory, data);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbWrapper", "storeAttractionCategoryData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.storeDestinationNearByData = function (userTripId, data) {
        try {
            IndexDbMain_1.IndexDbMain.prototype.indexStoreTableData(Constants_1.Constants.userTripDataBasePrefix + userTripId, Constants_1.Constants.tblDesinationNearyBy, data);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbWrapper", "storeDestinationNearByData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.openDataBase = function (userTripId, scope) {
        try {
            IndexDbWrapper.prototype.controlerIndex = scope;
            IndexDbMain_1.IndexDbMain.prototype.indexConnectionOpen(Constants_1.Constants.userTripDataBasePrefix + userTripId, IndexDbWrapper.prototype.gettingData);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            Error_1.Error.prototype.logError("IndexDbWrapper", "openDataBase", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.gettingData = function () {
        try {
            IndexDbWrapper.prototype.getAttractionCategoryData();
            IndexDbWrapper.prototype.getDestinationNearByData();
            IndexDbWrapper.prototype.getTravelBreakNearByData();
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "gettingData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.storeTravelBreakNearByData = function (userTripId, data) {
        try {
            IndexDbMain_1.IndexDbMain.prototype.indexStoreTableData(Constants_1.Constants.userTripDataBasePrefix + userTripId, Constants_1.Constants.tblTravelBreakNearBy, data);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.userTripId = userTripId;
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbWrapper", "storeTravelBreakNearByData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.getAttractionCategoryData = function () {
        try {
            IndexDbWrapper.prototype.controlerIndex.AttractionXCategory = [];
            IndexDbMain_1.IndexDbMain.prototype.indexGetTableData(Constants_1.Constants.tblAttractionCategory, function (data) {
                IndexDbWrapper.prototype.controlerIndex.attractionXCategory.push(data);
                IndexDbWrapper.prototype.isAttractionCategoryDataDone = true;
            });
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "getAttractionCategoryData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.getDestinationNearByData = function () {
        try {
            IndexDbWrapper.prototype.controlerIndex.GetAttractionsNextAttractions = [];
            IndexDbMain_1.IndexDbMain.prototype.indexGetTableData(Constants_1.Constants.tblDesinationNearyBy, function (data) {
                var temp = [];
                temp.attractionTravelStepsId = data.attractionTravelStepsId;
                temp.data = jQuery.parseJSON(data.data);
                IndexDbWrapper.prototype.controlerIndex.getAttractionsNextAttractions.push(temp);
                IndexDbWrapper.prototype.isDestinationNearByDataDone = true;
            });
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "getDestinationNearByData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.getTravelBreakNearByData = function () {
        try {
            IndexDbWrapper.prototype.controlerIndex.AttractionTravelStepsNearAttractionInfo = [];
            IndexDbMain_1.IndexDbMain.prototype.indexGetTableData(Constants_1.Constants.tblTravelBreakNearBy, function (data) {
                var temp = [];
                temp.orderId = data.orderId;
                temp.attractionTravelStepsId = data.attractionTravelStepsId;
                temp.data = jQuery.parseJSON(data.data);
                IndexDbWrapper.prototype.controlerIndex.attractionTravelStepsNearAttractionInfo.push(temp);
                IndexDbWrapper.prototype.isTravelBreakNearByDataDone = true;
            });
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "getTravelBreakNearByData", this.errorParameters, e);
        }
    };
    IndexDbWrapper.prototype.indexdbPreDataLoadIsDone = function (scope) {
        try {
            if ((IndexDbWrapper.prototype.isTravelBreakNearByDataDone &&
                IndexDbWrapper.prototype.isDestinationNearByDataDone &&
                IndexDbWrapper.prototype.isAttractionCategoryDataDone) ||
                Constants_1.Constants.loopCountercounter > 5) {
                scope.loadUserData();
                clearInterval(GlobalVaraibles_1.GlobalVaraibles.loadIndexDb);
            }
            Constants_1.Constants.loopCountercounter = Constants_1.Constants.loopCountercounter + 1;
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("IndexDbWrapper", "indexdbPreDataLoadIsDone", this.errorParameters, e);
        }
    };
    return IndexDbWrapper;
}());
exports.IndexDbWrapper = IndexDbWrapper;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Constants_1 = __webpack_require__(4);
var Error_1 = __webpack_require__(3);
var IndexDbMain = (function () {
    function IndexDbMain() {
        this.errorParameters = {};
    }
    IndexDbMain.prototype.indexCreateDatabase = function (dbName) {
        try {
            if (!('indexedDB' in window)) {
                console.log('This browser doesn\'t support IndexedDB');
                return;
            }
            var req = window.indexedDB.open(dbName);
            req.onsuccess = function (event) {
            };
            req.onerror = function () {
            };
            req.onupgradeneeded = function (event) {
                var db = event.target.result;
                var tblName = Constants_1.Constants.tblDesinationNearyBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants_1.Constants.tblTravelBreakNearBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants_1.Constants.tblAttractionCategory;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
            };
            return req;
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.dbName = dbName;
            Error_1.Error.prototype.logError("IndexDbMain", "indexCreateDatabase", this.errorParameters, e);
        }
    };
    IndexDbMain.prototype.indexDeleteDatabase = function (dbName) {
        try {
            var req_1 = IndexDbMain.prototype.indexCreateDatabase(dbName);
            var existed_1 = true;
            req_1.onsuccess = function () {
                req_1.result.close();
                if (!existed_1)
                    indexedDB.deleteDatabase(dbName);
            };
            req_1.onupgradeneeded = function () {
                existed_1 = false;
            };
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.dbName = dbName;
            Error_1.Error.prototype.logError("IndexDbMain", "indexDeleteDatabase", this.errorParameters, e);
        }
    };
    IndexDbMain.prototype.indexGetTableData = function (tblName, callback) {
        try {
            var objectStore = IndexDbMain.prototype.dbConnection.transaction(tblName, "readwrite");
            var tbl = void 0;
            tbl = objectStore.objectStore(tblName);
            var openCursor = tbl.openCursor();
            var cursor_1;
            openCursor.onsuccess = function (event) {
                cursor_1 = event.target.result;
                if (cursor_1) {
                    callback(cursor_1.value);
                    cursor_1.continue();
                }
            };
            openCursor.oncomplete = function (event) {
            };
            openCursor.onerror = function (event) {
            };
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.tblName = tblName;
            Error_1.Error.prototype.logError("IndexDbMain", "indexGetTableData", this.errorParameters, e);
        }
    };
    IndexDbMain.prototype.indexStoreTableData = function (dbName, tblName, data) {
        try {
            if (jQuery.type(IndexDbMain.prototype.dbConnection) === "undefined") {
                IndexDbMain.prototype.indexConnectionOpen(dbName, function () { });
            }
            var objectStore = IndexDbMain.prototype.dbConnection.transaction(tblName, "readwrite");
            var tbl = void 0;
            tbl = objectStore.objectStore(tblName);
            tbl.add(data);
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.tblName = tblName;
            this.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("IndexDbMain", "indexStoreTableData", this.errorParameters, e);
        }
    };
    IndexDbMain.prototype.indexConnectionOpen = function (dbName, callback) {
        try {
            var req_2 = indexedDB.open(dbName);
            req_2.onupgradeneeded = function (event) {
            };
            req_2.onsuccess = function (event) {
                IndexDbMain.prototype.dbConnection = req_2.result;
                callback();
            };
            req_2.onupgradeneeded = function (event) {
                var db = event.target.result;
                var tblName = Constants_1.Constants.tblDesinationNearyBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants_1.Constants.tblTravelBreakNearBy;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                tblName = Constants_1.Constants.tblAttractionCategory;
                if (!db.objectStoreNames.contains(tblName)) {
                    db.createObjectStore(tblName, { autoIncrement: true });
                }
                callback();
            };
            req_2.onerror = function (event) {
            };
        }
        catch (e) {
            this.errorParameters = {};
            this.errorParameters.dbName = dbName;
            Error_1.Error.prototype.logError("IndexDbMain", "indexConnectionOpen", this.errorParameters, e);
        }
    };
    return IndexDbMain;
}());
exports.IndexDbMain = IndexDbMain;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GlobalVaraibles = (function () {
    function GlobalVaraibles() {
    }
    GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo = 0;
    GlobalVaraibles.queCounterGetAttractionsNextAttractions = 1;
    GlobalVaraibles.queCounterGetAttractionXCategory = 1;
    //GetAttractionTravelStepsNearAttractionInfo ajax call counter
    GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo = 0;
    //var queCounterGetAttractionTravelStepsNearAttractionInfo = 1;
    GlobalVaraibles.queValueGetAttractionTravelStepsNearAttractionInfo = 5;
    //GetAttractionsNextAttractionsInterval ajax call counter
    GlobalVaraibles.recordCounterGetAttractionsNextAttractions = 0;
    //var queCounterGetAttractionsNextAttractions = 1;
    GlobalVaraibles.queValueGetAttractionsNextAttractions = 5;
    //GetAttractionXCategory aja call counter
    GlobalVaraibles.recordCounterGetAttractionXCategory = 0;
    //var queCounterGetAttractionXCategory = 1;
    GlobalVaraibles.queValueGetAttractionXCategory = 3;
    GlobalVaraibles.tabname = "";
    return GlobalVaraibles;
}());
exports.GlobalVaraibles = GlobalVaraibles;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Error_1 = __webpack_require__(3);
var BaseAjaxCall_1 = __webpack_require__(2);
var Constants_1 = __webpack_require__(4);
var IndexDbWrapper_1 = __webpack_require__(6);
var TourInfo = (function () {
    function TourInfo() {
        this.errorParameters = {};
        this.parameters = {};
        try {
            if ($("#divTourPlan")) {
                TourInfo.prototype.controlerPlanedTour = $("#divTourPlan").scope();
            }
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourInfo", "constructor", TourInfo.prototype.errorParameters, e);
        }
    }
    TourInfo.prototype.userAddUpdateTourName = function (tourName, userTripId, countryId) {
        try {
            this.parameters = {};
            this.parameters.tourName = tourName;
            this.parameters.userTripId = userTripId;
            this.parameters.countryId = countryId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourInfo", "userAddUpdateTourName", "GET", Constants_1.Constants.localUrl + 'UserControls/User_AddUpdateTourName', this.parameters, userTripId, this.userAddUpdateTourNameResponse);
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.tourName = tourName;
            TourInfo.prototype.errorParameters.userTripId = userTripId;
            TourInfo.prototype.errorParameters.countryId = countryId;
            Error_1.Error.prototype.logError("TourInfo", "userAddUpdateTourName", TourInfo.prototype.errorParameters, e);
        }
    };
    TourInfo.prototype.userAddUpdateTourNameResponse = function (data, success, userTripId) {
        try {
            //1 = success
            if (success === 1) {
                $("#popCreateNewTour")
                    .dialog("close");
                TourInfo.prototype.controlerPlanedTour = $("#divTourPlan").scope();
                if (userTripId > 0) {
                    TourInfo.prototype.controlerPlanedTour.$apply(function () {
                        TourInfo.prototype.controlerPlanedTour.ctrl.$onInit();
                    });
                }
                else {
                    TourInfo.prototype.controlerPlanedTour.$apply(function () {
                        TourInfo.prototype.controlerPlanedTour.ctrl.navigateToSchedule(data.UserTripId);
                    });
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
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.data = JSON.stringify(data);
            TourInfo.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourInfo", "userAddUpdateTourNameResponse", TourInfo.prototype.errorParameters, e);
        }
    };
    //Getting the user tour information
    TourInfo.prototype.userGetTourInformation = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourInfo", "userGetTourInformation", "GET", Constants_1.Constants.localUrl + 'UserControls/User_GetTourInformation', scope, this.userGetTourInformationResponse);
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourInfo", "userGetTourInformation", TourInfo.prototype.errorParameters, e);
        }
    };
    TourInfo.prototype.userGetTourInformationResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.plannedTours(data);
                //Creating local database
                IndexDbWrapper_1.IndexDbWrapper.prototype.creatingUserTripDataBase(data);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                TourInfo.prototype.userGetTourInformation(scope);
                $(".blockPage").hide();
            }
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.data = JSON.stringify(data);
            TourInfo.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourInfo", "userGetTourInformationResponse", TourInfo.prototype.errorParameters, e);
        }
    };
    TourInfo.prototype.getCountry = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourInfo", "getCountry", "GET", Constants_1.Constants.localUrl + 'UserControls/GetCountry', scope, this.getCountryResponse);
        }
        catch (e) {
            TourInfo.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourInfo", "getCountry", TourInfo.prototype.errorParameters, e);
        }
    };
    TourInfo.prototype.getCountryResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.bindingCountryInfo(data);
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
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.data = JSON.stringify(data);
            TourInfo.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourInfo", "getCountryResponse", TourInfo.prototype.errorParameters, e);
        }
    };
    return TourInfo;
}());
exports.TourInfo = TourInfo;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Error_1 = __webpack_require__(3);
var BaseAjaxCall_1 = __webpack_require__(2);
var Constants_1 = __webpack_require__(4);
var GlobalVaraibles_1 = __webpack_require__(8);
var TourSchedule = (function () {
    function TourSchedule() {
        this.errorParameters = {};
        this.parameters = {};
    }
    //Public get tour informaiton on tour id
    TourSchedule.prototype.getTourInformationOnTripId = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getTourInformationOnTripId", "GET", Constants_1.Constants.localUrl + 'UserControls/GetTourInformationOnTripId', scope, this.getTourInformationOnTripIdResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getTourInformationOnTripId", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getTourInformationOnTripIdResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.plannedTours(data);
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
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getTourInformationOnTripIdResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Getting the user vising city list
    TourSchedule.prototype.userGetCityList = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userGetCityList", "GET", Constants_1.Constants.localUrl + 'UserControls/User_GetCityList', scope, this.userGetCityListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userGetCityList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userGetCityListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.userGetCityListBind(data);
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
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userGetCityListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userInsertCategoryInformation = function (scope) {
        try {
            TourSchedule.prototype.parameters = {};
            var selectedCategory_1 = [];
            $.each(scope.selectedCategoryList, function (key, value) {
                var item = {};
                item.CategoryId = value.GoogleTypeID;
                item.CategoryName = value.TypeName;
                selectedCategory_1.push(item);
            });
            TourSchedule.prototype.parameters.category = selectedCategory_1;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "userInsertCategoryInformation", "GET", Constants_1.Constants.localUrl + 'UserControls/User_InsertCategoryInformation', TourSchedule.prototype.parameters, scope, this.userInsertCategoryInformationResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userInsertCategoryInformation", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userInsertCategoryInformationResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.$apply(function () {
                    scope.countryId = data.CountryId;
                });
                TourSchedule.prototype.userGetCityList(scope);
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
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userInsertCategoryInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Get trip attractions information
    TourSchedule.prototype.userUserTripGetAttractions = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userUserTripGetAttractions", "GET", Constants_1.Constants.localUrl + 'UserControls/User_UserTripGetAttractions', scope, this.userUserTripGetAttractionsResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripGetAttractions", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userUserTripGetAttractionsResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.userTripAttractionInfo(data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripGetAttractionsResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Getting trip stored attraction information
    TourSchedule.prototype.userGetUserStoredAttractinInfo = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userGetUserStoredAttractinInfo", "GET", Constants_1.Constants.localUrl + 'UserControls/User_GetUserStoredAttractinInfo', scope, this.userGetUserStoredAttractinInfoResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userGetUserStoredAttractinInfo", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userGetUserStoredAttractinInfoResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationRendaring(data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripGetAttractionsResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Trip requested breaks
    TourSchedule.prototype.userRequestedBreaks = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userRequestedBreaks", "GET", Constants_1.Constants.localUrl + 'UserControls/User_RequestedBreaks', scope, this.userRequestedBreaksResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userRequestedBreaks", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userRequestedBreaksResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.requestedBreaks(data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userRequestedBreaksResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Trip build information
    TourSchedule.prototype.userUserTripBuildStatus = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userUserTripBuildStatus", "GET", Constants_1.Constants.localUrl + 'UserControls/User_UserTripBuildStatus', scope, this.userUserTripBuildStatusResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripBuildStatus", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userUserTripBuildStatusResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.UserTripBuildStatus = data;
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userUserTripBuildStatusResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Getting attraction nearest restarunts
    TourSchedule.prototype.userGetNearestRestaruents = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionsId = data.breakValue.attractionId;
            TourSchedule.prototype.parameters.travelModeId = data.TravelModeId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            TourSchedule.prototype.parameters.distance = data.breakValue.distance;
            TourSchedule.prototype.parameters.sourceLongitude = data.breakValue.sourceLongitude;
            TourSchedule.prototype.parameters.sourceLatitude = data.breakValue.sourceLatitude;
            TourSchedule.prototype.parameters.attractionTravelStepsId = data.breakValue.attractionTravelStepsId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "userGetNearestRestaruents", "GET", Constants_1.Constants.localUrl + 'UserControls/User_GetNearestRestaruents', TourSchedule.prototype.parameters, scope, this.userGetNearestRestaruentsReponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userGetNearestRestaruents", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userGetNearestRestaruentsReponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.NearLocations = data;
                scope.FilterNearLocations = data;
                scope.ExtraCategorySelectedAttractionFilter();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userGetNearestRestaruentsReponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Auto Complete information
    TourSchedule.prototype.autoComplte = function (scope, data, countryId) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.address = data;
            TourSchedule.prototype.parameters.countryId = countryId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "autoComplte", "GET", Constants_1.Constants.localUrl + 'UserControls/AutoComplte', TourSchedule.prototype.parameters, scope, this.autoComplteResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "autoComplte", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.autoComplteResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionListAutoComplete = [];
                $.each(data, function (attractionKey, attractionValue) {
                    var item = [];
                    item.value = attractionValue["description"];
                    item.data = attractionValue["googleSearchText"];
                    scope.attractionListAutoComplete.push(item);
                });
                //Source Auto Complete Data
                $('#autoStartLocation').autocomplete({
                    source: scope.attractionListAutoComplete
                });
                //Desitnation auto complete information
                $('#autoDestinationLocation').autocomplete({
                    source: scope.attractionListAutoComplete
                });
                //Place search for adding to visit list
                $('#placeSeachForAdding').autocomplete({
                    source: scope.attractionListAutoComplete
                });
                //Place search for adding to visit list
                $('#googleMapplaceSeachForAdding').autocomplete({
                    source: scope.attractionListAutoComplete
                });
                //Source Auto Complete Data
                $('#autoAddAttractionForBreak').autocomplete({
                    source: scope.attractionListAutoComplete
                });
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "autoComplteResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //autocomplet for the break information
    TourSchedule.prototype.autoComplteBreakInfo = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.address = data.address;
            TourSchedule.prototype.parameters.latitude = data.latitude;
            TourSchedule.prototype.parameters.longitude = data.longitude;
            TourSchedule.prototype.parameters.distance = data.distance;
            TourSchedule.prototype.parameters.countryId = scope.countryId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "autoComplteBreakInfo", "GET", Constants_1.Constants.localUrl + 'UserControls/AutoComplteBreakInfo', TourSchedule.prototype.parameters, scope, this.autoComplteBreakInfoResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "autoComplte", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.autoComplteBreakInfoResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                var attractionListBreakAutoComplete_1 = [];
                $.each(data, function (attractionKey, attractionValue) {
                    var item = [];
                    //item.value = attractionValue["vicinity"];
                    //item.data = attractionValue["name"] + ' ' + attractionValue["vicinity"];
                    item.data = attractionValue["name"];
                    item.value = attractionValue["name"] + ' ' + attractionValue["vicinity"];
                    item.name = attractionValue["vicinity"];
                    attractionListBreakAutoComplete_1.push(item);
                });
                //Source Auto Complete Data
                $('#autoAddAttractionForBreak').autocomplete({
                    source: attractionListBreakAutoComplete_1
                });
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "autoComplteBreakInfoResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Trip requirested attractions
    TourSchedule.prototype.userRequestedAttraction = function (scope, autoCompleteInfo) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "userRequestedAttraction", "GET", Constants_1.Constants.localUrl + 'UserControls/UserRequestedAttraction', autoCompleteInfo, scope, this.userRequestedAttractionResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "userRequestedAttraction", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.userRequestedAttractionResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.updateTrouInfo();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "userRequestedAttractionResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Get user tipr required order
    TourSchedule.prototype.getOrderOfRequest = function (scope, countryId) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.countryId = countryId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getOrderOfRequest", "GET", Constants_1.Constants.localUrl + 'UserControls/GetOrderOfRequest', TourSchedule.prototype.parameters, scope, this.getOrderOfRequestResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getOrderOfRequest", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getOrderOfRequestResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getOrderOfRequest(data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getOrderOfRequestResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //insert trip required order
    TourSchedule.prototype.insertUserRequested = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionRequestOrder = data;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "insertUserRequested", "POST", Constants_1.Constants.localUrl + 'UserControls/InsertUserRequested', TourSchedule.prototype.parameters, scope, this.insertUserRequestedResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "insertUserRequested", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.insertUserRequestedResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.publicGetOrderOfAttractionVisit();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "insertUserRequestedResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Checking the missing distance calcuation part is dont or not
    TourSchedule.prototype.checkTheCalculationPartIsDone = function (scope) {
        try {
            if (scope.IsDistanceCalcuationMissing === false) {
                BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "checkTheCalculationPartIsDone", "GET", Constants_1.Constants.localUrl + 'UserControls/CheckTheCalculationPartIsDone', scope, this.checkTheCalculationPartIsDoneResponse);
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "checkTheCalculationPartIsDone", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.checkTheCalculationPartIsDoneResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                if (data.length === 0) {
                    if (GlobalVaraibles_1.GlobalVaraibles.isFullyLoaded === false) {
                        scope.init();
                        GlobalVaraibles_1.GlobalVaraibles.isFullyLoaded = true;
                    }
                }
                else {
                    GlobalVaraibles_1.GlobalVaraibles.isFullyLoaded = false;
                }
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "checkTheCalculationPartIsDoneResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Adding attraction information
    TourSchedule.prototype.addInterestedAttractionList = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionId = data;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "addInterestedAttractionList", "GET", Constants_1.Constants.localUrl + 'UserControls/AddInterestedAttractionList', TourSchedule.prototype.parameters, scope, this.addInterestedAttractionListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "addInterestedAttractionList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.addInterestedAttractionListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationBinding();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "addInterestedAttractionListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //deleting not interested attraction information
    TourSchedule.prototype.deleteNotInterestedAttractionList = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionId = data;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "deleteNotInterestedAttractionList", "GET", Constants_1.Constants.localUrl + 'UserControls/DeleteNotInterestedAttractionList', TourSchedule.prototype.parameters, scope, this.deleteNotInterestedAttractionListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "deleteNotInterestedAttractionList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.deleteNotInterestedAttractionListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationBinding();
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "deleteNotInterestedAttractionListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Getting attraction travel steps information
    TourSchedule.prototype.getAttractionTravelStepsNearAttractionInfo = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionTravelStepsId = data.attractionTravelStepsId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            var callBackValues = {};
            callBackValues.scope = scope;
            callBackValues.attractionTravelStepsId = data.attractionTravelStepsId;
            callBackValues.orderId = data.orderId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getAttractionTravelStepsNearAttractionInfo", "GET", Constants_1.Constants.localUrl + 'UserControls/GetAttractionTravelStepsNearAttractionInfo', TourSchedule.prototype.parameters, callBackValues, this.getAttractionTravelStepsNearAttractionInfoResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionTravelStepsNearAttractionInfo", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getAttractionTravelStepsNearAttractionInfoResponse = function (data, success, callBackData) {
        try {
            //1 = success
            if (success === 1) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo--;
                //QueGetAttractionTravelStepsNearAttractionInfo(callBackData.scope);
                callBackData.scope.attractionTravelStepsNearAttractionInfoBinding(callBackData.orderId, callBackData.attractionTravelStepsId, data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo--;
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionTravelStepsNearAttractionInfoResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Get next nearest attractions
    TourSchedule.prototype.getAttractionsNextAttractions = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionsId = data.attractionsId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            var callBackValues = {};
            callBackValues.scope = scope;
            callBackValues.attractionsId = data.attractionsId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getAttractionsNextAttractions", "GET", Constants_1.Constants.localUrl + 'UserControls/GetAttractionsNextAttractions', TourSchedule.prototype.parameters, callBackValues, this.getAttractionsNextAttractionsResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionsNextAttractions", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getAttractionsNextAttractionsResponse = function (data, success, callBackData) {
        try {
            //1 = success
            if (success === 1) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionsNextAttractions--;
                //QueGetAttractionsNextAttractions(callBackData.scope);
                callBackData.scope.getAttractionsNextAttractionsBinding(callBackData.attractionsId, data);
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionsNextAttractions--;
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionsNextAttractionsResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Get attractions next category
    TourSchedule.prototype.getAttractionXCategory = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionsId = data.attractionsId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            var callBackValues = {};
            callBackValues.scope = scope;
            callBackValues.attractionsId = data.attractionsId;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "getAttractionXCategory", "POST", Constants_1.Constants.localUrl + 'UserControls/GetAttractionsNextAttractions', TourSchedule.prototype.parameters, callBackValues, this.getAttractionXCategoryResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionXCategory", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getAttractionXCategoryResponse = function (data, success, callBackData) {
        try {
            //1 = success
            if (success === 1) {
                callBackData.scope.gettingAttractionXCategoryBinding(data);
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionXCategory--;
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
                GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionXCategory--;
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getAttractionXCategoryResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getBreakInformation = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getBreakInformation", "GET", Constants_1.Constants.localUrl + 'Schedule/GetBreakInformation', scope, this.getBreakInformationResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getBreakInformation", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getBreakInformationResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getBreakInformationBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getBreakInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getExtraCategoryList = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getExtraCategoryList", "GET", Constants_1.Constants.localUrl + 'Schedule/GetExtraCategoryList', scope, this.getExtraCategoryListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getExtraCategoryList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getExtraCategoryListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getExtraCategoryListBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getExtraCategoryListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getMasterCategory = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getMasterCategory", "GET", Constants_1.Constants.localUrl + 'Schedule/GetMasterCategory', scope, this.getMasterCategoryResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getMasterCategory", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getMasterCategoryResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getMasterCategoryResponseBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getMasterCategoryResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getCategoryList = function (scope) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getCategoryList", "GET", Constants_1.Constants.localUrl + 'Schedule/GetCategoryList', scope, this.getCategoryListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourSchedule", "getCategoryList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getCategoryListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getCategoryListBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getCategoryListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.publicFilterAttractions = function (scope, data) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "publicFilterAttractions", "POST", Constants_1.Constants.localUrl + 'Schedule/Public_FilterAttractions', data, scope, this.publicFilterAttractionsResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("TourSchedule", "publicFilterAttractions", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.publicFilterAttractionsResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.publicFilterAttractionsBind(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "getCategoryListResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.publicGetOrderOfAttractionVisit = function (scope, data) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "publicGetOrderOfAttractionVisit", "POST", Constants_1.Constants.localUrl + 'Schedule/Public_GetOrderOfAttractionVisit', data, scope, this.publicGetOrderOfAttractionVisitResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("TourSchedule", "publicGetOrderOfAttractionVisit", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.publicGetOrderOfAttractionVisitResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationRendaring(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "publicGetOrderOfAttractionVisitResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.watherAPI = function (scope, param) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.app_id = Constants_1.Constants.prototype.app_id;
            TourSchedule.prototype.parameters.app_code = Constants_1.Constants.prototype.app_code;
            TourSchedule.prototype.parameters.latitude = param.latitude;
            TourSchedule.prototype.parameters.longitude = param.longitude;
            var callBackScope = {};
            callBackScope.scope = scope;
            callBackScope.RecordCount = param.RecordCount;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "watherAPI", "GET", 'https://weather.api.here.com/weather/1.0/report.json', TourSchedule.prototype.parameters, callBackScope, this.watherAPIResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.param = JSON.stringify(param);
            Error_1.Error.prototype.logError("TourSchedule", "watherAPI", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.watherAPIResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.scope.weatherInfoUpdate(data, scope.RecordCount);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "watherAPIResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    //Gettigng the attraction information
    TourSchedule.prototype.tourInformation = function (data) {
        try {
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValueContantTypeDataTypeHtml("TourSchedule", "tourInformation", "POST", Constants_1.Constants.localUrl + 'UserControls/TourInformation', data, data.divId, this.tourInformationResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("TourSchedule", "tourInformation", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.tourInformationResponse = function (data, success, divId) {
        try {
            //1 = success
            if (success === 1) {
                $("#" + divId).empty();
                $("#" + divId).append(data);
            }
            //2 = Completed
            if (success === 2) {
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "tourInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getCityList = function (scope, countryId) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.countryId = countryId;
            $(".blockPage").show();
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getCityList", "GET", Constants_1.Constants.localUrl + 'Schedule/GetCityOnCountryId', TourSchedule.prototype.parameters, scope, this.getCityListResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.countryId = countryId;
            Error_1.Error.prototype.logError("TourSchedule", "getCityList", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.getCityListResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
                scope.getCityListBind(data);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "tourInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.attractionsPhotoInfo = function (scope, data) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionId = data.attractionId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            var thisScope = {};
            thisScope.scope = scope;
            thisScope.attractionId = data.attractionId;
            thisScope.attractionName = data.attractionName;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "attractionsPhotoInfo", "GET", Constants_1.Constants.localUrl + 'Schedule/AttractionsPhotoInfo', TourSchedule.prototype.parameters, thisScope, this.attractionsPhotoInfoResponse);
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            ;
            Error_1.Error.prototype.logError("TourSchedule", "attractionsPhotoInfo", TourSchedule.prototype.errorParameters, e);
        }
    };
    TourSchedule.prototype.attractionsPhotoInfoResponse = function (data, success, thisScope) {
        try {
            //1 = success
            if (success === 1) {
                thisScope.scope.photoInfo(thisScope.attractionId, data, thisScope.attractionName);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
        }
        catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourSchedule", "tourInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    };
    return TourSchedule;
}());
exports.TourSchedule = TourSchedule;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Error_1 = __webpack_require__(3);
var BaseAjaxCall_1 = __webpack_require__(2);
var Constants_1 = __webpack_require__(4);
var TourExpenses = (function () {
    function TourExpenses() {
        this.errorParameters = {};
        this.parameters = {};
    }
    TourExpenses.prototype.userUserTripUpdate = function (scope, data) {
        try {
            TourExpenses.prototype.parameters = {};
            TourExpenses.prototype.parameters.noOfPersons = data.NoOfPersons;
            TourExpenses.prototype.parameters.noOfCars = data.NoOfCars;
            TourExpenses.prototype.parameters.carMileage = data.CarMileage;
            TourExpenses.prototype.parameters.fuelPrice = data.FuelPrice;
            TourExpenses.prototype.parameters.drivingBreak = data.DrivingBreak;
            BaseAjaxCall_1.BaseAjaxCall.prototype.ajaxWithCallbackValue("TourExpenses", "userUserTripUpdate", "GET", Constants_1.Constants.localUrl + 'UserControls/User_UserTrip_Update', TourExpenses.prototype.parameters, scope, this.userUserTripUpdateResponse);
        }
        catch (e) {
            TourExpenses.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("TourExpenses", "userUserTripUpdate", TourExpenses.prototype.errorParameters, e);
        }
    };
    TourExpenses.prototype.userUserTripUpdateResponse = function (data, success, scope) {
        try {
            //1 = success
            if (success === 1) {
            }
            //2 = Completed
            if (success === 2) {
            }
            //0 = Error
            if (success === 0) {
            }
        }
        catch (e) {
            TourExpenses.prototype.errorParameters = {};
            TourExpenses.prototype.errorParameters.data = JSON.stringify(data);
            TourExpenses.prototype.errorParameters.success = success;
            Error_1.Error.prototype.logError("TourExpenses", "userUserTripUpdateResponse", TourExpenses.prototype.errorParameters, e);
        }
    };
    return TourExpenses;
}());
exports.TourExpenses = TourExpenses;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var User_1 = __webpack_require__(5);
var Error_1 = __webpack_require__(3);
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


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Constants_1 = __webpack_require__(4);
var TourInfo_1 = __webpack_require__(9);
var Error_1 = __webpack_require__(3);
var Validations_1 = __webpack_require__(14);
var ControlerPlannedTour = (function () {
    function ControlerPlannedTour($scope) {
        var _this = this;
        this.errorParameters = {};
        this.$onInit = function () {
            try {
                TourInfo_1.TourInfo.prototype.userGetTourInformation(_this);
                TourInfo_1.TourInfo.prototype.getCountry(_this);
                $(document).ready(function () {
                    $("#popCreateNewTour").dialog({
                        autoOpen: false,
                        height: 400,
                        width: 350,
                        modal: true,
                        buttons: {
                            "Add": Validations_1.Validations.prototype.tripNameInfo,
                            Cancel: function () {
                                $("#popCreateNewTour").dialog("close");
                            }
                        }
                    });
                });
            }
            catch (e) {
                ControlerPlannedTour.prototype.errorParameters = {};
                Error_1.Error.prototype.logError("ControlerPlannedTour", "$onInit", ControlerPlannedTour.prototype.errorParameters, e);
            }
        };
        try {
            this.scope = $scope;
            this.scope.tourScheduleUrl = Constants_1.Constants.localUrl + "Schedule/index?userTripId=";
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerPlannedTour", "constructor", ControlerPlannedTour.prototype.errorParameters, e);
        }
    }
    ControlerPlannedTour.prototype.plannedTours = function (data) {
        var _this = this;
        try {
            this.scope.$apply(function () {
                var plannedTour = [];
                _this.scope.plannedTour = [];
                $.each(data, function (key, value) {
                    var temp = {};
                    temp.tripName = value.TripName;
                    temp.createdDate = value.CreatedDate;
                    temp.countryId = value.CountryId;
                    temp.userTripId = value.UserTripId;
                    plannedTour.push(temp);
                });
                _this.scope.plannedTour = plannedTour;
            });
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            ControlerPlannedTour.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerPlannedTour", "plannedTours", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.bindingCountryInfo = function (data) {
        var _this = this;
        try {
            this.scope.$apply(function () {
                var countryList = [];
                _this.scope.countryList = [];
                $.each(data, function (attractionKey, attractionValue) {
                    var item = {};
                    item.countryId = attractionValue["CountryId"];
                    item.countryName = attractionValue["CountryName"];
                    countryList.push(item);
                });
                _this.scope.countryList = countryList;
            });
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            ControlerPlannedTour.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerPlannedTour", "bindingCountryInfo", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.editTripName = function (tourInfo) {
        try {
            this.scope.userSelectedTripInfo = tourInfo;
            $("#popCreateNewTour")
                .dialog("open");
            $("#txtTripName").val(tourInfo.tripName);
            $("#ddlCountry").val(tourInfo.countryId);
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            ControlerPlannedTour.prototype.errorParameters.data = tourInfo;
            Error_1.Error.prototype.logError("ControlerPlannedTour", "editTripName", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.createNewTour = function () {
        try {
            this.scope.userSelectedTripInfo = [];
            $("#popCreateNewTour")
                .dialog("open");
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerPlannedTour", "createNewTour", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.navigateToSchedule = function (userTripId) {
        try {
            window.open(this.scope.tourScheduleUrl + userTripId.toString(), '_self');
        }
        catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerPlannedTour", "navigateToSchedule", ControlerPlannedTour.prototype.errorParameters, e);
        }
    };
    ControlerPlannedTour.prototype.tripInfo = function () {
    };
    return ControlerPlannedTour;
}());
exports.ControlerPlannedTour = ControlerPlannedTour;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Error_1 = __webpack_require__(3);
var TourInfo_1 = __webpack_require__(9);
var User_1 = __webpack_require__(5);
var Validations = (function () {
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


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Error_1 = __webpack_require__(3);
var IndexDbWrapper_1 = __webpack_require__(6);
var CommonFunctions_1 = __webpack_require__(16);
var TourSchedule_1 = __webpack_require__(10);
var GlobalVaraibles_1 = __webpack_require__(8);
var MapsActions_1 = __webpack_require__(17);
var Constants_1 = __webpack_require__(4);
var TourExpenses_1 = __webpack_require__(11);
var ControlerIndex = (function () {
    function ControlerIndex($scope) {
        var _this = this;
        this.errorParameters = {};
        this.timeInterval = [];
        this.timeBreak = [];
        this.dataLoading = false;
        this.$onInit = function () {
            try {
                _this.scope.categoryList = [];
                _this.scope.filterCategoryList = [];
                _this.scope.masterCategoryList = [];
                _this.scope.travelModeId = 0;
                _this.scope.sourceAttractionId = 0;
                _this.scope.destinationAttractionId = 0;
                _this.scope.attractionList = [];
                _this.scope.filterAttractionList = [];
                _this.scope.filterAttractionListAutoSelect = [];
                _this.scope.attractionListAutoComplete = [];
                _this.scope.attractionListBreakAutoComplete = [];
                _this.scope.attractionInterestedList = [];
                _this.scope.visitCityList = [];
                _this.scope.updatedBreaks = [];
                _this.scope.userTripBuildStatus = [];
                _this.scope.orderOfAttractionList = [];
                _this.scope.extraCategoryList = [];
                _this.scope.selectedExtraCategoryList = [];
                _this.scope.filterNearLocations = [];
                _this.scope.images = [];
                _this.scope.googleMapsMainMarks = [];
                _this.scope.googleMapsLinesMarks = [];
                _this.scope.googleMapsStepMarks = [];
                _this.scope.userRequestedOrder = [];
                _this.scope.attractionTravelStepsNearAttractionInfo = [];
                _this.scope.getAttractionsNextAttractions = [];
                _this.scope.attractionXCategory = [];
                _this.scope.getAttractionsNextAttractionsAjaxRequest = [];
                _this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest = [];
                _this.scope.getAttractionXCategoryAjaxRequest = [];
                _this.scope.mapselectedCategoryList = [];
                _this.scope.selectedCategoryList = [];
                _this.scope.categoryStyleLeft = [];
                _this.scope.categoryStyleRight = [];
                var selfThis_1 = _this;
                _this.scope.oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                _this.scope.isDistanceCalcuationMissing = true;
                _this.scope.mapLineColor = ["Red", "Green", "Yellow", "Blue", "Black", "Pink", "Orange"];
                _this.scope.countryId = 0;
                _this.scope.cityId = 0;
                _this.scope.currentIndex = 0;
                _this.scope.userTripId = 0;
                _this.scope.attractionTravelStepsId = 0;
                _this.scope.orderId = 0;
                _this.scope.googleTravelStep = [];
                _this.timeInterval.push({ text: "12:00 AM", value: "00:00:00" });
                _this.timeInterval.push({ text: "00:30 AM", value: "00:30:00" });
                _this.timeInterval.push({ text: "01:00 AM", value: "01:00:00" });
                _this.timeInterval.push({ text: "01:30 AM", value: "01:30:00" });
                _this.timeInterval.push({ text: "02:00 AM", value: "02:00:00" });
                _this.timeInterval.push({ text: "02:30 AM", value: "02:30:00" });
                _this.timeInterval.push({ text: "03:00 AM", value: "03:00:00" });
                _this.timeInterval.push({ text: "03:30 AM", value: "03:30:00" });
                _this.timeInterval.push({ text: "04:00 AM", value: "04:00:00" });
                _this.timeInterval.push({ text: "04:30 AM", value: "04:30:00" });
                _this.timeInterval.push({ text: "05:00 AM", value: "05:00:00" });
                _this.timeInterval.push({ text: "05:30 AM", value: "05:30:00" });
                _this.timeInterval.push({ text: "06:00 AM", value: "06:00:00" });
                _this.timeInterval.push({ text: "06:30 AM", value: "06:30:00" });
                _this.timeInterval.push({ text: "07:00 AM", value: "07:00:00" });
                _this.timeInterval.push({ text: "07:30 AM", value: "07:30:00" });
                _this.timeInterval.push({ text: "08:00 AM", value: "08:00:00" });
                _this.timeInterval.push({ text: "08:30 AM", value: "08:30:00" });
                _this.timeInterval.push({ text: "09:00 AM", value: "09:00:00" });
                _this.timeInterval.push({ text: "09:30 AM", value: "09:30:00" });
                _this.timeInterval.push({ text: "10:00 AM", value: "10:00:00" });
                _this.timeInterval.push({ text: "10:30 AM", value: "10:30:00" });
                _this.timeInterval.push({ text: "11:00 AM", value: "11:00:00" });
                _this.timeInterval.push({ text: "11:30 AM", value: "11:30:00" });
                _this.timeInterval.push({ text: "12:00 PM", value: "12:00:00" });
                _this.timeInterval.push({ text: "00:30 PM", value: "12:30:00" });
                _this.timeInterval.push({ text: "01:00 PM", value: "13:00:00" });
                _this.timeInterval.push({ text: "01:30 PM", value: "13:30:00" });
                _this.timeInterval.push({ text: "02:00 PM", value: "14:00:00" });
                _this.timeInterval.push({ text: "02:30 PM", value: "14:30:00" });
                _this.timeInterval.push({ text: "03:00 PM", value: "15:00:00" });
                _this.timeInterval.push({ text: "03:30 PM", value: "15:30:00" });
                _this.timeInterval.push({ text: "04:00 PM", value: "16:00:00" });
                _this.timeInterval.push({ text: "04:30 PM", value: "16:30:00" });
                _this.timeInterval.push({ text: "05:00 PM", value: "17:00:00" });
                _this.timeInterval.push({ text: "05:30 PM", value: "17:30:00" });
                _this.timeInterval.push({ text: "06:00 PM", value: "18:00:00" });
                _this.timeInterval.push({ text: "06:30 PM", value: "18:30:00" });
                _this.timeInterval.push({ text: "07:00 PM", value: "19:00:00" });
                _this.timeInterval.push({ text: "07:30 PM", value: "19:30:00" });
                _this.timeInterval.push({ text: "08:00 PM", value: "20:00:00" });
                _this.timeInterval.push({ text: "08:30 PM", value: "20:30:00" });
                _this.timeInterval.push({ text: "09:00 PM", value: "21:00:00" });
                _this.timeInterval.push({ text: "09:30 PM", value: "21:30:00" });
                _this.timeInterval.push({ text: "10:00 PM", value: "22:00:00" });
                _this.timeInterval.push({ text: "10:30 PM", value: "22:30:00" });
                _this.timeInterval.push({ text: "11:00 PM", value: "23:00:00" });
                _this.timeInterval.push({ text: "11:30 PM", value: "23:30:00" });
                _this.timeBreak.push({
                    text: "00:30",
                    value: "00:30"
                });
                _this.timeBreak.push({
                    text: "01:00",
                    value: "01:00"
                });
                _this.timeBreak.push({
                    text: "01:30",
                    value: "01:30"
                });
                _this.timeBreak.push({
                    text: "02:00",
                    value: "02:00"
                });
                _this.timeBreak.push({
                    text: "02:30",
                    value: "02:30"
                });
                _this.timeBreak.push({
                    text: "03:00",
                    value: "03:00"
                });
                _this.timeBreak.push({
                    text: "03:30",
                    value: "03:30"
                });
                _this.timeBreak.push({
                    text: "04:00",
                    value: "04:00"
                });
                _this.timeBreak.push({
                    text: "04:30",
                    value: "04:30"
                });
                _this.timeBreak.push({
                    text: "05:00",
                    value: "05:00"
                });
                _this.timeBreak.push({
                    text: "05:30",
                    value: "05:30"
                });
                _this.timeBreak.push({
                    text: "06:00",
                    value: "06:00"
                });
                _this.timeBreak.push({
                    text: "06:30",
                    value: "06:30"
                });
                _this.timeBreak.push({
                    text: "07:00",
                    value: "07:00"
                });
                _this.timeBreak.push({
                    text: "07:30",
                    value: "07:30"
                });
                _this.timeBreak.push({
                    text: "08:00",
                    value: "08:00"
                });
                _this.timeBreak.push({
                    text: "08:30",
                    value: "08:30"
                });
                _this.timeBreak.push({
                    text: "09:00",
                    value: "09:00"
                });
                _this.timeBreak.push({
                    text: "09:30",
                    value: "09:30"
                });
                _this.timeBreak.push({
                    text: "10:00",
                    value: "10:00"
                });
                _this.timeBreak.push({
                    text: "10:30",
                    value: "10:30"
                });
                _this.timeBreak.push({
                    text: "11:00",
                    value: "11:00"
                });
                _this.timeBreak.push({
                    text: "11:30",
                    value: "11:30"
                });
                _this.timeBreak.push({
                    text: "12:00",
                    value: "12:00"
                });
                _this.timeBreak.push({
                    text: "13:00",
                    value: "13:00"
                });
                _this.timeBreak.push({
                    text: "14:00",
                    value: "14:00"
                });
                _this.timeBreak.push({
                    text: "15:00",
                    value: "15:00"
                });
                _this.timeBreak.push({
                    text: "16:00",
                    value: "16:00"
                });
                _this.timeBreak.push({
                    text: "17:00",
                    value: "17:00"
                });
                _this.timeBreak.push({
                    text: "18:00",
                    value: "18:00"
                });
                _this.timeBreak.push({
                    text: "19:00",
                    value: "19:00"
                });
                _this.timeBreak.push({
                    text: "20:00",
                    value: "20:00"
                });
                //Get User stored information
                _this.scope.userTripId = CommonFunctions_1.CommonFunctions.prototype.getUrlVars().userTripId;
                IndexDbWrapper_1.IndexDbWrapper.prototype.openDataBase(_this.scope.userTripId.toString(), _this);
                _this.scope.categoryStyleLeft = {
                    "float": "left"
                };
                _this.scope.categoryStyleRight = {
                    "float": "right"
                };
                $("#addingAttraction").dialog({
                    autoOpen: false,
                    height: 400,
                    width: 350,
                    modal: true,
                    buttons: {
                        "Update": _this.addingAttractionInformation,
                        Cancel: function () {
                            $("#addingAttraction").dialog("close");
                        }
                    }
                });
                $("#addingBreak").dialog({
                    autoOpen: false,
                    height: 500,
                    width: 900,
                    modal: true,
                    buttons: {
                        "Update": _this.addingAttractionInformation,
                        Cancel: function () {
                            $("#addingBreak").dialog("close");
                        }
                    }
                });
                $("#photoSlideShow").dialog({
                    autoOpen: false,
                    height: 700,
                    width: 1000,
                    modal: true,
                    buttons: {
                        Cancel: function () {
                            $("#photoSlideShow").dialog("close");
                        }
                    }
                });
                $("#autoStartLocation").on("autocompleteselect", function (event, ui) {
                    var parameters = {};
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                    }
                    else {
                        parameters.address = ui.item.value;
                    }
                    parameters.isSource = 1;
                    parameters.googleSearchText = '';
                    parameters.breakType = 0;
                    parameters.breakDate = '';
                    selfThis_1.tourInfoUpdate(parameters);
                });
                $("#autoDestinationLocation").on("autocompleteselect", function (event, ui) {
                    var parameters = {};
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                    }
                    else {
                        parameters.address = ui.item.value;
                    }
                    parameters.isSource = 2;
                    parameters.googleSearchText = '';
                    parameters.breakType = 0;
                    parameters.breakDate = '';
                    selfThis_1.tourInfoUpdate(parameters);
                });
                $("#placeSeachForAdding").on("autocompleteselect", function (event, ui) {
                    var parameters = {};
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                    }
                    else {
                        parameters.address = ui.item.value;
                    }
                    parameters.isSource = 3;
                    parameters.googleSearchText = '';
                    parameters.breakType = 0;
                    parameters.breakDate = '';
                    selfThis_1.tourInfoUpdate(parameters);
                });
                $("#googleMapplaceSeachForAdding").on("autocompleteselect", function (event, ui) {
                    debugger;
                    var parameters = {};
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                    }
                    else {
                        parameters.address = ui.item.value;
                    }
                    parameters.isSource = 3;
                    parameters.googleSearchText = '';
                    parameters.breakType = 0;
                    parameters.breakDate = '';
                    selfThis_1.tourInfoUpdate(parameters);
                });
                $("#autoAddAttractionForBreak").on("autocompleteselect", function (event, ui) {
                    var parameters = {};
                    if (ui.item.data !== '') {
                        parameters.address = ui.item.data;
                    }
                    else {
                        parameters.address = ui.item.value;
                    }
                    parameters.isSource = 4;
                    parameters.googleSearchText = '';
                    parameters.breakType = $("#hdSelectedBreakType").val();
                    parameters.breakDate = $("#hdSelectedDivId").val();
                    selfThis_1.tourInfoUpdate(parameters);
                    $("#addingBreak")
                        .dialog("close");
                });
                //Index dataload is done or not
                GlobalVaraibles_1.GlobalVaraibles.loadIndexDb = setInterval(function () {
                    IndexDbWrapper_1.IndexDbWrapper.prototype.indexdbPreDataLoadIsDone(_this);
                }, 900);
            }
            catch (e) {
                ControlerIndex.prototype.errorParameters = {};
                Error_1.Error.prototype.logError("ControlerIndex", "$onInit", ControlerIndex.prototype.errorParameters, e);
            }
        };
        this.updateUserReqestOrder = function () {
            try {
                var self_1 = this.scope;
                var isFirst_1 = false;
                $.each(self_1.attractionInterestedList, function (attractionKey, attractionValue) {
                    if (!isFirst_1) {
                        isFirst_1 = true;
                        self_1.sourceAttractionID = self_1.destinationAttractionID =
                            attractionValue["AttractionsId"];
                    }
                });
                //We need to make dynamic
                self_1.travelModeId = 1;
            }
            catch (e) {
                ControlerIndex.prototype.errorParameters = {};
                Error_1.Error.prototype.logError("ControlerIndex", "updateUserReqestOrder", ControlerIndex.prototype.errorParameters, e);
            }
        };
        try {
            this.scope = $scope;
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "constructor", ControlerIndex.prototype.errorParameters, e);
        }
    }
    //this method will called from the IndexWrapper
    ControlerIndex.prototype.loadUserData = function () {
        try {
            TourSchedule_1.TourSchedule.prototype.getBreakInformation(this);
            TourSchedule_1.TourSchedule.prototype.getTourInformationOnTripId(this);
            this.scope.extraCategoryList = [];
            TourSchedule_1.TourSchedule.prototype.getExtraCategoryList(this);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "loadUserData", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.getBreakInformationBind = function (data) {
        var _this = this;
        try {
            var self = this.scope;
            this.scope.$apply(function () {
                _this.scope.updateDayEndTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour("22:00:00");
                _this.scope.updateDayStartTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour("09:00:00");
                $.each(data, function (key, value) {
                    if (value.Display === "Break Fast") {
                        self.updatedBreakFastTime =
                            CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.StartTime);
                    }
                    if (value.Display === "Lunch Time") {
                        self.updatedLunchTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.StartTime);
                    }
                    if (value.Display === "Break Time") {
                        self.updatedBreakTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.StartTime);
                    }
                    if (value.Display === "Dinner Time") {
                        self.updatedDinnerTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.StartTime);
                    }
                });
            });
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "getBreakInformationBind", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.getExtraCategoryListBind = function (data) {
        var _this = this;
        try {
            this.scope.$apply(function () {
                _this.scope.extraCategoryList = data;
            });
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "getExtraCategoryListBind", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.getCategoryList = function () {
        try {
            TourSchedule_1.TourSchedule.prototype.getMasterCategory(this);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "getCategoryList", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.getMasterCategoryResponseBind = function (data) {
        var _this = this;
        try {
            this.scope.$apply(function () {
                _this.scope.masterCategoryList = data;
                _this.clickMainCategorySelected(data[0].CategoryId);
            });
            TourSchedule_1.TourSchedule.prototype.getCategoryList(this);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "getMasterCategoryResponseBind", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.getCategoryListBind = function (data) {
        var _this = this;
        try {
            this.scope.$apply(function () {
                $(".ngCategorytable").show();
                _this.scope.categoryList = data;
            });
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "getCategoryListBind", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.clickMainCategorySelected = function (mainCategoryId) {
        var self = this;
        try {
            this.scope.mainCategorySelected = mainCategoryId;
            this.scope.filterCategoryList = [];
            this.scope.selectedCategoryList = [];
            $(this.scope.categoryList).filter(function (index) {
                if (self.scope.categoryList[index].MasterCategoryId === mainCategoryId) {
                    self.scope.filterCategoryList.push(self.scope.categoryList[index]);
                    //Once main category selected,under main category list sub category pushed into the selected category list
                    self.scope.selectedCategoryList.push(self.scope.categoryList[index]);
                }
            });
            //it will filter with the selected attraction list
            this.categorySelectedAttractionFilter();
            this.publicFilterAttractions();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.mainCategoryId = mainCategoryId;
            Error_1.Error.prototype.logError("ControlerIndex", "clickMainCategorySelected", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.categorySelectedAttractionFilter = function () {
        var self = this;
        try {
            var isNotFilterd = false;
            this.scope.filterAttractionList = [];
            $(this.scope.selectedCategoryList).filter(function (index) {
                $(self.scope.attractionList).filter(function (attractionIndex) {
                    if (self.scope.selectedCategoryList[index].GoogleTypeID ===
                        self.scope.attractionList[attractionIndex].CategoryId) {
                        isNotFilterd = false;
                        //filtering attractions from the category which user already selected
                        $.each(self.scope.orderOfAttractionList, function (key, value) {
                            if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                                $.each(value.ListGetOrderOfAttractionVisit, function (googleKey, googleValue) {
                                    if (googleValue.SourceAttractionId ===
                                        self.scope.attractionList[attractionIndex].AttractionsId ||
                                        googleValue.DestinationAttractionId ===
                                            self.scope.attractionList[attractionIndex].AttractionsId) {
                                        isNotFilterd = true;
                                    }
                                });
                            }
                        });
                        if (!isNotFilterd)
                            self.scope.filterAttractionList.push(self.scope.attractionList[attractionIndex]);
                    }
                });
            });
            this.scope.categoryPlaceSearch = "";
            this.filterInterestedAttraction();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "categorySelectedAttractionFilter", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.filterInterestedAttraction = function () {
        var _this = this;
        try {
            var tempFilterAttractionList = this.scope.filterAttractionList;
            var attractionNotInsert = false;
            this.scope.filterAttractionList = [];
            $(tempFilterAttractionList).filter(function (index) {
                attractionNotInsert = false;
                $.each(_this.scope.attractionInterestedList, function (inKey, inValue) {
                    if (inValue.AttractionsId === tempFilterAttractionList[index].AttractionsId) {
                        attractionNotInsert = true;
                        return false;
                    }
                });
                if (!attractionNotInsert) {
                    _this.scope.filterAttractionList.push(tempFilterAttractionList[index]);
                }
            });
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "filterInterestedAttraction", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.publicFilterAttractions = function () {
        try {
            var newArr_1;
            var isFirst_2 = true;
            $("#travelBasic").show();
            if (this.scope.selectedCategoryList.length > 0) {
                $.each(this.scope.selectedCategoryList, function (i, obj) {
                    if (!isFirst_2) {
                        newArr_1 += ",";
                        newArr_1 += obj.CategoryId + "~" + obj.CategoryName;
                    }
                    else {
                        isFirst_2 = false;
                        newArr_1 = obj.CategoryId + "~" + obj.CategoryName;
                    }
                });
            }
            var cityVisitList_1 = [];
            if (this.scope.visitCityList.length > 0) {
                $.each(this.scope.visitCityList, function (key, value) {
                    var subListValue = {};
                    subListValue.RecordIndex = value.recordIndex;
                    subListValue.CityId = value.cityId;
                    cityVisitList_1.push(subListValue);
                });
            }
            var jsonObject = {
                "countryId": this.scope.countryId,
                "cityVisitList": cityVisitList_1,
                "MainCategorySelected": this.scope.mainCategorySelected
            };
            TourSchedule_1.TourSchedule.prototype.publicFilterAttractions(this, jsonObject);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "publicFilterAttractions", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.publicFilterAttractionsBind = function (data) {
        var _this = this;
        try {
            if (data.length > 0) {
                this.scope.$apply(function () {
                    _this.citySelected(data);
                });
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "publicFilterAttractionsBind", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.citySelected = function (data) {
        try {
            var self_2 = this.scope;
            this.scope.attractionList = [];
            $.each(data, function (attractionKey, attractionValue) {
                var item = [];
                item.value = attractionValue["GoogleSearchText"];
                item.data = attractionValue["AttractionsId"];
                self_2.attractionListAutoComplete.push(item);
                item = attractionValue;
                self_2.attractionList.push(item);
            });
            //it will filter with the selected attraction list
            this.categorySelectedAttractionFilter();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "citySelected", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.categorySelected = function (categoryList) {
        try {
            var self_3 = this.scope;
            var isRecordFound = false;
            $.each(this.scope.selectedCategoryList, function (categoryKey, categoryValue) {
                if (categoryValue["GoogleTypeID"] === categoryList.GoogleTypeID) {
                    isRecordFound = true;
                    self_3.selectedCategoryList.splice(categoryKey, 1);
                    return false;
                }
                else {
                    isRecordFound = false;
                }
            });
            if (!isRecordFound) {
                var item = [];
                item.GoogleTypeID = categoryList.GoogleTypeID;
                item.CategoryName = categoryList.TypeName;
                self_3.selectedCategoryList.push(item);
            }
            //This feature need fix and implment it later
            // User_InsertCategoryInformation($scope, $http);
            //it will filter with the selected attraction list
            this.categorySelectedAttractionFilter();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.categoryList = categoryList;
            Error_1.Error.prototype.logError("ControlerIndex", "categorySelected", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.mapCategorySelected = function (categoryList) {
        try {
            var self_4 = this.scope;
            var isRecordFound_1 = false;
            $.each(self_4.mapselectedCategoryList, function (categoryKey, categoryValue) {
                if (categoryValue["GoogleTypeID"] === categoryList.GoogleTypeID) {
                    isRecordFound_1 = true;
                    self_4.mapselectedCategoryList.splice(categoryKey, 1);
                    return false;
                }
                else {
                    isRecordFound_1 = false;
                }
            });
            if (!isRecordFound_1) {
                var item = [];
                item.GoogleTypeID = categoryList.GoogleTypeID;
                item.CategoryName = categoryList.TypeName;
                self_4.mapselectedCategoryList.push(item);
            }
            if (self_4.attractionTravelStepsId > 0 && self_4.orderId > 0) {
                this.mapStepBreakInfo(self_4.attractionTravelStepsId, self_4.orderId);
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.categoryList = categoryList;
            Error_1.Error.prototype.logError("ControlerIndex", "mapCategorySelected", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.mapStepBreakInfo = function (attractionTravelStepsId, orderId) {
        try {
            var self_5 = this.scope;
            var markerdata = [];
            self_5.attractionTravelStepsId = attractionTravelStepsId;
            self_5.orderId = orderId;
            var filterNearAttractionInfo = [];
            if (self_5.mapselectedCategoryList.length > 0) {
                $.each(self_5.attractionTravelStepsNearAttractionInfo, function (key, value) {
                    if (value.attractionTravelStepsId === attractionTravelStepsId && value.orderId === orderId) {
                        $.each(value.data, function (dataKey, dataValue) {
                            $.each(self_5.attractionXCategory, function (xKey, xValue) {
                                if (dataValue.AttractionsId === xValue.AttractionId) {
                                    $.each(self_5.mapselectedCategoryList, function (mapKey, mapValue) {
                                        if (xValue.CategoryId === mapValue.GoogleTypeID) {
                                            filterNearAttractionInfo.push(value);
                                        }
                                    });
                                }
                            });
                        });
                    }
                });
            }
            else {
                filterNearAttractionInfo = self_5.attractionTravelStepsNearAttractionInfo;
            }
            this.addNearByMarks(filterNearAttractionInfo);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionTravelStepsId = attractionTravelStepsId;
            ControlerIndex.prototype.errorParameters.orderId = orderId;
            Error_1.Error.prototype.logError("ControlerIndex", "mapStepBreakInfo", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.addNearByMarks = function (filterNearAttractionInfo) {
        try {
            var self_6 = this.scope;
            this.clearMarks();
            debugger;
            $.each(filterNearAttractionInfo, function (key, value) {
                if (value.attractionTravelStepsId === self_6.attractionTravelStepsId)
                    debugger;
                if (value.attractionTravelStepsId === self_6.attractionTravelStepsId &&
                    value.orderId === self_6.orderId) {
                    $.each(value.data, function (stepKey, stepValue) {
                        //building the display Content
                        var destinationContent = "<span class='mapAttractionName'>" +
                            stepValue.SourceAttractionName +
                            "</span>";
                        destinationContent += "<br/>";
                        destinationContent += "<span class='mapAttractionAddress'>" +
                            stepValue.SourceSearchText +
                            "</span>";
                        destinationContent += "<br/>";
                        destinationContent += "<a target='_blank' href='https://www.google.com/search?q=" +
                            stepValue.SourceAttractionName +
                            "'>Look in Google search</a>";
                        destinationContent += "<br/>";
                        destinationContent += "<br/>";
                        if (stepValue.Distance !== null) {
                            destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                "Distance: " +
                                "</span>";
                            destinationContent += "<span class='mapAttractionSideText'>" +
                                stepValue.Distance +
                                "</span>";
                            destinationContent += "<br/>";
                        }
                        if (stepValue.TravelTimeHours !== null) {
                            destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                "Distance Cover Time: " +
                                "</span>";
                            destinationContent += "<span cladestinationContent += ss='mapAttractionSideText'>" +
                                stepValue.TravelTimeHours +
                                " hh" +
                                "</span>";
                            destinationContent += "<br/>";
                        }
                        if (stepValue.SourceRating !== null) {
                            destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                "Rating: " +
                                "</span>";
                            destinationContent += "<span class='mapAttractionSideText'>" +
                                stepValue.SourceRating +
                                "</span>";
                            destinationContent += "<br/>";
                        }
                        if (stepValue.SourceRatingTotal !== null) {
                            destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                "Total Rating: " +
                                "</span>";
                            destinationContent += "<span class='mapAttractionSideText'>" +
                                stepValue.SourceRatingTotal +
                                "</span>";
                            destinationContent += "<br/>";
                        }
                        if (stepValue.FoodExpense > 0) {
                            destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                "Food Expense: " +
                                "</span>";
                            destinationContent += "<span class='mapAttractionSideText'>" +
                                stepValue.FoodExpense +
                                "</span>";
                            destinationContent += "<br/>";
                        }
                        if (stepValue.StayExpense > 0) {
                            destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                "Stay Expense: " +
                                "</span>";
                            destinationContent += "<span class='mapAttractionSideText'>" +
                                stepValue.StayExpense +
                                "</span>";
                            destinationContent += "<br/>";
                        }
                        destinationContent += "<span class='mapAttractionSideHeadign'>" +
                            "Add this attraction: " +
                            "</span>";
                        destinationContent +=
                            "<button type='button' onclick='userInterested(" +
                                stepValue.AttractionsId +
                                ")'>Interested</button>";
                        destinationContent += "<br/>";
                        var markerdata = [];
                        markerdata.lat = stepValue.SourceLatitude;
                        markerdata.lng = stepValue.SourceLongitude;
                        markerdata.title = stepValue.SourceAttractionName;
                        markerdata.content = destinationContent;
                        markerdata.IsNearLocation = true;
                        markerdata.label = "0";
                        var markInfo = MapsActions_1.MapsActions.prototype.addMarderk(markerdata, self_6.googleMaps, false);
                        self_6.googleMapsStepMarks.push(markInfo);
                    });
                    return false;
                }
            });
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.filterNearAttractionInfo = filterNearAttractionInfo;
            Error_1.Error.prototype.logError("ControlerIndex", "addNearByMarks", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.isMapCategoryExist = function (googleTypeId) {
        try {
            var v = -1;
            $.each(this.scope.mapselectedCategoryList, function (key, value) {
                if (value.GoogleTypeID === googleTypeId) {
                    v = key;
                    return false;
                }
            });
            return v;
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.googleTypeId = googleTypeId;
            Error_1.Error.prototype.logError("ControlerIndex", "isMapCategoryExist", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.cssMainCategory = function (mainCategoryId) {
        try {
            if (mainCategoryId === this.scope.mainCategorySelected) {
                return true;
            }
            return false;
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.mainCategoryId = mainCategoryId;
            Error_1.Error.prototype.logError("ControlerIndex", "cssMainCategory", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.addCitites = function () {
        try {
            var self_7 = this.scope;
            var existed_1 = false;
            var recordIndex = this.scope.visitCityList.length;
            if (this.scope.selectedCityLabel !== "") {
                $.each(this.scope.visitCityList, function (key, value) {
                    if (value.cityName === self_7.selectedCityLabel) {
                        existed_1 = true;
                        return false;
                    }
                });
                if (!existed_1) {
                    var item = [];
                    item.countryId = self_7.countryId;
                    item.cityId = self_7.cityId;
                    item.cityName = self_7.selectedCityLabel;
                    item.recordIndex = recordIndex;
                    self_7.VisitCityList.push(item);
                }
            }
            $("#autoCityName").val("");
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "addCitites", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.cityNotIntereseted = function (cityId) {
        try {
            var self_8 = this.scope;
            var recordOrder_1 = 0;
            $.each(self_8.visitCityList, function (key, value) {
                if (value.cityId === cityId) {
                    recordOrder_1 = key;
                    return false;
                }
            });
            self_8.visitCityList.splice(recordOrder_1, 1);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.cityId = cityId;
            Error_1.Error.prototype.logError("ControlerIndex", "cityNotIntereseted", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.isCityOrderUpdated = function (cityId, recordIndex, isUp) {
        try {
            var self_9 = this.scope;
            if (isUp) {
                $.each(self_9.visitCityList, function (key, value) {
                    if (value.recordIndex === recordIndex) {
                        value.recordIndex = recordIndex - 1;
                    }
                    else {
                        if (value.recordIndex === recordIndex - 1) {
                            value.recordIndex = recordIndex;
                        }
                    }
                });
            }
            else {
                $.each(self_9.visitCityList, function (key, value) {
                    if (value.recordIndex === recordIndex + 1) {
                        value.recordIndex = recordIndex;
                    }
                    else {
                        if (value.recordIndex === recordIndex) {
                            value.recordIndex = recordIndex + 1;
                        }
                    }
                });
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.cityId = cityId;
            ControlerIndex.prototype.errorParameters.recordIndex = recordIndex;
            ControlerIndex.prototype.errorParameters.isUp = isUp;
            Error_1.Error.prototype.logError("ControlerIndex", "isCityOrderUpdated", ControlerIndex.prototype.errorParameters, e);
        }
    };
    //Getting the order of Attractions
    ControlerIndex.prototype.attractionInformationBinding = function () {
        try {
            TourSchedule_1.TourSchedule.prototype.userUserTripGetAttractions(this);
            this.updateUserReqestOrder();
            this.publicGetOrderOfAttractionVisit();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "attractionInformationBinding", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.userTripAttractionInfo = function (data) {
        try {
            var self_10 = this.scope;
            self_10.attractionInterestedList = [];
            $.each(data, function (key, value) {
                var item = [];
                item.AttractionsId = value.AttractionId;
                self_10.attractionInterestedList.push(item);
            });
            this.filterInterestedAttraction();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "userTripAttractionInfo", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.publicGetOrderOfAttractionVisit = function () {
        try {
            var self_11 = this.scope;
            var orderOfAttractionListTemp_1 = [];
            var orderOfAttractionListTempSub_1 = {};
            $.each(self_11.orderOfAttractionList, function (key, value) {
                orderOfAttractionListTempSub_1.GroupDate = value.GroupDate;
                orderOfAttractionListTempSub_1.ListGetOrderOfAttractionVisit = [];
                var counterCount = 0;
                $.each(value.ListGetOrderOfAttractionVisit, function (subKey, subValue) {
                    var subListValue = {};
                    subListValue.SourceAttractionId = subValue.SourceAttractionId;
                    subListValue.DestinationAttractionId = subValue.DestinationAttractionId;
                    orderOfAttractionListTempSub_1.ListGetOrderOfAttractionVisit.push(subListValue);
                });
                orderOfAttractionListTemp_1.push(orderOfAttractionListTempSub_1);
            });
            var updatedBreaks_1 = [];
            $.each(self_11.updatedBreaks, function (key, value) {
                var temp = {};
                temp.IsUserInterestedBreak = value.IsUserInterestedBreak;
                temp.IsUserInterestedDayBreak = value.IsUserInterestedDayBreak;
                temp.UpdateDayStartTime = CommonFunctions_1.CommonFunctions.prototype.convertTo24Hour(value.UpdateDayStartTime);
                temp.UpdatedDinnerTime = CommonFunctions_1.CommonFunctions.prototype.convertTo24Hour(value.UpdatedDinnerTime);
                temp.UpdatedLunchTime = CommonFunctions_1.CommonFunctions.prototype.convertTo24Hour(value.UpdatedLunchTime);
                temp.IsUserInterestedLunchBreak = value.IsUserInterestedLunchBreak;
                temp.UpdatedBreakTime = CommonFunctions_1.CommonFunctions.prototype.convertTo24Hour(value.UpdatedBreakTime);
                temp.UpdateDayEndTime = CommonFunctions_1.CommonFunctions.prototype.convertTo24Hour(value.UpdateDayEndTime);
                temp.IsUserInterestedDinnerBreak = value.IsUserInterestedDinnerBreak;
                temp.RequestDate = value.RequestDate;
                temp.IsBreakAdded = value.IsBreakAdded;
                temp.BreakAttractionId = value.BreakAttractionId;
                temp.IsLunchAdded = value.IsLunchAdded;
                temp.LunchAttractionId = value.LunchAttractionId;
                temp.IsDinnerAdded = value.IsDinnerAdded;
                temp.DinnerAttractionId = value.DinnerAttractionId;
                temp.IsUserInterestedBreakFast = value.IsUserInterestedBreakFast;
                temp.UpdatedBreakFastTime = CommonFunctions_1.CommonFunctions.prototype.convertTo24Hour(value.UpdatedBreakFastTime);
                temp.IsBreakFastAdded = value.IsBreakFastAdded;
                temp.BreakFastAttractionId = value.BreakFastAttractionId;
                temp.IsDayBreakAdded = value.IsDayBreakAdded;
                temp.DayBreakAttractionId = value.DayBreakAttractionId;
                temp.NoOfCars = value.NoOfCars;
                temp.AverageMileage = value.AverageMileage;
                temp.BreakExpense = value.BreakExpense;
                temp.BreakFastExpense = value.BreakFastExpense;
                temp.CarRentalExpense = value.CarRentalExpense;
                temp.DayBreakExpense = value.DayBreakExpense;
                temp.LunchExpense = value.LunchExpense;
                temp.NoOfRooms = value.NoOfRooms;
                temp.DinnerExpense = value.DinnerExpense;
                temp.IsNoOfCarsUserUpdated = value.IsNoOfCarsUserUpdated;
                temp.IsAverageMileageUserUpdated = value.IsAverageMileageUserUpdated;
                temp.IsCarRentalExpenseUserUpdated = value.IsCarRentalExpenseUserUpdated;
                temp.IsBreakFastExpenseUserUpdated = value.IsBreakFastExpenseUserUpdated;
                temp.IsLunchExpenseUserUpdated = value.IsLunchExpenseUserUpdated;
                temp.IsBreakExpenseUserUpdated = value.IsBreakExpenseUserUpdated;
                temp.IsDinnerExpenseUserUpdated = value.IsDinnerExpenseUserUpdated;
                temp.IsDayBreakExpenseUserUpdated = value.IsDayBreakExpenseUserUpdated;
                temp.IsNoOfRoomsUserUpdated = value.IsNoOfRoomsUserUpdated;
                updatedBreaks_1.push(temp);
            });
            var jsonObject = {
                "TravelModeId": self_11.TravelModeId,
                "ListGroupWithDateAttractions": orderOfAttractionListTemp_1,
                "CountryId": self_11.countryId,
                "UpdatedBreaks": updatedBreaks_1
            };
            TourSchedule_1.TourSchedule.prototype.publicGetOrderOfAttractionVisit(this, jsonObject);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "publicGetOrderOfAttractionVisit", ControlerIndex.prototype.errorParameters, e);
        }
    };
    //Ajax return data for the order of attractions
    ControlerIndex.prototype.attractionInformationRendaring = function (data) {
        try {
            var self_12 = this.scope;
            //Break information is updating because for Expense calculation
            TourSchedule_1.TourSchedule.prototype.userRequestedBreaks(this);
            //Google Maps data binding
            this.googleMapMarks(data, false);
            self_12.orderOfAttractionList = data;
            TourSchedule_1.TourSchedule.prototype.getOrderOfRequest(this, this.scope.countryId);
            this.itenateDynamicDatesCreation(data);
            if (!this.dataLoading && data.length === 0) {
                this.dataLoading = true;
                this.publicGetOrderOfAttractionVisit();
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "attractionInformationRendaring", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.requestedBreaks = function (data) {
        try {
            var self_13 = this.scope;
            self_13.updatedBreaks = [];
            $.each(data, function (key, value) {
                var temp = [];
                temp.RequestDate = value.RequestDate;
                temp.IsUserInterestedDayBreak = value.IsUserInterestedDayBreak;
                if (value.UpdateDayEndTime === null) {
                    temp.UpdateDayEndTime = self_13.updateDayEndTime;
                }
                else {
                    temp.UpdateDayEndTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.UpdateDayEndTime);
                }
                if (value.UpdateDayStartTime === null) {
                    temp.UpdateDayStartTime = self_13.updateDayStartTime;
                }
                else {
                    temp.UpdateDayStartTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.UpdateDayStartTime);
                }
                temp.IsUserInterestedLunchBreak = value.IsUserInterestedLunchBreak;
                if (value.UpdatedLunchTime === null) {
                    temp.UpdatedLunchTime = self_13.updatedLunchTime;
                }
                else {
                    temp.UpdatedLunchTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.UpdatedLunchTime);
                }
                temp.IsUserInterestedBreak = value.IsUserInterestedBreak;
                if (value.UpdatedBreakTime === null) {
                    temp.UpdatedBreakTime = self_13.updatedBreakTime;
                }
                else {
                    temp.UpdatedBreakTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.UpdatedBreakTime);
                }
                temp.IsUserInterestedDinnerBreak = value.IsUserInterestedDinnerBreak;
                if (value.UpdatedDinnerTime === null) {
                    temp.UpdatedDinnerTime = self_13.updatedDinnerTime;
                }
                else {
                    temp.UpdatedDinnerTime = CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.UpdatedDinnerTime);
                }
                temp.IsUserInterestedBreakFast = value.IsUserInterestedBreakFast;
                if (value.UpdatedBreakFastTime === null) {
                    temp.UpdatedBreakFastTime = self_13.updatedBreakFastTime;
                }
                else {
                    temp.UpdatedBreakFastTime =
                        CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(value.UpdatedBreakFastTime);
                }
                temp.IsBreakAdded = value.IsBreakAdded;
                temp.BreakAttractionId = value.BreakAttractionId;
                temp.IsLunchAdded = value.IsLunchAdded;
                temp.LunchAttractionId = value.LunchAttractionId;
                temp.IsDinnerAdded = value.IsDinnerAdded;
                temp.DinnerAttractionId = value.DinnerAttractionId;
                temp.IsDayBreakAdded = value.IsDayBreakAdded;
                temp.DayBreakAttractionId = value.DayBreakAttractionId;
                temp.NoOfCars = value.NoOfCars;
                temp.AverageMileage = value.AverageMileage;
                temp.NoOfRooms = value.NoOfRooms;
                temp.BreakFastExpense = value.BreakFastExpense;
                temp.LunchExpense = value.LunchExpense;
                temp.BreakExpense = value.BreakExpense;
                temp.DayBreakExpense = value.DayBreakExpense;
                temp.CarRentalExpense = value.CarRentalExpense;
                temp.NoOfAttractions = value.NoOfAttractions;
                temp.Distance = value.Distance;
                temp.DinnerExpense = value.DinnerExpense;
                temp.IsNoOfCarsUserUpdated = value.IsNoOfCarsUserUpdated;
                temp.IsAverageMileageUserUpdated = value.IsAverageMileageUserUpdated;
                temp.IsCarRentalExpenseUserUpdated = value.IsCarRentalExpenseUserUpdated;
                temp.IsBreakFastExpenseUserUpdated = value.IsBreakFastExpenseUserUpdated;
                temp.IsLunchExpenseUserUpdated = value.IsLunchExpenseUserUpdated;
                temp.IsBreakExpenseUserUpdated = value.IsBreakExpenseUserUpdated;
                temp.IsDinnerExpenseUserUpdated = value.IsDinnerExpenseUserUpdated;
                temp.IsDayBreakExpenseUserUpdated = value.IsDayBreakExpenseUserUpdated;
                temp.IsNoOfRoomsUserUpdated = value.IsNoOfRoomsUserUpdated;
                temp.divId = "tab_" + value.RequestDate.replace("/", "_").replace("/", "_");
                self_13.updatedBreaks.push(temp);
            });
            this.buildExpenseInfo();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "requestedBreaks", ControlerIndex.prototype.errorParameters, e);
        }
    };
    //displaying the google maps information with the current attraction information
    ControlerIndex.prototype.googleMapMarks = function (data, isFromReset) {
        var _this = this;
        try {
            var self_14 = this.scope;
            var isFirst_3 = true;
            var isMarkExist_1 = false;
            var mainMarksData_1 = [];
            var markerdata_1 = [];
            var index_1 = 0;
            var selfThis_2 = this;
            var dayCount_1 = 0;
            if (!jQuery.isEmptyObject(data)) {
                $.each(data, function (key, value) {
                    dayCount_1++;
                    if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                        $.each(value.ListGetOrderOfAttractionVisit, function (googleKey, googleValue) {
                            if (googleValue.SourceLatitude !== null &&
                                googleValue.SourceLongitude !== null &&
                                googleValue.DestinationLatitude !== null &&
                                googleValue.DestinationLongitude !== null) {
                                if (isFirst_3) {
                                    isFirst_3 = false;
                                    if (isFromReset === false) {
                                        window.googleMapsMethodInfo(googleValue.SourceLatitude, googleValue.SourceLongitude);
                                    }
                                    else {
                                        //cleaning the map information
                                        selfThis_2.clearMapsInfo();
                                    }
                                    markerdata_1 = [];
                                    markerdata_1.lat = googleValue.SourceLatitude;
                                    //this special adding because to resolve the conflict between the source and destination location
                                    markerdata_1.lng =
                                        googleValue.SourceLongitude;
                                    markerdata_1.title = googleValue.SourceAttractionName;
                                    markerdata_1.label = googleValue.RecordCount.toString();
                                    markerdata_1.content = "<span class='mapDayText'>Day -" +
                                        dayCount_1 +
                                        " </span> - <span class='mapDay'> " +
                                        value.GroupDate +
                                        " </span>" +
                                        "<br/>" +
                                        "<span class='mapAttractionName'>" +
                                        googleValue.SourceAttractionName +
                                        "</span>" +
                                        "<br/>" +
                                        "Start Location" +
                                        "<br/>" +
                                        "Start:" +
                                        "<select onchange=\"dayStartInformationUpdate('" + value.GroupDate + "',this)\">";
                                    $.each(selfThis_2.timeInterval, function (timeKey, timeValue) {
                                        markerdata_1.content += "<option value='" +
                                            timeValue.value +
                                            "'";
                                        if (googleValue.DateAndTime + ":00" === timeValue.value) {
                                            markerdata_1.content += " selected >";
                                        }
                                        else {
                                            markerdata_1.content += ">";
                                        }
                                        markerdata_1.content += timeValue.text + "</option>";
                                    });
                                    markerdata_1.content += "</select>" +
                                        "<br/>";
                                    markerdata_1.textContent = "Day-" + dayCount_1 + " - " + value.GroupDate;
                                    mainMarksData_1.push(markerdata_1);
                                }
                                //building the display Content
                                var destinationContent = "<span class='mapDayText'>Day -" +
                                    dayCount_1 +
                                    " </span> - <span class='mapDay'> " +
                                    value.GroupDate +
                                    " </span>" +
                                    "<br/>" +
                                    "<span class='mapAttractionSideHeadign'>" + "From: " + "</span>";
                                destinationContent += "<span class='mapAttractionName'>" +
                                    googleValue.SourceAttractionName +
                                    "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                    "To: " +
                                    "</span>";
                                destinationContent += "<span class='mapAttractionName'>" +
                                    googleValue.DestinationAttractionName +
                                    "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<span class='mapAttractionAddress'>" +
                                    googleValue.DestinationSearchText +
                                    "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<br/>";
                                destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                    "Distance: " +
                                    "</span>";
                                destinationContent += "<span class='mapAttractionSideText'>" +
                                    googleValue.Distance +
                                    "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                    "Distance Cover Time: " +
                                    "</span>";
                                destinationContent += "<span class='mapAttractionSideText'>" +
                                    googleValue.TravelTime +
                                    " hh" +
                                    "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                    "Reach Time: " +
                                    "</span>";
                                destinationContent += "<span class='mapAttractionSideText'>" +
                                    CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(googleValue.ReachTime) +
                                    "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                    "Stay for View: " +
                                    "</span>";
                                destinationContent += "<span class='mapAttractionSideText'>";
                                destinationContent +=
                                    "<select onchange='ViewTimeUpdate(" + googleValue.DestinationAttractionId + ",this)' >";
                                $.each(selfThis_2.timeBreak, function (intervalKey, intervalValue) {
                                    destinationContent += "<option value='" +
                                        intervalValue.value +
                                        "' ";
                                    if (intervalValue.value === googleValue.TimeRequiredToView) {
                                        destinationContent += " selected >";
                                    }
                                    else {
                                        destinationContent += ">";
                                    }
                                    destinationContent += intervalValue.text +
                                        "</option>";
                                });
                                destinationContent += "</select>";
                                destinationContent += "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                    "Complete Event: " +
                                    "</span>";
                                destinationContent += "<span class='mapAttractionSideText'>" +
                                    CommonFunctions_1.CommonFunctions.prototype.convertTo12Hour(googleValue.EventEndTime) +
                                    "</span>";
                                destinationContent += "<br/>";
                                destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                    "I don't want to visit this: " +
                                    '<img src="' +
                                    Constants_1.Constants.localUrl +
                                    '/Images/Custome/red_x.png" alt= "Not Intereseted" width= "15px" height= "15px" onclick= "NotIntereseted(' +
                                    googleValue.DestinationAttractionId +
                                    ')" />' +
                                    "</span>";
                                destinationContent += "<br/>";
                                if (googleValue.IsNeedDrivningBreak) {
                                    destinationContent += "<span class='mapAttractionSideHeadign'>" +
                                        "It is a long journey do you want to take break  <button type='button' onclick='mapBreakInfo(" +
                                        googleValue.RecordCount +
                                        ")'>Yes</button>" +
                                        "</span>";
                                }
                                var title = googleValue.RecordCount.toString() +
                                    " " +
                                    googleValue.DestinationAttractionName;
                                isMarkExist_1 = false;
                                $.each(mainMarksData_1, function (markDataKey, markDataValue) {
                                    //Merging two marks, if user vising multiple times
                                    if (markDataValue.lat === googleValue.DestinationLatitude &&
                                        markDataValue.lng === googleValue.DestinationLongitude) {
                                        markDataValue.label =
                                            markDataValue.label + "," + (googleValue.RecordCount + 1).toString();
                                        markDataValue.content =
                                            markDataValue.content +
                                                "<br/>" +
                                                "---------------------------" +
                                                "<br/>" +
                                                destinationContent;
                                        markDataValue.textContent = markDataValue.textContent +
                                            " || " +
                                            "Day-" +
                                            dayCount_1 +
                                            " - " +
                                            value.GroupDate;
                                        isMarkExist_1 = true;
                                    }
                                });
                                if (!isMarkExist_1) {
                                    markerdata_1 = [];
                                    markerdata_1.lat = googleValue.DestinationLatitude;
                                    markerdata_1.lng = googleValue.DestinationLongitude;
                                    markerdata_1.title = title;
                                    markerdata_1.label = (googleValue.RecordCount + 1).toString();
                                    markerdata_1.content = destinationContent;
                                    markerdata_1.textContent = "Day-" + dayCount_1 + " - " + value.GroupDate;
                                    mainMarksData_1.push(markerdata_1);
                                }
                                var isExist = false;
                                $.each(self_14.GetAttractionsNextAttractions, function (nextAttractionskey, nextAttractionsvalue) {
                                    //if (nextAttractionsvalue.AttractionsId === AttractionsId) {
                                    //    isExist = true;
                                    //    return false;
                                    //}
                                });
                                if (isExist === false) {
                                    self_14.getAttractionsNextAttractionsAjaxRequest.push(googleValue
                                        .DestinationAttractionId);
                                    _this.queGetAttractionsNextAttractions();
                                }
                                //If user select the Yes then we are reloading the map and opening the title window of map
                                $.each(value.DrivingSteps, function (stepKey, stepValue) {
                                    var recordStepCounter = 1;
                                    $.each(stepValue.DirectionSteps, function (sKey, sValue) {
                                        var isNearAttractionInfovalueExist = false;
                                        $.each(self_14.attractionTravelStepsNearAttractionInfo, function (nearAttractionInfokey, nearAttractionInfovalue) {
                                            if (nearAttractionInfovalue.attractionTravelStepsId ===
                                                sValue.AttractionTravelStepsId &&
                                                nearAttractionInfovalue.orderId ===
                                                    sValue.OrderId) {
                                                isNearAttractionInfovalueExist = true;
                                                return false;
                                            }
                                        });
                                        if (isNearAttractionInfovalueExist === false) {
                                            var sValuetemp = [];
                                            sValuetemp.AttractionTravelStepsId =
                                                sValue.AttractionTravelStepsId;
                                            sValuetemp.OrderId = sValue.OrderId;
                                            self_14
                                                .getAttractionTravelStepsNearAttractionInfoAjaxRequest
                                                .push(sValuetemp);
                                            _this.queGetAttractionTravelStepsNearAttractionInfo();
                                            //This varaible will be used to get categories Id on the final call
                                            self_14.checkItFinalRequestOrNot = [];
                                            self_14.checkItFinalRequestOrNot.AttractionTravelStepsId =
                                                sValue.AttractionTravelStepsId;
                                            self_14.checkItFinalRequestOrNot.OrderId = sValue.OrderId;
                                        }
                                        recordStepCounter++;
                                    });
                                });
                                var sourceCoordinates = [];
                                var destinatinoCoordinates = [];
                                //Writing the PloyLine
                                var path = [];
                                if (googleValue.TravelTimeSeconds > 0) {
                                    if (googleValue.IsNeedDrivningBreak) {
                                        $.each(value.DrivingSteps, function (stepKey, stepValue) {
                                            if (stepValue.RecordCount === googleValue.RecordCount) {
                                                $.each(stepValue.DirectionSteps, function (sKey, sValue) {
                                                    sourceCoordinates = [];
                                                    sourceCoordinates.push(sValue.Start_location_lat);
                                                    sourceCoordinates.push(sValue.Start_location_lng);
                                                    path.push(sourceCoordinates);
                                                    destinatinoCoordinates = [];
                                                    destinatinoCoordinates.push(sValue
                                                        .End_location_lat);
                                                    destinatinoCoordinates.push(sValue
                                                        .End_location_lng);
                                                    path.push(destinatinoCoordinates);
                                                });
                                            }
                                        });
                                    }
                                    else {
                                        sourceCoordinates = [];
                                        sourceCoordinates.push(googleValue.SourceLatitude);
                                        sourceCoordinates.push(googleValue.SourceLongitude);
                                        path.push(sourceCoordinates);
                                        destinatinoCoordinates = [];
                                        destinatinoCoordinates.push(googleValue.DestinationLatitude);
                                        destinatinoCoordinates.push(googleValue.DestinationLongitude);
                                        path.push(destinatinoCoordinates);
                                    }
                                    if (index_1 === self_14.mapLineColor.length) {
                                        index_1 = 0;
                                    }
                                    if (path.length > 0) {
                                        self_14.googleMapsLinesMarks.push(self_14.googleMaps.drawPolyline({
                                            path: path,
                                            strokeColor: self_14.mapLineColor[index_1],
                                            strokeOpacity: 0.6,
                                            strokeWeight: 6
                                        }));
                                        index_1++;
                                    }
                                }
                            }
                        });
                    }
                });
                $.each(mainMarksData_1, function (key, value) {
                    self_14.googleMapsMainMarks.push(MapsActions_1.MapsActions.prototype.addMarderk(value, self_14.googleMaps, false));
                    MapsActions_1.MapsActions.prototype.writeTextOnMap(value, self_14.googleMaps);
                });
            }
            $("#googleMaps").width("800px");
            $("#googleMaps").height("400px");
            $("#googleMaps").focus();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "googleMapMarks", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.queGetAttractionTravelStepsNearAttractionInfo = function () {
        try {
            if (this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest.length !==
                GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo) {
                var differnceValue = this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest.length -
                    GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo;
                if (differnceValue > 0) {
                    if (GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo <
                        GlobalVaraibles_1.GlobalVaraibles.queValueGetAttractionTravelStepsNearAttractionInfo) {
                        for (var i = GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo; GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo <
                            GlobalVaraibles_1.GlobalVaraibles.queValueGetAttractionTravelStepsNearAttractionInfo; GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo++) {
                            if (GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo <
                                this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest.length) {
                                var parameters = {};
                                parameters.attractionTravelStepsId =
                                    this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest[GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo]
                                        .AttractionTravelStepsId;
                                parameters.countryId = this.scope.countryId;
                                parameters.orderId = this.scope.getAttractionTravelStepsNearAttractionInfoAjaxRequest[GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo].OrderId;
                                TourSchedule_1.TourSchedule.prototype.getAttractionTravelStepsNearAttractionInfo(this, parameters);
                                GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionTravelStepsNearAttractionInfo++;
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "queGetAttractionTravelStepsNearAttractionInfo", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.queGetAttractionsNextAttractions = function () {
        try {
            if (this.scope.getAttractionsNextAttractionsAjaxRequest.length !==
                GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionsNextAttractions) {
                var differnceValue = this.scope.getAttractionsNextAttractionsAjaxRequest.length -
                    GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionsNextAttractions;
                if (differnceValue > 0) {
                    if (GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionsNextAttractions <
                        GlobalVaraibles_1.GlobalVaraibles.queValueGetAttractionsNextAttractions) {
                        for (var i = GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionsNextAttractions; GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionsNextAttractions <
                            GlobalVaraibles_1.GlobalVaraibles.queValueGetAttractionsNextAttractions; GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionsNextAttractions++) {
                            if (GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionsNextAttractions <
                                this.scope.getAttractionsNextAttractionsAjaxRequest.length) {
                                var parameters = {};
                                parameters.attractionsId = this.scope.getAttractionsNextAttractionsAjaxRequest[GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionsNextAttractions];
                                parameters.countryId = this.scope.countryId;
                                TourSchedule_1.TourSchedule.prototype.getAttractionsNextAttractions(this, parameters);
                                GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionsNextAttractions++;
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "queGetAttractionsNextAttractions", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.attractionTravelStepsNearAttractionInfoBinding = function (orderId, attractionTravelStepsId, data) {
        try {
            var isExist = false;
            $.each(this.scope.attractionTravelStepsNearAttractionInfo, function (key, value) {
                if (value.attractionTravelStepsId === attractionTravelStepsId && value.orderId === orderId) {
                    isExist = true;
                    return false;
                }
            });
            if (isExist === false && data.length > 0) {
                var temp = [];
                temp.orderId = orderId;
                temp.attractionTravelStepsId = attractionTravelStepsId;
                temp.data = data;
                if (this.scope.attractionTravelStepsNearAttractionInfo === null ||
                    jQuery.type(this.scope.attractionTravelStepsNearAttractionInfo) === "undefined") {
                    this.scope.attractionTravelStepsNearAttractionInfo = [];
                }
                this.scope.attractionTravelStepsNearAttractionInfo.push(temp);
                //string data into the Indexdb
                var tempData = [];
                tempData.orderId = orderId;
                tempData.attractionTravelStepsId = attractionTravelStepsId;
                tempData.data = JSON.stringify(data);
                IndexDbWrapper_1.IndexDbWrapper.prototype.storeTravelBreakNearByData(this.scope.userTripId.toString(), tempData);
            }
            if (this.scope.checkItFinalRequestOrNot.AttractionTravelStepsId === attractionTravelStepsId &&
                this.scope.checkItFinalRequestOrNot.OrderId === orderId) {
                this.gettingAttractionXCategory();
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.orderId = orderId;
            ControlerIndex.prototype.errorParameters.attractionTravelStepsId = attractionTravelStepsId;
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "attractionTravelStepsNearAttractionInfoBinding", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.gettingAttractionXCategory = function () {
        var _this = this;
        try {
            var self_15 = this.scope;
            var getRecordInfo_1 = [];
            $.each(self_15.attractionTravelStepsNearAttractionInfo, function (key, value) {
                $.each(value.data, function (dataKey, dataValue) {
                    var exist = false;
                    $.each(self_15.attractionXCategory, function (attKey, attValue) {
                        if (dataValue.AttractionsId === attValue.AttractionId) {
                            exist = true;
                            return false;
                        }
                    });
                    if (exist === false) {
                        var temp = {};
                        temp.ID = dataValue.AttractionsId;
                        getRecordInfo_1.push(temp);
                        if (getRecordInfo_1.length > 25) {
                            self_15.getAttractionXCategoryAjaxRequest.push(getRecordInfo_1);
                            _this.queGetAttractionXCategory();
                            return false;
                        }
                    }
                });
            });
            if (getRecordInfo_1.length > 0) {
                var data = [];
                data.attractionsId = getRecordInfo_1;
                data.countryId = this.scope.countryId;
                TourSchedule_1.TourSchedule.prototype.getAttractionXCategory(this, data);
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "gettingAttractionXCategory", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.queGetAttractionXCategory = function () {
        try {
            if (this.scope.getAttractionXCategoryAjaxRequest.length !==
                GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionXCategory) {
                var differnceValue = this.scope.getAttractionXCategoryAjaxRequest.length -
                    GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionXCategory;
                if (differnceValue > 0) {
                    if (GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionXCategory <
                        GlobalVaraibles_1.GlobalVaraibles.queValueGetAttractionXCategory) {
                        for (var i = GlobalVaraibles_1.GlobalVaraibles.queValueGetAttractionXCategory; GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionXCategory <
                            GlobalVaraibles_1.GlobalVaraibles.queValueGetAttractionXCategory; GlobalVaraibles_1.GlobalVaraibles.queCounterGetAttractionXCategory++) {
                            if (GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionXCategory <
                                this.scope.getAttractionXCategoryAjaxRequest.length) {
                                var parameters = {};
                                parameters.attractionsId =
                                    this.scope.getAttractionXCategoryAjaxRequest[GlobalVaraibles_1.GlobalVaraibles
                                        .recordCounterGetAttractionXCategory];
                                parameters.countryId = this.scope.countryId;
                                TourSchedule_1.TourSchedule.prototype.getAttractionXCategory(this, parameters);
                                GlobalVaraibles_1.GlobalVaraibles.recordCounterGetAttractionXCategory++;
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "queGetAttractionXCategory", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.gettingAttractionXCategoryBinding = function (data) {
        try {
            var self_16 = this.scope;
            $.each(data, function (key, value) {
                var temp = [];
                temp.AttractionId = value.AttractionId;
                temp.CategoryId = value.CategoryId;
                if (self_16.attractionXCategory === null || jQuery.type(self_16.attractionXCategory) === "undefined") {
                    self_16.attractionXCategory = [];
                }
                self_16.attractionXCategory.push(temp);
                //stroing data into the index db
                IndexDbWrapper_1.IndexDbWrapper.prototype.storeAttractionCategoryData(self_16.UserTripId, temp);
            });
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "gettingAttractionXCategoryBinding", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.getAttractionsNextAttractionsBinding = function (attractionsId, data) {
        try {
            var self_17 = this.scope;
            var isExist = false;
            $.each(self_17.getAttractionsNextAttractions, function (key, value) {
                if (value.AttractionsId === attractionsId) {
                    isExist = true;
                    return false;
                }
            });
            if (isExist === false && data.length > 0) {
                var temp = [];
                temp.attractionTravelStepsId = attractionsId;
                temp.data = data;
                if (self_17.getAttractionsNextAttractions === null ||
                    jQuery.type(self_17.getAttractionsNextAttractions) === "undefined") {
                    self_17.getAttractionsNextAttractions = [];
                }
                self_17.getAttractionsNextAttractions.push(temp);
                var tempData = [];
                tempData.attractionTravelStepsId = attractionsId;
                tempData.data = JSON.stringify(data);
                IndexDbWrapper_1.IndexDbWrapper.prototype.storeDestinationNearByData(self_17.userTripId, tempData);
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            ControlerIndex.prototype.errorParameters.attractionsId = attractionsId;
            Error_1.Error.prototype.logError("ControlerIndex", "getAttractionsNextAttractionsBinding", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.getOrderOfRequest = function (data) {
        try {
            var self_18 = this.scope;
            self_18.userRequestedOrder = [];
            if (data !== null && data.length > 0) {
                $.each(data, function (orderKey, orderValue) {
                    var temp = [];
                    temp.AttractionId = orderValue.AttractionId;
                    temp.OrderNumber = orderValue.OrderNumber;
                    temp.BreakInformationId = orderValue.BreakInformationId;
                    temp.StayTime = orderValue.StayTime;
                    temp.IsRequestedAfterBreakFast = orderValue.IsRequestedAfterBreakFast;
                    temp.IsRequestedAfterLunch = orderValue.IsRequestedAfterLunch;
                    temp.IsRequestedAfterBreak = orderValue.IsRequestedAfterBreak;
                    temp.IsRequestedAfterDinner = orderValue.IsRequestedAfterDinner;
                    self_18.userRequestedOrder.push(temp);
                });
            }
            //enabling the flag is distance calculation is missing or not
            self_18.isDistanceCalcuationMissing = true;
            if (self_18.orderOfAttractionList.length === 0) {
                self_18.isDistanceCalcuationMissing = false;
            }
            $.each(self_18.orderOfAttractionList, function (key, value) {
                $.each(value.ListGetOrderOfAttractionVisit, function (googleKey, googleValue) {
                    if (googleValue.IsDistanceCalculationMissing === 1 ||
                        googleValue.IsDistanceCalculationMissing === true) {
                        self_18.isDistanceCalcuationMissing = false;
                        return false;
                    }
                });
            });
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "getOrderOfRequest", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.itenateDynamicDatesCreation = function (data) {
        var _this = this;
        try {
            var self_19 = this.scope;
            $("div#subtabs").tabs();
            $("div#subtabs ul").empty();
            $("div#subtabs").find('div').remove();
            ;
            var isDayExists_1 = false;
            var num_tabs = $("div#subtabs ul li").length + 1;
            var breakInformation_1 = [];
            $.each(data, function (groupKey, groupValue) {
                breakInformation_1 = [];
                isDayExists_1 = false;
                var divId;
                $.each(self_19.updatedBreaks, function (dateKey, dateValue) {
                    if (groupValue.GroupDate === dateValue.RequestDate) {
                        isDayExists_1 = true;
                        breakInformation_1 = dateValue;
                        return false;
                    }
                });
                divId = "tab_" + groupValue.GroupDate.replace("/", "_").replace("/", "_");
                if (!isDayExists_1) {
                    var temp = [];
                    temp.RequestDate = groupValue.GroupDate;
                    temp.IsUserInterestedDayBreak = 1;
                    temp.UpdateDayEndTime = self_19.updateDayEndTime;
                    temp.UpdateDayStartTime = self_19.updateDayStartTime;
                    temp.IsUserInterestedLunchBreak = 1;
                    temp.UpdatedLunchTime = self_19.updatedLunchTime;
                    temp.IsUserInterestedBreak = 1;
                    temp.UpdatedBreakTime = self_19.updatedBreakTime;
                    temp.IsUserInterestedDinnerBreak = 1;
                    temp.UpdatedDinnerTime = self_19.updatedDinnerTime;
                    temp.IsUserInterestedBreakFast = 1;
                    temp.UpdatedBreakFastTime = self_19.updatedBreakFastTime;
                    temp.divId = divId;
                    breakInformation_1 = temp;
                    self_19.updatedBreaks.push(temp);
                }
                $("div#subtabs ul").append("<li><a href='#tab_" +
                    groupValue.GroupDate.replace("/", "_").replace("/", "_") +
                    "' ng-click='ctrl.tabClicked(\"tab_" +
                    groupValue.GroupDate.replace("/", "_").replace("/", "_") +
                    "\")'>" +
                    groupValue.GroupDate +
                    "</a></li>");
                $("div#subtabs").append("<div id='" +
                    divId +
                    "'>" +
                    _this.tourInformation(divId, groupValue.ListGetOrderOfAttractionVisit, breakInformation_1) +
                    "</div>");
                $("div#subtabs").tabs("refresh");
                //$("#" + divId + "_UpdateDayStartTime").timepicker();
            });
            if (GlobalVaraibles_1.GlobalVaraibles.tabname.length === 0) {
                $("div#subtabs ul li").find('a:first').triggerHandler('click');
            }
            else {
                this.persistTab();
            }
            this.weatherUpdate(data);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "itenateDynamicDatesCreation", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.persistTab = function () {
        try {
            $('a[href="#' + GlobalVaraibles_1.GlobalVaraibles.tabname + '"]').click();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "persistTab", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.weatherUpdate = function (data) {
        var _this = this;
        try {
            var d_1 = new Date();
            var destidate_1 = new Date();
            var numberOfDaysToAdd = 6;
            destidate_1.setDate(destidate_1.getDate() + numberOfDaysToAdd);
            if (!jQuery.isEmptyObject(data)) {
                $.each(data, function (key, value) {
                    var currentDate = new Date(value.GroupDate);
                    if (currentDate.getTime() >= d_1.getTime() && currentDate.getTime() <= destidate_1.getTime()) {
                        if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                            $.each(value.ListGetOrderOfAttractionVisit, function (googleKey, googleValue) {
                                if (googleValue.DestinationLatitude !== null &&
                                    googleValue.DestinationLongitude !== null) {
                                    if (googleValue.DestinationLatitude !== null) {
                                        var destinatinoCoordinates = [];
                                        destinatinoCoordinates.DestinationLatitude =
                                            googleValue.DestinationLatitude;
                                        destinatinoCoordinates.DestinationLongitude =
                                            googleValue.DestinationLongitude;
                                        destinatinoCoordinates.RecordCount = googleValue.RecordCount;
                                        TourSchedule_1.TourSchedule.prototype.watherAPI(_this, destinatinoCoordinates);
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "weatherUpdate", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.weatherInfoUpdate = function (watherData, recordCount) {
        var _this = this;
        try {
            var self_20 = this.scope;
            var d = new Date();
            var destidate = new Date();
            var numberOfDaysToAdd = 6;
            destidate.setDate(destidate.getDate() + numberOfDaysToAdd);
            if (!jQuery.isEmptyObject(watherData)) {
                if (!jQuery.isEmptyObject(self_20.orderOfAttractionList)) {
                    $.each(self_20.orderOfAttractionList, function (key, value) {
                        var currentDate = new Date(value.GroupDate);
                        $.each(watherData.dailyForecasts.forecastLocation.forecast, function (weatherKey, weatherValue) {
                            var currentDate = new Date(weatherValue.utcTime);
                            if (_this.taskDate(weatherValue.utcTime) === _this.taskDate(value.GroupDate)) {
                                $("#weather_" + recordCount).empty();
                                $("#weather_" + recordCount)
                                    .prepend('<img alt="weather" src="' + weatherValue.iconLink + '" />');
                                $("#weather_" + recordCount)
                                    .prepend('<span class="tooltiptext">' +
                                    "Description : " +
                                    weatherValue.description +
                                    "<br/>" +
                                    "Sky Description : " +
                                    weatherValue.skyDescription +
                                    "<br/>" +
                                    "High Temperature : " +
                                    weatherValue.highTemperature +
                                    "<br/>" +
                                    "Low Temperature : " +
                                    weatherValue.lowTemperature +
                                    "<br/>" +
                                    "Humidity : " +
                                    weatherValue.humidity +
                                    "<br/>" +
                                    "Rain Fall : " +
                                    weatherValue.rainFall +
                                    "<br/>" +
                                    "Snow Fall : " +
                                    weatherValue.snowFall +
                                    "<br/>" +
                                    "Wind Speed : " +
                                    weatherValue.windSpeed +
                                    "<br/>" +
                                    "UV : " +
                                    weatherValue.uvDesc +
                                    '</span>');
                                return false;
                            }
                        });
                    });
                }
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.watherData = watherData;
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            Error_1.Error.prototype.logError("ControlerIndex", "weatherInfoUpdate", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.taskDate = function (inputDate) {
        try {
            var datemilli = Date.parse(inputDate);
            var d = (new Date(datemilli) + '').split(' ');
            d[2] = d[2] + ',';
            return [d[0], d[1], d[2], d[3]].join(' ');
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.inputDate = inputDate;
            Error_1.Error.prototype.logError("ControlerIndex", "taskDate", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.tourInformation = function (divId, tourInformation, breakInformation) {
        try {
            var x = {
                "IsUserInterestedBreak": breakInformation.IsUserInterestedBreak,
                "IsUserInterestedDayBreak": breakInformation.IsUserInterestedDayBreak,
                "UpdateDayStartTime": breakInformation.UpdateDayStartTime,
                "UpdatedDinnerTime": breakInformation.UpdatedDinnerTime,
                "UpdatedLunchTime": breakInformation.UpdatedLunchTime,
                "IsUserInterestedLunchBreak": breakInformation.IsUserInterestedLunchBreak,
                "UpdatedBreakTime": breakInformation.UpdatedBreakTime,
                "UpdateDayEndTime": breakInformation.UpdateDayEndTime,
                "IsUserInterestedDinnerBreak": breakInformation.IsUserInterestedDinnerBreak,
                "RequestDate": breakInformation.RequestDate,
                "IsBreakAdded": breakInformation.IsBreakAdded,
                "BreakAttractionId": breakInformation.BreakAttractionId,
                "IsLunchAdded": breakInformation.IsLunchAdded,
                "LunchAttractionId": breakInformation.LunchAttractionId,
                "IsDinnerAdded": breakInformation.IsDinnerAdded,
                "DinnerAttractionId": breakInformation.DinnerAttractionId,
                "IsUserInterestedBreakFast": breakInformation.IsUserInterestedBreakFast,
                "UpdatedBreakFastTime": breakInformation.UpdatedBreakFastTime,
                "IsBreakFastAdded": breakInformation.IsBreakFastAdded,
                "BreakFastAttractionId": breakInformation.BreakFastAttractionId,
                "IsDayBreakAdded": breakInformation.IsDayBreakAdded,
                "DayBreakAttractionId": breakInformation.DayBreakAttractionId,
                "NoOfCars": breakInformation.NoOfCars,
                "AverageMileage": breakInformation.AverageMileage,
                "BreakExpense": breakInformation.BreakExpense,
                "BreakFastExpense": breakInformation.BreakFastExpense,
                "CarRentalExpense": breakInformation.CarRentalExpense,
                "DayBreakExpense": breakInformation.DayBreakExpense,
                "LunchExpense": breakInformation.LunchExpense,
                "NoOfRooms": breakInformation.NoOfRooms,
                "DinnerExpense": breakInformation.DinnerExpense,
                "IsNoOfCarsUserUpdated": breakInformation.IsNoOfCarsUserUpdated,
                "IsAverageMileageUserUpdated": breakInformation.IsAverageMileageUserUpdated,
                "IsCarRentalExpenseUserUpdated": breakInformation.IsCarRentalExpenseUserUpdated,
                "IsBreakFastExpenseUserUpdated": breakInformation.IsBreakFastExpenseUserUpdated,
                "IsLunchExpenseUserUpdated": breakInformation.IsLunchExpenseUserUpdated,
                "IsBreakExpenseUserUpdated": breakInformation.IsBreakExpenseUserUpdated,
                "IsDinnerExpenseUserUpdated": breakInformation.IsDinnerExpenseUserUpdated,
                "IsDayBreakExpenseUserUpdated": breakInformation.IsDayBreakExpenseUserUpdated,
                "IsNoOfRoomsUserUpdated": breakInformation.IsNoOfRoomsUserUpdated
            };
            var jsonObject = {
                "public_FilterAttractions": tourInformation,
                "breakInformation": x,
                "divId": divId
            };
            TourSchedule_1.TourSchedule.prototype.tourInformation(jsonObject);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.divId = divId;
            ControlerIndex.prototype.errorParameters.tourInformation = tourInformation;
            ControlerIndex.prototype.errorParameters.breakInformation = breakInformation;
            Error_1.Error.prototype.logError("ControlerIndex", "tourInformation", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.googleMapStepMarks = function (data, recordCount) {
        try {
            var self_21 = this.scope;
            var isFirst = true;
            var isBreakAdd = false;
            var markerdata_2 = [];
            var index_2 = 0;
            this.clearTravelStep();
            if (!jQuery.isEmptyObject(data)) {
                $.each(data, function (key, value) {
                    if (!jQuery.isEmptyObject(value.ListGetOrderOfAttractionVisit)) {
                        $.each(value.ListGetOrderOfAttractionVisit, function (googleKey, googleValue) {
                            if (googleValue.SourceLatitude !== null &&
                                googleValue.SourceLongitude !== null &&
                                googleValue.DestinationLatitude !== null &&
                                googleValue.DestinationLongitude !== null) {
                                //If user select the Yes then we are reloading the map and opening the title window of map
                                if (googleValue.RecordCount === recordCount) {
                                    $.each(value.DrivingSteps, function (stepKey, stepValue) {
                                        if (stepValue.RecordCount === googleValue.RecordCount) {
                                            var recordStepCounter = 1;
                                            $.each(stepValue.DirectionSteps, function (sKey, sValue) {
                                                if (sValue.Distance_Value > 1000) {
                                                    var stepTitle = "<span class='mapAttractionSideHeadign'>" +
                                                        "Start Time: " +
                                                        "</span>";
                                                    stepTitle +=
                                                        "<span class='mapAttractionSideText'>" +
                                                            sValue.StartDateTime +
                                                            "</span>";
                                                    stepTitle += "<br/>";
                                                    stepTitle +=
                                                        "<span class='mapAttractionSideHeadign'>" +
                                                            "End Time: " +
                                                            "</span>";
                                                    stepTitle +=
                                                        "<span class='mapAttractionSideText'>" +
                                                            sValue.EndDateTime +
                                                            "</span>";
                                                    stepTitle += "<br/>";
                                                    stepTitle +=
                                                        "<span class='mapAttractionSideHeadign'>" +
                                                            "Distance Covered: " +
                                                            "</span>";
                                                    stepTitle +=
                                                        "<span class='mapAttractionSideText'>" +
                                                            sValue.DistanceCovered +
                                                            "</span>";
                                                    stepTitle += "<br/>";
                                                    stepTitle +=
                                                        "<span class='mapAttractionSideHeadign'>" +
                                                            "Distance Covered Time: " +
                                                            "</span>";
                                                    stepTitle +=
                                                        "<span class='mapAttractionSideText'>" +
                                                            sValue.DistanceCoveredTime +
                                                            "</span>";
                                                    stepTitle += "<br/>";
                                                    stepTitle +=
                                                        "<span class='mapAttractionSideHeadign'>" +
                                                            "Check Neary by Events <button type='button' onclick='mapStepBreakInfo(" +
                                                            sValue.AttractionTravelStepsId +
                                                            "," +
                                                            sValue.OrderId +
                                                            ")'>Yes</button>" +
                                                            "</span>";
                                                    markerdata_2 = [];
                                                    markerdata_2.lat = sValue.End_location_lat;
                                                    markerdata_2.lng = sValue.End_location_lng;
                                                    markerdata_2.title = recordStepCounter;
                                                    markerdata_2.label = recordStepCounter.toString();
                                                    markerdata_2.content = stepTitle;
                                                    self_21.googleTravelStep.push(MapsActions_1.MapsActions.prototype
                                                        .addMarderk(markerdata_2, self_21.googleMaps, true));
                                                    recordStepCounter++;
                                                }
                                            });
                                        }
                                    });
                                }
                                var sourceCoordinates = [];
                                var destinatinoCoordinates = [];
                                //Writing the PloyLine
                                var path = [];
                                if (googleValue.RecordCount === recordCount || recordCount === 0) {
                                    if (googleValue.TravelTimeSeconds > 0) {
                                        if (googleValue.IsNeedDrivningBreak) {
                                            $.each(value.DrivingSteps, function (stepKey, stepValue) {
                                                if (stepValue.RecordCount === googleValue.RecordCount) {
                                                    $.each(stepValue.DirectionSteps, function (sKey, sValue) {
                                                        sourceCoordinates = [];
                                                        sourceCoordinates.push(sValue.Start_location_lat);
                                                        sourceCoordinates.push(sValue.Start_location_lng);
                                                        path.push(sourceCoordinates);
                                                        destinatinoCoordinates = [];
                                                        destinatinoCoordinates.push(sValue
                                                            .End_location_lat);
                                                        destinatinoCoordinates.push(sValue
                                                            .End_location_lng);
                                                        path.push(destinatinoCoordinates);
                                                    });
                                                }
                                            });
                                        }
                                        else {
                                            sourceCoordinates = [];
                                            sourceCoordinates.push(googleValue.SourceLatitude);
                                            sourceCoordinates.push(googleValue.SourceLongitude);
                                            path.push(sourceCoordinates);
                                            destinatinoCoordinates = [];
                                            destinatinoCoordinates.push(googleValue.DestinationLatitude);
                                            destinatinoCoordinates.push(googleValue.DestinationLongitude);
                                            path.push(destinatinoCoordinates);
                                        }
                                        if (index_2 === self_21.mapLineColor.length) {
                                            index_2 = 0;
                                        }
                                        if (path.length > 0) {
                                            self_21.googleMapsLinesMarks.push(self_21.googleMaps
                                                .drawPolyline({
                                                path: path,
                                                strokeColor: self_21.mapLineColor[index_2],
                                                strokeOpacity: 0.6,
                                                strokeWeight: 6
                                            }));
                                            index_2++;
                                        }
                                    }
                                }
                            }
                        });
                    }
                });
            }
            $("#googleMaps").width("800px");
            $("#googleMaps").height("400px");
            $("#googleMaps").focus();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            Error_1.Error.prototype.logError("ControlerIndex", "googleMapStepMarks", ControlerIndex.prototype.errorParameters, e);
        }
    };
    //not intereseted attraction capturing and stroing into the list
    ControlerIndex.prototype.notIntereseted = function (attractionId) {
        try {
            var isExisted_1 = false;
            $.each(this.scope.attractionInterestedList, function (attractionKey, attractionValue) {
                if (attractionValue.AttractionsId === attractionId) {
                    //$scope.notInterestedList.push(attractionValue);
                    isExisted_1 = true;
                    return false;
                }
            });
            if (isExisted_1) {
                TourSchedule_1.TourSchedule.prototype.deleteNotInterestedAttractionList(this, attractionId);
            }
            else {
                alert("Attraction not in the list selected");
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionId = attractionId;
            Error_1.Error.prototype.logError("ControlerIndex", "notIntereseted", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.interested = function (attraction) {
        try {
            var isExisted = false;
            if (this.scope.attractionInterestedList !== null) {
                $.each(this.scope.attractionInterestedList, function (key, value) {
                    if (value.AttractionsId === attraction.AttractionsId) {
                        isExisted = true;
                        return false;
                    }
                });
            }
            if (!isExisted) {
                TourSchedule_1.TourSchedule.prototype.addInterestedAttractionList(this, attraction.AttractionsId);
            }
            else {
                alert("Attraction Already selected");
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attraction = attraction;
            Error_1.Error.prototype.logError("ControlerIndex", "interested", ControlerIndex.prototype.errorParameters, e);
        }
    };
    //editing the tour information
    ControlerIndex.prototype.updateTourInformation = function (recordCount, updatedTime) {
        try {
            var isFound_1 = false;
            $.each(this.scope.orderOfAttractionList, function (recordKey, recordValue) {
                $.each(recordValue.ListGetOrderOfAttractionVisit, function (groupKey, groupValue) {
                    if (groupValue.RecordCount === recordCount) {
                        groupValue.UpdatedTime = updatedTime;
                        groupValue.IsUpdatedViewTime = true;
                        isFound_1 = true;
                        return false;
                    }
                });
                if (isFound_1) {
                    return false;
                }
            });
            this.publicGetOrderOfAttractionVisit();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            ControlerIndex.prototype.errorParameters.updatedTime = updatedTime;
            Error_1.Error.prototype.logError("ControlerIndex", "updateTourInformation", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.categoryClick = function (categoryId) {
        try {
            $('div[relattr="cat_tab"]').hide();
            $('#cat_' + categoryId).show();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.categoryId = categoryId;
            Error_1.Error.prototype.logError("ControlerIndex", "categoryClick", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.categoryFilter = function () {
        try {
            var self_22 = this.scope;
            var tempFilterAttractionList = this.scope.filterAttractionList;
            this.scope.filterAttractionList = [];
            $(tempFilterAttractionList).filter(function (index) {
                if (tempFilterAttractionList[index].AttractionName.toLowerCase()
                    .indexOf(self_22.categoryPlaceSearch.toLowerCase()) !==
                    -1) {
                    self_22.filterAttractionList.push(tempFilterAttractionList[index]);
                }
            });
            if ($("#placeSeachForAdding").val().length > 3 || $("#googleMapplaceSeachForAdding").val().length > 3) {
                TourSchedule_1.TourSchedule.prototype.autoComplte(this, ($("#placeSeachForAdding").val() === ''
                    ? $("#googleMapplaceSeachForAdding").val()
                    : $("#placeSeachForAdding").val()), self_22.countryId);
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "categoryFilter", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.insertBreakInformation = function (attractionInfo) {
        try {
            var self_23 = this.scope;
            var indexCounter = 0;
            $.each(self_23.updatedBreaks, function (key, value) {
                if ($("#hdSelectedDivId").val() === value.divId) {
                    indexCounter = key;
                    return false;
                }
            });
            switch ($("#hdSelectedBreakType").val()) {
                case "1":
                    {
                        self_23.updatedBreaks[indexCounter].IsBreakFastAdded = true;
                        self_23.UpdatedBreaks[indexCounter].BreakFastAttractionId = attractionInfo.AttractionsId;
                        break;
                    }
                case "2":
                    {
                        self_23.updatedBreaks[indexCounter].IsLunchAdded = true;
                        self_23.updatedBreaks[indexCounter].LunchAttractionId = attractionInfo.AttractionsId;
                        break;
                    }
                case "3":
                    {
                        self_23.updatedBreaks[indexCounter].IsBreakAdded = true;
                        self_23.updatedBreaks[indexCounter].BreakAttractionId = attractionInfo.AttractionsId;
                        break;
                    }
                case "4":
                    {
                        self_23.updatedBreaks[indexCounter].IsDinnerAdded = true;
                        self_23.updatedBreaks[indexCounter].DinnerAttractionId = attractionInfo.AttractionsId;
                        break;
                    }
                case "5":
                    {
                        self_23.updatedBreaks[indexCounter].IsDayBreakAdded = true;
                        self_23.updatedBreaks[indexCounter].DayBreakAttractionId = attractionInfo.AttractionsId;
                        break;
                    }
            }
            $("#addingBreak")
                .dialog("close");
            this.publicGetOrderOfAttractionVisit();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionInfo = attractionInfo;
            Error_1.Error.prototype.logError("ControlerIndex", "insertBreakInformation", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.breakInformationUpdate = function (divId) {
        try {
            var self_24 = this.scope;
            var indexCounter_1 = 0;
            $.each(self_24.updatedBreaks, function (key, value) {
                if (divId === value.divId) {
                    indexCounter_1 = key;
                    return false;
                }
            });
            //$scope.UpdatedBreaks[indexCounter].IsUserInterestedDayBreak = $("#" + divId + "_IsUserInterestedDayBreak").prop('checked');
            self_24.updatedBreaks[indexCounter_1].UpdateDayEndTime =
                (jQuery.type($("#" + divId + "_UpdateDayEndTime").val()) === "undefined")
                    ? "00:00:00"
                    : $("#" + divId + "_UpdateDayEndTime").val();
            self_24.updatedBreaks[indexCounter_1].UpdateDayStartTime =
                (jQuery.type($("#" + divId + "_UpdateDayStartTime").val()) === "undefined")
                    ? "00:00:00"
                    : $("#" + divId + "_UpdateDayStartTime").val();
            self_24.updatedBreaks[indexCounter_1].IsUserInterestedLunchBreak =
                (jQuery.type($("#" + divId + "_IsUserInterestedLunchBreak").val()) === "undefined")
                    ? false
                    : $("#" + divId + "_IsUserInterestedLunchBreak").prop('checked');
            self_24.updatedBreaks[indexCounter_1].UpdatedLunchTime =
                (jQuery.type($("#" + divId + "_UpdatedLunchTime").val()) === "undefined")
                    ? "00:00:00"
                    : $("#" + divId + "_UpdatedLunchTime").val();
            self_24.updatedBreaks[indexCounter_1].IsUserInterestedBreak =
                (jQuery.type($("#" + divId + "_IsUserInterestedBreak").val()) === "undefined")
                    ? false
                    : $("#" + divId + "_IsUserInterestedBreak").prop('checked');
            self_24.updatedBreaks[indexCounter_1].UpdatedBreakTime =
                (jQuery.type($("#" + divId + "_UpdatedBreakTime").val()) === "undefined")
                    ? "00:00:00"
                    : $("#" + divId + "_UpdatedBreakTime").val();
            self_24.updatedBreaks[indexCounter_1].IsUserInterestedDinnerBreak =
                (jQuery.type($("#" + divId + "_IsUserInterestedDinnerBreak").val()) === "undefined")
                    ? false
                    : $("#" + divId + "_IsUserInterestedDinnerBreak").prop('checked');
            self_24.updatedBreaks[indexCounter_1].UpdatedDinnerTime =
                (jQuery.type($("#" + divId + "_UpdatedDinnerTime").val()) === "undefined")
                    ? "00:00:00"
                    : $("#" + divId + "_UpdatedDinnerTime").val();
            self_24.updatedBreaks[indexCounter_1].IsUserInterestedBreakFast =
                (jQuery.type($("#" + divId + "_IsUserInterestedBreakFast").val()) === "undefined")
                    ? false
                    : $("#" + divId + "_IsUserInterestedBreakFast").prop('checked');
            self_24.updatedBreaks[indexCounter_1].UpdatedBreakFastTime =
                (jQuery.type($("#" + divId + "_UpdatedBreakFast").val()) === "undefined")
                    ? "00:00:00"
                    : $("#" + divId + "_UpdatedBreakFast").val();
            this.publicGetOrderOfAttractionVisit();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.divId = divId;
            Error_1.Error.prototype.logError("ControlerIndex", "breakInformationUpdate", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.dayExpenseInformationUpdate = function (divId, strId) {
        try {
            var self_25 = this.scope;
            var indexCounter_2 = 0;
            $.each(self_25.updatedBreaks, function (key, value) {
                if (divId === value.divId) {
                    indexCounter_2 = key;
                    return false;
                }
            });
            switch (strId) {
                case divId + "_NoOfCars":
                    {
                        self_25.updatedBreaks[indexCounter_2].NoOfCars = $("#" + divId + "_NoOfCars").val();
                        self_25.updatedBreaks[indexCounter_2].IsNoOfCarsUserUpdated = true;
                        break;
                    }
                case divId + "_AverageMileage":
                    {
                        self_25.updatedBreaks[indexCounter_2].AverageMileage = $("#" + divId + "_AverageMileage").val();
                        self_25.updatedBreaks[indexCounter_2].IsAverageMileageUserUpdated = true;
                        break;
                    }
                case divId + "_CarRentalExpense":
                    {
                        self_25.updatedBreaks[indexCounter_2].CarRentalExpense = $("#" + divId + "_CarRentalExpense").val();
                        self_25.updatedBreaks[indexCounter_2].IsCarRentalExpenseUserUpdated = true;
                        break;
                    }
                case divId + "_NoOfRooms":
                    {
                        self_25.updatedBreaks[indexCounter_2].NoOfRooms = $("#" + divId + "_NoOfRooms").val();
                        self_25.updatedBreaks[indexCounter_2].IsNoOfRoomsUserUpdated = true;
                        break;
                    }
                case divId + "_DayBreakExpense":
                    {
                        self_25.updatedBreaks[indexCounter_2].DayBreakExpense = $("#" + divId + "_DayBreakExpense").val();
                        self_25.updatedBreaks[indexCounter_2].IsDayBreakExpenseUserUpdated = true;
                        break;
                    }
                case divId + "_BreakFastExpense":
                    {
                        self_25.updatedBreaks[indexCounter_2].BreakFastExpense = $("#" + divId + "_BreakFastExpense").val();
                        self_25.updatedBreaks[indexCounter_2].IsBreakFastExpenseUserUpdated = true;
                        break;
                    }
                case divId + "_LunchExpense":
                    {
                        self_25.updatedBreaks[indexCounter_2].LunchExpense = $("#" + divId + "_LunchExpense").val();
                        self_25.updatedBreaks[indexCounter_2].IsLunchExpenseUserUpdated = true;
                        break;
                    }
                case divId + "_BreakExpense":
                    {
                        self_25.updatedBreaks[indexCounter_2].BreakExpense = $("#" + divId + "_BreakExpense").val();
                        self_25.updatedBreaks[indexCounter_2].IsBreakExpenseUserUpdated = true;
                        break;
                    }
                case divId + "_DinnerExpense":
                    {
                        self_25.updatedBreaks[indexCounter_2].DinnerExpense = $("#" + divId + "_DinnerExpense").val();
                        self_25.updatedBreaks[indexCounter_2].IsDinnerExpenseUserUpdated = true;
                        break;
                    }
            }
            this.publicGetOrderOfAttractionVisit();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.divId = divId;
            ControlerIndex.prototype.errorParameters.strId = strId;
            Error_1.Error.prototype.logError("ControlerIndex", "dayExpenseInformationUpdate", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.plannedTours = function (data) {
        try {
            var self_26 = this.scope;
            self_26.countryId = data.CountryId;
            self_26.travelModeId = data.TravelModeId;
            self_26.startDate = data.StartDate;
            self_26.sourceAttractionID = data.SourceAttractionID;
            self_26.destinationAttractionID = data.DestinationAttractionID;
            $("#expense_Persons").val(data.NoOfPersons);
            $("#expense_Cars").val(data.NoOfCars);
            $("#expense_PerGallon").val(data.CarMileage);
            $("#expense_PerGallonPrice").val(data.FuelPrice);
            $("#autoStartLocation").val(data.SourceAttractionName);
            $("#autoDestinationLocation").val(data.DestinationAttractionName);
            $("#expense_DrivingBreak").val(data.DrivingBreak);
            //calling the auto complete for filling the city information
            TourSchedule_1.TourSchedule.prototype.getCityList(this, this.scope.countryId);
            TourSchedule_1.TourSchedule.prototype.userGetCityList(this);
            TourSchedule_1.TourSchedule.prototype.userUserTripGetAttractions(this);
            TourSchedule_1.TourSchedule.prototype.userRequestedBreaks(this);
            this.updateUserReqestOrder();
            TourSchedule_1.TourSchedule.prototype.userGetUserStoredAttractinInfo(this);
            TourSchedule_1.TourSchedule.prototype.userUserTripBuildStatus(this);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "plannedTours", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.getCityListBind = function (data) {
        try {
            var self_27 = this.scope;
            var selfThis_3 = this;
            var cityList_1 = [];
            $.each(data, function (cityKey, cityValue) {
                var item = [];
                item.value = cityValue.CityName;
                item.data = cityValue.CityId;
                item.countryId = cityValue.CountryId;
                cityList_1.push(item);
            });
            $('#autoCityName').autocomplete({
                source: cityList_1
            });
            $("#autoCityName").on("autocompleteselect", function (event, ui) {
                //this will get the category list
                self_27.selectedCityLabel = "";
                self_27.$apply(function () {
                    self_27.countryId = ui.item.countryId;
                    self_27.cityId = ui.item.data;
                    self_27.selectedCityLabel = ui.item.label;
                    selfThis_3.getCategoryList();
                });
            });
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "getCityListBind", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.userGetCityListBind = function (data) {
        try {
            var self_28 = this.scope;
            self_28.$apply(function () {
                self_28.visitCityList = [];
                $.each(data, function (key, value) {
                    var item = [];
                    item.countryId = value.CountryId;
                    item.cityId = value.CityId;
                    item.cityName = value.CityName;
                    item.recordIndex = value.RecordIndex;
                    self_28.visitCityList.push(item);
                });
            });
            this.getCategoryList();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.data = data;
            Error_1.Error.prototype.logError("ControlerIndex", "userGetCityListBind", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.buildExpenseInfo = function () {
        try {
            var self_29 = this.scope;
            var attractionCount_1 = 0;
            var distance_1 = 0;
            var breakFastExpense_1 = 0;
            var lunchExpense_1 = 0;
            var breakExpense_1 = 0;
            var dayBreakExpense_1 = 0;
            var carRentalExpense_1 = 0;
            var dinnerExpense_1 = 0;
            var fuelExpense = 0;
            var totalExpense = 0;
            $.each(self_29.updatedBreaks, function (key, value) {
                attractionCount_1 = attractionCount_1 + value.NoOfAttractions;
                distance_1 = distance_1 + parseFloat(value.Distance > 0 ? 0 : value.Distance);
                breakFastExpense_1 = breakFastExpense_1 + (value.BreakFastExpense * $("#expense_Persons").val());
                lunchExpense_1 = lunchExpense_1 +
                    (value.LunchExpense * ($("#expense_Persons").val() <= 0 ? 1 : $("#expense_Persons").val()));
                breakExpense_1 = breakExpense_1 + (value.BreakExpense * $("#expense_Persons").val());
                dayBreakExpense_1 = dayBreakExpense_1 + (value.DayBreakExpense * value.NoOfRooms);
                carRentalExpense_1 = carRentalExpense_1 + value.CarRentalExpense;
                dinnerExpense_1 = dinnerExpense_1 + (value.DinnerExpense * $("#expense_Persons").val());
            });
            fuelExpense = (distance_1 / $("#expense_PerGallon").val()) *
                $("#expense_Cars").val() *
                $("#expense_PerGallonPrice").val();
            totalExpense = breakFastExpense_1 +
                lunchExpense_1 +
                breakExpense_1 +
                dayBreakExpense_1 +
                carRentalExpense_1 +
                dinnerExpense_1 +
                fuelExpense;
            $("#expense_Days").html(self_29.updatedBreaks.length);
            $("#expense_AttractionsList").html(attractionCount_1.toString());
            $("#expense_Distance").html(parseFloat(distance_1.toString()).toFixed(2));
            $("#expense_BreakFastExpense").html(breakFastExpense_1.toString());
            $("#expense_LunchExpense").html(lunchExpense_1.toString());
            $("#expense_BreakExpense").html(breakExpense_1.toString());
            $("#expense_DinnerExpense").html(dinnerExpense_1.toString());
            $("#expense_DayExpense").html(dayBreakExpense_1.toString());
            $("#expense_RentalExpense").html(carRentalExpense_1.toString());
            $("#expense_FuelExpense").html(fuelExpense.toFixed(2));
            $("#expense_Expense").html(totalExpense.toFixed(2));
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "buildExpenseInfo", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.addLunchDinnerBreak = function (breakType, attractionId, divId, sourceLongitude, sourceLatitude, attractionTravelStepsId) {
        try {
            this.scope.breakValue = [];
            this.scope.breakValue.breakType = breakType;
            this.scope.breakValue.attractionId = attractionId;
            this.scope.breakValue.divId = divId;
            this.scope.breakValue.sourceLongitude = sourceLongitude;
            this.scope.breakValue.sourceLatitude = sourceLatitude;
            this.scope.breakValue.attractionTravelStepsId = attractionTravelStepsId;
            this.breakAttractionCalling();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "addLunchDinnerBreak", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.breakAttractionCalling = function () {
        try {
            this.scope.breakValue.distance = $("#breakDistance").val();
            TourSchedule_1.TourSchedule.prototype.userGetNearestRestaruents(this, this.scope);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "breakAttractionCalling", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.extraCategorySelected = function (categoryList) {
        try {
            var self_30 = this.scope;
            var isRecordFound = false;
            $.each(self_30.selectedExtraCategoryList, function (categoryKey, categoryValue) {
                if (categoryValue["GoogleTypeID"] === categoryList.GoogleTypeID) {
                    isRecordFound = true;
                    self_30.selectedExtraCategoryList.splice(categoryKey, 1);
                    return false;
                }
                else {
                    isRecordFound = false;
                }
            });
            if (!isRecordFound) {
                var item = [];
                item.GoogleTypeID = categoryList.GoogleTypeID;
                item.CategoryName = categoryList.TypeName;
                self_30.selectedExtraCategoryList.push(item);
            }
            //This feature need fix and implment it later
            // User_InsertCategoryInformation($scope, $http);
            //it will filter with the selected attraction list
            this.extraCategorySelectedAttractionFilter();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.categoryList = categoryList;
            Error_1.Error.prototype.logError("ControlerIndex", "extraCategorySelected", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.extraCategorySelectedAttractionFilter = function () {
        try {
            var self_31 = this.scope;
            self_31.filterNearLocations = [];
            $(self_31.selectedExtraCategoryList).filter(function (index) {
                $(self_31.nearLocations).filter(function (attractionIndex) {
                    $.each(self_31.NearLocations[attractionIndex].AllCategoriesId, function (attKey, attValue) {
                        if (self_31.selectedExtraCategoryList[index].GoogleTypeID ===
                            attValue) {
                            self_31.filterNearLocations.push(self_31.nearLocations[attractionIndex]);
                            return false;
                        }
                    });
                });
            });
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "extraCategorySelectedAttractionFilter", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.imageSlideShow = function (attractionsId, attractionName) {
        try {
            var parameters = {};
            parameters.attractionId = attractionsId;
            parameters.countryId = this.scope.countryId;
            parameters.attractionName = attractionName;
            TourSchedule_1.TourSchedule.prototype.attractionsPhotoInfo(this, parameters);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionsId = attractionsId;
            ControlerIndex.prototype.errorParameters.attractionName = attractionName;
            Error_1.Error.prototype.logError("ControlerIndex", "imageSlideShow", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.photoInfo = function (attractionId, data, attractionName) {
        try {
            var self_32 = this.scope;
            self_32.images = [];
            self_32.currentIndex = 0;
            if (data.length > 0) {
                $("#photoSlideShow")
                    .dialog("open");
                var counter = 0;
                $.each(data, function (key, value) {
                    var temp = [];
                    temp.src = value["PhotoURL"];
                    temp.id = counter;
                    counter = counter + 1;
                    temp.title = attractionName + ' - Pic ' + counter;
                    self_32.images.push(temp);
                });
                this.displaySlideImage();
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionId = attractionId;
            ControlerIndex.prototype.errorParameters.data = data;
            ControlerIndex.prototype.errorParameters.attractionName = attractionName;
            Error_1.Error.prototype.logError("ControlerIndex", "photoInfo", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.displaySlideImage = function () {
        try {
            var self_33 = this.scope;
            $.each(self_33.images, function (key, value) {
                $("#photoSlideShow .slider .slide #" + value.id).hide();
            });
            $("#photoSlideShow .slider .slide #" + self_33.images[self_33.currentIndex].id).show();
            window.scrollTo(Constants_1.Constants.prototype.mouseX, Constants_1.Constants.prototype.mouseY);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "displaySlideImage", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.next = function () {
        try {
            var self_34 = this.scope;
            self_34.currentIndex < self_34.images.length - 1 ? self_34.currentIndex++ : self_34.currentIndex = 0;
            self_34.displaySlideImage();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "next", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.prev = function () {
        try {
            var self_35 = this.scope;
            self_35.currentIndex > 0 ? self_35.currentIndex-- : self_35.currentIndex = self_35.images.length - 1;
            self_35.displaySlideImage();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "prev", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.categoriesTabClick = function () {
        try {
            var self_36 = this.scope;
            this.clickMainCategorySelected(self_36.masterCategoryList[0].CategoryId);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "categoriesTabClick", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.tripInfoUpdate = function () {
        try {
            var self_37 = this.scope;
            var temp = {
                NoOfPersons: $("#expense_Persons").val(),
                NoOfCars: $("#expense_Cars").val(),
                CarMileage: $("#expense_PerGallon").val(),
                FuelPrice: $("#expense_PerGallonPrice").val(),
                DrivingBreak: $("#expense_DrivingBreak").val()
            };
            TourExpenses_1.TourExpenses.prototype.userUserTripUpdate(this, temp);
            this.buildExpenseInfo();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "tripInfoUpdate", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.ignoreMyExpenseChanges = function (divId) {
        try {
            var self_38 = this.scope;
            var indexCounter_3 = 0;
            $.each(self_38.updatedBreaks, function (key, value) {
                if (divId === value.divId) {
                    indexCounter_3 = key;
                    return false;
                }
            });
            self_38.updatedBreaks[indexCounter_3].IsNoOfCarsUserUpdated = false;
            self_38.updatedBreaks[indexCounter_3].IsAverageMileageUserUpdated = false;
            self_38.updatedBreaks[indexCounter_3].IsCarRentalExpenseUserUpdated = false;
            self_38.updatedBreaks[indexCounter_3].IsBreakFastExpenseUserUpdated = false;
            self_38.updatedBreaks[indexCounter_3].IsLunchExpenseUserUpdated = false;
            self_38.updatedBreaks[indexCounter_3].IsBreakExpenseUserUpdated = false;
            self_38.updatedBreaks[indexCounter_3].IsDinnerExpenseUserUpdated = false;
            self_38.updatedBreaks[indexCounter_3].IsDayBreakExpenseUserUpdated = false;
            self_38.updatedBreaks[indexCounter_3].IsNoOfRoomsUserUpdated = false;
            this.publicGetOrderOfAttractionVisit();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.divId = divId;
            Error_1.Error.prototype.logError("ControlerIndex", "ignoreMyExpenseChanges", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.searchAutoComplete = function () {
        try {
            var self_39 = this.scope;
            if ($("#autoStartLocation").val().length > 3) {
                TourSchedule_1.TourSchedule.prototype.autoComplte(this, $("#autoStartLocation").val(), self_39.countryId);
            }
            if ($("#autoDestinationLocation").val().length > 3) {
                TourSchedule_1.TourSchedule.prototype.autoComplte(this, $("#autoDestinationLocation").val(), self_39.countryId);
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "searchAutoComplete", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.tourInfoUpdate = function (autoCompleteInfo) {
        try {
            var self_40 = this.scope;
            autoCompleteInfo.startTime = self_40.startTime;
            autoCompleteInfo.startDate = self_40.startDate;
            autoCompleteInfo.countryId = self_40.countryId;
            TourSchedule_1.TourSchedule.prototype.userRequestedAttraction(this, autoCompleteInfo);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.autoCompleteInfo = JSON.stringify(autoCompleteInfo);
            Error_1.Error.prototype.logError("ControlerIndex", "tourInfoUpdate", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.breakAttractionCallingAutoComplete = function () {
        try {
            var self_41 = this.scope;
            var data = {};
            data.address = $("#autoAddAttractionForBreak").val();
            data.latitude = $("#hdSourceLatitude").val();
            data.longitude = $("#hdSourceLongitude").val();
            data.distance = $("#breakDistance").val();
            TourSchedule_1.TourSchedule.prototype.autoComplte(this, $("#autoAddAttractionForBreak").val(), self_41.countryId);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "breakAttractionCallingAutoComplete", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.viewTimeUpdate = function (attractionId, viewTime) {
        try {
            var self_42 = this.scope;
            var indexCounter_4 = 0;
            var recordExist_1 = false;
            var recordValue_1 = [];
            recordValue_1.StayTime = viewTime;
            $.each(self_42.userRequestedOrder, function (key, value) {
                if (attractionId === value.AttractionId) {
                    recordValue_1.AttractionId = value.AttractionId;
                    recordValue_1.OrderNumber = value.OrderNumber;
                    recordValue_1.IsRequestedAfterBreakFast = value.IsRequestedAfterBreakFast;
                    recordValue_1.IsRequestedAfterLunch = value.IsRequestedAfterLunch;
                    recordValue_1.IsRequestedAfterBreak = value.IsRequestedAfterBreak;
                    recordValue_1.IsRequestedAfterDinner = value.IsRequestedAfterDinner;
                    indexCounter_4 = key;
                    recordExist_1 = true;
                    return false;
                }
            });
            if (recordExist_1) {
                self_42.userRequestedOrder.splice(indexCounter_4, 1);
            }
            else {
                recordValue_1.AttractionId = attractionId;
                recordValue_1.OrderNumber = 0;
                recordValue_1.IsRequestedAfterBreakFast = false;
                recordValue_1.IsRequestedAfterLunch = false;
                recordValue_1.IsRequestedAfterBreak = false;
                recordValue_1.IsRequestedAfterDinner = false;
            }
            self_42.userRequestedOrder.push(recordValue_1);
            this.updateTourInfoForCustomChanges();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.attractionId = attractionId;
            ControlerIndex.prototype.errorParameters.viewTime = viewTime;
            Error_1.Error.prototype.logError("ControlerIndex", "viewTimeUpdate", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.isOrderUpdated = function (destinationAttractionId, recordCount, isUp, breakInformationId) {
        try {
            var self_43 = this.scope;
            var indexCounter_5 = 0;
            var recordExist_2 = false;
            var recordValue_2 = [];
            $.each(self_43.UserRequestedOrder, function (key, value) {
                if (destinationAttractionId === value.AttractionId) {
                    recordValue_2.AttractionId = value.AttractionId;
                    recordValue_2.StayTime = value.StayTime;
                    recordValue_2.OrderNumber = value.OrderNumber;
                    recordValue_2.IsRequestedAfterBreakFast = value.IsRequestedAfterBreakFast;
                    recordValue_2.IsRequestedAfterLunch = value.IsRequestedAfterLunch;
                    recordValue_2.IsRequestedAfterBreak = value.IsRequestedAfterBreak;
                    recordValue_2.IsRequestedAfterDinner = value.IsRequestedAfterDinner;
                    indexCounter_5 = key;
                    recordExist_2 = true;
                    return false;
                }
            });
            if (recordExist_2) {
                self_43.userRequestedOrder.splice(indexCounter_5, 1);
            }
            else {
                recordValue_2.AttractionId = destinationAttractionId;
                recordValue_2.OrderNumber = recordCount;
                recordValue_2.IsRequestedAfterBreakFast = false;
                recordValue_2.IsRequestedAfterLunch = false;
                recordValue_2.IsRequestedAfterBreak = false;
                recordValue_2.IsRequestedAfterDinner = false;
            }
            switch (breakInformationId) {
                case 1:
                    {
                        recordValue_2.IsRequestedAfterBreakFast = true;
                        break;
                    }
                case 2:
                    {
                        recordValue_2.IsRequestedAfterLunch = true;
                        break;
                    }
                case 3:
                    {
                        recordValue_2.IsRequestedAfterBreak = true;
                        break;
                    }
                case 4:
                    {
                        recordValue_2.IsRequestedAfterDinner = true;
                        break;
                    }
                default:
                    {
                        if (isUp) {
                            recordValue_2.OrderNumber = recordCount + 1;
                        }
                        else {
                            recordValue_2.OrderNumber = recordCount - 1;
                        }
                        break;
                    }
            }
            self_43.userRequestedOrder.push(recordValue_2);
            this.updateTourInfoForCustomChanges();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.destinationAttractionId = destinationAttractionId;
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            ControlerIndex.prototype.errorParameters.isUp = isUp;
            ControlerIndex.prototype.errorParameters.breakInformationId = breakInformationId;
            Error_1.Error.prototype.logError("ControlerIndex", "isOrderUpdated", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.updateTourInfoForCustomChanges = function () {
        try {
            var self_44 = this.scope;
            var attractionRequestOrder_1 = [];
            $.each(self_44.userRequestedOrder, function (orderKey, orderValue) {
                var temp = {};
                temp.AttractionId = orderValue.AttractionId;
                temp.OrderNumber = orderValue.OrderNumber;
                temp.BreakInformationId = orderValue.BreakInformationId;
                if (jQuery.type(orderValue.StayTime) !== "undefined") {
                    temp.StayTime = orderValue.StayTime;
                }
                else {
                    temp.StayTime = "00:00";
                }
                temp.IsRequestedAfterBreakFast = orderValue.IsRequestedAfterBreakFast;
                temp.IsRequestedAfterLunch = orderValue.IsRequestedAfterLunch;
                temp.IsRequestedAfterBreak = orderValue.IsRequestedAfterBreak;
                temp.IsRequestedAfterDinner = orderValue.IsRequestedAfterDinner;
                attractionRequestOrder_1.push(temp);
            });
            TourSchedule_1.TourSchedule.prototype.insertUserRequested(this, attractionRequestOrder_1);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "updateTourInfoForCustomChanges", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.updateTrouInfo = function () {
        try {
            this.publicGetOrderOfAttractionVisit();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "updateTrouInfo", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.mapBreakInfo = function (recordCount) {
        try {
            var self_45 = this.scope;
            //$scope.OrderOfAttractionList
            if (recordCount === 0)
                this.googleMapMarks(self_45.orderOfAttractionList, true);
            else {
                this.googleMapStepMarks(self_45.orderOfAttractionList, recordCount);
            }
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.recordCount = recordCount;
            Error_1.Error.prototype.logError("ControlerIndex", "mapBreakInfo", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.addingAttractionInformation = function () {
        try {
            var parameter = $(this).data("recordCounter");
            this.updateTourInformation(parameter, $("#ViewTime").val());
            $(this).dialog("close");
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "addingAttractionInformation", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.tabClicked = function (tabName) {
        try {
            GlobalVaraibles_1.GlobalVaraibles.tabname = tabName;
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.tabName = tabName;
            Error_1.Error.prototype.logError("ControlerIndex", "tabClicked", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.clearMapsInfo = function () {
        try {
            var self_46 = this.scope;
            self_46.googleMaps.removeMarkers(self_46.googleMapsStepMarks);
            self_46.googleMaps.removeMarkers(self_46.googleMapsMainMarks);
            self_46.googleMaps.removeMarkers(self_46.googleTravelStep);
            self_46.googleMaps.removePolylines();
            self_46.googleMapsStepMarks = [];
            self_46.googleMapsMainMarks = [];
            self_46.googleTravelStep = [];
            self_46.googleMaps.removeOverlays();
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "clearMapsInfo", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.clearTravelStep = function () {
        try {
            var self_47 = this.scope;
            self_47.googleMaps.removeMarkers(self_47.googleTravelStep);
            self_47.googleTravelStep = [];
            self_47.googleMaps.removeMarkers(self_47.googleMapsStepMarks);
            self_47.googleMapsStepMarks = [];
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "clearTravelStep", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.clearMarks = function () {
        try {
            var self_48 = this.scope;
            self_48.googleMaps.removeMarkers(self_48.googleMapsStepMarks);
            self_48.googleMapsStepMarks = [];
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("ControlerIndex", "clearMarks", ControlerIndex.prototype.errorParameters, e);
        }
    };
    ControlerIndex.prototype.dayStartInformationUpdate = function (requestDate, requestTime) {
        try {
            var self_49 = this.scope;
            self_49.startTime = requestTime;
            var parameters = {};
            parameters.data = "";
            parameters.isSource = 6;
            parameters.googleSearchText = "";
            parameters.breakType = 0;
            parameters.breakDate = "";
            parameters.startTime = self_49.startTime;
            parameters.countryId = self_49.countryId;
            parameters.StartDate = self_49.startDate;
            TourSchedule_1.TourSchedule.prototype.userRequestedAttraction(this, parameters);
        }
        catch (e) {
            ControlerIndex.prototype.errorParameters = {};
            ControlerIndex.prototype.errorParameters.requestDate = requestDate;
            ControlerIndex.prototype.errorParameters.requestTime = requestTime;
            Error_1.Error.prototype.logError("ControlerIndex", "dayStartInformationUpdate", ControlerIndex.prototype.errorParameters, e);
        }
    };
    return ControlerIndex;
}());
exports.ControlerIndex = ControlerIndex;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Error_1 = __webpack_require__(3);
var CommonFunctions = (function () {
    function CommonFunctions() {
        this.errorParameters = {};
    }
    // Read a page's GET URL variables and return them as an associative array.
    CommonFunctions.prototype.getUrlVars = function () {
        try {
            var vars = [], hash = void 0;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("CommonFunctions", "getUrlVars", this.errorParameters, e);
        }
    };
    CommonFunctions.prototype.convertTo12Hour = function (time) {
        try {
            var timePartArray = time.split(":");
            var ampm = 'AM';
            if (timePartArray[0] >= 12) {
                ampm = 'PM';
            }
            if (timePartArray[0] > 12) {
                timePartArray[0] = timePartArray[0] - 12;
            }
            var formattedTime = timePartArray[0] +
                ':' +
                timePartArray[1] +
                (timePartArray.length > 2 ? ':' + timePartArray[2] : '') +
                ' ' +
                ampm;
            return formattedTime;
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("CommonFunctions", "convertTo12Hour", this.errorParameters, e);
        }
    };
    CommonFunctions.prototype.convertTo24Hour = function (time) {
        try {
            var hours = parseInt(time.substr(0, 2));
            if (time.indexOf('AM') !== -1 && hours === 12) {
                time = time.replace('12', '0');
            }
            if (time.indexOf('PM') !== -1 && hours < 12) {
                time = time.replace(hours.toString(), (hours + 12).toString());
            }
            return time.replace(/(AM|PM)/, '');
        }
        catch (e) {
            this.errorParameters = {};
            Error_1.Error.prototype.logError("CommonFunctions", "convertTo24Hour", this.errorParameters, e);
        }
    };
    return CommonFunctions;
}());
exports.CommonFunctions = CommonFunctions;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Error_1 = __webpack_require__(3);
var MapsActions = (function () {
    function MapsActions() {
        this.errorParameters = {};
    }
    MapsActions.prototype.addMarderk = function (data, googleMaps, isTravelStep) {
        try {
            var markInfo = void 0;
            if (isTravelStep) {
                markInfo =
                    googleMaps.addMarker({
                        lat: data.lat,
                        lng: data.lng,
                        title: data.title,
                        icon: {
                            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                            scale: 5,
                            strokeColor: "#FFA500",
                            fillOpacity: 0.8
                        },
                        infoWindow: {
                            content: data.content
                        }
                    });
            }
            else {
                if (data.IsNearLocation) {
                    markInfo =
                        googleMaps.addMarker({
                            lat: data.lat,
                            lng: data.lng,
                            title: data.title,
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                scale: 5,
                                strokeColor: "#32CD32",
                                fillOpacity: 0.8
                            },
                            infoWindow: {
                                content: data.content
                            }
                        });
                }
                else {
                    markInfo =
                        googleMaps.addMarker({
                            lat: data.lat,
                            lng: data.lng,
                            title: data.title,
                            label: data.label,
                            infoWindow: {
                                content: data.content
                            }
                        });
                }
            }
            return markInfo;
        }
        catch (e) {
            MapsActions.prototype.errorParameters = {};
            MapsActions.prototype.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("MapsActions", "addMarderk", MapsActions.prototype.errorParameters, e);
        }
    };
    MapsActions.prototype.writeTextOnMap = function (data, googleMaps) {
        try {
            googleMaps.drawOverlay({
                lat: data.lat,
                lng: data.lng,
                content: "<div class='mapText'>" + data.textContent + "</div>"
            });
        }
        catch (e) {
            MapsActions.prototype.errorParameters = {};
            MapsActions.prototype.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("MapsActions", "writeTextOnMap", MapsActions.prototype.errorParameters, e);
        }
    };
    return MapsActions;
}());
exports.MapsActions = MapsActions;


/***/ })
/******/ ]);