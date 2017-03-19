using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Interfaces
{
    public interface IMasterWeek
    {
        List<MasterWeekDTO> Admin_MasterWeekGet();
    }
}
