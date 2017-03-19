using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IMissingDistanceAttractionsRecords
    {
        [OperationContract]
        List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsGet();

        [OperationContract]
        List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsXAttractionsGet(int MissingDistanceAttractionsRecordsID);
    }
}