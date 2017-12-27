using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer
{
    public interface IGetListValues
    {
        List<public_GetCityList> Public_GetCityList();

        List<Public_GetCategory> Public_GetCategory();

        List<Public_GetMasterCategory> Public_GetMasterCategory();

        List<public_FilterAttractions> Public_FilterAttractions(string enterLocationName, List<userTable_Category> categoryList, int countryId, List<CityVisitList> cityVisitList);

        List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId,
            int SourceAttractionID, int DestinationAttractionID, List<userTable_OnlyId> AttractionID, string StartDate,
            string StartTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int CountryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder);
        List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId);
    }
}
