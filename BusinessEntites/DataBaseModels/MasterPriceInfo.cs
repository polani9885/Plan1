using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.DataBaseModels
{
    public class MasterPriceInfo
    {
        public int MasterPriceInfoId { get; set; }
        public int PriveLevel { get; set; }
        public decimal Food { get; set; }
        public decimal Stay { get; set; }

        public string ErrorMessage { get; set; }

        public List<int> PriveLevelId = new List<int>()
        {
            1,
            2,
            3,
            4,
            5
        };
    }
}
