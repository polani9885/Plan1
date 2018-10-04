using BusinessEntites;
using BusinessEntites.JsonParameters;
using BusinessEntites.Scheduler;
using BusinessEntites.Users;
using Dapper;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class GetListValues: IGetListValues
    {
        /// <summary>
        /// Get city list information
        /// </summary>
        /// <returns></returns>
        public List<public_GetCityList> Public_GetCityList()
        {
            try
            {
                List<public_GetCityList> _public_GetCityList = SqlHelper.QuerySP<public_GetCityList>("public_GetCityList").ToList();
                return _public_GetCityList;
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
                List<public_GetCityList> _public_GetCityList = SqlHelper.QuerySP<public_GetCityList>(
                    "public_GetCityListOnCountryId", new
                    {
                        CountryId = countryId
                    }).ToList();
                return _public_GetCityList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        /// <summary>
        /// Getting the category information
        /// </summary>
        /// <returns></returns>
        public List<Public_GetCategory> Public_GetCategory()
        {
            try
            {
                List<Public_GetCategory> _public_GetCategory = SqlHelper.QuerySP<Public_GetCategory>("Public_GetCategory").ToList();
                return _public_GetCategory;
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
                List<Public_GetMasterCategory> _public_GetMasterCategory = SqlHelper.QuerySP<Public_GetMasterCategory>("Public_GetMasterCategory").ToList();
                return _public_GetMasterCategory;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// If we select or unselect any category this method will resturn the result
        /// </summary>
        /// <returns></returns>
        public List<public_FilterAttractions> Public_FilterAttractions(int countryId, List<CityVisitList> cityVisitList, int mainCategorySelected)
        {
            try
            {
                SqlHelper.countryId = countryId;
                

                List<public_FilterAttractions> _public_FilterAttractions = SqlHelper.QuerySP<public_FilterAttractions>("public_FilterAttractions",
                    new {
                        CityVisitList = CommonObjects.Convert.ToDataTable<CityVisitList>(cityVisitList),
                        MainCategorySelected = mainCategorySelected
                    }).ToList();

                return _public_FilterAttractions;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId,
            List<userTable_OnlyId> AttractionID, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int CountryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int userTripId)
        {
            try
            {
                var parameters = new DynamicParameters();
                parameters.Add("TravelModeId", TravelModeId);
                //parameters.Add()

                SqlHelper.countryId = CountryId;

                List<GetOrderOfAttractionVisit> _public_GetOrderOfAttractionVisit = SqlHelper
                    .QuerySP<GetOrderOfAttractionVisit>("GetOrderOfAttractionVisit",
                        new
                        {
                            TravelModeId = TravelModeId,
                            AttractionID = CommonObjects.Convert.ToDataTable<userTable_OnlyId>(AttractionID),
                            UserBreakTime =
                            CommonObjects.Convert.ToDataTable<UserTable_UpdatedBreaks>(userTable_UpdatedBreaks),
                            UserTripId= userTripId
                            //UpdatedOrderAttraction = CommonObjects.Convert.ToDataTable<GetOrderOfAttractionVisit>(listGetOrderOfAttractionVisit)
                        }).ToList();
                return _public_GetOrderOfAttractionVisit;
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


                List<GetAttractionOpenTime> _result = SqlHelper.QuerySP<GetAttractionOpenTime>("GetAttractionOpenTime",
                    new
                    {
                        AttractionsId = AttractionId
                        
                    }).ToList();
                return _result;
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
                List<GoogleTypes> _returnResult = SqlHelper.QuerySP<GoogleTypes>("Scheduler_GetExtraCategoryList").ToList();
                return _returnResult;
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
                SqlHelper.countryId = countryId;


                List<AttractionPhotoReference> result = SqlHelper.QuerySP<AttractionPhotoReference>("public_AttractionsPhotoInfo",
                    new
                    {
                        AttractionId = attractionId
                    }).ToList();

                return result;
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
                List<BreakInformation> _returnResult = SqlHelper.QuerySP<BreakInformation>("Common_GetBreakInformation").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
