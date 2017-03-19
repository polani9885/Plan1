using BusinessAccessLayer.Common;
using BusinessAccessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Admin;

namespace BusinessAccessLayer.Admin
{
    public class MasterState: BaseBusinessClass, IMasterState, IDisposable
    {
        public List<MasterStateDTO> Admin_MasterStateCheckExists(MasterStateDTO masterStateDTO)
        {
            try
            {
                return _dataAccessMasterState.Admin_MasterStateCheckExists(masterStateDTO);
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
                return _dataAccessMasterState.Admin_MasterStateGet();
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
                return _dataAccessMasterState.Admin_MasterStateGetOnCountryId(countryId);
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
                return _dataAccessMasterState.Admin_MasterStateGetOnStateId(stateId);
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
                _dataAccessMasterState.Admin_MasterStateUpdate(masterStateDTO);
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
