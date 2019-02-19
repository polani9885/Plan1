using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.DataBaseModels
{
    [DataContract]
    public class MasterGoogleType
    {
        [DataMember]
        public int GoogleTypeID { get; set; }
        [DataMember]
        public string TypeName { get; set; }
        [DataMember]
        public bool IsNeeded { get; set; }
        [DataMember]
        public bool DisplayForUser { get; set; }
        [DataMember]
        public string ViewTime { get; set; }
        [DataMember]
        public bool ExtraSearch { get; set; }
    }
}
