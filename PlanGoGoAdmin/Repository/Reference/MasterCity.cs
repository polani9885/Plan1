using BusinessEntites.Admin;
using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class MasterCity: IMasterCity
    {
        PlanGoGoAdmin.MasterCity.IMasterCity _client = new PlanGoGoAdmin.MasterCity.MasterCityClient();
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
        
    }
}