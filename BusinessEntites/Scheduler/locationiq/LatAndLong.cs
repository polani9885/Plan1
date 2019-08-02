using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler.locationiq
{
    public class LatAndLong
    {
        public string place_id { get; set; }
        public string licence { get; set; }
        public string lat { get; set; }
        public string lon { get; set; }
        public string display_name { get; set; }
        public string[] boundingbox { get; set; }
        public string importance { get; set; }
    }
}
