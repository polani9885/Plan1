using BusinessEntites;
using BusinessEntites.JsonParameters;
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
        public List<public_FilterAttractions> Public_FilterAttractions(int countryId, List<CityVisitList> cityVisitList)
        {
            try
            {
                SqlHelper.countryId = countryId;
                

                List<public_FilterAttractions> _public_FilterAttractions = SqlHelper.QuerySP<public_FilterAttractions>("public_FilterAttractions",
                    new {
                        CityVisitList = CommonObjects.Convert.ToDataTable<CityVisitList>(cityVisitList)
                    }).ToList();



                return _public_FilterAttractions;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId,
            int SourceAttractionID, int DestinationAttractionID, List<userTable_OnlyId> AttractionID, string StartDate,
            string StartTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int CountryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder)
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
                            SourceAttractionID = SourceAttractionID,
                            DestinationAttractionID = DestinationAttractionID,
                            AttractionID = CommonObjects.Convert.ToDataTable<userTable_OnlyId>(AttractionID),
                            StartDate = StartDate == string.Empty ? null : StartDate,
                            StartTime = StartTime == string.Empty ? null : StartTime,
                            UserBreakTime =
                            CommonObjects.Convert.ToDataTable<UserTable_UpdatedBreaks>(userTable_UpdatedBreaks),
                            AttractionReqOrder =
                            CommonObjects.Convert.ToDataTable<UserTable_AttractionRequestOrder>(
                                userTable_AttractionRequestOrder),
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
    }
}
