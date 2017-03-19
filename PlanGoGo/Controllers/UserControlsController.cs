using BusinessEntites;
using PlanGoGo.Models.UserControls;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGo.Controllers
{
    public class UserControlsController : Controller
    {
        // GET: UserControls
        public ActionResult TourInformation(List<GetOrderOfAttractionVisit> public_FilterAttractions)
        {
            AttractionsInformation model = new AttractionsInformation()
            {
                attractionsList = public_FilterAttractions
            };
            
            return View(model);
        }
    }
}