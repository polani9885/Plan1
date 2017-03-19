using BusinessEntites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public interface IGetListValues
    {
        List<public_GetCityList> Public_GetCityList();

        List<Public_GetCategory> Public_GetCategory();

        List<public_FilterAttractions> Public_FilterAttractions(string enterLocationName, List<userTable_Category> categoryList);

        List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId, int SourceAttractionID, int DestinationAttractionID, List<userTable_OnlyId> AttractionID, string StartDate, string StartTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit);

        List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId);
    }
}
