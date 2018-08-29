using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    [DataContract]
    public class BreakInformation
    {
        [DataMember]
        public int BreakInformationId { get; set; }

        [DataMember]
        public string BreakType { get; set; }

        [DataMember]
        public string StartTime { get; set; }

        [DataMember]
        public string MinimumTime { get; set; }

        [DataMember]
        public string Display { get; set; }

        [DataMember]
        public string EndTime { get; set; }
    }
}
