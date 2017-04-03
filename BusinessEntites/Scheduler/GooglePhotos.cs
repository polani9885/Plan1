using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    [DataContract]
    public class GooglePhotos
    {
        [DataMember]
        public int Height { get; set; }

        [DataMember]
        public string Html_attributions { get; set; }

        [DataMember]
        public string Photo_reference { get; set; }

        [DataMember]
        public int Width { get; set; }
    }
}
