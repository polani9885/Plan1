using System;
using System.Collections.Generic;
using BusinessEntites.Admin;
using Interfaces;

namespace PlanGoGo.Repository.Reference
{
    public class Country: ICountry
    {
        PlanGoGo.AdminCountry.ICountry _client = new PlanGoGo.AdminCountry.CountryClient();

        public List<MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId)
        {
            throw new NotImplementedException();
        }

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

        public MasterCountryDTO Admin_GetCountryOnId(int countryId)
        {
            throw new NotImplementedException();
        }

        public void Admin_UpdateCountry(int countryId, string countryName, string countryShortName, string createdBy, bool isDefault)
        {
            throw new NotImplementedException();
        }
    }
}