using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    public class user_AttractionsActiveStatus
    {
        public int AttractionsId { get; set; }

        public DateTime OpenTime { get; set; }

        public DateTime CloseTime { get; set; }

        public int MasterWeekId { get; set; }
    }
}
