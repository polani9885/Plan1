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
    public class BALMissingDistanceAttractionsRecords : BaseBusinessClass, IMissingDistanceAttractionsRecords, IDisposable
    {
        public List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsGet()
        {
            try
            {
                return _dataAccessMissingDistanceAttractionsRecords.Admin_MissingDistanceAttractionsRecordsGet();
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
                return _dataAccessMissingDistanceAttractionsRecords.Admin_MissingDistanceAttractionsRecordsXAttractionsGet(MissingDistanceAttractionsRecordsID);
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
