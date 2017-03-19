using BusinessAccessLayer.Common;
using BusinessAccessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Common;

namespace BusinessAccessLayer.Admin
{
    public class Attractions : BaseBusinessClass, IAttractions, IDisposable
    {
        public List<AttractionsDTO> AttractionsCheckExists(AttractionsDTO attractionsDTO)
        {
            try
            {
                return _dataAccessAttractions.AttractionsCheckExists(attractionsDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public AttractionsDTO AttractionsOnAttractionsId(AttractionsDTO attractionsDTO)
        {
            try
            {
                return _dataAccessAttractions.AttractionsOnAttractionsId(attractionsDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> AttractionsOnCityId(AttractionsDTO attractionsDTO)
        {
            try
            {
                return _dataAccessAttractions.AttractionsOnCityId(attractionsDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void AttractionsUpdate(AttractionsDTO attractionsDTO)
        {
            try
            {
                _dataAccessAttractions.AttractionsUpdate(attractionsDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
