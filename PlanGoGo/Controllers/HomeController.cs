﻿using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGo.Controllers
{
    public class HomeController : Controller
    {
        PlanGoGo.Repository.Interface.ICountry _iCountry;
        PlanGoGo.Repository.Interface.IMasterState _iState;
        PlanGoGo.Repository.Interface.IMasterCity _iCity;
        public HomeController(PlanGoGo.Repository.Interface.ICountry _ICountry, PlanGoGo.Repository.Interface.IMasterState _IState, PlanGoGo.Repository.Interface.IMasterCity _ICity)
        {
            _iCountry = _ICountry;
            _iState = _IState;
            _iCity = _ICity;
        }

        

        public JsonResult Admin_GetCountry()
        {
            List<MasterCountryDTO> getResult = _iCountry.Admin_GetCountry();
            if (getResult.Count() > 0)
            {
                var jsonResults = Json(getResult, JsonRequestBehavior.AllowGet);
                jsonResults.MaxJsonLength = int.MaxValue;
                return jsonResults;
            }
            else
            {
                return Json(new List<MasterCountryDTO>(), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Admin_MasterCityGetOnStateId(int stateId)
        {
            try
            {
                List<MasterCityDTO> getResult = _iCity.Admin_MasterCityGetOnStateId(stateId);
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
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public JsonResult Admin_MasterStateGetOnCountryId(int countryId)
        {
            try
            {
                List<MasterStateDTO> getResult = _iState.Admin_MasterStateGetOnCountryId(countryId);
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
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
