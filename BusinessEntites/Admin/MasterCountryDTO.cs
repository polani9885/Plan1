using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Admin
{
    public class MasterCountryDTO
    {
       public int CountryId { get; set; }
        public string CountryName { get; set; }
        public string CountryShortName { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        
        public bool IsDefault { get; set; }
    }
}
