using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Custom
{
    public class StepsConsolidated
    {
        public int distance_Value { get; set; }

        public int duration_Value { get; set; }

        public string end_location_lat { get; set; }

        public string end_location_lng { get; set; }

        public string start_location_lat { get; set; }

        public string start_location_lng { get; set; }

        public string travel_mode { get; set; }

        public int OrderId { get; set; }
    }
}
