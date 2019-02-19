using BusinessEntites;
using BusinessEntites.DataBaseModels;
using BusinessEntites.EntityAutoComplete.ReferenceObjects;
using BusinessEntites.JsonParameters;
using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces
{
    public interface IUser
    {
        void User_DeleteUserAttractions(int userAttractionId);

        List<UserAttractionEntity> User_GetUserAttractionSaved(int userId);

        UserEntity User_GetUserInformation(string userName, string password);

        void User_InsertingUserInfo(UserEntity userEntity);

        void User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity);

        bool User_UserExistChecking(string userName);

        UserTourInformation User_AddUpdateTourName(string tourName, int userTripId, int userId, int countryId);

        List<UserTourInformation> User_GetTourInformation(int userId);

        void User_InsertUpdateTripCities(int userTripId, int countryId, List<CityVisitList> cityVisitList);

        List<public_GetCityList> User_GetCityList(int userTripId);

        void User_InsertCategoryInformation(int userTripId, List<userTable_Category> category);

        void User_LogUserTripInformation(int travelModeId,
              List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId);

        List<UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId);

        List<GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId,int userId);

        List<UserTable_UpdatedBreaksTemp> User_RequestedBreaks(int userTripId);

        List<UserTripBuildStatus> User_UserTripBuildStatus(int userTripId);

        List<public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId, List<Coordinate> coodinate, int attractionTravelStepsId);

        void User_UserTrip_Update(UserTourInformation userTourInformation);

        void User_UserRequestedAttraction(int userTripId, string address, int countryId,int isSource,string startDate, string googleSearchText, int breakType, string breakDate, string startTime);

        UserTourInformation User_GetTourInformationOnTripId(int userTripId, int userId);
        List<UserTable_AttractionRequestOrder> User_GetOrderOfRequest(int userTripId, int countryId);

        void User_InsertUserRequested(int userTripId,
            List<UserTable_AttractionRequestOrder> attractionRequestOrder);

        List<GetOrderOfAttractionVisit> User_CheckTheCalculationPartIsDone(int userTripId);

        void User_AddInterestedAttractionList(int userTripId, int attractionId);
        void User_DeleteNotInterestedAttractionList(int userTripId, int attractionId);

        List<User_GetDirectionsSteps> User_GetDirectionsSteps(int countryId, int attractionTravelTimeDistanceId, string dateAndTime);

        List<GetOrderOfAttractionVisit> User_GetAttractionTravelStepsNearAttractionInfo(
            int attractionTravelStepsId, int countryId);

        List<GetOrderOfAttractionVisit> User_GetAttractionsNextAttractions(int attractionsId, int countryId);

        List<AttractionXCategory> User_GetAttractionXCategory(List<userTable_OnlyId> attractionsId, int countryId);

        void User_UpdateBreakInformation(
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId);

        List<EntityPredictions> User_AutoComplete(string address, int countryId);
    }
}
