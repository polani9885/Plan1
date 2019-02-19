"use strict";
var BaseAjaxCall_1 = require("../Common/BaseAjaxCall");
var Constants_1 = require("../Common/Constants");
var NormalAjax = (function () {
    function NormalAjax() {
        this.baseAjax = new BaseAjaxCall_1.BaseAjaxCall();
        this.constants = new Constants_1.Constants();
    }
    return NormalAjax;
}());
exports.NormalAjax = NormalAjax;
