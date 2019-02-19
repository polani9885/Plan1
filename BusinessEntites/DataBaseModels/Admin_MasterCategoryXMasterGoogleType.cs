using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.DataBaseModels
{
    [DataContract]
    public class Admin_MasterCategoryXMasterGoogleType
    {
        [DataMember]
        public int MasterCategoryXMasterGoogleTypeId { get; set; }

        [DataMember]
        public int MasterCategoryId { get; set; }

        [DataMember]
        public int MasterGoogleTypeId { get; set; }
    }
}
