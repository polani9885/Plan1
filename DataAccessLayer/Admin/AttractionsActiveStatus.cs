using DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites;
using Dapper;

namespace DataAccessLayer.Admin
{
    public class AttractionsActiveStatus : IAttractionsActiveStatus, IDisposable
    {
        public GetAttractionOpenTime Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId(int AttractionsActiveStatusId)
        {
            try
            {
                GetAttractionOpenTime _returnResult = SqlHelper.QuerySP<GetAttractionOpenTime>("Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId",
                    new
                    {
                        AttractionsActiveStatusId = AttractionsActiveStatusId
                    }).ToList().FirstOrDefault();
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
