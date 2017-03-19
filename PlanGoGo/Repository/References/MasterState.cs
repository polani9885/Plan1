using PlanGoGo.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites.Admin;

namespace PlanGoGo.Repository.Reference
{
    public class MasterState : IMasterState
    {
        PlanGoGo.MasterState.IMasterState _client = new PlanGoGo.MasterState.MasterStateClient();

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

        
    }
}