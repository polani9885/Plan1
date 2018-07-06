using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    public class UserTable_UpdatedBreaksTemp
    {
        [DataMember]
        public string RequestDate { get; set; }

        [DataMember]
        public bool IsUserInterestedDayBreak { get; set; }

        [DataMember]
        public string UpdateDayEndTime { get; set; }

        [DataMember]
        public string UpdateDayStartTime { get; set; }

        [DataMember]
        public bool IsUserInterestedLunchBreak { get; set; }

        [DataMember]
        public string UpdatedLunchTime { get; set; }

        [DataMember]
        public string UpdatedLunchMinimumTime { get; set; }

        [DataMember]
        public bool IsUserInterestedBreak { get; set; }

        [DataMember]
        public string UpdatedBreakTime { get; set; }

        [DataMember]
        public string UpdatedBreakMinimumTime { get; set; }

        [DataMember]
        public bool IsUserInterestedDinnerBreak { get; set; }

        [DataMember]
        public string UpdatedDinnerTime { get; set; }

        [DataMember]
        public string UpdateDinnerMinimumTime { get; set; }
    }
}
