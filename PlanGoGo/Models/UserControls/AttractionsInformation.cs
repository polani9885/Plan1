using BusinessEntites;
using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace PlanGoGo.Models.UserControls
{
    [DataContract]
    public class AttractionsInformation
    {
        [DataMember]
        public List<GetOrderOfAttractionVisit> attractionsList { get; set; }

        [DataMember]
        public UserTable_UpdatedBreaksTemp updatedBreaks { get; set; }

        [DataMember]
        public string divId { get; set; }
    }
}