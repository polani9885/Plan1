using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    [DataContract]
    public class GetNextNearestLocation
    {
        [DataMember]
        public int SourceAttractionId { get; set; }

        [DataMember]
        public int DestinationAttractionId { get; set; }

        [DataMember]
        public string Distance { get; set; }

        [DataMember]
        public DateTime TravelTime { get; set; }

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
        public DateTime TimeRequiredToView { get; set; }

        [DataMember]
        public DateTime ViewTime { get; set; }

    }
}
