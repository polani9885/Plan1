using BusinessAccessLayer.Common;
using BusinessAccessLayer.Interfaces;
using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Admin
{
    public class Country : BaseBusinessClass, ICountry, IDisposable
    {
        public void Admin_UpdateCountry(int countryId, string countryName, string countryShortName, string createdBy, bool isDefault)
        {
            try
            {
                _dataAccessCountry.Admin_UpdateCountry(countryId, countryName, countryShortName, createdBy, isDefault);
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
                return _dataAccessCountry.Admin_GetCountry();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public List<MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId)
        {
            try
            {
                return _dataAccessCountry.Admin_CheckCountryExist(countryName, countryId);
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
                return _dataAccessCountry.Admin_GetCountryOnId(countryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
