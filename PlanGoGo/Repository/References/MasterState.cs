
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites.Admin;
using Interfaces;

namespace PlanGoGo.Repository.Reference
{
    public class MasterState : IMasterState
    {
        PlanGoGo.MasterState.IMasterState _client = new PlanGoGo.MasterState.MasterStateClient();

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