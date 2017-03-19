using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IMasterCategory
    {
        void Admin_MasterCategoryUpdate(int categoryId, string categoryName);

        List<MasterCategoryDTO> Admin_MasterCategoryGet();

        List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId);


        MasterCategoryDTO Admin_MasterCategoryOnCategoryId(int categoryId);
    }
}
