using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Interfaces
{
    public interface IMasterState
    {
        void Admin_MasterStateUpdate(MasterStateDTO masterStateDTO);

        List<MasterStateDTO> Admin_MasterStateGet();

        List<MasterStateDTO> Admin_MasterStateCheckExists(MasterStateDTO masterStateDTO);


        MasterStateDTO Admin_MasterStateGetOnStateId(int stateId);

        List<MasterStateDTO> Admin_MasterStateGetOnCountryId(int countryId);
    }
}
