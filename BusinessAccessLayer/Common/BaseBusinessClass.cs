using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Practices.Unity;
using DataAccessLayer;
using System.Web.Mvc;
using Unity.Mvc5;

namespace BusinessAccessLayer.Common
{
    public class BaseBusinessClass
    {
        public DataAccessLayer.IGetListValues _dataAccess;
        public DataAccessLayer.IUser _dataAccessAdminUser;
        public DataAccessLayer.Interface.ICountry _dataAccessCountry;
        public DataAccessLayer.Interface.IMasterState _dataAccessMasterState;
        public DataAccessLayer.Interface.IMasterCity _dataAccessMasterCity;
        public DataAccessLayer.Interface.IMasterCategory _dataAccessMasterCategory;
        public DataAccessLayer.Interface.IAttractions _dataAccessAttractions;
        public DataAccessLayer.Interface.IAttractionsActiveStatus _dataAccessAttractionsActiveStatus;
        public DataAccessLayer.Interface.IMasterWeek _dataAccessMasterWeek;
        public DataAccessLayer.Interface.IAttractionTravelTimeDistance _dataAccessAttractionTravelTimeDistance;
        public DataAccessLayer.Interface.IMissingDistanceAttractionsRecords _dataAccessMissingDistanceAttractionsRecords;
        public DataAccessLayer.Interface.ISchedulers _dataAccessSchedulers;
        public DataAccessLayer.Interface.IUserDAL _dataAccessUsers;
        


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
            _dataAccessMissingDistanceAttractionsRecords = new DataAccessLayer.Admin.DALMissingDistanceAttractionsRecords();
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
                .RegisterType<DataAccessLayer.IGetListValues, DataAccessLayer.GetListValues>();
            return container;
        }
    }
}
