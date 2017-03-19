using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.EntityAutoComplete.ReferenceObjects
{
    public class EntityPredictions
    {
        public string description { get; set; }

        public string id { get; set; }

        public List<EntityMatched_substrings> matched_substrings { get; set; }

        public string place_id { get; set; }

        public string reference { get; set; }

        public List<EntityTerms> terms { get; set; }

        public string[] types { get; set; }
    }
}
