using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites.Admin;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class Country : ICountry
    {
        PlanGoGoAdmin.AdminCountry.ICountry _client = new PlanGoGoAdmin.AdminCountry.CountryClient();
        public List<MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId)
        {
            try
            {
                return _client.Admin_CheckCountryExist(countryName, countryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
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
            try
            {
                return _client.Admin_GetCountryOnId(countryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_UpdateCountry(int countryId, string countryName, string countryShortName, string createdBy, bool isDefault)
        {
            try
            {
                _client.Admin_UpdateCountry(countryId, countryName, countryShortName, createdBy, isDefault);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}