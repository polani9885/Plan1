
using PlanGoGoService.BaseClasses;
using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using BusinessEntites.Admin;

namespace PlanGoGoService.Admin
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "AttractionTravelTimeDistance" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select AttractionTravelTimeDistance.svc or AttractionTravelTimeDistance.svc.cs at the Solution Explorer and start debugging.
    public class AttractionTravelTimeDistance : BaseReference, IAttractionTravelTimeDistance
    {
        public List<AttractionTravelTimeDistanceDTO> Admin_AttractionTravelTimeDistanceGet(int AttractionsId)
        {
            try
            {
                return _businessAttractionTravelTimeDistance.Admin_AttractionTravelTimeDistanceGet(AttractionsId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
