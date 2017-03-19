using System;
using System.Collections.Generic;
using BusinessEntites.Admin;
using PlanGoGo.Repository.Interface;

namespace PlanGoGo.Repository.Reference
{
    public class Country: ICountry
    {
        PlanGoGo.AdminCountry.ICountry _client = new PlanGoGo.AdminCountry.CountryClient();
        
        public List<MasterCountryDTO> Admin_GetCountry()
        {
            try
            {
                return _client.Admin_GetCountry();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        
    }
}