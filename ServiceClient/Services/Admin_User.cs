using BusinessEntites;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class Admin_User : IAdminUser
    {
        ServiceClient.Admin_User.AdminUserClient _client = new ServiceClient.Admin_User.AdminUserClient();

        public BusinessEntites.Admin.AdminUser CheckUser(string userName, string password)
        {
            try
            {
                return _client.CheckUser(userName, password);
            }
            catch (Exception ex)
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
                _client.Admin_UpdateUser(userName, password, CreatedBy, AdminUserId);
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
