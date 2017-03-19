using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGoAdmin.Repository.Interface
{
    public interface IAttractionTravelTimeDistance
    {
        List<AttractionTravelTimeDistanceDTO> Admin_AttractionTravelTimeDistanceGet(int AttractionsId);
    }
}