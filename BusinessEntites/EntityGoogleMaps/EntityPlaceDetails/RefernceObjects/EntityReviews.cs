using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityPlaceDetails.RefernceObjects
{
    public class EntityReviews
    {
        public List<EntityAspects> aspects { get; set; }

        public string author_name { get; set; }

        public string author_url { get; set; }

        public string language { get; set; }

        public string rating { get; set; }

        public string text { get; set; }

        public string time { get; set; }
    }
}
