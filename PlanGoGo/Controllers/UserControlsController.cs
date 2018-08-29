using BusinessEntites;
using BusinessEntites.Custom;
using BusinessEntites.Users;
using CommonFunctions;
using Interfaces;
using PlanGoGo.Helper;
using PlanGoGo.Models.UserControls;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGo.Controllers
{
    public class UserControlsController : BaseControler
    {

        IUser _IUserInfo;
        

        public UserControlsController(IUser IUserInfo)
        {
            _IUserInfo = IUserInfo;
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
        public JsonResult User_AddUpdateTourName(string tourName, int userTripId)
        {
            UserTourInformation result = _IUserInfo.User_AddUpdateTourName(tourName,userTripId,userEntity.UserId);

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



    }
}