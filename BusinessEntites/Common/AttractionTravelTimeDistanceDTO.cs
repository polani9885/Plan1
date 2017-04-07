using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Common
{
    public class AttractionTravelTimeDistanceDTO
    {
        public int SourceAttractionId { get; set; }

        public int DestinationAttractionId { get; set; }

        public int TravelModeId { get; set; }

        public int TravelTime { get; set; }

        public int Distance { get; set; }
    }
}
