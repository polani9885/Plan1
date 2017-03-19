using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Admin
{
    [Serializable]
    [DataContract]
    public class MasterStateDTO
    {
        [DataMember]
        public int StateId { get; set; }
        [DataMember]
        public string StateName { get; set; }
        [DataMember]
        public int CountryId { get; set; }
        [DataMember]
        public string StateShortName { get; set; }
        [DataMember]
        public string CountryName { get; set; }

        [DataMember]
        public bool IsDefault { get; set; }
    }
}
