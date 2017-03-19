using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGoAdmin.Repository.Interface
{
    public interface IMissingDistanceAttractionsRecords
    {
        List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsGet();

        List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsXAttractionsGet(int MissingDistanceAttractionsRecordsID);
    }
}