using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    public class GetAttractionOpenTime
    {
        public int AttractionsId { get; set; }

        public string WeekName { get; set; }

        public string OpenTime { get; set; }

        public string CloseTime { get; set; }

        public int AttractionsActiveStatusId{get;set;}

        public int MasterWeekId { get; set; }
    }
}
