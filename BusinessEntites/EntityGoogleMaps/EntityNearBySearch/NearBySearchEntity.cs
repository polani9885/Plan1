using BusinessEntites.EntityGoogleMaps.EntityNearBySearch.Distance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityGoogleMaps.EntityNearBySearch
{
    public class NearBySearchEntity
    {
        public List<ResultsList> results { get; set; }

        public List<Routes> routes { get; set; }

        public String next_page_token { get; set; }
    }
}
