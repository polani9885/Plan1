using BusinessEntites;
using BusinessEntites.Admin;
using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGo.Repository.Interfaces
{
    public interface IUserInfo
    {

        void User_DeleteUserAttractions(int userAttractionId);

        List<UserAttractionEntity> User_GetUserAttractionSaved(int userId);

        UserEntity User_GetUserInformation(string userName, string password);

        void User_InsertingUserInfo(UserEntity userEntity);

        void User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity);

        bool User_UserExistChecking(string userName);
    }
}