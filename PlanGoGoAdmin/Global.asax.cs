using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Optimization;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Mvc;
using System.Web.Security;
using System.Web.Script.Serialization;
using PlanGoGoAdmin.Helper.Principal;
using System.IO;
using System.Reflection;

namespace PlanGoGoAdmin
{
    public class MvcApplication : System.Web.HttpApplication
    {
        

        
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            
            IUnityContainer container = GetUnityContainer();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }

        /// <summary>
        /// gets the unity container.
        /// </summary>
        /// <returns></returns>
        private IUnityContainer GetUnityContainer()
        {
            //create unitycontainer          
            IUnityContainer container = new UnityContainer()
                .RegisterType<PlanGoGoAdmin.Repository.Interface.IUser, PlanGoGoAdmin.Repository.Reference.User>()
                .RegisterType<PlanGoGoAdmin.Repository.Interface.ICountry, PlanGoGoAdmin.Repository.Reference.Country>()
            .RegisterType<PlanGoGoAdmin.Repository.Interface.IMasterState, PlanGoGoAdmin.Repository.Reference.MasterState>()
            .RegisterType<PlanGoGoAdmin.Repository.Interface.IMasterCity, PlanGoGoAdmin.Repository.Reference.MasterCity>()
            .RegisterType<PlanGoGoAdmin.Repository.Interface.IMasterCategory, PlanGoGoAdmin.Repository.Reference.MasterCategory>()
            .RegisterType<PlanGoGoAdmin.Repository.Interface.IAttractions, PlanGoGoAdmin.Repository.Reference.Attractions>()
            .RegisterType<PlanGoGoAdmin.Repository.Interface.IGetListValues, PlanGoGoAdmin.Repository.Reference.GetListValues>()
            .RegisterType<PlanGoGoAdmin.Repository.Interface.IAttractionsActiveStatus, PlanGoGoAdmin.Repository.Reference.AttractionsActiveStatus>()
            .RegisterType<PlanGoGoAdmin.Repository.Interface.IMasterWeek, PlanGoGoAdmin.Repository.Reference.MasterWeek>()
            .RegisterType<PlanGoGoAdmin.Repository.Interface.IAttractionTravelTimeDistance, PlanGoGoAdmin.Repository.Reference.AttractionTravelTimeDistance>()
            .RegisterType<PlanGoGoAdmin.Repository.Interface.IMissingDistanceAttractionsRecords, PlanGoGoAdmin.Repository.Reference.RepMissingDistanceAttractionsRecords>();
            return container;
        }

        protected void Session_OnStart(object sender, EventArgs e)
        {
            HttpCookie authCookie = Request.Cookies[FormsAuthentication.FormsCookieName];

            if (authCookie != null)
            {
                FormsAuthenticationTicket authTicket = FormsAuthentication.Decrypt(authCookie.Value);

                JavaScriptSerializer serializer = new JavaScriptSerializer();

                CustomPrincipalSerializeModel serializeModel = serializer.Deserialize<CustomPrincipalSerializeModel>(authTicket.UserData);

                CustomPrincipal newUser = new CustomPrincipal(authTicket.Name);
                newUser.Id = serializeModel.Id;
                newUser.UserName = serializeModel.UserName;

                System.Web.HttpContext.Current.User = newUser;
                Application["LoggedInformation"] = newUser;
                Response.Redirect("/User/ManageUser");
            }
        }
    }
}

