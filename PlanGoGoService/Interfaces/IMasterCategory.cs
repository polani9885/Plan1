using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IMasterCategory
    {
        [OperationContract]
        void Admin_MasterCategoryUpdate(int categoryId, string categoryName);

        [OperationContract]
        List<MasterCategoryDTO> Admin_MasterCategoryGet();

        [OperationContract]
        List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId);

        [OperationContract]
        MasterCategoryDTO Admin_MasterCategoryOnCategoryId(int categoryId);
    }
}