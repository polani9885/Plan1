using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace PlanGoGoAdmin.Models.MasterCity
{
    public class ModelMasterCity
    {
        public int StateId { get; set; }

        public int CityId { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "City Name should not be blank")]
        public string CityName { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "City short name should not be blank")]
        public string CityShortName { get; set; }
        public string CreatedBy { get; set; }

        public bool IsDefault { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }

        public string ErrorMessage { get; set; }

        public int CountryId { get; set; }
    }
}