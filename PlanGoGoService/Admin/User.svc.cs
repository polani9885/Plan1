using BusinessEntites;
using BusinessEntites.Admin;
using PlanGoGoService.BaseClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace PlanGoGoService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "User" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select User.svc or User.svc.cs at the Solution Explorer and start debugging.
    public class User : BaseReference, IUser
    {
        public AdminUser CheckUser(string userName, string password)
        {
            try
            {
                return _businessUser.CheckUser(userName, password);
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
                return _businessUser.Admin_GetUser();
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
                _businessUser.Admin_UpdateUser(userName,password,CreatedBy,AdminUserId);
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
                return _businessUser.Admin_CheckUserExist(userName, AdminUserId);
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
                return _businessUser.Admin_GetUserOnId(AdminUserId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
