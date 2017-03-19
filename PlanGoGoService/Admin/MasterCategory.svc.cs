using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using BusinessEntites.Admin;
using PlanGoGoService.BaseClasses;

namespace PlanGoGoService.Admin
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "MasterCategory" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select MasterCategory.svc or MasterCategory.svc.cs at the Solution Explorer and start debugging.
    public class MasterCategory : BaseReference, IMasterCategory
    {
        public List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId)
        {
            try
            {
                return _businessMasterCategory.Admin_MasterCategoryCheckExists(categoryName, categoryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCategoryDTO> Admin_MasterCategoryGet()
        {
            try
            {
                return _businessMasterCategory.Admin_MasterCategoryGet();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MasterCategoryDTO Admin_MasterCategoryOnCategoryId(int categoryId)
        {
            try
            {
                return _businessMasterCategory.Admin_MasterCategoryOnCategoryId(categoryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterCategoryUpdate(int categoryId, string categoryName)
        {
            try
            {
                _businessMasterCategory.Admin_MasterCategoryUpdate(categoryId, categoryName);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
