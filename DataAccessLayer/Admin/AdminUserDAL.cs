using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Admin;
using Dapper;
using BusinessEntites;

namespace DataAccessLayer
{
    public class AdminUserDAL : IUser,IDisposable
    {
        public AdminUser CheckUser(string userName, string password)
        {
            try
            {
                AdminUser _returnResult = SqlHelper.QuerySP<AdminUser>("Admin_CheckUser",
                    new
                    {
                        UserName = userName,
                        Password = password 
                    }).ToList().FirstOrDefault();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// get all the admin user list
        /// </summary>
        /// <returns></returns>
        public List<Admin_GetUser> Admin_GetUser()
        {
            try
            {
                List<Admin_GetUser> _returnResult = SqlHelper.QuerySP<Admin_GetUser>("Admin_GetUser").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Checking the user is existed or not
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="AdminUserId"></param>
        /// <returns></returns>
        public List<Admin_GetUser> Admin_CheckUserExist(string userName, int AdminUserId)
        {
            try
            {
                List<Admin_GetUser> _returnResult = SqlHelper.QuerySP<Admin_GetUser>("Admin_CheckUserExist",
                    new
                    {
                        UserName = userName,
                        AdminUserId = AdminUserId
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Updating the user information
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <param name="CreatedBy"></param>
        /// <param name="AdminUserId"></param>
        public void Admin_UpdateUser(string userName, string password, string CreatedBy, int AdminUserId)
        {
            try
            {
                SqlHelper.QuerySP("Admin_UpdateUser",
                    new
                    {
                        UserName = userName,
                        Password = password,
                        CreatedBy = CreatedBy,
                        AdminUserId = AdminUserId
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Getting the user information based on the user id
        /// </summary>
        /// <param name="AdminUserId">Admin User auto increment number of table</param>
        /// <returns></returns>
        public Admin_GetUser Admin_GetUserOnId(int AdminUserId)
        {
            try
            {
                Admin_GetUser _returnResult = SqlHelper.QuerySP<Admin_GetUser>("Admin_GetUserOnId",
                    new
                    {                       
                        AdminUserId = AdminUserId
                    }).ToList().FirstOrDefault();
                return _returnResult;
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
