using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IAttractionTravelTimeDistance
    {
        [OperationContract]
        List<AttractionTravelTimeDistanceDTO> Admin_AttractionTravelTimeDistanceGet(int AttractionsId);
    }
}