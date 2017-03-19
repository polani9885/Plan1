using BusinessEntites.Common;
using PlanGoGoService.BaseClasses;
using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace PlanGoGoService.Admin
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Attractions" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Attractions.svc or Attractions.svc.cs at the Solution Explorer and start debugging.
    public class Attractions : BaseReference, IAttractions
    {
        
        public void AttractionsUpdate(AttractionsDTO attractionsDTO)
        {
            try
            {
                _businessAttractions.AttractionsUpdate(attractionsDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        
        public List<AttractionsDTO> AttractionsCheckExists(AttractionsDTO attractionsDTO)
        {
            try
            {
                return _businessAttractions.AttractionsCheckExists(attractionsDTO);
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
                return _businessAttractions.AttractionsOnCityId(attractionsDTO);
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
                return _businessAttractions.AttractionsOnAttractionsId(attractionsDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
