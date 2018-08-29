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
    public class MissingDistanceAttractionsRecordsController : BaseController
    {

        IMissingDistanceAttractionsRecords _IMissingDistanceAttractionsRecords;
        public MissingDistanceAttractionsRecordsController(IMissingDistanceAttractionsRecords missingDistanceAttractionsRecords)
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
            return base.jsonReturn.JsonResult<MissingDistanceAttractionsRecordsDTO>(getResult);
            
        }

        public JsonResult MissingDistanceAttractionsRecordsXAttractionsGet(int MissingDistanceAttractionsRecordsID)
        {
            List<MissingDistanceAttractionsRecordsDTO> getResult = _IMissingDistanceAttractionsRecords.Admin_MissingDistanceAttractionsRecordsXAttractionsGet(MissingDistanceAttractionsRecordsID);
            return base.jsonReturn.JsonResult<MissingDistanceAttractionsRecordsDTO>(getResult);
            
        }


    }
}