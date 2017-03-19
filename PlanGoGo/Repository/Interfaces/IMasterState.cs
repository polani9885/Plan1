using BusinessEntites.Admin;
using System.Collections.Generic;

namespace PlanGoGo.Repository.Interface
{
    public interface IMasterState
    {
        List<MasterStateDTO> Admin_MasterStateGetOnCountryId(int countryId);
    }
}