
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
using BusinessEntites.DataBaseModels;
using BusinessEntites.EntityAutoComplete.ReferenceObjects;

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

        public UserTourInformation User_AddUpdateTourName(string tripName, int userTripId, int userId, int countryId)
        {
            try
            {
                List<UserTourInformation> _returnResult = SqlHelper.QuerySP<UserTourInformation>("User_AddUpdateTourName",
                    new
                    {
                        tripName = tripName,
                        UserTripId = userTripId,
                        UserId = userId,
                        CountryId = countryId
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
            List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,int userTripId)
        {
            try
            {
                SqlHelper
                    .QuerySP("USER_UserTripInformation",
                        new
                        {
                            TravelModeId = travelModeId,
                            UserBreakTime =
                            CommonObjects.Convert.ToDataTable<UserTable_UpdatedBreaks>(userTable_UpdatedBreaks),
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

        public void User_UpdateBreakInformation(
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId)
        {
            try
            {
                SqlHelper
                    .QuerySP("User_UpdateBreakInformation",
                        new
                        {
                            UserBreakTime =
                            CommonObjects.Convert.ToDataTable<UserTable_UpdatedBreaks>(userTable_UpdatedBreaks),
                            UserTripId = userTripId
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

        public List<GetOrderOfAttractionVisit> User_GetUserStoredAttractinInfo(int userTripId,int userId)
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

        public List<public_FilterAttractions> User_GetNearestRestaruents(int attractionsId, int travelModeId, int countryId, List<Coordinate> coodinate,int attractionTravelStepsId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                var result =  SqlHelper.QuerySP<public_FilterAttractions>("User_GetNearestRestaruents",
                    new
                    {
                        AttractionsId = attractionsId,
                        TravelModeId = travelModeId,
                        sourceBeginLongitude = coodinate.Where(x=>x.Least==true).Select(y=>y.Longitude).FirstOrDefault(),
                        sourceBeginLatitude = coodinate.Where(x => x.Least == true).Select(y => y.Latitude).FirstOrDefault(),
                        sourceEndLongitude = coodinate.Where(x => x.Least == false).Select(y => y.Longitude).FirstOrDefault(),
                        sourceEndLatitude = coodinate.Where(x => x.Least == false).Select(y => y.Latitude).FirstOrDefault(),
                        attractionTravelStepsId = attractionTravelStepsId
                    }).ToList();
               
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public void User_UserTrip_Update(UserTourInformation userTourInformation)
        {
            try
            {
                var result = SqlHelper.QuerySP("User_UserTrip_Update",
                    new
                    {
                        UserTripId = userTourInformation.UserTripId
                        ,CountryId = userTourInformation.CountryId
                        ,StartDate = userTourInformation.StartDate
                        ,EndDate = userTourInformation.EndDate
                        ,TravelModeId = userTourInformation.TravelModeId
                        ,SourceAttractionId = userTourInformation.SourceAttractionId
                        ,DestinationAttractionId = userTourInformation.DestinationAttractionId
                        ,NoOfPersons = userTourInformation.NoOfPersons
                        ,NoOfCars = userTourInformation.NoOfCars
                        ,CarMileage = userTourInformation.CarMileage
                        ,FuelPrice = userTourInformation.FuelPrice
                        ,DrivingBreak = userTourInformation.DrivingBreak
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void User_UserRequestedAttraction(int userTripId, string address, int countryId,int isSource, string startDate,string googleSearchText,int breakType,string breakDate,string startTime)
        {
            try
            {
                SqlHelper.countryId = countryId;
                var result = SqlHelper.QuerySP("User_UserRequestedAttraction",
                    new
                    {
                        UserTripId = userTripId,
                        Address= address,
                        IsSource = isSource,
                        StartDate = (string.IsNullOrEmpty(startDate) ? DateTime.Now : Convert.ToDateTime(startDate)),
                        GoogleSearchText = googleSearchText,
                        BreakType = breakType,
                        breakDate = (string.IsNullOrEmpty(breakDate.Trim()) ? DateTime.Now : Convert.ToDateTime(breakDate)),
                        startTime = (string.IsNullOrEmpty(startTime) ? DateTime.Parse("00:00:00") : DateTime.Parse(startTime))
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public UserTourInformation User_GetTourInformationOnTripId(int userTripId,int userId)
        {
            try
            {
                SqlHelper.countryId = User_GetTourInformation(userId).Where(x=>x.UserTripId == userTripId).Select(y=>y.CountryId).FirstOrDefault();
                UserTourInformation _returnResult = SqlHelper.QuerySP<UserTourInformation>("User_GetTourInformationOnTripId",
                    new
                    {
                        UserTripId = userTripId
                    }).ToList().FirstOrDefault();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<UserTable_AttractionRequestOrder> User_GetOrderOfRequest(int userTripId, int countryId)
        {
            try
            {
                
                List<UserTable_AttractionRequestOrder> _returnResult = SqlHelper
                    .QuerySP<UserTable_AttractionRequestOrder>("User_GetOrderOfRequest",
                        new
                        {
                            UserTripId = userTripId
                        }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void User_InsertUserRequested(int userTripId,List<UserTable_AttractionRequestOrder> attractionRequestOrder)
        {
            try
            {

                SqlHelper
                    .QuerySP("User_InsertUserRequested",
                        new
                        {
                            UserTripId = userTripId,
                            AttractionRequestOrder = CommonObjects.Convert.ToDataTable<UserTable_AttractionRequestOrder>(attractionRequestOrder)

                        });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetOrderOfAttractionVisit> User_CheckTheCalculationPartIsDone(int userTripId)
        {
            try
            {

                var result = SqlHelper
                    .QuerySP<GetOrderOfAttractionVisit>("User_CheckTheCalculationPartIsDone",
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

        public void User_AddInterestedAttractionList(int userTripId, int attractionId)
        {
            try
            {

                SqlHelper
                    .QuerySP("User_AddInterestedAttractionList",
                        new
                        {
                            UserTripId = userTripId,
                            AttractionId = attractionId

                        });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void User_DeleteNotInterestedAttractionList(int userTripId, int attractionId)
        {
            try
            {

                SqlHelper
                    .QuerySP("User_DeleteNotInterestedAttractionList",
                        new
                        {
                            UserTripId = userTripId,
                            AttractionId = attractionId

                        });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<User_GetDirectionsSteps> User_GetDirectionsSteps(int countryId, int attractionTravelTimeDistanceId,string dateAndTime)
        {
            try
            {
                SqlHelper.countryId = countryId;
                var result = SqlHelper
                    .QuerySP<User_GetDirectionsSteps>("User_GetDirectionsSteps",
                        new
                        {
                            AttractionTravelTimeDistanceId = attractionTravelTimeDistanceId

                        }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetOrderOfAttractionVisit> User_GetAttractionTravelStepsNearAttractionInfo(int attractionTravelStepsId,int countryId)
        {
            try
            {

                SqlHelper.countryId = countryId;

                List<GetOrderOfAttractionVisit> result = SqlHelper
                    .QuerySP<GetOrderOfAttractionVisit>("User_GetAttractionTravelStepsNearAttractionInfo",
                        new
                        {
                            AttractionTravelStepsId = attractionTravelStepsId
                        }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetOrderOfAttractionVisit> User_GetAttractionsNextAttractions(int attractionsId, int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;

                List<GetOrderOfAttractionVisit> result = SqlHelper
                    .QuerySP<GetOrderOfAttractionVisit>("User_GetAttractionsNextAttractions",
                        new
                        {
                            AttractionsId = attractionsId
                        }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public List<AttractionXCategory> User_GetAttractionXCategory(List<userTable_OnlyId> attractionsId, int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;

                List<AttractionXCategory> result = SqlHelper
                    .QuerySP<AttractionXCategory>("User_GetAttractionXCategory",
                        new
                        {
                            attractionId = CommonObjects.Convert.ToDataTable<userTable_OnlyId>(attractionsId)
                        }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<EntityPredictions> User_AutoComplete(string address, int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;

                List<EntityPredictions> result = SqlHelper
                    .QuerySP<EntityPredictions>("User_AutoComplete",
                        new
                        {
                            address = address
                        }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
