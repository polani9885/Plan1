using BusinessEntites.Admin;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Models.MasterCategory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class MasterCategoryController : BaseController
    {
        PlanGoGoAdmin.Repository.Interface.IMasterCategory _IMasterCategory;
        // GET: MasterCategory
        public MasterCategoryController(PlanGoGoAdmin.Repository.Interface.IMasterCategory masterCategory)
        {
            _IMasterCategory = masterCategory;
        }

        /// <summary>
        /// Getting the admin users
        /// </summary>
        /// <returns></returns>
        public JsonResult Admin_MasterCategoryGet()
        {
            List<MasterCategoryDTO> getResult = _IMasterCategory.Admin_MasterCategoryGet();
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

        public ActionResult ManageMasterCategory()
        {
            return View();
        }

        public ActionResult UpdateMasterCategory(int Category)
        {
            ModelMasterCategory model = new ModelMasterCategory();
            if (Category > 0)
            {
                MasterCategoryDTO _result = _IMasterCategory.Admin_MasterCategoryOnCategoryId(Category);
                model.CategoryId = _result.CategoryId;
                model.CategoryName = _result.CategoryName;                
            }


            return View(model);
        }

        [HttpPost]
        public ActionResult UpdateMasterCategory(ModelMasterCategory model)
        {
            if (_IMasterCategory.Admin_MasterCategoryCheckExists(model.CategoryName, model.CategoryId).Count > 0)
            {
                model.ErrorMessage = "Country name already existed";
            }
            else
            {
                _IMasterCategory.Admin_MasterCategoryUpdate(model.CategoryId, model.CategoryName);
                Response.Redirect("/MasterCategory/ManageMasterCategory");
            }
            return View(model);
        }
    }
}