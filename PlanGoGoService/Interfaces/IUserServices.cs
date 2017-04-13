using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IUserServices
    {
        [OperationContract]
        void User_DeleteUserAttractions(int userAttractionId);

        [OperationContract]
        List<UserAttractionEntity> User_GetUserAttractionSaved(int userId);

        [OperationContract]
        UserEntity User_GetUserInformation(string userName, string password);

        [OperationContract]
        void User_InsertingUserInfo(UserEntity userEntity);

        [OperationContract]
        void User_UserAttractionUpdate(UserAttractionEntity userAttractionEntity);

        [OperationContract]
        bool User_UserExistChecking(string userName);
    }
}
