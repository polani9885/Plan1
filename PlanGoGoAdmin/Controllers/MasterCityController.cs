using BusinessEntites.Admin;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Models.MasterCity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class MasterCityController : BaseController
    {
        PlanGoGoAdmin.Repository.Interface.IMasterCity _IMasterCity;

        public MasterCityController(PlanGoGoAdmin.Repository.Interface.IMasterCity masterCity)
        {
            _IMasterCity = masterCity;
        }

        /// <summary>
        /// Getting City Information
        /// </summary>
        /// <returns></returns>
        public JsonResult Admin_GetCity(int stateId)
        {
            List<MasterCityDTO> getResult;
            if (stateId > 0)
            {
                getResult = _IMasterCity.Admin_MasterCityGetOnStateId(stateId);
            }
            else
            {
                getResult = _IMasterCity.Admin_MasterCityGet();
            }
            if (getResult.Count() > 0)
            {
                var jsonResults = Json(getResult, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<MasterCityDTO>(), JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ManageCity()
        {
            return View();
        }

        public ActionResult UpdateCity(int CityId)
        {
            ModelMasterCity model = new ModelMasterCity();
            if (CityId > 0)
            {
                MasterCityDTO _adminUser = _IMasterCity.Admin_MasterCityGetOnCityId(CityId);
                model.CountryId = _adminUser.CountryId;
                model.StateId = _adminUser.StateId;
                model.IsDefault = _adminUser.IsDefault;
                model.CityId = _adminUser.CityId;
                model.CityName = _adminUser.CityName;
                model.CityShortName = _adminUser.CityShortName;
            }

            return View(model);
        }

        [HttpPost]
        public ActionResult UpdateCity(ModelMasterCity model)
        {
            MasterCityDTO _dto = new MasterCityDTO();
            _dto.StateId = model.StateId;
            _dto.IsDefault = model.IsDefault;
            _dto.CityId = model.CityId;
            _dto.CityName = model.CityName;
            _dto.CityShortName = model.CityShortName;

            if (_IMasterCity.Admin_MasterCityCheckExists(_dto).Count > 0)
            {
                model.ErrorMessage = "City name already existed";
            }
            else
            {
                _IMasterCity.Admin_MasterCityUpdate(_dto);
                Response.Redirect("/MasterCity/ManageCity?CountryId=" + model.CountryId);
            }
            return View(model);
        }
    }
}