using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityGoogleMaps.EntityNearBySearch.Distance
{
    public class Legs
    {
        public Distance distance { get; set; }

        public Duration duration { get; set; }

        public List<Steps> steps { get; set; }
    }
}
