﻿using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Scheduler;
using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IUserServices
    {
        [OperationContract]
        void User_DeleteUserAttractions(int userAttractionId);

        [OperationContract]
        List<UserAttractionEntity> User_GetUserAttractionSaved(int userId);

        [OperationContract]
        UserEntity User_GetUserInformation(string userName, string password);

        [OperationContract]
        void User_InsertingUserInfo(UserEntity userEntity);

        [OperationContract]
        void User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity);

        [OperationContract]
        bool User_UserExistChecking(string userName);

        [OperationContract]
        UserTourInformation User_AddUpdateTourName(string tourName, int userTripId, int userId,int countryId);

        [OperationContract]
        List<UserTourInformation> User_GetTourInformation(int userId);

        [OperationContract]
        void User_InsertUpdateTripCities(int userTripId, int countryId, List<CityVisitList> cityVisitList);

        [OperationContract]
        List<public_GetCityList> User_GetCityList(int userTripId);

       

        [OperationContract]
        void User_InsertCategoryInformation(int userTripId, List<userTable_Category> category);

        [OperationContract]
        void User_LogUserTripInformation(int travelModeId,
            List<userTable_OnlyId> attractionID, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,int userTripId);


        [OperationContract]
        List<UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId);

        [OperationContract]
        List<GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId);

        [OperationContract]
        List<UserTable_UpdatedBreaksTemp> User_RequestedBreaks(int userTripId);

        [OperationContract]
        List<UserTripBuildStatus> User_UserTripBuildStatus(int userTripId);

        [OperationContract]
        List<public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId, List<Coordinate> coodinate);

        [OperationContract]
        void User_UserTrip_Update(UserTourInformation userTourInformation);

        [OperationContract]
        void User_UserRequestedAttraction(int userTripId, string address, int countryId,int isSource, string startDate, string googleSearchText, int breakType, string breakDate);

        [OperationContract]
        UserTourInformation User_GetTourInformationOnTripId(int userTripId, int userId);

        [OperationContract]
        List<UserTable_AttractionRequestOrder> User_GetOrderOfRequest(int userTripId, int countryId);

        [OperationContract]
        void User_InsertUserRequested(int userTripId, List<UserTable_AttractionRequestOrder> attractionRequestOrder);



    }
}
