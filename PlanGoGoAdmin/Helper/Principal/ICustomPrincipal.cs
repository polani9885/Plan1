using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;

namespace PlanGoGoAdmin.Helper.Principal
{
    public interface ICustomPrincipal:IPrincipal
    {
        

        int Id { get; set; }
        string UserName { get; set; }

        
    }
}