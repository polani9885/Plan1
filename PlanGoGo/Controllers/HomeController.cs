using BusinessEntites.Admin;
using CommonFunctions;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGo.Controllers
{
    public class HomeController : Controller
    {
        ICountry _iCountry;
        IMasterState _iState;
        IMasterCity _iCity;

        private readonly JsonReturn jsonReturn = new JsonReturn();
        public HomeController(ICountry _ICountry, IMasterState _IState, IMasterCity _ICity)
        {
            _iCountry = _ICountry;
            _iState = _IState;
            _iCity = _ICity;
        }

        public ActionResult Index()
        {
            return View();
        }


        public JsonResult Admin_GetCountry()
        {
            List<MasterCountryDTO> getResult = _iCountry.Admin_GetCountry();
            return jsonReturn.JsonResult<MasterCountryDTO>(getResult);
            
        }

        public JsonResult Admin_MasterCityGetOnStateId(int stateId)
        {
            try
            {
                List<MasterCityDTO> getResult = _iCity.Admin_MasterCityGetOnStateId(stateId);
                return jsonReturn.JsonResult<MasterCityDTO>(getResult);
                                
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
                return jsonReturn.JsonResult<MasterStateDTO>(getResult);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
