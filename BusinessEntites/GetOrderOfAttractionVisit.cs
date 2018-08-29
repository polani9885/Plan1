using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
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

        public string EventEndTime { get; set; }

        public string TravelType { get; set; }

        public string SourceIcon { get; set; }

        public string DestinationIcon { get; set; }

        public int RecordCount { get; set; }

        public bool IsOrderUpdated { get; set; }

        public int UpdatedOrder { get; set; }

        public bool IsUpdatedViewTime { get; set; }

        public string UpdatedTime { get; set; }

        public bool IsPersonalRequest { get; set; }

        [DataMember]
        public bool IsLunchDinnerBreakTime { get; set; }

        [DataMember]
        public bool IsDistanceCalculationMissing { get; set; }

        public string SourceDirection { get; set; }
        public string DestinationDirection { get; set; }
        public string SourceRating { get; set; }
        public string DestinationRating { get; set; }
        public string SourceRatingTotal { get; set; }

        public string DestinationRatingTotal { get; set; }

        public string SourceSearchText { get; set; }
        public string DestinationSearchText { get; set; }

        public string SourceOpenTime { get; set; }

        public string SourceCloseTime { get; set; }

        public string DestinationOpenTime { get; set; }

        public string DestinationCloseTime { get; set; }

        public string SourcePhoto { get; set; }

        public string DestinationPhoto { get; set; }

        public string SourceLongitude { get; set; }

        public string SourceLatitude { get; set; }

        public string DestinationLongitude { get; set; }

        public string DestinationLatitude { get; set; }

        public string SourcePhotoUrl { get; set; }

        public string DestinationPhotoUrl { get; set; }

        //public List<userTable_Category> userTable_Category { get; set; }
    }
}
