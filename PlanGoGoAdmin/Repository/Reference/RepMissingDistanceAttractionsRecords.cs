using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites.Admin;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class RepMissingDistanceAttractionsRecords: IMissingDistanceAttractionsRecords
    {
        PlanGoGoAdmin.MissingDistanceAttractionsRecords.IMissingDistanceAttractionsRecords _client = new PlanGoGoAdmin.MissingDistanceAttractionsRecords.MissingDistanceAttractionsRecordsClient();

        public List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsGet()
        {
            try
            {
                return _client.Admin_MissingDistanceAttractionsRecordsGet();
            }
            catch(Exception ex)
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