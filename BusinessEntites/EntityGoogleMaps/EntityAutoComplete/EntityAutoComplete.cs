using BusinessEntites.EntityAutoComplete.ReferenceObjects;
using BusinessEntites.EntityPlaceDetails.RefernceObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityAutoComplete
{
    public class EntityAutoComplete
    {
        public EntityDebug_log debug_log { get; set; }

        public List<EntityPredictions> predictions { get; set; }

        public string status { get; set; }
    }
}
