"use strict";
var Error_1 = require("../Modules/Error");
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
