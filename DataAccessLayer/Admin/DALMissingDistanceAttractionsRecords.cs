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
    public class DALMissingDistanceAttractionsRecords : IMissingDistanceAttractionsRecords, IDisposable
    {
        public List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsGet()
        {
            try
            {
                List<MissingDistanceAttractionsRecordsDTO> _returnResult = SqlHelper.QuerySP<MissingDistanceAttractionsRecordsDTO>("Admin_MissingDistanceAttractionsRecordsGet").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsXAttractionsGet(int MissingDistanceAttractionsRecordsID)
        {
            try
            {
                List<MissingDistanceAttractionsRecordsDTO> _returnResult = SqlHelper.QuerySP<MissingDistanceAttractionsRecordsDTO>("Admin_MissingDistanceAttractionsRecordsXAttractionsGet", new
                {
                    MissingDistanceAttractionsRecordsID = MissingDistanceAttractionsRecordsID
                }).ToList();
                return _returnResult;
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
