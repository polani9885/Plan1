using BusinessEntites;
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

namespace PlanGoGoAdmin.Controllers
{
    public class UserController : BaseController
    {
        PlanGoGoAdmin.Repository.Interface.IUser _IUser;
        public UserController(PlanGoGoAdmin.Repository.Interface.IUser User)
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
                CustomPrincipalSerializeModel serializeModel = new CustomPrincipalSerializeModel();
                serializeModel.Id = _adminUser.AdminUserId;
                serializeModel.UserName = _adminUser.UserName;

                JavaScriptSerializer serializer = new JavaScriptSerializer();

                string userData = serializer.Serialize(serializeModel);

                FormsAuthenticationTicket authTicket = new FormsAuthenticationTicket(
             1,
             modelLogin.UserName,
             DateTime.Now,
             DateTime.Now.AddMinutes(15),
             false,
             userData);

                string encTicket = FormsAuthentication.Encrypt(authTicket);
                HttpCookie faCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encTicket);
                Response.Cookies.Add(faCookie);

                Response.Redirect("/User/ManageUser");

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
            if (getResult.Count() > 0)
            {
                var jsonResults = Json(getResult, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<Admin_GetUser>(), JsonRequestBehavior.AllowGet);
            }
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
                _IUser.Admin_UpdateUser(model.UserName, model.Password, CurrentUser.UserName, model.AdminUserId);
                Response.Redirect("/User/ManageUser");
            }
            return View(model);
        }
    }
}