using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using BusinessEntites;
using PlanGoGoService.BaseClasses;

namespace PlanGoGoService.Admin
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "AttractionsActiveStatus" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select AttractionsActiveStatus.svc or AttractionsActiveStatus.svc.cs at the Solution Explorer and start debugging.
    public class AttractionsActiveStatus : BaseReference,IAttractionsActiveStatus
    {
        public GetAttractionOpenTime Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId(int AttractionsActiveStatusId)
        {
            try
            {
                return _businessAttractionsActiveStatus.Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId(AttractionsActiveStatusId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
