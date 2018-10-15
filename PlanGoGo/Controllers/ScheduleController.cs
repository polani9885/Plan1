using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Custom;
using BusinessEntites.Users;
using Interfaces;
using PlanGoGo.Helper;
using CommonFunctions;
using BusinessEntites.Scheduler;

namespace PlanGoGo.Controllers
{
    public class ScheduleController : BaseControler
    {
        IGetListValues _IGetListValues;

        private IUser _iUser;

        

        public ScheduleController(IGetListValues GetListValues,IUser iUser)
        {
            _IGetListValues = GetListValues;
            _iUser = iUser;
        }

        //
        // GET: /Schedule/

        //public ActionResult Index()
        //{
        //    return View();
        //}


        public ActionResult Index(int userTripId)
        {
            userEntity.UserTripId = userTripId;
            base.UpdateCookieInformation();
            return View();
        }



        /// <summary>
        /// Getting the city list
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult GetCityOnCountryId(int countryId)
        {
            List<public_GetCityList> getCityList = _IGetListValues.GetCityOnCountryId(countryId);

            return jsonReturn.JsonResult<public_GetCityList>(getCityList);
            
        }

        

        /// <summary>
        /// Getting the Category List
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult GetCategoryList()
        {
            List<Public_GetCategory> getCategroyList = _IGetListValues.Public_GetCategory();

            return jsonReturn.JsonResult<Public_GetCategory>(getCategroyList);
            
        }


        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult GetMasterCategory()
        {
            List<Public_GetMasterCategory> getMasterCategory = _IGetListValues.Public_GetMasterCategory();

            return jsonReturn.JsonResult<Public_GetMasterCategory>(getMasterCategory);
            
        }

        /// <summary>
        /// Getting the attrations based on the selection of the location 
        /// </summary>
        /// <param name="enterLocationName"></param>
        /// <param name="categoryList"></param>
        /// <returns></returns>
        [HttpPost]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult Public_FilterAttractions(FilterLocations parameters)
        {

            List<public_FilterAttractions> _public_FilterAttractions = new List<public_FilterAttractions>();


            if (parameters.cityVisitList != null)
            {
                _public_FilterAttractions =
                    _IGetListValues.Public_FilterAttractions(parameters.countryId, parameters.cityVisitList,parameters.MainCategorySelected);
                _iUser.User_InsertUpdateTripCities(userEntity.UserTripId, parameters.countryId,
                    parameters.cityVisitList);
            }

            return jsonReturn.JsonResult<public_FilterAttractions>(_public_FilterAttractions);

            
        }


