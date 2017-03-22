using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    public class MasterCountryScheduler
    {
        public int CountryId { get; set; }

        public string CountryName { get; set; }

        public string CountryShortName { get; set; }

        public string ServerName { get; set; }

        public bool IsWindowsAccess { get; set; }

        public string UserName { get; set; }

        public string Password { get; set; }
        public string DatabaseName { get; set; }
    }
}
