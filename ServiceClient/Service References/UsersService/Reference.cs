﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ServiceClient.UsersService {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="UsersService.IUserServices")]
    public interface IUserServices {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_DeleteUserAttractions", ReplyAction="http://tempuri.org/IUserServices/User_DeleteUserAttractionsResponse")]
        void User_DeleteUserAttractions(int userAttractionId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_DeleteUserAttractions", ReplyAction="http://tempuri.org/IUserServices/User_DeleteUserAttractionsResponse")]
        System.Threading.Tasks.Task User_DeleteUserAttractionsAsync(int userAttractionId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetUserAttractionSaved", ReplyAction="http://tempuri.org/IUserServices/User_GetUserAttractionSavedResponse")]
        System.Collections.Generic.List<BusinessEntites.Users.UserAttractionEntity> User_GetUserAttractionSaved(int userId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetUserAttractionSaved", ReplyAction="http://tempuri.org/IUserServices/User_GetUserAttractionSavedResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserAttractionEntity>> User_GetUserAttractionSavedAsync(int userId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetUserInformation", ReplyAction="http://tempuri.org/IUserServices/User_GetUserInformationResponse")]
        BusinessEntites.Users.UserEntity User_GetUserInformation(string userName, string password);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetUserInformation", ReplyAction="http://tempuri.org/IUserServices/User_GetUserInformationResponse")]
        System.Threading.Tasks.Task<BusinessEntites.Users.UserEntity> User_GetUserInformationAsync(string userName, string password);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_InsertingUserInfo", ReplyAction="http://tempuri.org/IUserServices/User_InsertingUserInfoResponse")]
        void User_InsertingUserInfo(BusinessEntites.Users.UserEntity userEntity);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_InsertingUserInfo", ReplyAction="http://tempuri.org/IUserServices/User_InsertingUserInfoResponse")]
        System.Threading.Tasks.Task User_InsertingUserInfoAsync(BusinessEntites.Users.UserEntity userEntity);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserAttractionUpdate", ReplyAction="http://tempuri.org/IUserServices/User_UserAttractionUpdateResponse")]
        void User_UserAttractionUpdate(BusinessEntites.Users.UserAttractionEntity userAttractionEntity);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserAttractionUpdate", ReplyAction="http://tempuri.org/IUserServices/User_UserAttractionUpdateResponse")]
        System.Threading.Tasks.Task User_UserAttractionUpdateAsync(BusinessEntites.Users.UserAttractionEntity userAttractionEntity);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserExistChecking", ReplyAction="http://tempuri.org/IUserServices/User_UserExistCheckingResponse")]
        bool User_UserExistChecking(string userName);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserExistChecking", ReplyAction="http://tempuri.org/IUserServices/User_UserExistCheckingResponse")]
        System.Threading.Tasks.Task<bool> User_UserExistCheckingAsync(string userName);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_AddUpdateTourName", ReplyAction="http://tempuri.org/IUserServices/User_AddUpdateTourNameResponse")]
        BusinessEntites.Users.UserTourInformation User_AddUpdateTourName(string tourName, int userTripId, int userId, int countryId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_AddUpdateTourName", ReplyAction="http://tempuri.org/IUserServices/User_AddUpdateTourNameResponse")]
        System.Threading.Tasks.Task<BusinessEntites.Users.UserTourInformation> User_AddUpdateTourNameAsync(string tourName, int userTripId, int userId, int countryId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetTourInformation", ReplyAction="http://tempuri.org/IUserServices/User_GetTourInformationResponse")]
        System.Collections.Generic.List<BusinessEntites.Users.UserTourInformation> User_GetTourInformation(int userId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetTourInformation", ReplyAction="http://tempuri.org/IUserServices/User_GetTourInformationResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTourInformation>> User_GetTourInformationAsync(int userId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_InsertUpdateTripCities", ReplyAction="http://tempuri.org/IUserServices/User_InsertUpdateTripCitiesResponse")]
        void User_InsertUpdateTripCities(int userTripId, int countryId, System.Collections.Generic.List<BusinessEntites.JsonParameters.CityVisitList> cityVisitList);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_InsertUpdateTripCities", ReplyAction="http://tempuri.org/IUserServices/User_InsertUpdateTripCitiesResponse")]
        System.Threading.Tasks.Task User_InsertUpdateTripCitiesAsync(int userTripId, int countryId, System.Collections.Generic.List<BusinessEntites.JsonParameters.CityVisitList> cityVisitList);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetCityList", ReplyAction="http://tempuri.org/IUserServices/User_GetCityListResponse")]
        System.Collections.Generic.List<BusinessEntites.public_GetCityList> User_GetCityList(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetCityList", ReplyAction="http://tempuri.org/IUserServices/User_GetCityListResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.public_GetCityList>> User_GetCityListAsync(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_InsertCategoryInformation", ReplyAction="http://tempuri.org/IUserServices/User_InsertCategoryInformationResponse")]
        void User_InsertCategoryInformation(int userTripId, System.Collections.Generic.List<BusinessEntites.userTable_Category> category);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_InsertCategoryInformation", ReplyAction="http://tempuri.org/IUserServices/User_InsertCategoryInformationResponse")]
        System.Threading.Tasks.Task User_InsertCategoryInformationAsync(int userTripId, System.Collections.Generic.List<BusinessEntites.userTable_Category> category);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_LogUserTripInformation", ReplyAction="http://tempuri.org/IUserServices/User_LogUserTripInformationResponse")]
        void User_LogUserTripInformation(int travelModeId, System.Collections.Generic.List<BusinessEntites.userTable_OnlyId> attractionID, System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId, System.Collections.Generic.List<BusinessEntites.Users.UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_LogUserTripInformation", ReplyAction="http://tempuri.org/IUserServices/User_LogUserTripInformationResponse")]
        System.Threading.Tasks.Task User_LogUserTripInformationAsync(int travelModeId, System.Collections.Generic.List<BusinessEntites.userTable_OnlyId> attractionID, System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId, System.Collections.Generic.List<BusinessEntites.Users.UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserTripGetAttractions", ReplyAction="http://tempuri.org/IUserServices/User_UserTripGetAttractionsResponse")]
        System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserTripGetAttractions", ReplyAction="http://tempuri.org/IUserServices/User_UserTripGetAttractionsResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder>> User_UserTripGetAttractionsAsync(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetUserStoredAttractinInfo", ReplyAction="http://tempuri.org/IUserServices/User_GetUserStoredAttractinInfoResponse")]
        System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetUserStoredAttractinInfo", ReplyAction="http://tempuri.org/IUserServices/User_GetUserStoredAttractinInfoResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit>> User_GetUserStoredAttractinInfoAsync(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_RequestedBreaks", ReplyAction="http://tempuri.org/IUserServices/User_RequestedBreaksResponse")]
        System.Collections.Generic.List<BusinessEntites.Users.UserTable_UpdatedBreaksTemp> User_RequestedBreaks(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_RequestedBreaks", ReplyAction="http://tempuri.org/IUserServices/User_RequestedBreaksResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTable_UpdatedBreaksTemp>> User_RequestedBreaksAsync(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserTripBuildStatus", ReplyAction="http://tempuri.org/IUserServices/User_UserTripBuildStatusResponse")]
        System.Collections.Generic.List<BusinessEntites.Users.UserTripBuildStatus> User_UserTripBuildStatus(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserTripBuildStatus", ReplyAction="http://tempuri.org/IUserServices/User_UserTripBuildStatusResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTripBuildStatus>> User_UserTripBuildStatusAsync(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetNearestRestaruents", ReplyAction="http://tempuri.org/IUserServices/User_GetNearestRestaruentsResponse")]
        System.Collections.Generic.List<BusinessEntites.public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId, System.Collections.Generic.List<BusinessEntites.Coordinate> coodinate);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetNearestRestaruents", ReplyAction="http://tempuri.org/IUserServices/User_GetNearestRestaruentsResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.public_FilterAttractions>> User_GetNearestRestaruentsAsync(int attractionsId, int travelModeId, int countryId, System.Collections.Generic.List<BusinessEntites.Coordinate> coodinate);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserTrip_Update", ReplyAction="http://tempuri.org/IUserServices/User_UserTrip_UpdateResponse")]
        void User_UserTrip_Update(BusinessEntites.Users.UserTourInformation userTourInformation);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserTrip_Update", ReplyAction="http://tempuri.org/IUserServices/User_UserTrip_UpdateResponse")]
        System.Threading.Tasks.Task User_UserTrip_UpdateAsync(BusinessEntites.Users.UserTourInformation userTourInformation);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserRequestedAttraction", ReplyAction="http://tempuri.org/IUserServices/User_UserRequestedAttractionResponse")]
        void User_UserRequestedAttraction(int userTripId, string address, int countryId, int isSource, string startDate, string googleSearchText, int breakType, string breakDate);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_UserRequestedAttraction", ReplyAction="http://tempuri.org/IUserServices/User_UserRequestedAttractionResponse")]
        System.Threading.Tasks.Task User_UserRequestedAttractionAsync(int userTripId, string address, int countryId, int isSource, string startDate, string googleSearchText, int breakType, string breakDate);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetTourInformationOnTripId", ReplyAction="http://tempuri.org/IUserServices/User_GetTourInformationOnTripIdResponse")]
        BusinessEntites.Users.UserTourInformation User_GetTourInformationOnTripId(int userTripId, int userId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetTourInformationOnTripId", ReplyAction="http://tempuri.org/IUserServices/User_GetTourInformationOnTripIdResponse")]
        System.Threading.Tasks.Task<BusinessEntites.Users.UserTourInformation> User_GetTourInformationOnTripIdAsync(int userTripId, int userId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetOrderOfRequest", ReplyAction="http://tempuri.org/IUserServices/User_GetOrderOfRequestResponse")]
        System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder> User_GetOrderOfRequest(int userTripId, int countryId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_GetOrderOfRequest", ReplyAction="http://tempuri.org/IUserServices/User_GetOrderOfRequestResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder>> User_GetOrderOfRequestAsync(int userTripId, int countryId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_InsertUserRequested", ReplyAction="http://tempuri.org/IUserServices/User_InsertUserRequestedResponse")]
        void User_InsertUserRequested(int userTripId, System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder> attractionRequestOrder);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_InsertUserRequested", ReplyAction="http://tempuri.org/IUserServices/User_InsertUserRequestedResponse")]
        System.Threading.Tasks.Task User_InsertUserRequestedAsync(int userTripId, System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder> attractionRequestOrder);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_CheckTheCalculationPartIsDone", ReplyAction="http://tempuri.org/IUserServices/User_CheckTheCalculationPartIsDoneResponse")]
        System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit> User_CheckTheCalculationPartIsDone(int userTripId);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IUserServices/User_CheckTheCalculationPartIsDone", ReplyAction="http://tempuri.org/IUserServices/User_CheckTheCalculationPartIsDoneResponse")]
        System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit>> User_CheckTheCalculationPartIsDoneAsync(int userTripId);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IUserServicesChannel : ServiceClient.UsersService.IUserServices, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class UserServicesClient : System.ServiceModel.ClientBase<ServiceClient.UsersService.IUserServices>, ServiceClient.UsersService.IUserServices {
        
        public UserServicesClient() {
        }
        
        public UserServicesClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public UserServicesClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public UserServicesClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public UserServicesClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public void User_DeleteUserAttractions(int userAttractionId) {
            base.Channel.User_DeleteUserAttractions(userAttractionId);
        }
        
        public System.Threading.Tasks.Task User_DeleteUserAttractionsAsync(int userAttractionId) {
            return base.Channel.User_DeleteUserAttractionsAsync(userAttractionId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Users.UserAttractionEntity> User_GetUserAttractionSaved(int userId) {
            return base.Channel.User_GetUserAttractionSaved(userId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserAttractionEntity>> User_GetUserAttractionSavedAsync(int userId) {
            return base.Channel.User_GetUserAttractionSavedAsync(userId);
        }
        
        public BusinessEntites.Users.UserEntity User_GetUserInformation(string userName, string password) {
            return base.Channel.User_GetUserInformation(userName, password);
        }
        
        public System.Threading.Tasks.Task<BusinessEntites.Users.UserEntity> User_GetUserInformationAsync(string userName, string password) {
            return base.Channel.User_GetUserInformationAsync(userName, password);
        }
        
        public void User_InsertingUserInfo(BusinessEntites.Users.UserEntity userEntity) {
            base.Channel.User_InsertingUserInfo(userEntity);
        }
        
        public System.Threading.Tasks.Task User_InsertingUserInfoAsync(BusinessEntites.Users.UserEntity userEntity) {
            return base.Channel.User_InsertingUserInfoAsync(userEntity);
        }
        
        public void User_UserAttractionUpdate(BusinessEntites.Users.UserAttractionEntity userAttractionEntity) {
            base.Channel.User_UserAttractionUpdate(userAttractionEntity);
        }
        
        public System.Threading.Tasks.Task User_UserAttractionUpdateAsync(BusinessEntites.Users.UserAttractionEntity userAttractionEntity) {
            return base.Channel.User_UserAttractionUpdateAsync(userAttractionEntity);
        }
        
        public bool User_UserExistChecking(string userName) {
            return base.Channel.User_UserExistChecking(userName);
        }
        
        public System.Threading.Tasks.Task<bool> User_UserExistCheckingAsync(string userName) {
            return base.Channel.User_UserExistCheckingAsync(userName);
        }
        
        public BusinessEntites.Users.UserTourInformation User_AddUpdateTourName(string tourName, int userTripId, int userId, int countryId) {
            return base.Channel.User_AddUpdateTourName(tourName, userTripId, userId, countryId);
        }
        
        public System.Threading.Tasks.Task<BusinessEntites.Users.UserTourInformation> User_AddUpdateTourNameAsync(string tourName, int userTripId, int userId, int countryId) {
            return base.Channel.User_AddUpdateTourNameAsync(tourName, userTripId, userId, countryId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Users.UserTourInformation> User_GetTourInformation(int userId) {
            return base.Channel.User_GetTourInformation(userId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTourInformation>> User_GetTourInformationAsync(int userId) {
            return base.Channel.User_GetTourInformationAsync(userId);
        }
        
        public void User_InsertUpdateTripCities(int userTripId, int countryId, System.Collections.Generic.List<BusinessEntites.JsonParameters.CityVisitList> cityVisitList) {
            base.Channel.User_InsertUpdateTripCities(userTripId, countryId, cityVisitList);
        }
        
        public System.Threading.Tasks.Task User_InsertUpdateTripCitiesAsync(int userTripId, int countryId, System.Collections.Generic.List<BusinessEntites.JsonParameters.CityVisitList> cityVisitList) {
            return base.Channel.User_InsertUpdateTripCitiesAsync(userTripId, countryId, cityVisitList);
        }
        
        public System.Collections.Generic.List<BusinessEntites.public_GetCityList> User_GetCityList(int userTripId) {
            return base.Channel.User_GetCityList(userTripId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.public_GetCityList>> User_GetCityListAsync(int userTripId) {
            return base.Channel.User_GetCityListAsync(userTripId);
        }
        
        public void User_InsertCategoryInformation(int userTripId, System.Collections.Generic.List<BusinessEntites.userTable_Category> category) {
            base.Channel.User_InsertCategoryInformation(userTripId, category);
        }
        
        public System.Threading.Tasks.Task User_InsertCategoryInformationAsync(int userTripId, System.Collections.Generic.List<BusinessEntites.userTable_Category> category) {
            return base.Channel.User_InsertCategoryInformationAsync(userTripId, category);
        }
        
        public void User_LogUserTripInformation(int travelModeId, System.Collections.Generic.List<BusinessEntites.userTable_OnlyId> attractionID, System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId, System.Collections.Generic.List<BusinessEntites.Users.UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId) {
            base.Channel.User_LogUserTripInformation(travelModeId, attractionID, listGetOrderOfAttractionVisit, countryId, userTable_UpdatedBreaks, userTripId);
        }
        
        public System.Threading.Tasks.Task User_LogUserTripInformationAsync(int travelModeId, System.Collections.Generic.List<BusinessEntites.userTable_OnlyId> attractionID, System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId, System.Collections.Generic.List<BusinessEntites.Users.UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId) {
            return base.Channel.User_LogUserTripInformationAsync(travelModeId, attractionID, listGetOrderOfAttractionVisit, countryId, userTable_UpdatedBreaks, userTripId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId) {
            return base.Channel.User_UserTripGetAttractions(userTripId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder>> User_UserTripGetAttractionsAsync(int userTripId) {
            return base.Channel.User_UserTripGetAttractionsAsync(userTripId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId) {
            return base.Channel.User_GetUserStoredAttractinInfo(userTripId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit>> User_GetUserStoredAttractinInfoAsync(int userTripId) {
            return base.Channel.User_GetUserStoredAttractinInfoAsync(userTripId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Users.UserTable_UpdatedBreaksTemp> User_RequestedBreaks(int userTripId) {
            return base.Channel.User_RequestedBreaks(userTripId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTable_UpdatedBreaksTemp>> User_RequestedBreaksAsync(int userTripId) {
            return base.Channel.User_RequestedBreaksAsync(userTripId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Users.UserTripBuildStatus> User_UserTripBuildStatus(int userTripId) {
            return base.Channel.User_UserTripBuildStatus(userTripId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTripBuildStatus>> User_UserTripBuildStatusAsync(int userTripId) {
            return base.Channel.User_UserTripBuildStatusAsync(userTripId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId, System.Collections.Generic.List<BusinessEntites.Coordinate> coodinate) {
            return base.Channel.User_GetNearestRestaruents(attractionsId, travelModeId, countryId, coodinate);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.public_FilterAttractions>> User_GetNearestRestaruentsAsync(int attractionsId, int travelModeId, int countryId, System.Collections.Generic.List<BusinessEntites.Coordinate> coodinate) {
            return base.Channel.User_GetNearestRestaruentsAsync(attractionsId, travelModeId, countryId, coodinate);
        }
        
        public void User_UserTrip_Update(BusinessEntites.Users.UserTourInformation userTourInformation) {
            base.Channel.User_UserTrip_Update(userTourInformation);
        }
        
        public System.Threading.Tasks.Task User_UserTrip_UpdateAsync(BusinessEntites.Users.UserTourInformation userTourInformation) {
            return base.Channel.User_UserTrip_UpdateAsync(userTourInformation);
        }
        
        public void User_UserRequestedAttraction(int userTripId, string address, int countryId, int isSource, string startDate, string googleSearchText, int breakType, string breakDate) {
            base.Channel.User_UserRequestedAttraction(userTripId, address, countryId, isSource, startDate, googleSearchText, breakType, breakDate);
        }
        
        public System.Threading.Tasks.Task User_UserRequestedAttractionAsync(int userTripId, string address, int countryId, int isSource, string startDate, string googleSearchText, int breakType, string breakDate) {
            return base.Channel.User_UserRequestedAttractionAsync(userTripId, address, countryId, isSource, startDate, googleSearchText, breakType, breakDate);
        }
        
        public BusinessEntites.Users.UserTourInformation User_GetTourInformationOnTripId(int userTripId, int userId) {
            return base.Channel.User_GetTourInformationOnTripId(userTripId, userId);
        }
        
        public System.Threading.Tasks.Task<BusinessEntites.Users.UserTourInformation> User_GetTourInformationOnTripIdAsync(int userTripId, int userId) {
            return base.Channel.User_GetTourInformationOnTripIdAsync(userTripId, userId);
        }
        
        public System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder> User_GetOrderOfRequest(int userTripId, int countryId) {
            return base.Channel.User_GetOrderOfRequest(userTripId, countryId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder>> User_GetOrderOfRequestAsync(int userTripId, int countryId) {
            return base.Channel.User_GetOrderOfRequestAsync(userTripId, countryId);
        }
        
        public void User_InsertUserRequested(int userTripId, System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder> attractionRequestOrder) {
            base.Channel.User_InsertUserRequested(userTripId, attractionRequestOrder);
        }
        
        public System.Threading.Tasks.Task User_InsertUserRequestedAsync(int userTripId, System.Collections.Generic.List<BusinessEntites.Users.UserTable_AttractionRequestOrder> attractionRequestOrder) {
            return base.Channel.User_InsertUserRequestedAsync(userTripId, attractionRequestOrder);
        }
        
        public System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit> User_CheckTheCalculationPartIsDone(int userTripId) {
            return base.Channel.User_CheckTheCalculationPartIsDone(userTripId);
        }
        
        public System.Threading.Tasks.Task<System.Collections.Generic.List<BusinessEntites.GetOrderOfAttractionVisit>> User_CheckTheCalculationPartIsDoneAsync(int userTripId) {
            return base.Channel.User_CheckTheCalculationPartIsDoneAsync(userTripId);
        }
    }
}
