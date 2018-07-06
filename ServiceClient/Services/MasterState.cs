using BusinessEntites.Admin;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class MasterState: IMasterState
    {
        ServiceClient.AdminMasterState.IMasterState _client = new ServiceClient.AdminMasterState.MasterStateClient();

        public List<MasterStateDTO> Admin_MasterStateCheckExists(MasterStateDTO masterStateDTO)
        {
            throw new NotImplementedException();
        }

        public List<MasterStateDTO> Admin_MasterStateGet()
        {
            throw new NotImplementedException();
        }

        public List<MasterStateDTO> Admin_MasterStateGetOnCountryId(int countryId)
        {
            try
            {
                return _client.Admin_MasterStateGetOnCountryId(countryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MasterStateDTO Admin_MasterStateGetOnStateId(int stateId)
        {
            throw new NotImplementedException();
        }

        public void Admin_MasterStateUpdate(MasterStateDTO masterStateDTO)
        {
            throw new NotImplementedException();
        }
    }
}
