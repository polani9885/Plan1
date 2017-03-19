using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace PlanGoGoAdmin.Models.Country
{
    public class ModelCountry
    {
        public int CountryId { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "Country Name should not be blank")]
        public string CountryName { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "Country short name should not be blank")]
        public string CountryShortName { get; set; }


        public bool IsDefault { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }

        public string ErrorMessage { get; set; }
    }
}