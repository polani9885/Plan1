using BusinessEntites;
using BusinessEntites.Admin;
using BusinessEntites.Custom;
using BusinessEntites.EntityAutoComplete.ReferenceObjects;
using BusinessEntites.Users;
using CommonFunctions;
using GoogleMapsAPI.Features;
using Interfaces;
using PlanGoGo.Helper;
using PlanGoGo.Models.UserControls;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BusinessEntites.EntityGoogleMaps.EntityNearBySearch;
using BusinessEntites.JsonParameters;

namespace PlanGoGo.Controllers
{
    public class UserControlsController : BaseControler
    {

        IUser _IUserInfo;
        private ICountry _ICountry;
        private readonly AutoCompleteFeature autoCompleteFeature = new AutoCompleteFeature();
        private readonly GetNearestInformation getNearestInformation = new GetNearestInformation();

        public UserControlsController(IUser IUserInfo, ICountry iCountry)
        {
            _IUserInfo = IUserInfo;
            _ICountry = iCountry;
        }

        // GET: UserControls
        public ActionResult TourInformation(List<GetOrderOfAttractionVisit> public_FilterAttractions, UserTable_UpdatedBreaksTemp breakInformation, string divId)
        {
            
            AttractionsInformation model = new AttractionsInformation()
            {
                attractionsList = public_FilterAttractions,
                updatedBreaks = breakInformation,
                divId = divId
            };
            
            return View(model);
        }


        //public JsonResult User_DeleteUserAttractions(int userAttractionId)
        //{
        //    _IUserInfo.User_DeleteUserAttractions(userAttractionId);
        //    if (getCityList.Count() > 0)
        //    {
        //        var jsonResults = Json(getCityList, JsonRequestBehavior.AllowGet);
        //        jsonResults.MaxJsonLength = int.MaxValue;
        //        return jsonResults;
        //    }
        //    else
        //    {
        //        return Json(new List<public_GetCityList>(), JsonRequestBehavior.AllowGet);
        //    }
        //}

        public JsonResult  User_GetUserAttractionSaved(int userId)
        {
            List<UserAttractionEntity> result  = _IUserInfo.User_GetUserAttractionSaved(userId);
            return jsonReturn.JsonResult<UserAttractionEntity>(result);
            
        }


        

        [HttpGet]
        public JsonResult  User_GetUserInformation(string userName, string password)
        {
            UserEntity result = _IUserInfo.User_GetUserInformation(userName, password);
            if (result != null)
            {
                userEntity = result;
                base.CreateCookie();
               
            }
            return jsonReturn.JsonResult<UserEntity>(result);
        }

        public JsonResult User_InsertingUserInfo(UserEntity userEntity)
        {
            _IUserInfo.User_InsertingUserInfo(userEntity);
            var jsonResults = Json(new JsonResultReturn { Success = true }, JsonRequestBehavior.AllowGet);
            jsonResults.MaxJsonLength = int.MaxValue;
            return jsonResults;
        }

        //public JsonResult User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity)
        //{
        //    _IUserInfo.User_UserAttractionUpdate(userAttractionEntity);
        //    if (getCityList.Count() > 0)
        //    {
        //        var jsonResults = Json(getCityList, JsonRequestBehavior.AllowGet);
        //        jsonResults.MaxJsonLength = int.MaxValue;
        //        return jsonResults;
        //    }
        //    else
        //    {
        //        return Json(new List<public_GetCityList>(), JsonRequestBehavior.AllowGet);
        //    }
        //}

