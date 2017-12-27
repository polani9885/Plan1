using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.JsonParameters
{
    [DataContract]
    public class CityVisitList
    {
        [DataMember]
        public int RecordIndex { get; set; }

        [DataMember]
        public int CityId { get; set; }

    }
}
