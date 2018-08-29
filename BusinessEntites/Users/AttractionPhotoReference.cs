using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    [DataContract]
    public class AttractionPhotoReference
    {
        [DataMember]
        public string PhotoURL { get; set; }
        [DataMember]
        public int AttractionPhotosId { get; set; }
        [DataMember]
        public string Photo_reference { get; set; }
    }
}
