using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IMasterWeek
    {
        [OperationContract]
        List<MasterWeekDTO> Admin_MasterWeekGet();
    }
}