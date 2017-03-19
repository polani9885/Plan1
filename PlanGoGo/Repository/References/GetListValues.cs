using BusinessEntites;
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

        public List<public_FilterAttractions> Public_FilterAttractions(string enterLocationName, List<userTable_Category> categoryList)
        {
            return _client.Public_FilterAttractions(enterLocationName, categoryList).ToList();
        }

        public List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId, int SourceAttractionID, int DestinationAttractionID, List<userTable_OnlyId> AttractionID, string StartDate, string StartTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit)
        {
            return _client.Public_GetOrderOfAttractionVisit(TravelModeId, SourceAttractionID, DestinationAttractionID, AttractionID, StartDate, StartTime, listGetOrderOfAttractionVisit);
        }

    }
}