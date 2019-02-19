using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGoAdmin.Models.ManageMasterGoogleType
{
    public class ModelManageMasterGoogleType
    {
        public string ErrorMessage { get; set; }

        public int GoogleTypeID { get; set; }

        public string TypeName { get; set; }

        public bool IsNeeded { get; set; }
        public bool DisplayForUser { get; set; }

        public string ViewTime { get; set; }

        public bool ExtraSearch { get; set; }
    }
}