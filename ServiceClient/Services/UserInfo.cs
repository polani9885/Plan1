using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Scheduler;
using BusinessEntites.Users;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class UserInfo : IUser
    {
        ServiceClient.UsersService.IUserServices _userService = new ServiceClient.UsersService.UserServicesClient();

        public void User_DeleteUserAttractions(int userAttractionId)
        {
            try
            {
                _userService.User_DeleteUserAttractions(userAttractionId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<UserAttractionEntity> User_GetUserAttractionSaved(int userId)
        {
            try
            {
                return _userService.User_GetUserAttractionSaved(userId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public UserEntity User_GetUserInformation(string userName, string password)
        {
            try
            {
                return _userService.User_GetUserInformation(userName, password);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void User_InsertingUserInfo(UserEntity userEntity)
        {
            try
            {
                _userService.User_InsertingUserInfo(userEntity);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity)
        {
            try
            {
                _userService.User_UserAttractionUpdate(userAttractionEntity);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool User_UserExistChecking(string userName)
        {
            try
            {
                return _userService.User_UserExistChecking(userName);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public UserTourInformation User_AddUpdateTourName(string tourName, int userTripId, int userId)
        {
            try
            {
                return _userService.User_AddUpdateTourName(tourName, userTripId, userId);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<UserTourInformation> User_GetTourInformation(int userId)
        {
            try
            {
                return _userService.User_GetTourInformation(userId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void User_InsertUpdateTripCities(int userTripId, int countryId, List<CityVisitList> cityVisitList)
        {
            _userService.User_InsertUpdateTripCities(userTripId, countryId, cityVisitList);
        }

        public List<public_GetCityList> User_GetCityList(int userTripId)
        {
            return _userService.User_GetCityList(userTripId);
        }

        

        public void User_InsertCategoryInformation(int userTripId, List<userTable_Category> category)
        {
            _userService.User_InsertCategoryInformation(userTripId, category);
        }

        public void User_LogUserTripInformation(int travelModeId,
            int sourceAttractionID, int destinationAttractionID, List<userTable_OnlyId> attractionID, string startDate,
            string startTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder, int userTripId)
        {
            _userService.User_LogUserTripInformation(travelModeId, sourceAttractionID, destinationAttractionID,
                attractionID, startDate, startTime, listGetOrderOfAttractionVisit, countryId, userTable_UpdatedBreaks,
                userTable_AttractionRequestOrder, userTripId);
        }

        public List<UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId)
        {
            return _userService.User_UserTripGetAttractions(userTripId);
        }

        public List<GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId)
        {
            return _userService.User_GetUserStoredAttractinInfo(userTripId);
        }

        public List<UserTable_UpdatedBreaksTemp> User_RequestedBreaks(int userTripId)
        {
            try
            {
                return _userService.User_RequestedBreaks(userTripId);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            
        }

        public List<UserTripBuildStatus> User_UserTripBuildStatus(int userTripId)
        {
            try
            {
                return _userService.User_UserTripBuildStatus(userTripId);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public List<public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId)
        {
            try
            {

                var returnResult = new List<public_FilterAttractions>();

                var result = _userService.User_GetNearestRestaruents(attractionsId, travelModeId, countryId);

                var groupResult = result.GroupBy(x => x.AttractionsId);

                var item = new public_FilterAttractions();

                bool isFirst = false;

                foreach (var _groupValue in groupResult)
                {
                    isFirst = false;
                    foreach (var att in _groupValue)
                    {
                        if(!isFirst)
                        {
                            item = new public_FilterAttractions();
                            item.AttractionsId = att.AttractionsId;
                            item.AttractionName = att.AttractionName;
                            item.AddressOne = att.AddressOne;
                            item.AddressTwo = att.AddressTwo;
                            item.CityId = att.CityId;
                            item.CategoryId = att.CategoryId;
                            item.Longitude = att.Longitude;
                            item.Latitude = att.Latitude;
                            item.PlaceId = att.PlaceId;
                            item.RankId = att.RankId;
                            item.CreatedDate = att.CreatedDate;
                            item.CreatedBy = att.CreatedBy;
                            item.ModifiedDate = att.ModifiedDate;
                            item.ModifiedBy = att.ModifiedBy;
                            item.GoogleSearchText = att.GoogleSearchText;
                            item.RecordIndex = att.RecordIndex;
                            item.GoogleInternational_phone_number = att.GoogleInternational_phone_number;
                            item.GoogleRating = att.GoogleRating;
                            item.PriceLevel = att.PriceLevel;
                            item.TravelTime =
                                TimeSpan.FromSeconds(Convert.ToInt32(att.TravelTime)).Hours + ":" + TimeSpan
                                    .FromSeconds(Convert.ToInt32(att.TravelTime)).Minutes;
                            item.Distance = att.Distance;
                            item.AllCategoriesId = new List<int>();
                            item.AllCategoriesId.Add(att.CategoryId);
                        }
                        item.AllCategoriesId.Add(att.CategoryId);
                        isFirst = true;
                    }
                    returnResult.Add(item);
                }

                return returnResult;
            }
            catch (Exception e)
            {
                
                throw e;
            }
        }




    }
}
