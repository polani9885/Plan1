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
    public class MasterCityDTO
    {
        [DataMember]
        public int CityId { get; set; }

        [DataMember]
        public int StateId { get; set; }

        [DataMember]
        public int CountryId { get; set; }

        [DataMember]
        public string CityName { get; set; }

        [DataMember]
        public string CityShortName { get; set; }

        [DataMember]
        public bool IsDefault { get; set; }
    }
}
