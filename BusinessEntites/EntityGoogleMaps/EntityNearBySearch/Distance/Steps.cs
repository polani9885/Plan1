using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityGoogleMaps.EntityNearBySearch.Distance
{
    public class Steps
    {
        public Distance distance { get; set; }

        public Duration duration { get; set; }

        public Location end_location { get; set; }

        public Location start_location { get; set; }

        public string travel_mode { get; set; }
    }
}
