using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Unity.Mvc5;
using PlanGoGo.Repository;

namespace PlanGoGo
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            AuthConfig.RegisterAuth();

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
                .RegisterType<PlanGoGo.Repository.IGetListValues, PlanGoGo.Repository.GetListValues>()
                .RegisterType<PlanGoGo.Repository.Interface.ICountry, PlanGoGo.Repository.Reference.Country>()
                .RegisterType<PlanGoGo.Repository.Interface.IMasterState, PlanGoGo.Repository.Reference.MasterState>()
                .RegisterType<PlanGoGo.Repository.Interface.IMasterCity, PlanGoGo.Repository.Reference.MasterCity>()
            .RegisterType<PlanGoGo.Repository.Interfaces.IUserInfo, PlanGoGo.Repository.References.UserInfo>();
            return container;
        }
    }
}