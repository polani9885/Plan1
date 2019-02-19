
import NormalAjax = require("./AjaxCalls/NormalAjax");
import NormalAjax1 = NormalAjax.NormalAjax;
import User = require("./Modules/User");
import User1 = User.User;
import Constants = require("./Common/Constants");
import Constants1 = Constants.Constants;
import IndexDbWrapper = require("./Plugins/IndexDbWrapper");
import IndexDbWrapper1 = IndexDbWrapper.IndexDbWrapper;
import TourInfo = require("./Modules/TourInfo");
import TourInfo1 = TourInfo.TourInfo;
import TourSchedule = require("./Modules/TourSchedule");
import TourSchedule1 = TourSchedule.TourSchedule;
import TourExpenses = require("./Modules/TourExpenses");
import TourExpenses1 = TourExpenses.TourExpenses;
import MainMenu = require("./Pages/MainMenu");
import MainMenu1 = MainMenu.MainMenu;
import ControlerPlannedTour = require("./Controler/controlerPlannedTour");
import ControlerPlannedTour1 = ControlerPlannedTour.ControlerPlannedTour;
import ControlerIndex = require("./Controler/ControlerIndex");
import ControlerIndex1 = ControlerIndex.ControlerIndex;
import Validations = require("./Modules/Validations");
import Validations1 = Validations.Validations;
import CommonFunctions = require("./Common/CommonFunctions");
import CommonFunctions1 = CommonFunctions.CommonFunctions;
import GlobalVaraibles = require("./Common/GlobalVaraibles");
import GlobalVaraibles1 = GlobalVaraibles.GlobalVaraibles;

export class Main extends GlobalVaraibles1 {
    public Constants: Constants1 = new Constants1();
    public NormalAjax: NormalAjax1 = new NormalAjax1();
    public User: User1 = new User1();
    public IndexDbWrapper: IndexDbWrapper1 = new IndexDbWrapper1();
    public TourInfo: TourInfo1 = new TourInfo1();
    public TourSchedule: TourSchedule1 = new TourSchedule1();
    public TourExpenses: TourExpenses1 = new TourExpenses1();
    public MainMenu: MainMenu1 = new MainMenu1();
    public Validations: Validations1 = new Validations1();
    public CommonFunctions: CommonFunctions1 = new CommonFunctions1();
    
}

var appPlanGoGo = angular.module('AppPlanGoGo', []);
appPlanGoGo.controller("ControlerPlannedTour", ControlerPlannedTour1);
appPlanGoGo.controller("ControlerIndex", ControlerIndex1);
