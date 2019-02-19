using BusinessEntites;
using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IAdminUser
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