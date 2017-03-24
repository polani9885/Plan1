using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Common
{
    public class AttractionsDTO
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
        public string GoogleWebSite { get; set; }
        public string GoogleICon { get; set; }
        public string GoogleInternational_phone_number { get; set; }
        public string Googleadr_address { get; set; }
        public string GoogleName { get; set; }
        public string GoogleRating { get; set; }
        public int GoogleUser_ratings_total { get; set; }
        public bool IsUserPersonalRequest { get; set; }
        public bool AttractionTimeExisted { get; set; }

        public string CityName { get; set; }

        public string StateName { get; set; }
        public int CountryId { get; set; }

        public string StateShortName { get; set; }

        public string CityShortName { get; set; }
    }
}
