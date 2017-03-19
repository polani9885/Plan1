using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace PlanGoGoAdmin.Models.User
{
    public class ModelAddUpdateUser
    {
        public string ErrorMessage { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "User name should not be blank")]
        public string UserName { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "Password should not be blank")]
        public string Password { get; set; }

        [DataMember]
        public int AdminUserId { get; set; }
    }
}