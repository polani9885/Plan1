using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGo.Repository
{
    public class GetListValues : PlanGoGo.Repository.IGetListValues
    {
        PlanGoGo.GetListValues.GetListValuesClient _client = new PlanGoGo.GetListValues.GetListValuesClient();
 
        public List<public_GetCityList> Public_GetCityList()
        {
            return _client.Public_GetCityList().ToList();
        }

        public List<Public_GetCategory> Public_GetCategory()
        {
            return _client.Public_GetCategory().ToList();
        }

        public List<Public_GetMasterCategory> Public_GetMasterCategory()
        {
            return _client.Public_GetMasterCategory().ToList();
        }

        public List<public_FilterAttractions> Public_FilterAttractions(string enterLocationName, List<userTable_Category> categoryList, int countryId, List<CityVisitList> cityVisitList)
        {
            return _client.Public_FilterAttractions(enterLocationName, categoryList, countryId, cityVisitList).ToList();
        }

        public List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId,
            int SourceAttractionID, int DestinationAttractionID, List<userTable_OnlyId> AttractionID, string StartDate,
            string StartTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int CountryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder)
        {
            return _client.Public_GetOrderOfAttractionVisit(TravelModeId, SourceAttractionID, DestinationAttractionID,
                AttractionID, StartDate, StartTime, listGetOrderOfAttractionVisit, CountryId, userTable_UpdatedBreaks, userTable_AttractionRequestOrder);
        }

    }
}