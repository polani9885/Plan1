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
