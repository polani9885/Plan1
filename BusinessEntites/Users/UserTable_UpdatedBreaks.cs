using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    public class UserTable_UpdatedBreaks
    {
        [DataMember]
        public DateTime RequestDate { get; set; }

        [DataMember]
        public bool IsUserInterestedDayBreak { get; set; }

        [DataMember]
        public TimeSpan UpdateDayEndTime { get; set; }

        [DataMember]
        public TimeSpan UpdateDayStartTime { get; set; }

        [DataMember]
        public bool IsUserInterestedLunchBreak { get; set; }

        [DataMember]
        public TimeSpan UpdatedLunchTime { get; set; }

        [DataMember]
        public TimeSpan UpdatedLunchMinimumTime { get; set; }

        [DataMember]
        public bool IsUserInterestedBreak { get; set; }

        [DataMember]
        public TimeSpan UpdatedBreakTime { get; set; }

        [DataMember]
        public TimeSpan UpdatedBreakMinimumTime { get; set; }

        [DataMember]
        public bool IsUserInterestedDinnerBreak { get; set; }

        [DataMember]
        public TimeSpan UpdatedDinnerTime { get; set; }

        [DataMember]
        public TimeSpan UpdateDinnerMinimumTime { get; set; }
    }
}
