using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Admin
{
    public class AttractionTravelTimeDistanceDTO
    {
        public int AttractionTravelTimeDistanceId { get; set; }

        public int SourceAttractionId { get; set; }

        public int DestinationAttractionId { get; set; }

        public int TravelModeId { get; set; }

        public string TravelTime { get; set; }

        public int Distance { get; set; }

        public string SourceAttractionName { get; set; }

        public string DestinationAttractionName { get; set; }

        public string TravelType { get; set; }
    }
}
