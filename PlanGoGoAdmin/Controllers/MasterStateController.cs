using BusinessEntites.Admin;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Models.MasterState;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class MasterStateController : BaseController
    {
        PlanGoGoAdmin.Repository.Interface.IMasterState _IMasterState;

        public MasterStateController(PlanGoGoAdmin.Repository.Interface.IMasterState masterState)
        {
            _IMasterState = masterState;
        }

        /// <summary>
        /// Getting States Information
        /// </summary>
        /// <returns></returns>
        public JsonResult Admin_GetStates(int countryId)
        {
            List<MasterStateDTO> getResult;
            if (countryId > 0)
            {
                getResult = _IMasterState.Admin_MasterStateGetOnCountryId(countryId);
            }
            else
            {
                getResult = _IMasterState.Admin_MasterStateGet();
            }
            if (getResult.Count() > 0)
            {
                var jsonResults = Json(getResult, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<MasterStateDTO>(), JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ManageState()
        {
            return View();
        }

        public ActionResult UpdateState(int stateId)
        {
            ModelMasterState model = new ModelMasterState();
            if (stateId > 0)
            {
                MasterStateDTO _adminUser = _IMasterState.Admin_MasterStateGetOnStateId(stateId);
                model.CountryId = _adminUser.CountryId;
                model.IsDefault = _adminUser.IsDefault;
                model.StateId = _adminUser.StateId;
                model.StateName = _adminUser.StateName;
                model.StateShortName = _adminUser.StateShortName;                
            }

            return View(model);
        }

        [HttpPost]
        public ActionResult UpdateState(ModelMasterState model)
        {
            MasterStateDTO _dto = new MasterStateDTO();
            _dto.CountryId = model.CountryId;
            _dto.IsDefault = model.IsDefault;
            _dto.StateId = model.StateId;
            _dto.StateName = model.StateName;
            _dto.StateShortName = model.StateShortName;

            if (_IMasterState.Admin_MasterStateCheckExists(_dto).Count > 0)
            {
                model.ErrorMessage = "State name already existed";
            }
            else
            {
                _IMasterState.Admin_MasterStateUpdate(_dto);
                Response.Redirect("/MasterState/ManageState?CountryId="+model.CountryId);
            }
            return View(model);
        }
    }
}