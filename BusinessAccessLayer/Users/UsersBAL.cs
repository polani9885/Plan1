using BusinessAccessLayer.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Users;

namespace BusinessAccessLayer.Users
{
    public class UsersBAL : BaseBusinessClass, IDisposable, IUserBAL
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
    }
}
