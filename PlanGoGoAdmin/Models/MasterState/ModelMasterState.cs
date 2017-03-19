using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace PlanGoGoAdmin.Models.MasterState
{
    public class ModelMasterState
    {
        public int StateId { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "State Name should not be blank")]
        public string StateName { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "State short name should not be blank")]
        public string StateShortName { get; set; }
        public string CreatedBy { get; set; }

        public bool IsDefault { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }

        public string ErrorMessage { get; set; }

        public int CountryId { get; set; }
    }
}