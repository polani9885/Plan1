using BusinessEntites.Admin;
using PlanGoGoAdmin.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class MissingDistanceAttractionsRecordsController : BaseController
    {

        PlanGoGoAdmin.Repository.Interface.IMissingDistanceAttractionsRecords _IMissingDistanceAttractionsRecords;
        public MissingDistanceAttractionsRecordsController(PlanGoGoAdmin.Repository.Interface.IMissingDistanceAttractionsRecords missingDistanceAttractionsRecords)
        {
            _IMissingDistanceAttractionsRecords = missingDistanceAttractionsRecords;
        }
        // GET: MissingDistanceAttractionsRecords
        public ActionResult ManageMissingDistanceAttractionsRecords()
        {
            return View();
        }

        public ActionResult MissingDistanceAttractionsRecordsXAttractions()
        {
            return View();
        }

        public JsonResult MissingDistanceAttractionsRecordsGet()
        {
            List<MissingDistanceAttractionsRecordsDTO> getResult = _IMissingDistanceAttractionsRecords.Admin_MissingDistanceAttractionsRecordsGet();
            if (getResult.Count() > 0)
            {
                var jsonResults = Json(getResult, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<MissingDistanceAttractionsRecordsDTO>(), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult MissingDistanceAttractionsRecordsXAttractionsGet(int MissingDistanceAttractionsRecordsID)
        {
            List<MissingDistanceAttractionsRecordsDTO> getResult = _IMissingDistanceAttractionsRecords.Admin_MissingDistanceAttractionsRecordsXAttractionsGet(MissingDistanceAttractionsRecordsID);
            if (getResult.Count() > 0)
            {
                var jsonResults = Json(getResult, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<MissingDistanceAttractionsRecordsDTO>(), JsonRequestBehavior.AllowGet);
            }
        }


    }
}