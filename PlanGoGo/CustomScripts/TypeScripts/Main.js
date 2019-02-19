"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
