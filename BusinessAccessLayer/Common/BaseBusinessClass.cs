using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Practices.Unity;
using DataAccessLayer;
using System.Web.Mvc;
using Unity.Mvc5;
using Interfaces;

namespace BusinessAccessLayer.Common
{
    public class BaseBusinessClass
    {
        public IGetListValues _dataAccess;
        public IAdminUser _dataAccessAdminUser;
        public ICountry _dataAccessCountry;
        public IMasterState _dataAccessMasterState;
        public IMasterCity _dataAccessMasterCity;
        public IMasterCategory _dataAccessMasterCategory;
        public IAttractions _dataAccessAttractions;
        public IAttractionsActiveStatus _dataAccessAttractionsActiveStatus;
        public IMasterWeek _dataAccessMasterWeek;
        public IAttractionTravelTimeDistance _dataAccessAttractionTravelTimeDistance;
        public IMissingDistanceAttractionsRecords _dataAccessMissingDistanceAttractionsRecords;
        public ISchedulers _dataAccessSchedulers;
        public IUser _dataAccessUsers;
        


        public BaseBusinessClass()
        {
            _dataAccess = new DataAccessLayer.GetListValues();
            _dataAccessAdminUser = new DataAccessLayer.AdminUserDAL();
            _dataAccessCountry = new DataAccessLayer.Admin.Country();
            _dataAccessMasterState = new DataAccessLayer.Admin.MasterState();
            _dataAccessMasterCity = new DataAccessLayer.Admin.MasterCity();
            _dataAccessMasterCategory = new DataAccessLayer.Admin.MasterCategory();
            _dataAccessAttractions = new DataAccessLayer.Common.Attractions();
            _dataAccessAttractionsActiveStatus = new DataAccessLayer.Admin.AttractionsActiveStatus();
            _dataAccessMasterWeek = new DataAccessLayer.Admin.MasterWeek();
            _dataAccessAttractionTravelTimeDistance = new DataAccessLayer.Admin.AttractionTravelTimeDistance();
            _dataAccessMissingDistanceAttractionsRecords = new DataAccessLayer.Admin.DalMissingDistanceAttractionsRecords();
            _dataAccessSchedulers = new DataAccessLayer.Schedulers.DALSchedulers();
            _dataAccessUsers = new DataAccessLayer.User.UserDAL();           


            //IUnityContainer container = GetUnityContainer();
            //DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }

        /// <summary>
        /// gets the unity container.
        /// </summary>
        /// <returns></returns>
        private IUnityContainer GetUnityContainer()
        {
            //create unitycontainer          
            IUnityContainer container = new UnityContainer()
                .RegisterType<IGetListValues, DataAccessLayer.GetListValues>();
            return container;
        }
    }
}
