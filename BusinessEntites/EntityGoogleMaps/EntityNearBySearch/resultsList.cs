using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityGoogleMaps.EntityNearBySearch
{
    public class ResultsList
    {
        public string icon { get; set; }

        public string id { get; set; }

        public string name { get; set; }

        public geometryList geometry { get; set; }
        public string vicinity { get; set; }

        public string[] types { get; set; }

        public string place_id { get; set; }

        public string formatted_address { get; set; }

    }
}
