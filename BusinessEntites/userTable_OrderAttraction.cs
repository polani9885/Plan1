using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    [DataContract]
    public class userTable_OrderAttraction
    {
        [DataMember]
        public int OrderNumber { get; set; }

        [DataMember]
        public int SourceAttractionId { get; set; }

        [DataMember]
        public int DestinationAttractionId { get; set; }

        [DataMember]
        public int Distance { get; set; }

        [DataMember]
        public int TravelTime { get; set; }

        [DataMember]
        public int TravelModeId { get; set; }

        [DataMember]
        public string SourceAttractionName { get; set; }

        [DataMember]
        public string DestinationAttractionName { get; set; }

        [DataMember]
        public DateTime DateAndTime { get; set; }

        [DataMember]
        public DateTime ReachTime { get; set; }

        [DataMember]
        public int TimeRequiredToView { get; set; }

        [DataMember]
        public DateTime ViewTime { get; set; }
    }
}
