using DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Admin;
using Dapper;

namespace DataAccessLayer.Admin
{
    public class MasterState : IMasterState, IDisposable
    {
        public List<MasterStateDTO> Admin_MasterStateCheckExists(MasterStateDTO masterStateDTO)
        {
            try
            {
                List<MasterStateDTO> _returnResult = SqlHelper.QuerySP<MasterStateDTO>("Admin_MasterStateCheckExists",
                    new
                    {
                        StateId = masterStateDTO.StateId,
                        StateName = masterStateDTO.StateName 
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterStateDTO> Admin_MasterStateGet()
        {
            try
            {
                List<MasterStateDTO> _returnResult = SqlHelper.QuerySP<MasterStateDTO>("Admin_MasterStateGet").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterStateDTO> Admin_MasterStateGetOnCountryId(int countryId)
        {
            try
            {
                List<MasterStateDTO> _returnResult = SqlHelper.QuerySP<MasterStateDTO>("Admin_MasterStateGetOnCountryId",
                    new
                    {
                        CountryId = countryId
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MasterStateDTO Admin_MasterStateGetOnStateId(int stateId)
        {
            try
            {
                MasterStateDTO _returnResult = SqlHelper.QuerySP<MasterStateDTO>("Admin_MasterStateGetOnStateId",
                    new
                    {
                        StateId = stateId
                    }).ToList().FirstOrDefault();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterStateUpdate(MasterStateDTO masterStateDTO)
        {
            try
            {
                SqlHelper.QuerySP("Admin_MasterStateUpdate",
                    new
                    {

                        StateId = masterStateDTO.StateId
                        ,StateName  = masterStateDTO.StateName 
                        ,CountryId = masterStateDTO.CountryId 
                        ,StateShortName  = masterStateDTO.StateShortName 
                        ,IsDefault = masterStateDTO.IsDefault
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
