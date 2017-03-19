using BusinessEntites.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IAttractions
    {
        [OperationContract]
        void AttractionsUpdate(AttractionsDTO attractionsDTO);

        [OperationContract]
        List<AttractionsDTO> AttractionsCheckExists(AttractionsDTO attractionsDTO);

        [OperationContract]
        List<AttractionsDTO> AttractionsOnCityId(AttractionsDTO attractionsDTO);

        [OperationContract]
        AttractionsDTO AttractionsOnAttractionsId(AttractionsDTO attractionsDTO);
    }
}