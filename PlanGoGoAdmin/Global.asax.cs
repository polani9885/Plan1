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
using Interfaces;

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
                .RegisterType<IAdminUser, PlanGoGoAdmin.Repository.Reference.User>()
                .RegisterType<ICountry, PlanGoGoAdmin.Repository.Reference.Country>()
            .RegisterType<IMasterState, PlanGoGoAdmin.Repository.Reference.MasterState>()
            .RegisterType<IMasterCity, PlanGoGoAdmin.Repository.Reference.MasterCity>()
            .RegisterType<IMasterCategory, PlanGoGoAdmin.Repository.Reference.MasterCategory>()
            .RegisterType<IAttractions, PlanGoGoAdmin.Repository.Reference.Attractions>()
            .RegisterType<IGetListValues, PlanGoGoAdmin.Repository.Reference.GetListValues>()
            .RegisterType<IAttractionsActiveStatus, PlanGoGoAdmin.Repository.Reference.AttractionsActiveStatus>()
            .RegisterType<IMasterWeek, PlanGoGoAdmin.Repository.Reference.MasterWeek>()
            .RegisterType<IAttractionTravelTimeDistance, PlanGoGoAdmin.Repository.Reference.AttractionTravelTimeDistance>()
            .RegisterType<IMissingDistanceAttractionsRecords, PlanGoGoAdmin.Repository.Reference.RepMissingDistanceAttractionsRecords>();
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

