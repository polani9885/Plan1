using DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Admin;
using Dapper;

namespace DataAccessLayer.Admin
{
    public class MasterCategory : IMasterCategory, IDisposable
    {
        public List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId)
        {
            try
            {
                List<MasterCategoryDTO> _returnResult = SqlHelper.QuerySP<MasterCategoryDTO>("Admin_MasterCategoryCheckExists",
                    new
                    {
                        CategoryId = categoryId,
                        CategoryName = categoryName
                    }).ToList();
                return _returnResult;
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
                List<MasterCategoryDTO> _returnResult = SqlHelper.QuerySP<MasterCategoryDTO>("Admin_MasterCategoryGet").ToList();
                return _returnResult;
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
                MasterCategoryDTO _returnResult = SqlHelper.QuerySP<MasterCategoryDTO>("Admin_MasterCategoryOnCategoryId",
                    new
                    {
                        CategoryId = categoryId
                    }).ToList().FirstOrDefault();
                return _returnResult;
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
                SqlHelper.QuerySP("Admin_MasterCategoryUpdate",
                    new
                    {
                        CategoryId = categoryId,
                        CategoryName = categoryName
                    });
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
