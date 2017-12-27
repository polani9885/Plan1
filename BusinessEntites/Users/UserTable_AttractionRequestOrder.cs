using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    public class UserTable_AttractionRequestOrder
    {
        [DataMember]
        public int AttractionId { get; set; }

        [DataMember]
        public int OrderNumber { get; set; }
    }
}
