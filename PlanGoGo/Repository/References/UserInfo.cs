using PlanGoGo.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites;
using BusinessEntites.Admin;
using BusinessEntites.Users;

namespace PlanGoGo.Repository.References
{
    public class UserInfo : IUserInfo
    {
        PlanGoGo.UsersService.IUserServices _userService = new PlanGoGo.UsersService.UserServicesClient();

        public void User_DeleteUserAttractions(int userAttractionId)
        {
            try
            {
                _userService.User_DeleteUserAttractions(userAttractionId);
            }
            catch(Exception ex)
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
    }
}