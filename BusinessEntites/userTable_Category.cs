using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    [Serializable]    
    [DataContract]
    public class userTable_Category
    {
        [DataMember]
        public string CategoryID { get; set; }

        [DataMember]
        public string CategoryName { get; set; }
    }
}
