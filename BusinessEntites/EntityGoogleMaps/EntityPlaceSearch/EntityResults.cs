using BusinessEntites.EntityGoogleMaps.EntityPlaceSearch.ReferenceObjects;
using BusinessEntites.EntityPlaceSearch.ReferenceObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityPlaceSearch
{
    public class EntityResults
    {
        public EntityGeometry geometry { get; set; }

        public string icon { get; set; }

        public string id { get; set; }

        public string name { get; set; }

        public EntityOpening_hours opening_hours { get; set; }

        public List<EntityPhotos> photos { get; set; }

        public string place_id { get; set; }

        public string reference { get; set; }

        public string scope { get; set; }

        public string[] types { get; set; }

        public string vicinity { get; set; }

        public List<address_components> address_components { get; set; }
    }
}
