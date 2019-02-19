using BusinessEntites.Admin;
using BusinessEntites.DataBaseModels;
using PlanGoGoService.BaseClasses;
using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace PlanGoGoService.Admin
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Country" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Country.svc or Country.svc.cs at the Solution Explorer and start debugging.
    public class Country : BaseReference, ICountry
    {
        public void Admin_UpdateCountry(MasterCountryDTO dto)
        {
            try
            {
                _businessCountry.Admin_UpdateCountry(dto);
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
                return _businessCountry.Admin_GetCountry();
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
                return _businessCountry.Admin_CheckCountryExist(countryName, countryId);
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
                return _businessCountry.Admin_GetCountryOnId(countryId);
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
                _businessCountry.Admin_MasterPriceInfoUpdate(countryId, dto);
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
                return _businessCountry.Admin_GetMasterPriceInfo(countryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


    }
}
