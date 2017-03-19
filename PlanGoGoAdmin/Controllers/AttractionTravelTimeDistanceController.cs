using BusinessEntites.Admin;
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
        PlanGoGoAdmin.Repository.Interface.IAttractionTravelTimeDistance _IAttractionTravelTimeDistance;

        public AttractionTravelTimeDistanceController(PlanGoGoAdmin.Repository.Interface.IAttractionTravelTimeDistance attractionTravelTimeDistance)
        {
            _IAttractionTravelTimeDistance = attractionTravelTimeDistance;
        }

        public JsonResult AttractionTravelTimeDistanceGet(int attractionId)
        {
            List<AttractionTravelTimeDistanceDTO> getResult = _IAttractionTravelTimeDistance.Admin_AttractionTravelTimeDistanceGet(attractionId);
            if (getResult.Count() > 0)
            {
                var jsonResults = Json(getResult, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<AttractionTravelTimeDistanceDTO>(), JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ManageAttractionTravelTimeDistance()
        {
            return View();
        }
    }
}