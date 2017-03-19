using BusinessEntites;
using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace PlanGoGoService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IUser" in both code and config file together.
    [ServiceContract]
    public interface IUser
    {
        [OperationContract]
        AdminUser CheckUser(string userName, string password);

        [OperationContract]
        List<Admin_GetUser> Admin_GetUser();

        [OperationContract]
        void Admin_UpdateUser(string userName, string password, string CreatedBy, int AdminUserId);

        [OperationContract]
        List<Admin_GetUser> Admin_CheckUserExist(string userName, int AdminUserId);

        [OperationContract]
        Admin_GetUser Admin_GetUserOnId(int AdminUserId);

    }
}
