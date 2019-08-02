"use strict";
exports.__esModule = true;
var BaseAjaxCall_1 = require("../Common/BaseAjaxCall");
var Constants_1 = require("../Common/Constants");
var NormalAjax = /** @class */ (function () {
    function NormalAjax() {
        this.baseAjax = new BaseAjaxCall_1.BaseAjaxCall();
        this.constants = new Constants_1.Constants();
    }
    return NormalAjax;
}());
exports.NormalAjax = NormalAjax;
