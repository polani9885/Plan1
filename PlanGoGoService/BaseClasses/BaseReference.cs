using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGoService.BaseClasses
{
    public class BaseReference
    {
        public IGetListValues _businessAccess;

        public IAdminUser _businessUser;

        public ICountry _businessCountry;

        public IMasterState _businessMasterState;

        public IMasterCity _businessMasterCity;

        public IMasterCategory _businessMasterCategory;

        public IAttractions _businessAttractions;

        public IAttractionsActiveStatus _businessAttractionsActiveStatus;

        public IMasterWeek _businessMasterWeek;

        public IAttractionTravelTimeDistance _businessAttractionTravelTimeDistance;

        public IMissingDistanceAttractionsRecords _businessMissingDistanceAttractionsRecords;

        public ISchedulers _businessSchedulers;

        public IUser _businessUserBAL;

        public BaseReference()
        {
            _businessAccess = new BusinessAccessLayer.GetListValues();
            _businessUser = new BusinessAccessLayer.AdminUserBAL();
            _businessCountry = new BusinessAccessLayer.Admin.Country();
            _businessMasterState = new BusinessAccessLayer.Admin.MasterState();
            _businessMasterCity = new BusinessAccessLayer.Admin.MasterCity();
            _businessMasterCategory = new BusinessAccessLayer.Admin.MasterCategory();
            _businessAttractions = new BusinessAccessLayer.Admin.Attractions();
            _businessAttractionsActiveStatus = new BusinessAccessLayer.Admin.AttractionsActiveStatus();
            _businessMasterWeek = new BusinessAccessLayer.Admin.MasterWeek();
            _businessAttractionTravelTimeDistance = new BusinessAccessLayer.Admin.AttractionTravelTimeDistance();
            _businessMissingDistanceAttractionsRecords = new BusinessAccessLayer.Admin.BALMissingDistanceAttractionsRecords();
            _businessSchedulers = new BusinessAccessLayer.Scheduler.BALScheduler();
            _businessUserBAL = new BusinessAccessLayer.Users.UsersBAL();
        }
    }
}