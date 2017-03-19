using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites.Admin;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class AttractionTravelTimeDistance: IAttractionTravelTimeDistance
    {
        PlanGoGoAdmin.AttractionTravelTimeDistance.IAttractionTravelTimeDistance _client = new PlanGoGoAdmin.AttractionTravelTimeDistance.AttractionTravelTimeDistanceClient();

        public List<AttractionTravelTimeDistanceDTO> Admin_AttractionTravelTimeDistanceGet(int AttractionsId)
        {
            try
            {
                return _client.Admin_AttractionTravelTimeDistanceGet(AttractionsId);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}