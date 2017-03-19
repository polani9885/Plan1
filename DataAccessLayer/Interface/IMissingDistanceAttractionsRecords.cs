using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IMissingDistanceAttractionsRecords
    {
        List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsGet();

        List<MissingDistanceAttractionsRecordsDTO> Admin_MissingDistanceAttractionsRecordsXAttractionsGet(int MissingDistanceAttractionsRecordsID);
    }
}
