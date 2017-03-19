using BusinessEntites.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IAttractions
    {
        void AttractionsUpdate(AttractionsDTO attractionsDTO);        

        List<AttractionsDTO> AttractionsCheckExists(AttractionsDTO attractionsDTO);

        List<AttractionsDTO> AttractionsOnCityId(AttractionsDTO attractionsDTO);


        AttractionsDTO AttractionsOnAttractionsId(AttractionsDTO attractionsDTO);
    }
}
