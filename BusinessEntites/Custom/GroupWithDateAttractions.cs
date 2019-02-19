using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Custom
{
    public class GroupWithDateAttractions
    {
        public string GroupDate { get; set; }

        public List<GetOrderOfAttractionVisit> ListGetOrderOfAttractionVisit { get; set; }

        public List<DrivingSteps> DrivingSteps { get; set; }
    }
}
