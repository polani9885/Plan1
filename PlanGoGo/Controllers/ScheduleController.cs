using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PlanGoGo.Repository;
using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Custom;
using BusinessEntites.Users;
using Interfaces;

namespace PlanGoGo.Controllers
{
    public class ScheduleController : Controller
    {
        IGetListValues _IGetListValues;

        public ScheduleController(IGetListValues GetListValues)
        {
            _IGetListValues = GetListValues;
        }

        //
        // GET: /Schedule/

        public ActionResult Index()
        {
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
            List<public_FilterAttractions> _public_FilterAttractions = _IGetListValues.Public_FilterAttractions(parameters.countryId, parameters.cityVisitList);
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
                    RequestDate = x.RequestDate
                }).ToList();
                


            }
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder = new List<UserTable_AttractionRequestOrder>();


            List<GetOrderOfAttractionVisit> _ListGetOrderOfAttractionVisit =
                _IGetListValues.Public_GetOrderOfAttractionVisit(inputParameters.TravelModeId,
                    inputParameters.SourceAttractionID, inputParameters.DestinationAttractionID, attractionList,
                    inputParameters.StartDate, inputParameters.StartTime, listGetOrderOfAttractionVisit,
                    inputParameters.CountryId, userTable_UpdatedBreaks, userTable_AttractionRequestOrder);

            List<GroupWithDateAttractions> _listGroupWithDateAttractions = new List<GroupWithDateAttractions>();
            GroupWithDateAttractions _groupWithDateAttractions = new GroupWithDateAttractions();
            GetOrderOfAttractionVisit _getOrderOfAttractionVisit = new GetOrderOfAttractionVisit();

            var groupDates = _ListGetOrderOfAttractionVisit.GroupBy(_date => Convert.ToDateTime(_date.DateAndTime).ToString("d"));
            List<GetOrderOfAttractionVisit> attractionListResult = _ListGetOrderOfAttractionVisit;


            foreach (var _dates in groupDates)
            {
                _groupWithDateAttractions = new GroupWithDateAttractions();
                _groupWithDateAttractions.GroupDate = _dates.Key;
                _ListGetOrderOfAttractionVisit = new List<GetOrderOfAttractionVisit>();
                foreach (var _internalObjects in attractionListResult.Where(
                    _filter => Convert.ToDateTime(_filter.DateAndTime).ToString("d") == _dates.Key))
                {
                    _getOrderOfAttractionVisit = new GetOrderOfAttractionVisit();
                    _getOrderOfAttractionVisit.DateAndTime =
                        Convert.ToDateTime(_internalObjects.DateAndTime).ToString("hh:mm");
                    _getOrderOfAttractionVisit.DestinationAttractionId = _internalObjects.DestinationAttractionId;
                    _getOrderOfAttractionVisit.DestinationAttractionName = _internalObjects.DestinationAttractionName;
                    _getOrderOfAttractionVisit.DestinationIcon = _internalObjects.DestinationIcon;
                    _getOrderOfAttractionVisit.Distance = _internalObjects.Distance;
                    _getOrderOfAttractionVisit.ReachTime = Convert.ToDateTime(_internalObjects.ReachTime)
                        .ToString("hh:mm");
                    _getOrderOfAttractionVisit.SourceAttractionId = _internalObjects.SourceAttractionId;
                    _getOrderOfAttractionVisit.SourceAttractionName = _internalObjects.SourceAttractionName;
                    _getOrderOfAttractionVisit.SourceIcon = _internalObjects.SourceIcon;
                    _getOrderOfAttractionVisit.TimeRequiredToView = Convert.ToDateTime(_internalObjects.TimeRequiredToView).ToString("hh:mm");
                    _getOrderOfAttractionVisit.TravelModeId = _internalObjects.TravelModeId;
                    _getOrderOfAttractionVisit.TravelTime =
                        TimeSpan.FromSeconds(Convert.ToInt32(_internalObjects.TravelTime)).Hours + ":" + TimeSpan
                            .FromSeconds(Convert.ToInt32(_internalObjects.TravelTime)).Minutes;
                    _getOrderOfAttractionVisit.TravelType = _internalObjects.TravelType;
                    _getOrderOfAttractionVisit.EventEndTime =
                        Convert.ToDateTime(_internalObjects.EventEndTime).ToString("hh:mm");
                    _getOrderOfAttractionVisit.RecordCount = _internalObjects.RecordCount;
                    _getOrderOfAttractionVisit.IsLunchDinnerBreakTime = _internalObjects.IsLunchDinnerBreakTime;
                    _getOrderOfAttractionVisit.IsDistanceCalculationMissing =
                        _internalObjects.IsDistanceCalculationMissing;
                    _ListGetOrderOfAttractionVisit.Add(_getOrderOfAttractionVisit);
                }
                _groupWithDateAttractions.ListGetOrderOfAttractionVisit = _ListGetOrderOfAttractionVisit;
                _listGroupWithDateAttractions.Add(_groupWithDateAttractions);
            }


            if (_listGroupWithDateAttractions.Count() > 0)
            {
                var jsonResults = Json(_listGroupWithDateAttractions, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<GroupWithDateAttractions>(), JsonRequestBehavior.AllowGet);
            }
        }

    }
}
