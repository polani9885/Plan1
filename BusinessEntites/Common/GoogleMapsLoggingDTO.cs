using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Common
{
    public class GoogleMapsLoggingDTO
    {
        public string MapType { get; set; }
        public string MethodName { get; set; }
        public string CreatedDate { get; set; }
        public string AttractionName { get; set; }
        public string Logitude { get; set; }
        public string Latitude { get; set; }
        public int Counter { get; set; }
    }
}
