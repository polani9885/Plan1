using BusinessAccessLayer.Common;

using BusinessEntites.Admin;
using BusinessEntites.DataBaseModels;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Admin
{
    public class Country : BaseBusinessClass, ICountry, IDisposable
    {
        public void Admin_UpdateCountry(MasterCountryDTO dto)
        {
            try
            {
                _dataAccessCountry.Admin_UpdateCountry(dto);
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

        public void Admin_MasterPriceInfoUpdate(int countryId, MasterPriceInfo dto)
        {
            try
            {
                _dataAccessCountry.Admin_MasterPriceInfoUpdate(countryId, dto);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<MasterPriceInfo> Admin_GetMasterPriceInfo(int countryId)
        {
            try
            {
                return _dataAccessCountry.Admin_GetMasterPriceInfo(countryId);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
