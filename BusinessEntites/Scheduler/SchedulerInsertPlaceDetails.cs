using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    public class SchedulerInsertPlaceDetails
    {
        [DataMember]
        public int AttractionsId { get; set; }

        [DataMember]
        public string[] Category { get; set; }

        

        [DataMember]
        public string GoogleWebSite { get; set; }

        [DataMember]
        public string GoogleICon { get; set; }

        [DataMember]
        public string GoogleInternational_phone_number { get; set; }

        [DataMember]
        public string Googleadr_address { get; set; }

        [DataMember]
        public string GoogleName { get; set; }

        [DataMember]
        public decimal GoogleRating { get; set; }

        [DataMember]
        public string GoogleUser_ratings_total { get; set; }

        [DataMember]
        public List<WeekDaysOpenClose> WeekDaysOpenClose { get; set; }

        [DataMember]
        public List<GooglePhotos> GooglePhotos { get; set; }

        [DataMember]
        public List<GoogleReview> GoogleReview { get; set; }

        [DataMember]
        public int Pricelevel { get; set; }

    }
}
