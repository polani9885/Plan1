using PlanGoGoAdmin.AdminUser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using BusinessEntites.Admin;
using BusinessEntites;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class User: PlanGoGoAdmin.Repository.Interface.IUser
    {
        PlanGoGoAdmin.AdminUser.UserClient _client = new PlanGoGoAdmin.AdminUser.UserClient();

        public BusinessEntites.Admin.AdminUser CheckUser(string userName, string password)
        {
            try
            {
                return _client.CheckUser(userName, password);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public List<Admin_GetUser> Admin_GetUser()
        {
            try
            {
                return _client.Admin_GetUser();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public void Admin_UpdateUser(string userName, string password, string CreatedBy, int AdminUserId)
        {
            try
            {
                _client.Admin_UpdateUser(userName,password,CreatedBy,AdminUserId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Admin_GetUser> Admin_CheckUserExist(string userName, int AdminUserId)
        {
            try
            {
                return _client.Admin_CheckUserExist(userName, AdminUserId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Admin_GetUser Admin_GetUserOnId(int AdminUserId)
        {
            try
            {
                return _client.Admin_GetUserOnId(AdminUserId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}