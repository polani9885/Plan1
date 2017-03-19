using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace PlanGoGoAdmin.Models.Attractions
{
    public class ModelAttractions
    {

        public string ErrorMessage { get; set; }
        public int AttractionsId { get; set; }

        public int CountryId { get; set; }

        public int StateId { get; set; }

        [DataMember]
        [StringLength(250)]
        [Required(ErrorMessage = "Attraction Name should not be blank")]
        public string AttractionName { get; set; }
        [DataMember]
        [StringLength(250)]
        [Required(ErrorMessage = "Address One should not be blank")]
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
    }
}