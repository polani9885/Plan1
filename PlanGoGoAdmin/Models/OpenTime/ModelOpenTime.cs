using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace PlanGoGoAdmin.Models.OpenTime
{
    public class ModelOpenTime
    {
        public int AttractionsId { get; set; }

        public string ErrorMessage { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "Week Name should not be blank")]
        public string WeekName { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "Open Time should not be blank")]
        public string OpenTime { get; set; }

        [DataMember]
        [StringLength(50)]
        [Required(ErrorMessage = "Close Time should not be blank")]
        public string CloseTime { get; set; }

        public int AttractionsActiveStatusId { get; set; }

        public List<MasterWeekDTO> listMasterWeek { get; set; }

        public int MasterWeekId { get; set; }
    }
}