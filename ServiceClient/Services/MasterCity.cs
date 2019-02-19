using BusinessEntites.Admin;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class MasterCity: IMasterCity
    {
        ServiceClient.AdminMasterCity.IMasterCity _client = new ServiceClient.AdminMasterCity.MasterCityClient();

        public List<MasterCityDTO> Admin_MasterCityCheckExists(MasterCityDTO masterCityDTO)
        {
            try
            {
                return _client.Admin_MasterCityCheckExists(masterCityDTO);
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
                return _client.Admin_MasterCityGet();
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
                return _client.Admin_MasterCityGetOnCityId(cityId);
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
                return _client.Admin_MasterCityGetOnStateId(stateId);
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
                _client.Admin_MasterCityUpdate(masterCityDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MergeCity(int sourceCityId, int destinationCityId)
        {
            try
            {
                _client.Admin_MergeCity(sourceCityId, destinationCityId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
