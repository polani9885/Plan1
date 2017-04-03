using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityPlaceDetails.RefernceObjects
{
    public class EntityResult
    {
        public List<EntityAddress_components> address_components { get; set; }

        public string adr_address { get; set; }

        public string formatted_address { get; set; }

        public string formatted_phone_number { get; set; }

        public EntityGeometry geometry { get; set; }

        public string icon { get; set; }

        public string id { get; set; }

        public string international_phone_number { get; set; }

        public string name { get; set; }

        public EntityOpening_hours opening_hours { get;set;}

        public List<EntityPhotos> photos { get; set; }

        public string place_id { get; set; }

        public string rating { get; set; }

        public string reference { get; set; }

        public List<EntityReviews> reviews { get; set; }

        public string scope { get; set; }

        public string[] types { get; set; }

        public string url { get; set; }

        public string utc_offset { get; set; }

        public string vicinity { get; set; }

        public string website { get; set; }

        public string price_level { get; set; }
    }
}
