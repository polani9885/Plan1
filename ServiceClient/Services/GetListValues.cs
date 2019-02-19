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

        public List<public_FilterAttractions> Public_FilterAttractions(int countryId, List<CityVisitList> cityVisitList, int mainCategorySelected)
        {
            try
            {
                return _client.Public_FilterAttractions(countryId, cityVisitList,mainCategorySelected).ToList();
            }
            catch (Exception ex)
            {
                throw;
            }
            
        }

        public List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId,
              List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int CountryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,int userTripId)
        {
            return _client.Public_GetOrderOfAttractionVisit(TravelModeId,
                listGetOrderOfAttractionVisit, CountryId, userTable_UpdatedBreaks,userTripId);

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

        public List<BreakInformation> GetBreakInformation()
        {
            try
            {
                return _client.GetBreakInformation();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public List<public_GetCityList> GetCityOnCountryId(int countryId)
        {
            try
            {
                return _client.GetCityOnCountryId(countryId);
                
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}
