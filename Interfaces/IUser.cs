using BusinessEntites;
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

        UserTourInformation User_AddUpdateTourName(string tourName, int userTripId, int userId);

        List<UserTourInformation> User_GetTourInformation(int userId);

        void User_InsertUpdateTripCities(int userTripId, int countryId, List<CityVisitList> cityVisitList);

        List<public_GetCityList> User_GetCityList(int userTripId);

        void User_InsertCategoryInformation(int userTripId, List<userTable_Category> category);

        void User_LogUserTripInformation(int travelModeId,
            int sourceAttractionID, int destinationAttractionID, List<userTable_OnlyId> attractionID, string startDate,
            string startTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder, int userTripId);

        List<UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId);

        List<GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId);

        List<UserTable_UpdatedBreaksTemp> User_RequestedBreaks(int userTripId);

        List<UserTripBuildStatus> User_UserTripBuildStatus(int userTripId);

        List<public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId, List<Coordinate> coodinate);
    }
}
