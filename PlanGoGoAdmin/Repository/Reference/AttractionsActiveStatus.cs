using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class AttractionsActiveStatus : IAttractionsActiveStatus
    {
        PlanGoGoAdmin.AttractionsActiveStatus.IAttractionsActiveStatus _client = new PlanGoGoAdmin.AttractionsActiveStatus.AttractionsActiveStatusClient();

        public GetAttractionOpenTime Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId(int AttractionsActiveStatusId)
        {
            try
            {
                return _client.Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId(AttractionsActiveStatusId);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}