﻿using BusinessEntites.Admin;
using Interfaces;
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
        IMasterCity _IMasterCity;

        public MasterCityController(IMasterCity masterCity)
        {
            _IMasterCity = masterCity;
        }

        /// <summary>
        /// Getting City Information
        /// </summary>
        /// <returns></returns>
        public JsonResult Admin_GetCity()
        {

            var getResult = _IMasterCity.Admin_MasterCityGetOnStateId(userEntity.MasterStateId);
            return base.jsonReturn.JsonResult<MasterCityDTO>(getResult);

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
            _dto.StateId = userEntity.MasterStateId;
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
                Response.Redirect("ManageCity");
            }
            return View(model);
        }

        public ActionResult ViewCityInfo(int cityId)
        {
            GetCookieInformation();
            userEntity.MasterCityId = cityId;
            UpdateCookieInformation();
            return RedirectToAction("ManageAttractions", "Attractions");
        }
    }
}