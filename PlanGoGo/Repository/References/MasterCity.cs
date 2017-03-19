using PlanGoGo.Repository.Interface;
using System;
using BusinessEntites.Admin;
using System.Collections.Generic;

namespace PlanGoGo.Repository.Reference
{
    public class MasterCity: IMasterCity
    {
        PlanGoGo.MasterCity.IMasterCity _client = new PlanGoGo.MasterCity.MasterCityClient();     

        

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
    }
}