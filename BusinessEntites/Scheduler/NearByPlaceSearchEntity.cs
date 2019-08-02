using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    public class NearByPlaceSearchEntity
    {
        public string AttractionName { get; set; }

        public string GoogleSearchText { get; set; }

        public string PlaceId { get; set; }

        public string Latitude { get; set; }

        public string Longitude { get; set; }

        public string types { get; set; }
    }
}
