using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Common
{
    public class MissingDataAttractionDTO
    {
        public int AttractionsId { get; set; }

        public int MissingDistanceAttractionsRecordsXAttractionsID { get; set; }
    
        public string DestinationText { get; set; }

        public string SourceText { get; set; }

        public int MasterTravelModeID { get; set; }
    }
}
