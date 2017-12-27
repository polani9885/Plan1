using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IGetListValues
    {
        [OperationContract]
        List<public_GetCityList> Public_GetCityList();

        [OperationContract]
        List<Public_GetCategory> Public_GetCategory();

        [OperationContract]
        List<Public_GetMasterCategory> Public_GetMasterCategory();

        [OperationContract]
        List<public_FilterAttractions> Public_FilterAttractions(string enterLocationName, List<userTable_Category> categoryList, int countryId, List<CityVisitList> cityVisitList);

        [OperationContract]
        List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId,
            int SourceAttractionID, int DestinationAttractionID, List<userTable_OnlyId> AttractionID, string StartDate,
            string StartTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int CountryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder);

        [OperationContract]
        List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId);
    }
}