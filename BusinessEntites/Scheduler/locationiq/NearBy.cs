using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler.locationiq
{
    public class NearBy
    {
        public string lat { get; set; }
        public string lon { get; set; }
        public string tag_type { get; set; }
        public string name { get; set; }
        public int distance { get; set; }
    }
}
