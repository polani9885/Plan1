using BusinessEntites.Common;
using Interfaces;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Models.MasterTravelMode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class MasterTravelModeController : BaseController
    {
        // GET: MasterTravelMode
        IGetListValues _IGetListValues;
        private IMasterCategory _IMasterCategory;
        public MasterTravelModeController(IGetListValues GetListValues, IMasterCategory masterCategory)
        {
            _IGetListValues = GetListValues;
            _IMasterCategory = masterCategory;
        }


        


        public ActionResult ManageTravelMode()
        {
            return View();
        }

        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public JsonResult Scheduler_GetTravelMode()
        {
            List<MasterTravelModeDTO> result = _IMasterCategory.Scheduler_GetTravelMode();

            return jsonReturn.JsonResult<MasterTravelModeDTO>(result);
        }

        public ActionResult UpdateMasterTravelMode(int travelModeId)
        {
            ModelTravelMode model = new ModelTravelMode();
            if (travelModeId > 0)
            {
                var result = _IMasterCategory.Scheduler_GetTravelMode().FirstOrDefault(x => x.TravelModeId == travelModeId);
                model.TravelModeId = result.TravelModeId;
                model.TravelType = result.TravelType;
            }
            return View(model);
        }


        [HttpPost]
        public ActionResult UpdateMasterTravelMode(ModelTravelMode model)
        {
            if (_IMasterCategory.Admin_TravelModeCheckExists(model.TravelModeId, model.TravelType).Count > 0)
            {
                model.ErrorMessage = "Travel Type already existed";
            }
            else
            {
                _IMasterCategory.Admin_TravelModeUpdate(model.TravelModeId, model.TravelType);
                Response.Redirect("ManageTravelMode");
            }
            return View(model);
        }

    }
}