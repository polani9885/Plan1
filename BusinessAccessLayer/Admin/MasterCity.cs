using BusinessAccessLayer.Common;
using BusinessAccessLayer.Interfaces;
using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Admin
{
    public class MasterCity : BaseBusinessClass, IMasterCity, IDisposable
    {
        public List<MasterCityDTO> Admin_MasterCityCheckExists(MasterCityDTO masterCityDTO)
        {
            try
            {
                return _dataAccessMasterCity.Admin_MasterCityCheckExists(masterCityDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCityDTO> Admin_MasterCityGet()
        {
            try
            {
                return _dataAccessMasterCity.Admin_MasterCityGet();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCityDTO> Admin_MasterCityGetOnStateId(int stateId)
        {
            try
            {
                return _dataAccessMasterCity.Admin_MasterCityGetOnStateId(stateId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MasterCityDTO Admin_MasterCityGetOnCityId(int cityId)
        {
            try
            {
                return _dataAccessMasterCity.Admin_MasterCityGetOnCityId(cityId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterCityUpdate(MasterCityDTO masterCityDTO)
        {
            try
            {
                _dataAccessMasterCity.Admin_MasterCityUpdate(masterCityDTO);
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
