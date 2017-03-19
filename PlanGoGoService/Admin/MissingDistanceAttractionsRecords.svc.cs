using BusinessEntites.Admin;
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
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "MissingDistanceAttractionsRecords" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select MissingDistanceAttractionsRecords.svc or MissingDistanceAttractionsRecords.svc.cs at the Solution Explorer and start debugging.
    public class MissingDistanceAttractionsRecords : BaseReference, IMissingDistanceAttractionsRecords
    {
        public List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsGet()
        {
            try
            {
                return _businessMissingDistanceAttractionsRecords.Admin_MissingDistanceAttractionsRecordsGet();
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
                return _businessMissingDistanceAttractionsRecords.Admin_MissingDistanceAttractionsRecordsXAttractionsGet(MissingDistanceAttractionsRecordsID);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
