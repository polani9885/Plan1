using BusinessEntites;
using Interfaces;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Helper.Principal;
using PlanGoGoAdmin.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.Security;
using BusinessEntites.Users;

namespace PlanGoGoAdmin.Controllers
{
    public class UserController : BaseController
    {
        IAdminUser  _IUser;
        public UserController(IAdminUser User)
        {
            _IUser = User;
        }

        // GET: User
        public ActionResult Login()
        {
            
            ModelLogin modelLogin = new ModelLogin();
            return View(modelLogin);
        }

        [HttpPost]
        public ActionResult Login(ModelLogin modelLogin)
        {
            BusinessEntites.Admin.AdminUser _adminUser = _IUser.CheckUser(modelLogin.UserName, modelLogin.Password);
            if (_adminUser ==null || string.IsNullOrEmpty(_adminUser.UserName))
            {
                modelLogin.ErrorMessage = "Username/Password Is not correct!";
                modelLogin.UserName = string.Empty;
                modelLogin.Password = string.Empty;
            }
            else
            {
                modelLogin.ErrorMessage = "";
                if(userEntity ==null)
                    userEntity = new UserEntity();
                userEntity.UserId = _adminUser.AdminUserId;
                userEntity.UserName = _adminUser.UserName;
                base.CreateCookie();

                return RedirectToAction("ManageUser");

            }
            return View(modelLogin);
        }

        /// <summary>
        /// Getting the admin users
        /// </summary>
        /// <returns></returns>
        public JsonResult Admin_GetUser()
        {
            List<Admin_GetUser> getResult = _IUser.Admin_GetUser();
            return base.jsonReturn.JsonResult<Admin_GetUser>(getResult);
            
        }

        public ActionResult ManageUser()
        {
            return View();
        }

        public ActionResult AddUpdateUser(int adminUserId)
        {
            ModelAddUpdateUser model = new ModelAddUpdateUser();
            if(adminUserId >0)
            {
                Admin_GetUser _adminUser = _IUser.Admin_GetUserOnId(adminUserId);
                model.AdminUserId = _adminUser.AdminUserId;
                model.UserName = _adminUser.UserName;
                model.Password = _adminUser.Password;
            }
            
            
            return View(model);
        }

        [HttpPost]
        public ActionResult AddUpdateUser(ModelAddUpdateUser model)
        {
            if(_IUser.Admin_CheckUserExist(model.UserName,model.AdminUserId).Count>0)
            {
                model.ErrorMessage = "Username already existed";
            }
            else
            {
                _IUser.Admin_UpdateUser(model.UserName, model.Password, userEntity.UserName, model.AdminUserId);
                return RedirectToAction("ManageUser");
            }
            return View(model);
        }
    }
}