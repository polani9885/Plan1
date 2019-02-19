using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGoAdmin.Models.BreakInformation
{
    public class ModelBreakInformation
    {
        public int BreakInformationId { get; set; }

        public string BreakType { get; set; }

        public string StartTime { get; set; }

        public string MinimumTime { get; set; }

        public string Display { get; set; }

        public string EndTime { get; set; }

        public string ErrorMessage { get; set; }
    }
}