using BusinessEntites.DataBaseModels;
using Interfaces;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Models.ManageMasterGoogleType;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class MasterGoogleTypeController : BaseController
    {
        IGetListValues _IGetListValues;
        private IMasterCategory _IMasterCategory;
        public MasterGoogleTypeController(IGetListValues GetListValues, IMasterCategory masterCategory)
        {
            _IGetListValues = GetListValues;
            _IMasterCategory = masterCategory;
        }

        public JsonResult Admin_MasterGoogleTypeGet()
        {
            List<MasterGoogleType> getResult = _IMasterCategory.Admin_MasterGoogleTypeGet();

            return base.jsonReturn.JsonResult<MasterGoogleType>(getResult);

        }

        public JsonResult Admin_MasterCategoryXMasterGoogleType()
        {
            List<Admin_MasterCategoryXMasterGoogleType> getResult = _IMasterCategory.Admin_MasterCategoryXMasterGoogleType();

            return base.jsonReturn.JsonResult<Admin_MasterCategoryXMasterGoogleType>(getResult);
        }

        public ActionResult ManageMasterGoogleType()
        {
            return View();
        }

        public ActionResult UpdateMasterGoogleType(int googleTypeID)
        {
            ModelManageMasterGoogleType model = new ModelManageMasterGoogleType();
            if (googleTypeID > 0)
            {
                MasterGoogleType _result = _IMasterCategory.Admin_MasterGoogleTypeGet()
                    .Where(x => x.GoogleTypeID == googleTypeID).FirstOrDefault();
                model.GoogleTypeID = _result.GoogleTypeID;
                model.TypeName = _result.TypeName;
                model.ViewTime = _result.ViewTime;
                model.DisplayForUser = _result.DisplayForUser;
                model.ExtraSearch = _result.ExtraSearch;
                model.IsNeeded = _result.IsNeeded;
            }


            return View(model);
        }

        [HttpPost]
        public ActionResult UpdateMasterGoogleType(ModelManageMasterGoogleType model)
        {
            if (_IMasterCategory.Admin_MasterGoogleTypeCheckExists(model.GoogleTypeID, model.TypeName).Count > 0)
            {
                model.ErrorMessage = "Google name already existed";
            }
            else
            {
                MasterGoogleType result = new MasterGoogleType();

                result.ViewTime = model.ViewTime;
                result.DisplayForUser = model.DisplayForUser;
                result.ExtraSearch = model.ExtraSearch;
                result.GoogleTypeID = model.GoogleTypeID;
                result.IsNeeded = model.IsNeeded;
                result.TypeName = model.TypeName;
                _IMasterCategory.Admin_MasterGoogleTypeUpdate(result);
                Response.Redirect("ManageMasterGoogleType");
            }
            return View(model);
        }
    }
}