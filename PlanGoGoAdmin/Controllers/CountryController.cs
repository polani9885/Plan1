using BusinessEntites.Admin;
using Interfaces;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Models.Country;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class CountryController : BaseController
    {
        ICountry _ICountry;

        public CountryController(ICountry country)
        {
            _ICountry = country;
        }

        /// <summary>
        /// Getting the admin users
        /// </summary>
        /// <returns></returns>
        public JsonResult Admin_GetCountry()
        {
            List<MasterCountryDTO> getResult = _ICountry.Admin_GetCountry();
            return base.jsonReturn.JsonResult<MasterCountryDTO>(getResult);
            
        }

        public ActionResult ManageCountry()
        {
            return View();
        }

        public ActionResult AddCountry(int countryId)
        {
            ModelCountry model = new ModelCountry();
            if (countryId > 0)
            {
                MasterCountryDTO _adminUser = _ICountry.Admin_GetCountryOnId(countryId);
                model.CountryId = _adminUser.CountryId;
                model.CountryName  = _adminUser.CountryName;
                model.CountryShortName  = _adminUser.CountryShortName;
            }


            return View(model);
        }

        [HttpPost]
        public ActionResult AddCountry(ModelCountry model)
        {
            if (_ICountry.Admin_CheckCountryExist(model.CountryName, model.CountryId).Count > 0)
            {
                model.ErrorMessage = "Country name already existed";
            }
            else
            {
                _ICountry.Admin_UpdateCountry(model.CountryId, model.CountryName, model.CountryShortName, CurrentUser.UserName,model.IsDefault);
                Response.Redirect("/Country/ManageCountry");
            }
            return View(model);
        }

    }
}