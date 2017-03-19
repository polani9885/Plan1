using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    [DataContract]
    public class UserAttractionEntity
    {
        [DataMember]
        public int UserAttractionId { get; set; }
        [DataMember]
        public int UserId { get; set; }
        [DataMember]
        public string TourName { get; set; }
        [DataMember]
        public decimal TotalExpenditure { get; set; }
        [DataMember]
        public int TotalDistance { get; set; }
        [DataMember]
        public int NoOfHours { get; set; }
        [DataMember]
        public int NoOfNights { get; set; }
        [DataMember]
        public DateTime CreatedUTCDate { get; set; }
        [DataMember]
        public string CreatedBy { get; set; }
        [DataMember]
        public DateTime ModifiedUTCDate { get; set; }
        [DataMember]
        public string ModifiedBy { get; set; }
        [DataMember]
        public int NoOfLunchSlots { get; set; }
        [DataMember]
        public int NoOfBreakFeastSlots { get; set; }
        [DataMember]
        public int NoOfDinnerSlots { get; set; }
        [DataMember]
        public int NoOfHotelsVisited { get; set; }
        [DataMember]
        public DateTime TravelDate { get; set; }
        [DataMember]
        public int StartLocationId { get; set; }
        [DataMember]
        public int EndLocationId { get; set; }
        [DataMember]
        public List<userTable_OrderAttraction> userTable_OrderAttraction { get; set; }

    }
}
