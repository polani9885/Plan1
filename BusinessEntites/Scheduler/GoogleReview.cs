using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    [DataContract]
    public class GoogleReview
    {
        [DataMember]
        public int Rating { get; set; }

        [DataMember]
        public string Author_name { get; set; }

        [DataMember]
        public string Author_url { get; set; }

        [DataMember]
        public string Language { get; set; }

        [DataMember]
        public string Profile_photo_url { get; set; }

        [DataMember]
        public string Text { get; set; }

        //[DataMember]
        //public DateTime CreatedDate {get;set;}
    }
}
