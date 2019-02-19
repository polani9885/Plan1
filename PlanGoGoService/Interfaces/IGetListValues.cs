using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Scheduler;
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
        List<public_FilterAttractions> Public_FilterAttractions(int countryId, List<CityVisitList> cityVisitList, int mainCategorySelected);

        [OperationContract]
        List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId,
             List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int CountryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,int userTripId);

        [OperationContract]
        List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId);

        [OperationContract]
        List<GoogleTypes> Scheduler_GetExtraCategoryList();

        [OperationContract]
        List<AttractionPhotoReference> public_AttractionsPhotoInfo(int countryId, int attractionId);

        [OperationContract]
        List<BreakInformation> GetBreakInformation();

        [OperationContract]
        List<public_GetCityList> GetCityOnCountryId(int countryId);
    }
}