        /// <summary>
        /// Getting the attrations based on the selection of the location 
        /// </summary>
        /// <param name="enterLocationName"></param>
        /// <param name="categoryList"></param>
        /// <returns></returns>
        [HttpPost]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult Public_GetOrderOfAttractionVisit(InputParameters inputParameters)
        {
            List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit = new List<GetOrderOfAttractionVisit>();
            List<userTable_OnlyId> attractionList = new List<userTable_OnlyId>();
            if (inputParameters.AttractionID != null && inputParameters.AttractionID.Count() > 0)
            {
                attractionList = inputParameters.AttractionID.Split(',').Select(x => new userTable_OnlyId
                {
                    ID = Convert.ToInt32(x)
                }
                ).ToList();
            }

            if (inputParameters.ListGroupWithDateAttractions != null)
            {
                foreach (GroupWithDateAttractions _GroupWithDateAttractions in inputParameters.ListGroupWithDateAttractions)
                {
                    foreach (GetOrderOfAttractionVisit _GetOrderOfAttractionVisit in _GroupWithDateAttractions.ListGetOrderOfAttractionVisit)
                    {
                        listGetOrderOfAttractionVisit.Add(_GetOrderOfAttractionVisit);
                    }
                }
            }

            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks = userTable_UpdatedBreaks = new List<UserTable_UpdatedBreaks>();

            if (inputParameters.UpdatedBreaks != null)
            {
                userTable_UpdatedBreaks = inputParameters.UpdatedBreaks.Select(x => new UserTable_UpdatedBreaks
                {
                    IsUserInterestedBreak = x.IsUserInterestedBreak,
                    IsUserInterestedDayBreak = x.IsUserInterestedDayBreak,
                    UpdateDayStartTime = TimeSpan.Parse(x.UpdateDayStartTime),
                    UpdatedDinnerTime = TimeSpan.Parse(x.UpdatedDinnerTime),
                    UpdatedLunchTime = TimeSpan.Parse(x.UpdatedLunchTime),
                    IsUserInterestedLunchBreak = x.IsUserInterestedLunchBreak,
                    UpdatedBreakTime = TimeSpan.Parse(x.UpdatedBreakTime),
                    UpdateDayEndTime = TimeSpan.Parse(x.UpdateDayEndTime),
                    IsUserInterestedDinnerBreak = x.IsUserInterestedDinnerBreak,
                    RequestDate = Convert.ToDateTime(x.RequestDate),
                    IsBreakAdded =  x.IsBreakAdded,
                    BreakAttractionId = x.BreakAttractionId,
                    IsLunchAdded = x.IsLunchAdded,
                    LunchAttractionId = x.LunchAttractionId,
                    IsDinnerAdded = x.IsDinnerAdded,
                    DinnerAttractionId = x.DinnerAttractionId,
                    IsUserInterestedBreakFast = x.IsUserInterestedBreakFast,
                    UpdatedBreakFastTime = TimeSpan.Parse(x.UpdatedBreakFastTime),
                    IsBreakFastAdded = x.IsBreakFastAdded,
                    BreakFastAttractionId = x.BreakFastAttractionId,
                    IsDayBreakAdded = x.IsDayBreakAdded,
                    DayBreakAttractionId =  x.DayBreakAttractionId,
                    NoOfCars  = x.NoOfCars,
                    AverageMileage = x.AverageMileage,
                    BreakExpense = x.BreakExpense,
                    BreakFastExpense = x.BreakFastExpense,
                    CarRentalExpense = x.CarRentalExpense,
                    DayBreakExpense = x.DayBreakExpense,
                    LunchExpense = x.LunchExpense,
                    NoOfRooms = x.NoOfRooms,
                    DinnerExpense = x.DinnerExpense,
                    IsNoOfCarsUserUpdated = x.IsNoOfCarsUserUpdated,
                    IsAverageMileageUserUpdated = x.IsAverageMileageUserUpdated,
                    IsCarRentalExpenseUserUpdated = x.IsCarRentalExpenseUserUpdated,
                    IsBreakFastExpenseUserUpdated = x.IsBreakFastExpenseUserUpdated,
                    IsLunchExpenseUserUpdated = x.IsLunchExpenseUserUpdated,
                    IsBreakExpenseUserUpdated = x.IsBreakExpenseUserUpdated,
                    IsDinnerExpenseUserUpdated = x.IsDinnerExpenseUserUpdated,
                    IsDayBreakExpenseUserUpdated = x.IsDayBreakExpenseUserUpdated,
                    IsNoOfRoomsUserUpdated = x.IsNoOfRoomsUserUpdated
                }).ToList();
                


            }


            var listGroupWithDateAttractions = new List<GroupWithDateAttractions>();

            using (AttractionInformationBinding attractionInformationBinding = new AttractionInformationBinding())
            {

                listGroupWithDateAttractions =
                    attractionInformationBinding.UserRequestedAttractionInformation(inputParameters.TravelModeId,
                         attractionList,
                         listGetOrderOfAttractionVisit,
                        inputParameters.CountryId, userTable_UpdatedBreaks, userEntity.UserTripId);

            }

            return jsonReturn.JsonResult<GroupWithDateAttractions>(listGroupWithDateAttractions);

            
        }


        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult GetExtraCategoryList()
        {
            List<GoogleTypes> result = _IGetListValues.Scheduler_GetExtraCategoryList();

            return jsonReturn.JsonResult<GoogleTypes>(result);
            
        }


        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult AttractionsPhotoInfo(int attractionId, int countryId)
        {
            List<AttractionPhotoReference> result = _IGetListValues.public_AttractionsPhotoInfo(countryId, attractionId);

            return jsonReturn.JsonResult<AttractionPhotoReference>(result);
            
        }

        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult GetBreakInformation()
        {
            List<BreakInformation> result = _IGetListValues.GetBreakInformation();

            return jsonReturn.JsonResult<BreakInformation>(result);
        }

    }
}
