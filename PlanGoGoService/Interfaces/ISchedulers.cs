using BusinessEntites;
using BusinessEntites.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface ISchedulers
    {
        [OperationContract]
        AttractionsDTO Services_CheckAttractionExist(string googleSearchText);

        [OperationContract]
        void Service_TravelDistance(List<user_AttractionTravelTimeDistance> attractionTravelTimeDistance);

        [OperationContract]
        int Services_AddAttraction(AttractionsDTO attractionDTO, List<userTable_Category> Category, List<user_AttractionsActiveStatus> attractionsActiveStatus);

        [OperationContract]
        List<AttractionsDTO> Services_GetPlaceDetails(List<userTable_OnlyId> attractionIds, int SourceAttractionId);

        [OperationContract]
        List<AttractionsDTO> Service_GetSearchTextNotCorrect();
    }
}