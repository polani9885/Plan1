using BusinessEntites.Admin;
using Dapper;
using DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Admin
{
    public class MasterCity: IMasterCity, IDisposable
    {
        public List<MasterCityDTO> Admin_MasterCityCheckExists(MasterCityDTO masterCityDTO)
        {
            try
            {
                List<MasterCityDTO> _returnResult = SqlHelper.QuerySP<MasterCityDTO>("Admin_MasterCityCheckExists",
                    new
                    {
                        CityId = masterCityDTO.CityId,
                        CityName = masterCityDTO.CityName
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCityDTO> Admin_MasterCityGet()
        {
            try
            {
                List<MasterCityDTO> _returnResult = SqlHelper.QuerySP<MasterCityDTO>("Admin_MasterCityGet").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCityDTO> Admin_MasterCityGetOnStateId(int stateId)
        {
            try
            {
                List<MasterCityDTO> _returnResult = SqlHelper.QuerySP<MasterCityDTO>("Admin_MasterCityGetOnStateId",
                    new
                    {
                        StateId = stateId
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MasterCityDTO Admin_MasterCityGetOnCityId(int cityId)
        {
            try
            {
                MasterCityDTO _returnResult = SqlHelper.QuerySP<MasterCityDTO>("Admin_MasterCityGetOnCityId",
                    new
                    {
                        CityId = cityId
                    }).ToList().FirstOrDefault();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterCityUpdate(MasterCityDTO masterCityDTO)
        {
            try
            {
                SqlHelper.QuerySP("Admin_MasterCityUpdate",
                    new
                    {

                        CityId = masterCityDTO.CityId
                        ,
                        CityName = masterCityDTO.CityName
                        ,
                        StateId = masterCityDTO.StateId
                        ,
                        CityShortName = masterCityDTO.CityShortName
                        ,
                        IsDefault = masterCityDTO.IsDefault
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
