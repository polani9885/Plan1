"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NormalAjax = require("./AjaxCalls/NormalAjax");
var NormalAjax1 = NormalAjax.NormalAjax;
var User = require("./Modules/User");
var User1 = User.User;
var Constants = require("./Common/Constants");
var Constants1 = Constants.Constants;
var IndexDbWrapper = require("./Plugins/IndexDbWrapper");
var IndexDbWrapper1 = IndexDbWrapper.IndexDbWrapper;
var TourInfo = require("./Modules/TourInfo");
var TourInfo1 = TourInfo.TourInfo;
var TourSchedule = require("./Modules/TourSchedule");
var TourSchedule1 = TourSchedule.TourSchedule;
var TourExpenses = require("./Modules/TourExpenses");
var TourExpenses1 = TourExpenses.TourExpenses;
var MainMenu = require("./Pages/MainMenu");
var MainMenu1 = MainMenu.MainMenu;
var ControlerPlannedTour = require("./Controler/controlerPlannedTour");
var ControlerPlannedTour1 = ControlerPlannedTour.ControlerPlannedTour;
var ControlerIndex = require("./Controler/ControlerIndex");
var ControlerIndex1 = ControlerIndex.ControlerIndex;
var Validations = require("./Modules/Validations");
var Validations1 = Validations.Validations;
var CommonFunctions = require("./Common/CommonFunctions");
var CommonFunctions1 = CommonFunctions.CommonFunctions;
var GlobalVaraibles = require("./Common/GlobalVaraibles");
var GlobalVaraibles1 = GlobalVaraibles.GlobalVaraibles;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Constants = new Constants1();
        _this.NormalAjax = new NormalAjax1();
        _this.User = new User1();
        _this.IndexDbWrapper = new IndexDbWrapper1();
        _this.TourInfo = new TourInfo1();
        _this.TourSchedule = new TourSchedule1();
        _this.TourExpenses = new TourExpenses1();
        _this.MainMenu = new MainMenu1();
        _this.Validations = new Validations1();
        _this.CommonFunctions = new CommonFunctions1();
        return _this;
    }
    return Main;
}(GlobalVaraibles1));
exports.Main = Main;
var appPlanGoGo = angular.module('AppPlanGoGo', []);
appPlanGoGo.controller("ControlerPlannedTour", ControlerPlannedTour1);
appPlanGoGo.controller("ControlerIndex", ControlerIndex1);
