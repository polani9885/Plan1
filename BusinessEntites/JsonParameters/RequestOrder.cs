using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.JsonParameters
{
    public class RequestOrder
    {
        [DataMember]
        public List<UserTable_AttractionRequestOrder> attractionRequestOrder { get; set; }
    }
}
