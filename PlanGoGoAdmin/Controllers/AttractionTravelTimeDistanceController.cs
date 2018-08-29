using BusinessEntites.Admin;
using Interfaces;
using PlanGoGoAdmin.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class AttractionTravelTimeDistanceController : BaseController
    {
        IAttractionTravelTimeDistance _IAttractionTravelTimeDistance;

        public AttractionTravelTimeDistanceController(IAttractionTravelTimeDistance attractionTravelTimeDistance)
        {
            _IAttractionTravelTimeDistance = attractionTravelTimeDistance;
        }

        public JsonResult AttractionTravelTimeDistanceGet(int attractionId)
        {
            List<AttractionTravelTimeDistanceDTO> getResult = _IAttractionTravelTimeDistance.Admin_AttractionTravelTimeDistanceGet(attractionId);

            return base.jsonReturn.JsonResult<AttractionTravelTimeDistanceDTO>(getResult);
            
        }

        public ActionResult ManageAttractionTravelTimeDistance()
        {
            return View();
        }
    }
}