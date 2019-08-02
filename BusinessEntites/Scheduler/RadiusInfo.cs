using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    public class RadiusInfo
    {
        public string Latitude { get; set; }
        public string Longitude { get; set; }

        public int AttractionsId { get; set; }

        public string AttractionName { get; set; }
    }
}
