using BusinessEntites;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Models.OpenTime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class OpenTimeController : BaseController
    {
        PlanGoGoAdmin.Repository.Interface.IGetListValues _IGetListValues;
        PlanGoGoAdmin.Repository.Interface.IAttractionsActiveStatus _IAttractionsActiveStatus;

        PlanGoGoAdmin.Repository.Interface.IMasterWeek _IMasterWeek;

        public OpenTimeController(PlanGoGoAdmin.Repository.Interface.IGetListValues getListValues, PlanGoGoAdmin.Repository.Interface.IAttractionsActiveStatus attractionsActiveStatus, PlanGoGoAdmin.Repository.Interface.IMasterWeek masterWeek)
        {
            _IGetListValues = getListValues;
            _IAttractionsActiveStatus = attractionsActiveStatus;
            _IMasterWeek = masterWeek;
        }

        public JsonResult GetAttractionOpenTime(int AttractionId)
        {
            List<GetAttractionOpenTime> getResult;
            
                getResult = _IGetListValues.GetAttractionOpenTime(AttractionId);
            
            if (getResult.Count() > 0)
            {
                var jsonResults = Json(getResult, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<GetAttractionOpenTime>(), JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ManageOpenTime()
        {
            return View();
        }

        public ActionResult UpdateOpenTime(int AttractionsActiveStatusId,int AttractionId)
        {
            ModelOpenTime model = new ModelOpenTime();
            model.listMasterWeek = _IMasterWeek.Admin_MasterWeekGet();

            if (AttractionsActiveStatusId>0)
            {
                GetAttractionOpenTime _result = _IAttractionsActiveStatus.Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId(AttractionsActiveStatusId);
                model.AttractionsActiveStatusId = _result.AttractionsActiveStatusId;
                model.AttractionsId = _result.AttractionsId;
                model.CloseTime = _result.CloseTime;
                model.OpenTime = _result.OpenTime;
                model.WeekName = _result.WeekName;
                model.MasterWeekId = _result.MasterWeekId;
            }

            return View(model);
        }
    }
}