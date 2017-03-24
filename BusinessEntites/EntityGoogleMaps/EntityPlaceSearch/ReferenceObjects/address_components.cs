using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityGoogleMaps.EntityPlaceSearch.ReferenceObjects
{
    public class address_components
    {
        public string long_name { get; set; }

        public string short_name { get; set; }

        public string[] types { get; set; }
    }
}
