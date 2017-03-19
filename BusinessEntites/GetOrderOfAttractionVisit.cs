using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    public class GetOrderOfAttractionVisit
    {

        public int SourceAttractionId { get; set; }

        public int DestinationAttractionId { get; set; }

        public string Distance { get; set; }

        public string TravelTime { get; set; }

        public int TravelModeId { get; set; }

        public string SourceAttractionName { get; set; }

        public string DestinationAttractionName { get; set; }

        public string DateAndTime { get; set; }

        public string ReachTime { get; set; }

        public string TimeRequiredToView { get; set; }

        public string ViewTime { get; set; }

        public string TravelType { get; set; }

        public string SourceIcon { get; set; }

        public string DestinationIcon { get; set; }

        public int RecordCount { get; set; }

        public bool IsOrderUpdated { get; set; }

        public int UpdatedOrder { get; set; }

        public bool IsUpdatedViewTime { get; set; }

        public string UpdatedTime { get; set; }

        public bool IsPersonalRequest { get; set; }

        public List<userTable_Category> userTable_Category { get; set; }
    }
}
