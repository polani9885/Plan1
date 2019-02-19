using BusinessEntites.Admin;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class MissingDistanceAttractionsRecords : IMissingDistanceAttractionsRecords
    {
        ServiceClient.MissingDistanceAttractionsRecords.IMissingDistanceAttractionsRecords _client = new ServiceClient.MissingDistanceAttractionsRecords.MissingDistanceAttractionsRecordsClient();

        public List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsGet()
        {
            try
            {
                return _client.Admin_MissingDistanceAttractionsRecordsGet();
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
                return _client.Admin_MissingDistanceAttractionsRecordsXAttractionsGet(MissingDistanceAttractionsRecordsID);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
