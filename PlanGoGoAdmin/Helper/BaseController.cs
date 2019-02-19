using BusinessEntites.Users;
using CommonFunctions;
using Newtonsoft.Json;
using PlanGoGoAdmin.Helper.Principal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace PlanGoGoAdmin.Helper
{
    public class BaseController : Controller
    {
        private string _cookieName = "planGoGoAdmin";
        public readonly JsonReturn jsonReturn = new JsonReturn();
        public static UserEntity userEntity { get; set; }
       
        public void CreateCookie()
        {
            FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(1,
                _cookieName,
                DateTime.Now,
                DateTime.Now.AddDays(30),
                true,
                JsonConvert.SerializeObject(userEntity),
                FormsAuthentication.FormsCookiePath);
            // Encrypt the ticket.
            string encTicket = FormsAuthentication.Encrypt(ticket);
            // Create the cookie.
            Response.Cookies.Add(new HttpCookie(FormsAuthentication.FormsCookieName, encTicket));
        }

        public void UpdateCookieInformation()
        {
            try
            {
                HttpCookie cookie = Request.Cookies[FormsAuthentication.FormsCookieName];
                var ticket = FormsAuthentication.Decrypt(cookie.Value);

                FormsAuthenticationTicket newTicket = new FormsAuthenticationTicket(ticket.Version,
                    ticket.Name,
                    ticket.IssueDate,
                    ticket.Expiration,
                    true,
                    JsonConvert.SerializeObject(userEntity),
                    ticket.CookiePath);
                // Encrypt the ticket.
                string encTicket = FormsAuthentication.Encrypt(newTicket);

                cookie.Value = encTicket;

                HttpContext.Response.Cookies.Set(cookie);
            }
            catch (Exception e)
            {
                throw e;
            }

        }


        public void GetCookieInformation()
        {
            try
            {
                HttpCookie cookie = Request.Cookies[FormsAuthentication.FormsCookieName];
                var ticket = FormsAuthentication.Decrypt(cookie.Value);
                userEntity = JsonConvert.DeserializeObject<UserEntity>(ticket.UserData);
            }
            catch (Exception e)
            {
                throw e;
            }

        }


        public bool IsUserAuthenticated()
        {
            HttpCookie authCookie = Request.Cookies[FormsAuthentication.FormsCookieName];
            if (authCookie != null)
            {
                // Get the forms authentication ticket.
                FormsAuthenticationTicket authTicket = FormsAuthentication.Decrypt(authCookie.Value);
                if (authTicket != null)
                {
                    userEntity = JsonConvert.DeserializeObject<UserEntity>(authTicket.UserData);
                    return true;
                }
                return false;
            }
            return false;
        }
    }
}