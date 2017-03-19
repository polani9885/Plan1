using BusinessAccessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Admin;
using BusinessAccessLayer.Common;

namespace BusinessAccessLayer.Admin
{
    public class MasterCategory : BaseBusinessClass, IMasterCategory, IDisposable
    {
        public List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId)
        {
            try
            {
                return _dataAccessMasterCategory.Admin_MasterCategoryCheckExists(categoryName, categoryId);
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
                return _dataAccessMasterCategory.Admin_MasterCategoryGet();
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
                return _dataAccessMasterCategory.Admin_MasterCategoryOnCategoryId(categoryId);
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
                _dataAccessMasterCategory.Admin_MasterCategoryUpdate(categoryId, categoryName);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
