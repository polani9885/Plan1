
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Users;
using Dapper;
using HelperFunctions;
using BusinessEntites;
using Interfaces;
using BusinessEntites.JsonParameters;

namespace DataAccessLayer.User
{
    public class UserDAL : IUser, IDisposable
    {
        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public void User_DeleteUserAttractions(int userAttractionId)
        {
            try
            {
                SqlHelper.QuerySP("User_DeleteUserAttractions",
                    new
                    {
                        userAttractionId = userAttractionId
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<UserAttractionEntity> User_GetUserAttractionSaved(int userId)
        {
            throw new NotImplementedException();
        }

        public UserEntity User_GetUserInformation(string userName, string password)
        {
            try
            {
                List<UserEntity> _returnResult = SqlHelper.QuerySP<UserEntity>("User_GetUserInformation",
                    new
                    {
                        UserName = userName,
                        Password = password
                    }).ToList();
                return _returnResult.FirstOrDefault();
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
                SqlHelper.QuerySP("User_InsertingUserInfo",
                    new
                    {
                        UserId = userEntity.UserId,
                        UserName = userEntity.UserName,
                        Email = userEntity.Email,
                        Password = userEntity.Password,
                        GooglePlusId = userEntity.GooglePlusId,
                        FaceBookId = userEntity.FaceBookId,
                        MasterCountryId = userEntity.MasterCountryId,
                        MasterStateId = userEntity.MasterStateId,
                        MasterCityId = userEntity.MasterCityId,
                        AddressOne = userEntity.AddressOne,
                        AddressTwo = userEntity.AddressTwo,
                        ZipCode = userEntity.ZipCode,
                        PhoneNumber = userEntity.PhoneNumber,
                        ModifiedBy = userEntity.ModifiedBy
                    });
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
                SqlHelper.QuerySP("User_UserAttractionUpdate",
                    new
                    {
                        UserAttractionId = userAttractionEntity.UserAttractionId,
                        UserId = userAttractionEntity.UserId,
                        TourName = userAttractionEntity.TourName,
                        TotalExpenditure = userAttractionEntity.TotalExpenditure,
                        TotalDistance = userAttractionEntity.TotalDistance,
                        NoOfHours = userAttractionEntity.NoOfHours,
                        NoOfNights = userAttractionEntity.NoOfNights,
                        CreatedBy = userAttractionEntity.CreatedBy,
                        NoOfLunchSlots = userAttractionEntity.NoOfLunchSlots,
                        NoOfBreakFeastSlots = userAttractionEntity.NoOfBreakFeastSlots,
                        NoOfDinnerSlots = userAttractionEntity.NoOfDinnerSlots,
                        NoOfHotelsVisited = userAttractionEntity.NoOfHotelsVisited,
                        TravelDate = userAttractionEntity.TravelDate,
                        StartLocationId = userAttractionEntity.StartLocationId,
                        EndLocationId = userAttractionEntity.EndLocationId,
                        AttractionInformation = DataTableFun.ToDataTable<userTable_OrderAttraction>(userAttractionEntity.userTable_OrderAttraction)

                    });
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
                List<UserEntity> _returnResult = SqlHelper.QuerySP<UserEntity>("User_UserExistChecking",
                    new
                    {
                        UserName = userName
                    }).ToList();
                return _returnResult.Count > 0 ? false : true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public UserTourInformation User_AddUpdateTourName(string tripName, int userTripId, int userId)
        {
            try
            {
                List<UserTourInformation> _returnResult = SqlHelper.QuerySP<UserTourInformation>("User_AddUpdateTourName",
                    new
                    {
                        tripName = tripName,
                        UserTripId = userTripId,
                        UserId = userId
                    }).ToList();

                return _returnResult.FirstOrDefault();
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
                List<UserTourInformation> _returnResult = SqlHelper.QuerySP<UserTourInformation>("User_GetTourInformation",
                    new
                    {
                        UserId = userId
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void User_InsertUpdateTripCities(int userTripId, int countryId, List<CityVisitList> cityVisitList)
        {
            try
            {
                SqlHelper.QuerySP<public_FilterAttractions>("User_InsertUpdateTripCities",
                    new
                    {
                        CountryId = countryId,
                        UserTripId = userTripId,
                        CityVisitList = CommonObjects.Convert.ToDataTable<CityVisitList>(cityVisitList)
                    }).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<public_GetCityList> User_GetCityList(int userTripId)
        {
            try
            {
                List<public_GetCityList> _public_GetCityList = SqlHelper.QuerySP<public_GetCityList>("User_GetCityList",new
                {
                    UserTripId = userTripId,
                }).ToList();
                return _public_GetCityList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        

        public void User_InsertCategoryInformation(int userTripId, List<userTable_Category> category)
        {
            try
            {
                SqlHelper.QuerySP("User_InsertCategoryInformation", new
                {
                    UserTripId = userTripId,
                    Category = category
                });
                
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        public void User_LogUserTripInformation(int travelModeId,
            int sourceAttractionID, int destinationAttractionID, List<userTable_OnlyId> attractionID, string startDate,
            string startTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder,int userTripId)
        {
            try
            {
                SqlHelper
                    .QuerySP("USER_UserTripInformation",
                        new
                        {
                            TravelModeId = travelModeId,
                            SourceAttractionID = sourceAttractionID,
                            DestinationAttractionID = destinationAttractionID,
                            AttractionID = CommonObjects.Convert.ToDataTable<userTable_OnlyId>(attractionID),
                            StartDate = startDate == string.Empty ? DateTime.Now.ToString() : startDate,
                            UserBreakTime =
                            CommonObjects.Convert.ToDataTable<UserTable_UpdatedBreaks>(userTable_UpdatedBreaks),
                            AttractionReqOrder =
                            CommonObjects.Convert.ToDataTable<UserTable_AttractionRequestOrder>(
                                userTable_AttractionRequestOrder),
                            //UpdatedOrderAttraction = CommonObjects.Convert.ToDataTable<GetOrderOfAttractionVisit>(listGetOrderOfAttractionVisit),
                            UserTripId = userTripId,
                            CountryId = @countryId,
                            AttractionOrder = CommonObjects.Convert.ToDataTable<GetOrderOfAttractionVisit>(listGetOrderOfAttractionVisit),
                        });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<UserTable_AttractionRequestOrder> User_UserTripGetAttractions(int userTripId)
        {
            try
            {
                var result = SqlHelper
                    .QuerySP<UserTable_AttractionRequestOrder>("User_UserTripGetAttractions",
                        new
                        {
                            UserTripId = userTripId
                        }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId)
        {
            try
            {
                var result = SqlHelper
                    .QuerySP<GetOrderOfAttractionVisit>("User_GetUserStoredAttractinInfo",
                        new
                        {
                            UserTripId = userTripId
                        }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<UserTable_UpdatedBreaksTemp> User_RequestedBreaks(int userTripId)
        {
            try
            {
                var result = SqlHelper
                    .QuerySP<UserTable_UpdatedBreaksTemp>("User_RequestedBreaks",
                        new
                        {
                            UserTripId = userTripId
                        }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<UserTripBuildStatus> User_UserTripBuildStatus(int userTripId)
        {
            try
            {
                var result = SqlHelper
                    .QuerySP<UserTripBuildStatus>("User_UserTripBuildStatus",
                        new
                        {
                            UserTripId = userTripId
                        }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                var result =  SqlHelper.QuerySP<public_FilterAttractions>("User_GetNearestRestaruents",
                    new
                    {
                        AttractionsId = attractionsId,
                        TravelModeId = travelModeId
                    }).ToList();


                if (result.Count == 0)
                {
                    User_UpdateFindNearestRestarent(attractionsId, countryId);
                }
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void User_UpdateFindNearestRestarent(int attractionsId, int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                var result = SqlHelper.QuerySP("User_UpdateFindNearestRestarent",
                    new
                    {
                        AttractionsId = attractionsId,
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
