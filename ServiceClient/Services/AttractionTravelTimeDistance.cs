using BusinessEntites.Admin;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class AttractionTravelTimeDistance : IAttractionTravelTimeDistance
    {
        ServiceClient.AttractionTravelTimeDistance.IAttractionTravelTimeDistance _client = new ServiceClient.AttractionTravelTimeDistance.AttractionTravelTimeDistanceClient();

        public List<AttractionTravelTimeDistanceDTO> Admin_AttractionTravelTimeDistanceGet(int AttractionsId)
        {
            try
            {
                return _client.Admin_AttractionTravelTimeDistanceGet(AttractionsId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
