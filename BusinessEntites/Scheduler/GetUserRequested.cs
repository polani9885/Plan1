using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    public class GetUserRequested
    {
        public int UserRequestedId { get; set; }

        public int UserTripId { get; set; }

        public int AttractionsId { get; set; }

        public string GoogleSearchText { get; set; }

        public int CountryId { get; set; }

        public string CountryName { get; set; }

        public string CountryShortName { get; set; }
    }
}
