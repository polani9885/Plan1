using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace PlanGoGoAdmin.Models.MasterCategory
{
    public class ModelMasterCategory
    {
        public int CategoryId { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "Category Name should not be blank")]
        public string CategoryName { get; set; }

        public string ErrorMessage { get; set; }
    }
}