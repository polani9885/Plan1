using System.Web;
using System.Web.Optimization;

namespace PlanGoGo
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js",
                        "~/Scripts/jquery.ui.timepicker.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.min.js"
                        ));
            bundles.Add(new ScriptBundle("~/bundles/angularSupport").Include(
                "~/Scripts/angular-animate.min.js",
                "~/Scripts/angular-aria.min.js",
                "~/Scripts/angular-cookies.min.js",
                "~/Scripts/angular-loader.min.js",
                "~/Scripts/angular-message-format.min.js",
                "~/Scripts/angular-messages.min.js",
                "~/Scripts/angular-mocks.js",
                "~/Scripts/angular-parse-ext.min.js",
                "~/Scripts/angular-resource.min.js",
                "~/Scripts/angular-route.min.js",
                "~/Scripts/angular-sanitize.min.js",
                //"~/Scripts/angular-scenario.js",
                "~/Scripts/angular-touch.min.js",
                "~/Scripts/ng-table.js",
                "~/Scripts/jquery.timepicker.js",
                "~/CustomScripts/Common/AjaxUserAccount.js",
                "~/TypeScriptFiles/Startup.js"
                //"~/CustomScripts/TypeScripts/Common/Constants.js",
                //"~/CustomScripts/TypeScripts/Common/BaseAjaxCall.js",
                //"~/CustomScripts/TypeScripts/AjaxCalls/NormalAjax.js"

                
            ));


            bundles.Add(new ScriptBundle("~/bundles/plugins").Include(
                "~/Plugins/Scripts/gmaps.js"
            ));

            

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/site.css",
                "~/Content/CustomStyles.css")
                );

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/*.css",
                        "~/Content/ng-table.css",
                        "~/Content/jquery.timepicker.css"
                        ));

            //Custom Script
            //bundles.Add(new ScriptBundle("~/customScript").Include(                        
            //            "~/CustomScripts/Common/*.js"));

            bundles.Add(new ScriptBundle("~/index").Include(
            //    "~/CustomScripts/Controlers/controlerIndex.js",
                "~/CustomScripts/Common/commonFunctions.js",
                "~/CustomScripts/index.js"
            //    "~/CustomScripts/Common/googleMapAddMarker.js"
            ));

            

            //bundles.Add(new ScriptBundle("~/TourInformation").Include(
            //    "~/CustomScripts/Controlers/UserControls/controlerTourInformation.js"                
            //    ));

            bundles.Add(new ScriptBundle("~/mainMenu").Include(
                //"~/CustomScripts/Controlers/UserControls/controlerLogin.js",
                //"~/CustomScripts/Controlers/UserControls/controlerUserAccount.js",
                "~/CustomScripts/MainMenu.js"
                //"~/CustomScripts/Validations.js"
                ));

            //bundles.Add(new ScriptBundle("~/plannedTour").Include(
            //    "~/CustomScripts/PlannedTour.js",
            //    "~/CustomScripts/Controlers/UserControls/controlerPlannedTour.js"
            //));
        }
    }
}