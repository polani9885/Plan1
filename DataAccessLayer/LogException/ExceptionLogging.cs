using BusinessEntites;
using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.LogException
{
    public class ExceptionLogging
    {
        public void InsertExceptionInformation(LoggingEntity loggingEntity)
        {
            try
            {
                if (loggingEntity.CountryId > 0)
                    SqlHelper.countryId = loggingEntity.CountryId;
                SqlHelper.QuerySP("InsertExceptionInformation",
                    new
                    {
                        MethodName = loggingEntity.MethodName,
                        Parameters = loggingEntity.Parameters,
                        ExceptionMessage = loggingEntity.ExceptionMessage,
                        ExceptionStackTrace = loggingEntity.ExceptionStackTrace,
                        CreatedBy = loggingEntity.CreatedBy
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
