using BusinessEntites.DataBaseModels;
using Interfaces;
using PlanGoGoAdmin.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class MasterPriceInfoController : BaseController
    {

        ICountry _ICountry;

        public MasterPriceInfoController(ICountry country)
        {
            _ICountry = country;
        }

        
        public JsonResult Admin_GetMasterPriceInfo()
        {
            List<MasterPriceInfo> getResult = _ICountry.Admin_GetMasterPriceInfo(userEntity.MasterCountryId);
            return base.jsonReturn.JsonResult<MasterPriceInfo>(getResult);

        }

        public ActionResult ManageMasterPriceInfo()
        {
            return View();
        }

        public ActionResult UpdateMasterPriceInfo(int masterPriceInfoId)
        {
            MasterPriceInfo model = new MasterPriceInfo();
            if (masterPriceInfoId > 0)
            {
                var data = _ICountry.Admin_GetMasterPriceInfo(userEntity.MasterCountryId)
                    .FirstOrDefault(x => x.MasterPriceInfoId == masterPriceInfoId);
                model = data;
            }
            return View(model);
        }

        [HttpPost]
        public ActionResult UpdateMasterPriceInfo(MasterPriceInfo model)
        {
            _ICountry.Admin_MasterPriceInfoUpdate(userEntity.MasterCountryId, model);
            Response.Redirect("ManageMasterPriceInfo");

            return View(model);
        }
    }
}