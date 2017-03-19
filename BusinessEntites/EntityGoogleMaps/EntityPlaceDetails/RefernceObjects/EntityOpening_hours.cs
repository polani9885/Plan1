using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityPlaceDetails.RefernceObjects
{
    public class EntityOpening_hours
    {
        public string open_now { get; set; }

        public List<EntityPeriods> periods { get; set; }

        public string[] weekday_text { get; set; }
    }
}
