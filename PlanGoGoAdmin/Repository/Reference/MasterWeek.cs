using BusinessEntites.Admin;
using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class MasterWeek: IMasterWeek
    {
        PlanGoGoAdmin.MasterWeek.IMasterWeek _client = new PlanGoGoAdmin.MasterWeek.MasterWeekClient();

        public List<MasterWeekDTO> Admin_MasterWeekGet()
        {
            try
            {
                return _client.Admin_MasterWeekGet();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}