using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    [DataContract]
    public class WeekDaysOpenClose
    {
        [DataMember]
        public int WeekdayId { get; set; }

        [DataMember]
        public TimeSpan OpenTime { get; set; }

        [DataMember]
        public TimeSpan CloseTime { get; set; }
    }
}
