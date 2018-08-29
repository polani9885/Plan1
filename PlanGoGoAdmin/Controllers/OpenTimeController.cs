using BusinessEntites;
using Interfaces;
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
        IGetListValues _IGetListValues;
        IAttractionsActiveStatus _IAttractionsActiveStatus;

        IMasterWeek _IMasterWeek;

        public OpenTimeController(IGetListValues getListValues, IAttractionsActiveStatus attractionsActiveStatus, IMasterWeek masterWeek)
        {
            _IGetListValues = getListValues;
            _IAttractionsActiveStatus = attractionsActiveStatus;
            _IMasterWeek = masterWeek;
        }

        public JsonResult GetAttractionOpenTime(int AttractionId)
        {
            List<GetAttractionOpenTime> getResult;
            
                getResult = _IGetListValues.GetAttractionOpenTime(AttractionId);
            return base.jsonReturn.JsonResult<GetAttractionOpenTime>(getResult);
            
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