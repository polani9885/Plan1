using DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Users;
using Dapper;
using HelperFunctions;
using BusinessEntites;

namespace DataAccessLayer.User
{
    public class UserDAL : IUserDAL, IDisposable
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

        public List<UserEntity> User_GetUserInformation(string userName, string password)
        {
            throw new NotImplementedException();
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
    }
}