        [HttpGet]
        public JsonResult UserExistChecking(string userName)
        {
            bool success = _IUserInfo.User_UserExistChecking(userName);
            if (success)
            {
                var jsonResults = Json(new JsonResultReturn { Success = true }, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                var jsonResults = Json(new JsonResultReturn { Success = false }, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
        }

        [HttpGet]
        public JsonResult IsUserLoggedIn()
        {
            if (IsUserAuthenticated())
            {
                var jsonResults = Json(new JsonResultReturn { Success = true, UserName = userEntity.UserName }, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                var jsonResults = Json(new JsonResultReturn { Success = false }, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
        }

        [HttpGet]
        public JsonResult UserLogOut()
        {
            base.LogOut();
            var jsonResults = Json(new JsonResultReturn { Success = true, UserName = userEntity.UserName }, JsonRequestBehavior.AllowGet);
            jsonResults.MaxJsonLength = int.MaxValue;
            return jsonResults;
        }

        public ActionResult PlannedTour()
        {
            return View();
        }

        [HttpGet]
        public JsonResult User_AddUpdateTourName(string tourName, int userTripId,int countryId)
        {
            UserTourInformation result = _IUserInfo.User_AddUpdateTourName(tourName,userTripId,userEntity.UserId, countryId);

            return jsonReturn.JsonResult<UserTourInformation>(result);
        }

        [HttpGet]
        public JsonResult User_GetTourInformation()
        {
            List<UserTourInformation> result =  _IUserInfo.User_GetTourInformation(userEntity.UserId);
            return jsonReturn.JsonResult<UserTourInformation>(result);
            

        }

        public JsonResult User_GetCityList()
        {
            List<public_GetCityList> getCityList = _IUserInfo.User_GetCityList(userEntity.UserTripId);

            return jsonReturn.JsonResult<public_GetCityList>(getCityList);
            
        }

        

        public JsonResult User_InsertCategoryInformation(List<userTable_Category> category)
        {
            if (category == null)
            {
                category = new List<userTable_Category>();
            }
            _IUserInfo.User_InsertCategoryInformation(userEntity.UserTripId,category);

            return Json(new JsonResultReturn { Success = true }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult User_UserTripGetAttractions()
        {
            List<UserTable_AttractionRequestOrder> result = _IUserInfo.User_UserTripGetAttractions(userEntity.UserTripId);
            return jsonReturn.JsonResult<UserTable_AttractionRequestOrder>(result);
            
        }

        public JsonResult User_GetUserStoredAttractinInfo()
        {
            AttractionInformationBinding attractionInformationBinding = new AttractionInformationBinding();
            List<GroupWithDateAttractions> result = attractionInformationBinding.User_GetUserStoredAttractinInfo(userEntity.UserTripId);
            return jsonReturn.JsonResult<GroupWithDateAttractions>(result);
            
        }

        public JsonResult User_RequestedBreaks()
        {
            List<UserTable_UpdatedBreaksTemp> result = _IUserInfo.User_RequestedBreaks(userEntity.UserTripId);
            return jsonReturn.JsonResult<UserTable_UpdatedBreaksTemp>(result);
            
        }

        public JsonResult User_UserTripBuildStatus()
        {
            List<UserTripBuildStatus> result = _IUserInfo.User_UserTripBuildStatus(userEntity.UserTripId);
            return jsonReturn.JsonResult<UserTripBuildStatus>(result);
            
        }

        public JsonResult User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId,int distance, string sourceLongitude,string sourceLatitude)
        {

            SearchForNextAttractions searchForNextAttractions = new SearchForNextAttractions();

            List<Coordinate> cordinates = searchForNextAttractions.GetBoundingCoords(Convert.ToDouble(sourceLatitude),
                Convert.ToDouble(sourceLongitude), distance);
            List<public_FilterAttractions> result =
                _IUserInfo.User_GetNearestRestaruents(attractionsId, travelModeId, countryId, cordinates);

            return jsonReturn.JsonResult<public_FilterAttractions>(result);
            
        }

        [HttpGet]
        public JsonResult User_UserTrip_Update(int noOfPersons, int noOfCars, decimal carMileage, decimal fuelPrice)
        {
            UserTourInformation result = new UserTourInformation();
            result.UserTripId = userEntity.UserTripId;
            result.NoOfPersons = noOfPersons;
            result.NoOfCars = noOfCars;
            result.CarMileage = carMileage;
            result.FuelPrice = fuelPrice;

            _IUserInfo.User_UserTrip_Update(result);

            return jsonReturn.JsonResult<UserTourInformation>(result);
        }


        [HttpGet]
        public JsonResult AutoComplte(string address,int countryId)
        {
            List<EntityPredictions> result = new List<EntityPredictions>();

            result = autoCompleteFeature.SearchString(address,
                _ICountry.Admin_GetCountry().Where(x => x.CountryId == countryId).Select(y => y.CountryShortName)
                    .FirstOrDefault());

            return jsonReturn.JsonResult<EntityPredictions>(result);
        }


        [HttpGet]
        public JsonResult AutoComplteBreakInfo(string address, int countryId,string latitude,string longitude,int distance)
        {
            List<ResultsList> result = new List<ResultsList>();

            result = getNearestInformation.NearestLocationAutocomplete(latitude, longitude,
                Convert.ToInt32(distance / 0.00062137).ToString(), address);

            return jsonReturn.JsonResult<ResultsList>(result);
        }

        [HttpGet]
        public JsonResult GetCountry()
        {
            List<MasterCountryDTO> result = new List<MasterCountryDTO>();

            result = _ICountry.Admin_GetCountry();

            return jsonReturn.JsonResult<MasterCountryDTO>(result);
        }

        [HttpGet]
        public JsonResult UserRequestedAttraction(string address, int countryId,int isSource, string startDate, string googleSearchText, int breakType, string breakDate)
        {
            List<MasterCountryDTO> result = new List<MasterCountryDTO>();
            if (!string.IsNullOrEmpty(breakDate.Trim()))
            {
                breakDate = breakDate.Replace("tab_", string.Empty).Replace('_', '-').Trim();
            }
            

            _IUserInfo.User_UserRequestedAttraction(userEntity.UserTripId,address,countryId, isSource, startDate,googleSearchText,breakType,breakDate);

            return jsonReturn.JsonResult<MasterCountryDTO>(result);
        }

        [HttpGet]
        public JsonResult GetTourInformationOnTripId()
        {
            UserTourInformation result = new UserTourInformation();

            result = _IUserInfo.User_GetTourInformationOnTripId(userEntity.UserTripId, userEntity.UserId);

            return jsonReturn.JsonResult<UserTourInformation>(result);
        }


        [HttpGet]
        public JsonResult GetOrderOfRequest(int countryId)
        {
            List<UserTable_AttractionRequestOrder> result = new List<UserTable_AttractionRequestOrder>();

            result = _IUserInfo.User_GetOrderOfRequest(userEntity.UserTripId, countryId );

            return jsonReturn.JsonResult<UserTable_AttractionRequestOrder>(result);
        }


        [HttpPost]
        public JsonResult InsertUserRequested(RequestOrder requestOrder)
        {
            List<UserTable_AttractionRequestOrder> result = new List<UserTable_AttractionRequestOrder>();

            _IUserInfo.User_InsertUserRequested(userEntity.UserTripId, requestOrder.attractionRequestOrder);

            return jsonReturn.JsonResult<UserTable_AttractionRequestOrder>(result);
        }




    }
}