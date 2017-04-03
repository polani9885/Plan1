using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    public class GetPlaceDetails
    {
        public int AttractionsId { get; set; }

        public string GoogleSearchText { get; set; }

        public string PlaceId { get; set; }

        public string AttractionName { get; set; }
    }
}
