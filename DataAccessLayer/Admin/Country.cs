using BusinessEntites.Admin;
using BusinessEntites.DataBaseModels;
using Dapper;

using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Admin
{
    public class Country : ICountry, IDisposable
    {
        /// <summary>
        /// Adding and updating country information
        /// </summary>
        /// <param name="countryId"></param>
        /// <param name="countryName"></param>
        /// <param name="countryShortName"></param>
        /// <param name="CreatedBy"></param>
        public void Admin_UpdateCountry(MasterCountryDTO dto)
        {
            try
            {
                SqlHelper.QuerySP("Admin_UpdateCountry",
                    new
                    {
                        CountryId = dto.CountryId,
                        CountryName = dto.CountryName,
                        CountryShortName = dto.CountryShortName,
                        CreatedBy = dto.CreatedBy,
                        IsDefault = dto.IsDefault,
                        ServerName = dto.ServerName,
                        IsWindowsAccess =dto.IsWindowsAccess,
                        UserName =dto.UserName,
                        Password =dto.Password,
                        DatabaseName =dto.DatabaseName,
                        DistanceMeasure =dto.DistanceMeasure,
                        MetersIn =dto.MetersIn
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Getting the country list
        /// </summary>
        /// <returns></returns>
        public List<MasterCountryDTO> Admin_GetCountry()
        {
            try
            {
                List<MasterCountryDTO> _returnResult = SqlHelper.QuerySP<MasterCountryDTO>("Admin_GetCountry").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Checking the country name already existed or not
        /// </summary>
        /// <param name="countryName"></param>
        /// <param name="countryId"></param>
        /// <returns></returns>
        public List<MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId)
        {
            try
            {
                List<MasterCountryDTO> _returnResult = SqlHelper.QuerySP<MasterCountryDTO>("Admin_CheckCountryExist",
                    new
                    {
                        CountryName = countryName,
                        CountryId = countryId
                    }).ToList();
                return _returnResult;
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
                MasterCountryDTO _returnResult = SqlHelper.QuerySP<MasterCountryDTO>("Admin_GetCountryOnId",
                    new
                    {                        
                        CountryId = countryId
                    }).ToList().FirstOrDefault();
                return _returnResult;
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
                SqlHelper.countryId = countryId;
                var result = SqlHelper.QuerySP<MasterPriceInfo>("Admin_GetMasterPriceInfo").ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterPriceInfoUpdate(int countryId,MasterPriceInfo dto)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Admin_MasterPriceInfoUpdate",
                    new
                    {
                        MasterPriceInfoId = dto.MasterPriceInfoId,
                        PriveLevel = dto.PriveLevel,
                        Food = dto.Food,
                        Stay = dto.Stay

                    });
                
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
