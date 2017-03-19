using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using BusinessEntites.Admin;
using PlanGoGoService.BaseClasses;

namespace PlanGoGoService.Admin
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "MasterWeek" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select MasterWeek.svc or MasterWeek.svc.cs at the Solution Explorer and start debugging.
    public class MasterWeek : BaseReference, IMasterWeek
    {
        public List<MasterWeekDTO> Admin_MasterWeekGet()
        {
            try
            {
                return _businessMasterWeek.Admin_MasterWeekGet();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
