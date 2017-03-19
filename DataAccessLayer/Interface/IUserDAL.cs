using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IUserDAL
    {
        void User_DeleteUserAttractions(int userAttractionId);

        List<UserAttractionEntity> User_GetUserAttractionSaved(int userId);

        List<UserEntity> User_GetUserInformation(string userName, string password);

        void User_InsertingUserInfo(UserEntity userEntity);

        void User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity);

        bool User_UserExistChecking(string userName);
    }
}
