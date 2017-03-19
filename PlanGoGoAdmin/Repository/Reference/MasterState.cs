using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites.Admin;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class MasterState : IMasterState
    {
        PlanGoGoAdmin.MasterState.IMasterState _client = new PlanGoGoAdmin.MasterState.MasterStateClient();
        public List<MasterStateDTO> Admin_MasterStateCheckExists(MasterStateDTO masterStateDTO)
        {
            try
            {
                return _client.Admin_MasterStateCheckExists(masterStateDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterStateDTO> Admin_MasterStateGet()
        {
            try
            {
                return _client.Admin_MasterStateGet();
            }
            catch (Exception ex)
            {
                throw ex;
            }
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
            try
            {
                return _client.Admin_MasterStateGetOnStateId(stateId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterStateUpdate(MasterStateDTO masterStateDTO)
        {
            try
            {
                _client.Admin_MasterStateUpdate(masterStateDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}