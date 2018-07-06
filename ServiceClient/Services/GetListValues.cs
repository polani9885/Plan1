using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Scheduler;
using BusinessEntites.Users;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class GetListValues: IGetListValues
    {
        ServiceClient.GetListValues.IGetListValues _client = new ServiceClient.GetListValues.GetListValuesClient();

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

        public List<public_FilterAttractions> Public_FilterAttractions(int countryId, List<CityVisitList> cityVisitList)
        {
            try
            {
                return _client.Public_FilterAttractions(countryId, cityVisitList).ToList();
            }
            catch (Exception ex)
            {
                throw;
            }
            
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

        public List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId)
        {
            throw new NotImplementedException();
        }


        public List<GoogleTypes> Scheduler_GetExtraCategoryList()
        {
            try
            {
                return _client.Scheduler_GetExtraCategoryList();
                
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public List<AttractionPhotoReference> public_AttractionsPhotoInfo(int countryId, int attractionId)
        {
            try
            {
                return _client.public_AttractionsPhotoInfo(countryId, attractionId);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
