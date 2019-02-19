using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.JsonParameters
{
    public class GetAttractionXCategoryParamerter
    {
        public List<userTable_OnlyId> attractionsId { get; set; }
        public int countryId { get; set; }

    }
}
