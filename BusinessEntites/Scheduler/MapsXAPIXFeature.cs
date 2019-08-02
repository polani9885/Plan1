using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler
{
    public class MapsXAPIXFeature
    {
        public int MapsId { get; set; }
        public string API { get; set; }
        public string apiKeyOrapiId { get; set; }
        public int MapsCredentialsId { get; set; }
        public int MapFeaturesId { get; set; }
        public string apiCode { get; set; }
    }
}
