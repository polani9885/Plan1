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
using BusinessEntites.Admin;
using BusinessEntites.DataBaseModels;
using BusinessEntites.EntityAutoComplete.ReferenceObjects;

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
             List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId)
        {
            _dataAccessUsers.User_LogUserTripInformation(travelModeId,
                listGetOrderOfAttractionVisit, countryId, userTable_UpdatedBreaks,
                 userTripId);
        }

        public List<UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId)
        {
            return _dataAccessUsers.User_UserTripGetAttractions(userTripId);
        }

        public List<GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId,int userId)
        {
            return _dataAccessUsers.User_GetUserStoredAttractinInfo(userTripId,userId);
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
            int countryId, List<Coordinate> coodinate, int attractionTravelStepsId)
        {
            return _dataAccessUsers.User_GetNearestRestaruents(attractionsId, travelModeId, countryId,coodinate,attractionTravelStepsId);
        }

        public void User_UserTrip_Update(UserTourInformation userTourInformation)
        {
            _dataAccessUsers.User_UserTrip_Update(userTourInformation);
        }

        public void User_UserRequestedAttraction(int userTripId, string address, int countryId,int isSource, string startDate, string googleSearchText, int breakType, string breakDate, string startTime)
        {
            _dataAccessUsers.User_UserRequestedAttraction(userTripId, address, countryId, isSource, startDate,googleSearchText,breakType,breakDate, startTime);
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

        public void User_AddInterestedAttractionList(int userTripId, int attractionId)
        {
            _dataAccessUsers.User_AddInterestedAttractionList(userTripId,attractionId);
        }

        public void User_DeleteNotInterestedAttractionList(int userTripId, int attractionId)
        {
            _dataAccessUsers.User_DeleteNotInterestedAttractionList(userTripId,attractionId);
        }

        public List<User_GetDirectionsSteps> User_GetDirectionsSteps(int countryId, int attractionTravelTimeDistanceId, string dateAndTime)
        {

            var result = _dataAccessUsers.User_GetDirectionsSteps(countryId, attractionTravelTimeDistanceId, dateAndTime);

            List<User_GetDirectionsSteps> returnResult = new List<User_GetDirectionsSteps>();

            User_GetDirectionsSteps getDirectionsSteps = new User_GetDirectionsSteps();

            DateTime startDateTime = new DateTime();
            int distance = 0;

            startDateTime = Convert.ToDateTime(dateAndTime);



            var country = _dataAccessCountry.Admin_GetCountry().Where(x => x.CountryId == countryId).ToList().FirstOrDefault();
            TimeSpan span;
            foreach (var steps in result)
            {
                try
                {
                    getDirectionsSteps = new User_GetDirectionsSteps();
                    getDirectionsSteps = steps;
                    getDirectionsSteps.StartDateTime = startDateTime.ToString("yy-MMM-dd hh:mm") + " hours";
                    getDirectionsSteps.EndDateTime = startDateTime.AddSeconds(steps.Duration_Value)
                                                         .ToString("yy-MMM-dd hh:mm") + " hours";

                    span = (startDateTime.AddSeconds(steps.Duration_Value) - Convert.ToDateTime(dateAndTime));
                    getDirectionsSteps.DistanceCoveredTime = String.Format(
                        "{0} days, {1} hours, {2} minutes",
                        span.Days, span.Hours, span.Minutes);
                    getDirectionsSteps.DistanceCovered =
                        $"{((steps.Distance_Value + distance) * (string.IsNullOrEmpty(country.MetersIn.ToString()) ? 1 : country.MetersIn)):0.00}"
                            .ToString() + " " +
                        country.DistanceMeasure;
                    startDateTime = startDateTime.AddSeconds(steps.Duration_Value);
                    distance = steps.Distance_Value + distance;
                    returnResult.Add(getDirectionsSteps);
                }
                catch (Exception e)
                {


                }

            }

            return returnResult;
        }

        public List<GetOrderOfAttractionVisit> User_GetAttractionTravelStepsNearAttractionInfo(
            int attractionTravelStepsId, int countryId)
        {
            try
            {
                var result =
                    _dataAccessUsers
                        .User_GetAttractionTravelStepsNearAttractionInfo(attractionTravelStepsId, countryId);
                result.Where(y => Convert.ToInt32(y.TravelTime) > 0).ToList().ForEach(x => x.TravelTimeHours =
                    TimeSpan.FromSeconds(Convert.ToInt32(x.TravelTime)).ToString("hh") + ":" +
                    TimeSpan.FromSeconds(Convert.ToInt32(x.TravelTime)).ToString("mm") + " hours");
                return result;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<GetOrderOfAttractionVisit> User_GetAttractionsNextAttractions(int attractionsId, int countryId)
        {
            var result = _dataAccessUsers.User_GetAttractionsNextAttractions(attractionsId, countryId);
            result.Where(y => Convert.ToInt32(y.TravelTime) > 0).ToList().ForEach(x => x.TravelTimeHours =
                TimeSpan.FromSeconds(Convert.ToInt32(x.TravelTime)).ToString("hh") + ":" +
                TimeSpan.FromSeconds(Convert.ToInt32(x.TravelTime)).ToString("mm") + " hours");
            return result;
        }

        public List<AttractionXCategory> User_GetAttractionXCategory(List<userTable_OnlyId> attractionsId,
            int countryId)
        {
            return _dataAccessUsers.User_GetAttractionXCategory(attractionsId, countryId);
        }

        public void User_UpdateBreakInformation(List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId)
        {
            throw new NotImplementedException();
        }

        public List<EntityPredictions> User_AutoComplete(string address, int countryId)
        {
            return _dataAccessUsers.User_AutoComplete(address, countryId);
        }
    }
}
