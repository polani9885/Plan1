using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites.Common;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class Attractions : IAttractions
    {
        PlanGoGoAdmin.Attractions.IAttractions _client = new PlanGoGoAdmin.Attractions.AttractionsClient();
        public List<AttractionsDTO> AttractionsCheckExists(AttractionsDTO attractionsDTO)
        {
            try
            {
                return _client.AttractionsCheckExists(attractionsDTO);
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
                return _client.AttractionsOnAttractionsId(attractionsDTO);
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
                return _client.AttractionsOnCityId(attractionsDTO);
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
                _client.AttractionsUpdate(attractionsDTO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}