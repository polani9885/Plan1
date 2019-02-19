using BusinessEntites.Admin;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class MasterWeek : IMasterWeek
    {
        ServiceClient.MasterWeek.IMasterWeek _client = new ServiceClient.MasterWeek.MasterWeekClient();

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
