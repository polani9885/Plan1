using BusinessAccessLayer.Common;
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

namespace BusinessAccessLayer
{
    public class GetListValues : BaseBusinessClass, IGetListValues
    {
        


        public GetListValues()
        {
            //_dataAccess = dataAccess;
        }


        /// <summary>
        /// Get city list information
        /// </summary>
        /// <returns></returns>
        public List<public_GetCityList> Public_GetCityList()
        {
            try
            {
                return _dataAccess.Public_GetCityList();                
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// get the categories
        /// </summary>
        /// <returns></returns>
        public List<Public_GetCategory> Public_GetCategory()
        {
            try
            {
                return _dataAccess.Public_GetCategory();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Public_GetMasterCategory> Public_GetMasterCategory()
        {
            try
            {
                return _dataAccess.Public_GetMasterCategory();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<public_FilterAttractions> Public_FilterAttractions(int countryId, List<CityVisitList> cityVisitList, int mainCategorySelected)
        {
            try
            {
                return _dataAccess.Public_FilterAttractions(countryId, cityVisitList,mainCategorySelected);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId,
            List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int CountryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,int userTripId)
        {
            try
            {
                _dataAccessUsers.User_UpdateBreakInformation(userTable_UpdatedBreaks, userTripId);

                return _dataAccess.Public_GetOrderOfAttractionVisit(TravelModeId, listGetOrderOfAttractionVisit,
                    CountryId,userTable_UpdatedBreaks,userTripId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId)
        {
            try
            {
                return _dataAccess.GetAttractionOpenTime(AttractionId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GoogleTypes> Scheduler_GetExtraCategoryList()
        {
            try
            {
                return _dataAccess.Scheduler_GetExtraCategoryList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionPhotoReference> public_AttractionsPhotoInfo(int countryId, int attractionId)
        {
            try
            {
                return _dataAccess.public_AttractionsPhotoInfo(countryId,attractionId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<BreakInformation> GetBreakInformation()
        {
            try
            {
                return _dataAccess.GetBreakInformation();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<public_GetCityList> GetCityOnCountryId(int countryId)
        {
            try
            {
                return _dataAccess.GetCityOnCountryId(countryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
