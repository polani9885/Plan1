﻿using CommonFunctions;
using PlanGoGoAdmin.Helper.Principal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Helper
{
    public class BaseController : Controller
    {
        public readonly JsonReturn jsonReturn = new JsonReturn();
        public CustomPrincipal CurrentUser
        {
            get { return (HttpContext.Application["LoggedInformation"] as CustomPrincipal); }
        }
    }
}