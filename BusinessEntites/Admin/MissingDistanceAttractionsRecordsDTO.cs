using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Admin
{
    [DataContract]
    public class MissingDistanceAttractionsRecordsDTO
    {
        public int AttractionsID { get; set; }
        [DataMember]
        public int MasterTravelModeID { get; set; }
        [DataMember]
        public string CreatedDate { get; set; }
        [DataMember]
        public string CreatedBy { get; set; }
        [DataMember]
        public string AttractionName { get; set; }
        [DataMember]
        public string TravelType { get; set; }
        [DataMember]
        public string DesinationAttractionName { get; set; }
        [DataMember]
        public int MissingDistanceAttractionsRecordsID { get; set; }
    }
}
