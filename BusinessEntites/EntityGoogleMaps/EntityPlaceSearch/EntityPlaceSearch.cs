using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityPlaceSearch
{
    public class EntityPlaceSearch
    {
        public List<Entitydebug_log> debug_log { get; set; }

        public string[] html_attributions { get; set; }

        public List<EntityResults> results { get; set; }

        public string status { get; set; }
    }
}
