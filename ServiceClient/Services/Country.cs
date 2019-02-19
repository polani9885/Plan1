using BusinessEntites.Admin;
using BusinessEntites.DataBaseModels;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class Country: ICountry
    {
        ServiceClient.AdminCountry.ICountry _client = new ServiceClient.AdminCountry.CountryClient();

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
            throw new NotImplementedException();
        }

        public void Admin_UpdateCountry(MasterCountryDTO dto)
        {
            try
            {
                _client.Admin_UpdateCountry(dto);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterPriceInfoUpdate(int countryId, MasterPriceInfo dto)
        {
            try
            {
                _client.Admin_MasterPriceInfoUpdate(countryId,dto);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterPriceInfo> Admin_GetMasterPriceInfo(int countryId)
        {
            try
            {
               return _client.Admin_GetMasterPriceInfo(countryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
