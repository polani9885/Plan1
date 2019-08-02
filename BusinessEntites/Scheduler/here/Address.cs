using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler.here
{
    public class Address
    {
        public string text { get; set; }

        public string postalCode { get; set; }
        public string city { get; set; }

        public string county { get; set; }
        public string stateCode { get; set; }
        public string country { get; set; }
        public string countryCode { get; set; }
    }
}
