using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Custom
{
    public class InputParameters
    {
        public int TravelModeId { get; set; }

        public int CountryId { get; set; }

        public List<GroupWithDateAttractions> ListGroupWithDateAttractions { get; set; }

        public List<UserTable_UpdatedBreaksTemp> UpdatedBreaks { get; set; }
    }
}
