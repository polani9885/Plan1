﻿using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IMasterWeek
    {
        List<MasterWeekDTO> Admin_MasterWeekGet();
    }
}
