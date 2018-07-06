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
        public JsonResult GetCityList()
        {
            List<public_GetCityList> getCityList = _IGetListValues.Public_GetCityList();
            if (getCityList.Count() > 0)
            {
                var jsonResults = Json(getCityList, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<public_GetCityList>(), JsonRequestBehavior.AllowGet);
            }
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
            if (getCategroyList.Count() > 0)
            {
                var jsonResults = Json(getCategroyList, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<Public_GetCategory>(), JsonRequestBehavior.AllowGet);
            }
        }


        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult GetMasterCategory()
        {
            List<Public_GetMasterCategory> getMasterCategory = _IGetListValues.Public_GetMasterCategory();
            if (getMasterCategory.Count() > 0)
            {
                var jsonResults = Json(getMasterCategory, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<Public_GetCategory>(), JsonRequestBehavior.AllowGet);
            }
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
                    _IGetListValues.Public_FilterAttractions(parameters.countryId, parameters.cityVisitList);
                _iUser.User_InsertUpdateTripCities(userEntity.UserTripId, parameters.countryId,
                    parameters.cityVisitList);
            }

            if (_public_FilterAttractions.Count() > 0)
            {
                var jsonResults = Json(_public_FilterAttractions, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<public_FilterAttractions>(), JsonRequestBehavior.AllowGet);
            }
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
                    UpdateDinnerMinimumTime = TimeSpan.Parse(x.UpdateDinnerMinimumTime),
                    UpdatedBreakMinimumTime = TimeSpan.Parse(x.UpdatedBreakMinimumTime),
                    UpdatedLunchTime = TimeSpan.Parse(x.UpdatedLunchTime),
                    UpdatedLunchMinimumTime = TimeSpan.Parse(x.UpdatedLunchMinimumTime),
                    IsUserInterestedLunchBreak = x.IsUserInterestedLunchBreak,
                    UpdatedBreakTime = TimeSpan.Parse(x.UpdatedBreakTime),
                    UpdateDayEndTime = TimeSpan.Parse(x.UpdateDayEndTime),
                    IsUserInterestedDinnerBreak = x.IsUserInterestedDinnerBreak,
                    RequestDate = Convert.ToDateTime(x.RequestDate)
                }).ToList();
                


            }
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder = new List<UserTable_AttractionRequestOrder>();



            var listGroupWithDateAttractions = new List<GroupWithDateAttractions>();

            using (AttractionInformationBinding attractionInformationBinding = new AttractionInformationBinding())
            {

                listGroupWithDateAttractions =
                    attractionInformationBinding.UserRequestedAttractionInformation(inputParameters.TravelModeId,
                        inputParameters.SourceAttractionID, inputParameters.DestinationAttractionID, attractionList,
                        inputParameters.StartDate, inputParameters.StartTime, listGetOrderOfAttractionVisit,
                        inputParameters.CountryId, userTable_UpdatedBreaks, userTable_AttractionRequestOrder,userEntity.UserTripId);

            }


            if (listGroupWithDateAttractions.Any())
            {
                var jsonResults = Json(listGroupWithDateAttractions, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<GroupWithDateAttractions>(), JsonRequestBehavior.AllowGet);
            }
        }


        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult GetExtraCategoryList()
        {
            List<GoogleTypes> result = _IGetListValues.Scheduler_GetExtraCategoryList();
            if (result.Count() > 0)
            {
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<Public_GetCategory>(), JsonRequestBehavior.AllowGet);
            }
        }


        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult AttractionsPhotoInfo(int attractionId, int countryId)
        {
            List<AttractionPhotoReference> result = _IGetListValues.public_AttractionsPhotoInfo(countryId, attractionId);
            if (result.Count() > 0)
            {
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<AttractionPhotoReference>(), JsonRequestBehavior.AllowGet);
            }
        }

    }
}
