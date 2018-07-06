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
            if (result.Count() > 0)
            {
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<UserAttractionEntity>(), JsonRequestBehavior.AllowGet);
            }
        }


        

        [HttpGet]
        public JsonResult  User_GetUserInformation(string userName, string password)
        {
            UserEntity result = _IUserInfo.User_GetUserInformation(userName, password);
            if (result!=null)
            {
                userEntity = result;
                base.CreateCookie();
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<UserEntity>(), JsonRequestBehavior.AllowGet);
            }
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
            
            var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
            jsonResults.MaxJsonLength = int.MaxValue;
            return jsonResults;

        }

        [HttpGet]
        public JsonResult User_GetTourInformation()
        {
            List<UserTourInformation> result =  _IUserInfo.User_GetTourInformation(userEntity.UserId);
            if (result.Any())
            {
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<UserTourInformation>(), JsonRequestBehavior.AllowGet);
            }

        }

        public JsonResult User_GetCityList()
        {
            List<public_GetCityList> getCityList = _IUserInfo.User_GetCityList(userEntity.UserTripId);
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
            if (result.Count() > 0)
            {
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<UserTable_AttractionRequestOrder>(), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult User_GetUserStoredAttractinInfo()
        {
            AttractionInformationBinding attractionInformationBinding = new AttractionInformationBinding();
            List<GroupWithDateAttractions> result = attractionInformationBinding.User_GetUserStoredAttractinInfo(userEntity.UserTripId);
            if (result.Count() > 0)
            {
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<GroupWithDateAttractions>(), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult User_RequestedBreaks()
        {
            List<UserTable_UpdatedBreaksTemp> result = _IUserInfo.User_RequestedBreaks(userEntity.UserTripId);
            if (result != null && result.Count() > 0)
            {
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<UserTable_UpdatedBreaksTemp>(), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult User_UserTripBuildStatus()
        {
            List<UserTripBuildStatus> result = _IUserInfo.User_UserTripBuildStatus(userEntity.UserTripId);
            if (result != null && result.Count() > 0)
            {
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<UserTripBuildStatus>(), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId)
        {
            List<public_FilterAttractions> result =
                _IUserInfo.User_GetNearestRestaruents(attractionsId, travelModeId, countryId);
            if (result != null && result.Count() > 0)
            {
                var jsonResults = Json(result, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<public_FilterAttractions>(), JsonRequestBehavior.AllowGet);
            }
        }



    }
}