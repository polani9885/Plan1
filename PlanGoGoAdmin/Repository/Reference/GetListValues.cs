
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Users;
using Interfaces;
using BusinessEntites.Scheduler;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class GetListValues: IGetListValues
    {
        PlanGoGoAdmin.GetListValues.IGetListValues _client = new PlanGoGoAdmin.GetListValues.GetListValuesClient();

        public List<public_GetCityList> Public_GetCityList()
        {
            throw new NotImplementedException();
        }

        public List<Public_GetCategory> Public_GetCategory()
        {
            throw new NotImplementedException();
        }

        public List<Public_GetMasterCategory> Public_GetMasterCategory()
        {
            throw new NotImplementedException();
        }

        public List<public_FilterAttractions> Public_FilterAttractions(int countryId, List<CityVisitList> cityVisitList)
        {
            throw new NotImplementedException();
        }

        public List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId, int SourceAttractionID, int DestinationAttractionID,
            List<userTable_OnlyId> AttractionID, string StartDate, string StartTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int CountryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks, List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder)
        {
            throw new NotImplementedException();
        }

        public List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId)
        {
            try
            {
                return _client.GetAttractionOpenTime(AttractionId);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public List<GoogleTypes> Scheduler_GetExtraCategoryList()
        {
            try
            {
               // return _client.Scheduler_GetExtraCategoryList();
                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionPhotoReference> public_AttractionsPhotoInfo(int countryId, int attractionId)
        {
            throw new NotImplementedException();
        }
    }
}