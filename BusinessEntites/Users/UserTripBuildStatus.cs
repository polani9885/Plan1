using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    public class UserTripBuildStatus
    {
        public int UserTripBuildStatusId { get; set; }

        public int UserTripId { get; set; }

        public bool IsError { get; set; }

        public int UserTripBuildMessageId { get; set; }

        public string FormattedMessage { get; set; }
    }
}
