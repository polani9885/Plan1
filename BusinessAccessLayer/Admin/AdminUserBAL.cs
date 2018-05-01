using BusinessAccessLayer.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Admin;
using BusinessEntites;
using Interfaces;

namespace BusinessAccessLayer
{
    public class AdminUserBAL : BaseBusinessClass, IAdminUser, IDisposable
    {
        public AdminUser CheckUser(string userName, string password)
        {
            try
            {
                return _dataAccessAdminUser.CheckUser(userName, password);
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
                return _dataAccessAdminUser.Admin_GetUser();
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
                _dataAccessAdminUser.Admin_UpdateUser(userName,password,CreatedBy,AdminUserId);
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
               return _dataAccessAdminUser.Admin_CheckUserExist(userName,AdminUserId);
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
                return _dataAccessAdminUser.Admin_GetUserOnId(AdminUserId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }




        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
