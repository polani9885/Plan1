using BusinessEntites.Users;
using Newtonsoft.Json;
using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace PlanGoGo.Helper
{
    public class BaseControler: Controller
    {
        private string _cookieName = "planGoGo";

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


        public void LogOut()
        {
            FormsAuthentication.SignOut();
        }
    }
}