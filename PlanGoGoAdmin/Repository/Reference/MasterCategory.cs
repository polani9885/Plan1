using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites.Admin;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class MasterCategory : IMasterCategory
    {
        PlanGoGoAdmin.MasterCategory.IMasterCategory _client = new PlanGoGoAdmin.MasterCategory.MasterCategoryClient();
        public List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId)
        {
            try
            {
                return _client.Admin_MasterCategoryCheckExists(categoryName, categoryId);
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
                return _client.Admin_MasterCategoryGet();
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
                return _client.Admin_MasterCategoryOnCategoryId(categoryId);
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
                _client.Admin_MasterCategoryUpdate(categoryId, categoryName);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}