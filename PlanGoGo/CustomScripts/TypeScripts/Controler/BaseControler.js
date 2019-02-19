"use strict";
var Error_1 = require("../Modules/Error");
var BaseControler = (function () {
    function BaseControler($scope) {
        this.errorParameters = {};
        try {
            this.controlerIndexScope = $scope;
        }
        catch (e) {
            BaseControler.prototype.errorParameters = {};
            Error_1.Error.prototype.logError("BaseControler", "constructor", BaseControler.prototype.errorParameters, e);
        }
    }
    return BaseControler;
}());
exports.BaseControler = BaseControler;
