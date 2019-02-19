using BusinessEntites.Admin;
using Interfaces;
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
        IMasterState _IMasterState;

        public MasterStateController(IMasterState masterState)
        {
            _IMasterState = masterState;
        }

        /// <summary>
        /// Getting States Information
        /// </summary>
        /// <returns></returns>
        public JsonResult Admin_GetStates()
        {
            List<MasterStateDTO> getResult;

            getResult = _IMasterState.Admin_MasterStateGetOnCountryId(userEntity.MasterCountryId);
            
            return base.jsonReturn.JsonResult<MasterStateDTO>(getResult);

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
            _dto.CountryId = userEntity.MasterCountryId;
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
                Response.Redirect("ManageState");
            }
            return View(model);
        }


        public ActionResult MergeStates()
        {
            var getResult = _IMasterState.Admin_MasterStateGetOnCountryId(userEntity.MasterCountryId);
            ModelMasterState model = new ModelMasterState();
            model.States = getResult;

            return View(model);
        }

        [HttpPost]
        public ActionResult MergeStates(ModelMasterState model)
        {

            _IMasterState.Admin_MergeStates(model.SourceStateId,model.DestinationStateId);
            Response.Redirect("ManageState");

            return View(model);
        }

        public ActionResult ViewStateInfo(int stateId)
        {
            GetCookieInformation();
            userEntity.MasterStateId = stateId;
            UpdateCookieInformation();
            return RedirectToAction("ManageCity", "MasterCity");
        }
        
    }
}