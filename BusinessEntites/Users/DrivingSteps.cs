using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    public class DrivingSteps
    {
        public int RecordCount { get; set; }

        public List<User_GetDirectionsSteps> DirectionSteps { get; set; }
    }
}
