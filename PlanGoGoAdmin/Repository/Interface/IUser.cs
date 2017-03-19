using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites.Admin;
using BusinessEntites;

namespace PlanGoGoAdmin.Repository.Interface
{
    public interface IUser
    {
        BusinessEntites.Admin.AdminUser CheckUser(string userName, string password);

        List<Admin_GetUser> Admin_GetUser();

        void Admin_UpdateUser(string userName, string password, string CreatedBy, int AdminUserId);

        List<Admin_GetUser> Admin_CheckUserExist(string userName, int AdminUserId);

        Admin_GetUser Admin_GetUserOnId(int AdminUserId);
    }
}