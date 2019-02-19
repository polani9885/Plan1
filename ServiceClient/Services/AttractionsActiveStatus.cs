using BusinessEntites;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class AttractionsActiveStatus : IAttractionsActiveStatus
    {
        ServiceClient.AttractionsActiveStatus.IAttractionsActiveStatus _client = new ServiceClient.AttractionsActiveStatus.AttractionsActiveStatusClient();

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
