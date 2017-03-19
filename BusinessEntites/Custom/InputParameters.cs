using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Custom
{
    public class InputParameters
    {
        public int TravelModeId { get; set; }

        public int SourceAttractionID { get; set; }

        public int DestinationAttractionID { get; set; }

        public string AttractionID { get; set; }

        public string StartDate { get; set; }

        public string StartTime { get; set; }

        public List<GroupWithDateAttractions> ListGroupWithDateAttractions { get; set; }
    }
}
