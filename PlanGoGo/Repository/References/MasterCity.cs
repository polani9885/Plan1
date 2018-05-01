
using System;
using BusinessEntites.Admin;
using System.Collections.Generic;
using Interfaces;

namespace PlanGoGo.Repository.Reference
{
    public class MasterCity: IMasterCity
    {
        PlanGoGo.MasterCity.IMasterCity _client = new PlanGoGo.MasterCity.MasterCityClient();

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