using PlanGoGoService.BaseClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using BusinessEntites.Admin;
using PlanGoGoService.Interfaces;

namespace PlanGoGoService.Admin
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "MasterState" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select MasterState.svc or MasterState.svc.cs at the Solution Explorer and start debugging.
    public class MasterState : BaseReference, IMasterState
    {
        public List<MasterStateDTO> Admin_MasterStateCheckExists(MasterStateDTO masterStateDTO)
        {
            try
            {
                return _businessMasterState.Admin_MasterStateCheckExists(masterStateDTO);
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
                return _businessMasterState.Admin_MasterStateGet();
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
                return _businessMasterState.Admin_MasterStateGetOnCountryId(countryId);
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
                return _businessMasterState.Admin_MasterStateGetOnStateId(stateId);
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
                _businessMasterState.Admin_MasterStateUpdate(masterStateDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
