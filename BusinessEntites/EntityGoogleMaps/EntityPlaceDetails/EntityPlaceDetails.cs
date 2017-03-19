using BusinessEntites.EntityPlaceDetails.RefernceObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityPlaceDetails
{
    public class EntityPlaceDetails
    {
        public List<EntityDebug_log> debug_log { get; set; }

        public string[] html_attributions { get; set; }

        public EntityResult result { get; set; }

        public string status { get; set; }
    }
}
