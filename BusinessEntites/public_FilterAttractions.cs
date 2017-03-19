using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    public class public_FilterAttractions
    {
        public int AttractionsId { get; set; }

        public string AttractionName { get; set; }

        public string AddressOne { get; set; }

        public string AddressTwo { get; set; }

        public int CityId { get; set; }

        public int CategoryId { get; set; }

        public string Longitude { get; set; }

        public string Latitude { get; set; }

        public string PlaceId { get; set; }

        public int RankId { get; set; }

        public DateTime CreatedDate { get; set; }

        public string CreatedBy { get; set; }

        public DateTime ModifiedDate { get; set; }

        public string ModifiedBy { get; set; }

        public string GoogleSearchText { get; set; }
    }
}
