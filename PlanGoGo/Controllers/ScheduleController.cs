using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PlanGoGo.Repository;
using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Custom;

namespace PlanGoGo.Controllers
{
    public class ScheduleController : Controller
    {
        PlanGoGo.Repository.IGetListValues _IGetListValues;

        public ScheduleController(PlanGoGo.Repository.IGetListValues GetListValues)
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
            List<userTable_Category> categoryList = new List<userTable_Category>();
            if (parameters.categoryList != null && parameters.categoryList.Count() > 0)
            {
                categoryList = parameters.categoryList.Split(',').Select(x => new userTable_Category
                {
                    CategoryID = x.Split('~')[0],
                    CategoryName = x.Split('~')[1]
                }
                ).ToList();
            }

            List<public_FilterAttractions> _public_FilterAttractions =  _IGetListValues.Public_FilterAttractions(parameters.enterLocationName, categoryList);
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

            if(inputParameters.ListGroupWithDateAttractions!=null)
            {
                foreach(GroupWithDateAttractions _GroupWithDateAttractions in inputParameters.ListGroupWithDateAttractions)
                {
                    foreach(GetOrderOfAttractionVisit _GetOrderOfAttractionVisit in _GroupWithDateAttractions.ListGetOrderOfAttractionVisit)
                    {
                        listGetOrderOfAttractionVisit.Add(_GetOrderOfAttractionVisit);
                    }
                }
            }
            


            List<GetOrderOfAttractionVisit> _ListGetOrderOfAttractionVisit = _IGetListValues.Public_GetOrderOfAttractionVisit(inputParameters.TravelModeId, inputParameters.SourceAttractionID, inputParameters.DestinationAttractionID, attractionList, inputParameters.StartDate, inputParameters.StartTime, listGetOrderOfAttractionVisit);

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
                foreach (var _internalObjects in attractionListResult.Where(_filter=> Convert.ToDateTime(_filter.DateAndTime).ToString("d") == _dates.Key))
                {
                    _getOrderOfAttractionVisit = new GetOrderOfAttractionVisit();
                    _getOrderOfAttractionVisit.DateAndTime = Convert.ToDateTime(_internalObjects.DateAndTime).ToString("HH:MM");
                    _getOrderOfAttractionVisit.DestinationAttractionId = _internalObjects.DestinationAttractionId;
                    _getOrderOfAttractionVisit.DestinationAttractionName = _internalObjects.DestinationAttractionName;
                    _getOrderOfAttractionVisit.DestinationIcon = _internalObjects.DestinationIcon;
                    _getOrderOfAttractionVisit.Distance = _internalObjects.Distance;
                    _getOrderOfAttractionVisit.ReachTime = Convert.ToDateTime(_internalObjects.ReachTime).ToString("HH:MM");
                    _getOrderOfAttractionVisit.SourceAttractionId = _internalObjects.SourceAttractionId;
                    _getOrderOfAttractionVisit.SourceAttractionName = _internalObjects.SourceAttractionName;
                    _getOrderOfAttractionVisit.SourceIcon = _internalObjects.SourceIcon;
                    _getOrderOfAttractionVisit.TimeRequiredToView = _internalObjects.TimeRequiredToView;
                    _getOrderOfAttractionVisit.TravelModeId = _internalObjects.TravelModeId;
                    _getOrderOfAttractionVisit.TravelTime = TimeSpan.FromSeconds(Convert.ToInt32(_internalObjects.TravelTime)).Hours + ":" + TimeSpan.FromSeconds(Convert.ToInt32(_internalObjects.TravelTime)).Minutes;
                    _getOrderOfAttractionVisit.TravelType = _internalObjects.TravelType;
                    _getOrderOfAttractionVisit.ViewTime = Convert.ToDateTime(_internalObjects.ViewTime).ToString("HH:MM");
                    _getOrderOfAttractionVisit.RecordCount = _internalObjects.RecordCount;
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
