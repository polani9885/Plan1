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
                MasterCountryDTO adminUser = _ICountry.Admin_GetCountry().FirstOrDefault(x=>x.CountryId == countryId);
                model.CountryId = adminUser.CountryId;
                model.CountryName  = adminUser.CountryName;
                model.CountryShortName  = adminUser.CountryShortName;
                model.DatabaseName = adminUser.DatabaseName;
                model.DistanceMeasure = adminUser.DistanceMeasure;
                model.IsDefault = adminUser.IsDefault;
                model.IsWindowsAccess = adminUser.IsWindowsAccess;
                model.MetersIn = adminUser.MetersIn;
                model.Password = adminUser.Password;
                model.ServerName = adminUser.ServerName;
                model.UserName = adminUser.UserName;

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
                MasterCountryDTO dto = new MasterCountryDTO();
                dto.CountryId = model.CountryId;
                dto.DatabaseName = model.DatabaseName;
                dto.DistanceMeasure = model.DistanceMeasure;
                dto.IsDefault = model.IsDefault;
                dto.IsWindowsAccess = model.IsWindowsAccess;
                dto.MetersIn = model.MetersIn;
                dto.Password = model.Password;
                dto.ServerName = model.ServerName;
                dto.UserName = model.UserName;
                dto.CountryName = model.CountryName;
                dto.CountryShortName = model.CountryShortName;
                dto.CreatedBy = userEntity.UserName;

                _ICountry.Admin_UpdateCountry(dto);
                Response.Redirect("ManageCountry");
            }
            return View(model);
        }

        public ActionResult ViewContryInfo(int countryId)
        {
            GetCookieInformation();
            userEntity.MasterCountryId = countryId;
            UpdateCookieInformation();
            return RedirectToAction("ManageState", "MasterState");
        }

    }
}