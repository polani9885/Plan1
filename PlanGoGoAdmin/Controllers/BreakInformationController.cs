using BusinessEntites;
using CommonFunctions;
using Interfaces;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Models.BreakInformation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class BreakInformationController : BaseController
    {
        public readonly JsonReturn jsonReturn = new JsonReturn();
        IGetListValues _IGetListValues;
        private IMasterCategory _IMasterCategory;

        public BreakInformationController(IGetListValues GetListValues, IMasterCategory masterCategory)
        {
            _IGetListValues = GetListValues;
            _IMasterCategory = masterCategory;
        }
        // GET: BreakInformation
        public ActionResult ManageBreakInformation()
        {
            return View();
        }

        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult GetBreakInformation()
        {
            List<BreakInformation> result = _IGetListValues.GetBreakInformation();

            return jsonReturn.JsonResult<BreakInformation>(result);
        }

        public ActionResult UpdateBreakInformation(int breakInformationId)
        {
            ModelBreakInformation model = new ModelBreakInformation();
            if (breakInformationId > 0)
            {
                var result = _IGetListValues.GetBreakInformation().FirstOrDefault(x => x.BreakInformationId == breakInformationId);
                model.BreakInformationId = result.BreakInformationId;
                model.BreakType = result.BreakType;
                model.Display = result.Display;
                model.EndTime = result.EndTime;
                model.MinimumTime = result.MinimumTime;
                model.StartTime = result.StartTime;
            }
            return View(model);
        }

        [HttpPost]
        public ActionResult UpdateBreakInformation(ModelBreakInformation model)
        {
            if (_IMasterCategory.Admin_BreakInformationCheckExists(model.BreakInformationId, model.BreakType).Count > 0)
            {
                model.ErrorMessage = "Break name already existed";
            }
            else
            {
                _IMasterCategory.Admin_MasterBreakInfoUpdate(model.BreakInformationId, model.BreakType, model.StartTime,
                    model.MinimumTime, model.Display, model.EndTime);
                Response.Redirect("ManageBreakInformation");
            }
            return View(model);
        }
    }
}