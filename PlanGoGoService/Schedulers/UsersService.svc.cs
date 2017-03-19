using PlanGoGoService.BaseClasses;
using PlanGoGoService.Schedulers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using PlanGoGoService.Interfaces;
using BusinessEntites.Users;

namespace PlanGoGoService.Schedulers
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "UsersService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select UsersService.svc or UsersService.svc.cs at the Solution Explorer and start debugging.
    public class UsersService : BaseReference, IUserServices
    {
        public void User_DeleteUserAttractions(int userAttractionId)
        {
            _businessUserBAL.User_DeleteUserAttractions(userAttractionId);
        }

        public List<UserAttractionEntity> User_GetUserAttractionSaved(int userId)
        {
            return _businessUserBAL.User_GetUserAttractionSaved(userId);
        }

        public List<UserEntity> User_GetUserInformation(string userName, string password)
        {
            return _businessUserBAL.User_GetUserInformation(userName, password);
        }

        public void User_InsertingUserInfo(UserEntity userEntity)
        {
            _businessUserBAL.User_InsertingUserInfo(userEntity);
        }

        public void User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity)
        {
            _businessUserBAL.User_UserAttractionUpdate(userAttractionEntity);
        }

        public bool User_UserExistChecking(string userName)
        {
            return _businessUserBAL.User_UserExistChecking(userName);
        }
    }
}
