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
            throw new NotImplementedException();
        }

        public List<MasterCityDTO> Admin_MasterCityGet()
        {
            throw new NotImplementedException();
        }

        public MasterCityDTO Admin_MasterCityGetOnCityId(int cityId)
        {
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }
    }
}
