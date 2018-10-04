using PlanGoGoService.BaseClasses;
using PlanGoGoService.Schedulers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using PlanGoGoService.Interfaces;
using BusinessEntites.Users;
using BusinessEntites.JsonParameters;
using BusinessEntites;
using BusinessEntites.Scheduler;

namespace PlanGoGoService.Schedulers
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "UsersService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select UsersService.svc or UsersService.svc.cs at the Solution Explorer and start debugging.
    public class UsersService : BaseReference, IUserServices
    {
        public void User_DeleteUserAttractions(int userAttractionId)
        {
            _businessUserBAL.User_DeleteUserAttractions(userAttractionId);
        }

        public List<UserAttractionEntity> User_GetUserAttractionSaved(int userId)
        {
            return _businessUserBAL.User_GetUserAttractionSaved(userId);
        }

        public UserEntity User_GetUserInformation(string userName, string password)
        {
            return _businessUserBAL.User_GetUserInformation(userName, password);
        }

        public void User_InsertingUserInfo(UserEntity userEntity)
        {
            _businessUserBAL.User_InsertingUserInfo(userEntity);
        }

        public void User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity)
        {
            _businessUserBAL.User_UserAttractionUpdate(userAttractionEntity);
        }

        public bool User_UserExistChecking(string userName)
        {
            return _businessUserBAL.User_UserExistChecking(userName);
        }

        public UserTourInformation User_AddUpdateTourName(string tourName, int userTripId, int userId,int countryId)
        {
            return _businessUserBAL.User_AddUpdateTourName(tourName, userTripId, userId, countryId);
        }

        public  List<UserTourInformation> User_GetTourInformation(int userId)
        {
            return _businessUserBAL.User_GetTourInformation(userId);
        }

        public void User_InsertUpdateTripCities(int userTripId, int countryId, List<CityVisitList> cityVisitList)
        {
            _businessUserBAL.User_InsertUpdateTripCities(userTripId,countryId,cityVisitList);
        }

        public List<public_GetCityList> User_GetCityList(int userTripId)
        {
            return _businessUserBAL.User_GetCityList(userTripId);
        }

        

        public void User_InsertCategoryInformation(int userTripId, List<userTable_Category> category)
        {
            _businessUserBAL.User_InsertCategoryInformation(userTripId,category);
        }

        public void User_LogUserTripInformation(int travelModeId,
            List<userTable_OnlyId> attractionID, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,int userTripId)
        {
            _businessUserBAL.User_LogUserTripInformation(travelModeId,
                attractionID, listGetOrderOfAttractionVisit, countryId, userTable_UpdatedBreaks,userTripId);
        }

        public List<UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId)
        {
            return _businessUserBAL.User_UserTripGetAttractions(userTripId);
        }


        public List<GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId)
        {
            return _businessUserBAL.User_GetUserStoredAttractinInfo(userTripId);
        }

        public List<UserTable_UpdatedBreaksTemp> User_RequestedBreaks(int userTripId)
        {
            return _businessUserBAL.User_RequestedBreaks(userTripId);
        }

        public List<UserTripBuildStatus> User_UserTripBuildStatus(int userTripId)
        {
            return _businessUserBAL.User_UserTripBuildStatus(userTripId);
        }

        public List<public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId,
            int countryId, List<Coordinate> coodinate)
        {
            return _businessUserBAL.User_GetNearestRestaruents(attractionsId, travelModeId, countryId, coodinate);
        }

        public void User_UserTrip_Update(UserTourInformation userTourInformation)
        {
            _businessUserBAL.User_UserTrip_Update(userTourInformation);
        }

        public void User_UserRequestedAttraction(int userTripId, string address, int countryId,int isSource, string startDate, string googleSearchText, int breakType, string breakDate)
        {
            _businessUserBAL.User_UserRequestedAttraction(userTripId, address, countryId, isSource, startDate, googleSearchText, breakType, breakDate);
        }

        public UserTourInformation User_GetTourInformationOnTripId(int userTripId, int userId)
        {
            return _businessUserBAL.User_GetTourInformationOnTripId(userTripId, userId);
        }

        public List<UserTable_AttractionRequestOrder> User_GetOrderOfRequest(int userTripId, int countryId)
        {
            return _businessUserBAL.User_GetOrderOfRequest(userTripId, countryId);
        }

        public void User_InsertUserRequested(int userTripId,
            List<UserTable_AttractionRequestOrder> attractionRequestOrder)
        {
            _businessUserBAL.User_InsertUserRequested(userTripId, attractionRequestOrder);
        }


    }
}
