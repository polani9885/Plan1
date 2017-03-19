using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.JsonParameters
{
    [Serializable]
    [DataContract]
    public class FilterLocations
    {
        [DataMember]
        public string enterLocationName { get; set; }

       // [DataMember]
        //public List<int> categoryList { get; set; }

        [DataMember]
        public string categoryList { get; set; }
    }
}
