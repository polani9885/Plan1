using BusinessAccessLayer.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Users;
using Interfaces;
using BusinessEntites.JsonParameters;
using BusinessEntites;

namespace BusinessAccessLayer.Users
{
    public class UsersBAL : BaseBusinessClass, IDisposable, IUser
    {
        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public void User_DeleteUserAttractions(int userAttractionId)
        {
            _dataAccessUsers.User_DeleteUserAttractions(userAttractionId);
        }

        public List<UserAttractionEntity> User_GetUserAttractionSaved(int userId)
        {
            return _dataAccessUsers.User_GetUserAttractionSaved(userId);
        }

        public UserEntity User_GetUserInformation(string userName,string password)
        {
            return _dataAccessUsers.User_GetUserInformation(userName,password);
        }

        public void User_InsertingUserInfo(UserEntity userEntity)
        {
            _dataAccessUsers.User_InsertingUserInfo(userEntity);
        }

        public void User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity)
        {
            _dataAccessUsers.User_UserAttractionUpdate(userAttractionEntity);
        }

        public bool User_UserExistChecking(string userName)
        {
            return _dataAccessUsers.User_UserExistChecking(userName);
        }

        public UserTourInformation User_AddUpdateTourName(string tourName, int userTripId, int userId,int countryId)
        {
            return _dataAccessUsers.User_AddUpdateTourName(tourName,userTripId,userId,countryId);
        }

        public List<UserTourInformation> User_GetTourInformation(int userId)
        {
            return _dataAccessUsers.User_GetTourInformation(userId);
        }

        public void User_InsertUpdateTripCities(int userTripId, int countryId, List<CityVisitList> cityVisitList)
        {
            _dataAccessUsers.User_InsertUpdateTripCities(userTripId, countryId, cityVisitList);

        }

        public List<public_GetCityList> User_GetCityList(int userTripId)
        {
            return _dataAccessUsers.User_GetCityList(userTripId);
        }

       

        public void User_InsertCategoryInformation(int userTripId, List<userTable_Category> category)
        {
            _dataAccessUsers.User_InsertCategoryInformation(userTripId, category);
        }

        public void User_LogUserTripInformation(int travelModeId,
             List<userTable_OnlyId> attractionID, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId)
        {
            _dataAccessUsers.User_LogUserTripInformation(travelModeId,
                attractionID, listGetOrderOfAttractionVisit, countryId, userTable_UpdatedBreaks,
                 userTripId);
        }

        public List<UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId)
        {
            return _dataAccessUsers.User_UserTripGetAttractions(userTripId);
        }

        public List<GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId)
        {
            return _dataAccessUsers.User_GetUserStoredAttractinInfo(userTripId);
        }

        public List<UserTable_UpdatedBreaksTemp> User_RequestedBreaks(int userTripId)
        {
            return _dataAccessUsers.User_RequestedBreaks(userTripId);
        }

        public List<UserTripBuildStatus> User_UserTripBuildStatus(int userTripId)
        {
            return _dataAccessUsers.User_UserTripBuildStatus(userTripId);
        }

        public List<public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId,
            int countryId, List<Coordinate> coodinate)
        {
            return _dataAccessUsers.User_GetNearestRestaruents(attractionsId, travelModeId, countryId,coodinate);
        }

        public void User_UserTrip_Update(UserTourInformation userTourInformation)
        {
            _dataAccessUsers.User_UserTrip_Update(userTourInformation);
        }

        public void User_UserRequestedAttraction(int userTripId, string address, int countryId,int isSource, string startDate, string googleSearchText, int breakType, string breakDate)
        {
            _dataAccessUsers.User_UserRequestedAttraction(userTripId, address, countryId, isSource, startDate,googleSearchText,breakType,breakDate);
        }

        public UserTourInformation User_GetTourInformationOnTripId(int userTripId, int userId)
        {
            return _dataAccessUsers.User_GetTourInformationOnTripId(userTripId, userId);
        }

        public List<UserTable_AttractionRequestOrder> User_GetOrderOfRequest(int userTripId, int countryId)
        {
            return _dataAccessUsers.User_GetOrderOfRequest(userTripId, countryId);
        }

        public void User_InsertUserRequested(int userTripId,
            List<UserTable_AttractionRequestOrder> attractionRequestOrder)
        {
            _dataAccessUsers.User_InsertUserRequested(userTripId, attractionRequestOrder);
        }

        public List<GetOrderOfAttractionVisit> User_CheckTheCalculationPartIsDone(int userTripId)
        {
            return _dataAccessUsers.User_CheckTheCalculationPartIsDone(userTripId);
        }
    }
}
