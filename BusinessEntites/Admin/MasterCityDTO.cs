﻿using System;
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

        [DataMember]
        public string Latitude { get; set; }
        [DataMember]
        public string Longitude { get; set; }

        [DataMember]
        public string CountryName { get; set; }

        [DataMember]
        public string CountryShortName { get; set; }

        [DataMember]
        public bool IsGettingNearLocationDone { get; set; }

        [DataMember]
        public string StateName { get; set; }
    }
}
