using BusinessEntites.Common;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class Attractions : IAttractions
    {
        ServiceClient.Attractions.IAttractions _client = new ServiceClient.Attractions.AttractionsClient();
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
