using DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites;
using BusinessEntites.Common;
using Dapper;
using HelperFunctions;
using BusinessEntites.Scheduler;
using BusinessEntites.Admin;

namespace DataAccessLayer.Schedulers
{
    public class DALSchedulers : ISchedulers, IDisposable
    {
        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public int Services_AddAttraction(AttractionsDTO attractionDTO, List<userTable_Category> Category, List<user_AttractionsActiveStatus> attractionsActiveStatus)
        {
            try
            {
                var _returnResult = SqlHelper.QuerySP<int>("Services_AddAttraction",
                    new
                    {
                        AttractionName = attractionDTO.AttractionName
                        ,AddressOne = attractionDTO.AddressOne
                        ,AddressTwo = attractionDTO.AddressTwo
                        ,CityId = attractionDTO.CityId
                        ,CategoryId = attractionDTO.CategoryId
                        ,Longitude = attractionDTO.Longitude
                        ,Latitude = attractionDTO.Longitude
                        ,PlaceId = attractionDTO.PlaceId
                        ,RankId = attractionDTO.RankId
                        ,CreatedBy = attractionDTO.CreatedBy
                        ,GoogleSearchText = attractionDTO.GoogleSearchText
                        ,GoogleWebSite = attractionDTO.GoogleWebSite
                        ,GoogleICon = attractionDTO.GoogleICon
                        ,GoogleInternational_phone_number = attractionDTO.GoogleInternational_phone_number
                        ,Googleadr_address = attractionDTO.Googleadr_address
                        ,GoogleName = attractionDTO.GoogleName
                        ,GoogleRating = attractionDTO.GoogleRating
                        ,GoogleUser_ratings_total = attractionDTO.GoogleUser_ratings_total
                        ,IsUserPersonalRequest = attractionDTO.IsUserPersonalRequest
                        ,AttractionTimeExisted = attractionDTO.AttractionTimeExisted
                        ,AttractionsActiveStatusInfo = DataTableFun.ToDataTable<user_AttractionsActiveStatus>(attractionsActiveStatus)
                        ,CategoryList = DataTableFun.ToDataTable <userTable_Category>(Category)

                    }).ToList();
                return _returnResult.FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public AttractionsDTO Services_CheckAttractionExist(string googleSearchText)
        {
            try
            {
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("Services_CheckAttractionExist",
                    new
                    {
                        googleSearchText = googleSearchText
                    }).ToList();
                return _returnResult.FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Service_TravelDistance(List<user_AttractionTravelTimeDistance> attractionTravelTimeDistance)
        {
            try
            {
                SqlHelper.QuerySP("user_AttractionTravelTimeDistance",
                    new
                    {
                        AttractionTravelTimeDistanceInfo = DataTableFun.ToDataTable<user_AttractionTravelTimeDistance>(attractionTravelTimeDistance)
                    });                
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> Services_GetPlaceDetails(List<userTable_OnlyId> attractionIds, int SourceAttractionId)
        {
            try
            {
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("Services_GetPlaceDetails",
                    new
                    {
                        AttractionId = DataTableFun.ToDataTable<userTable_OnlyId>(attractionIds),
                        SourceAttractionId = SourceAttractionId
                    }).ToList();

                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> Service_GetSearchTextNotCorrect()
        {
            try
            {
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("Service_GetSearchTextNotCorrect ").ToList();

                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<RadiusInfo> Scheduler_AttractionGetOnCityId(int cityId,int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<RadiusInfo> _returnResult = SqlHelper.QuerySP<RadiusInfo>("Scheduler_AttractionGetOnCityId ", new
                {
                    CityId = cityId
                }).ToList();

                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCityDTO> Scheduler_GetCityOnCountryId(int countryId)
        {
            try
            {
                List<MasterCityDTO> _returnResult = SqlHelper.QuerySP<MasterCityDTO>("Scheduler_GetCityOnCountryId",
                    new
                    {
                        CountryId = countryId
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GoogleTypes> Scheduler_GetTypes()
        {
            try
            {
                List<GoogleTypes> _returnResult = SqlHelper.QuerySP<GoogleTypes>("Scheduler_GetTypes").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_InsertGoogleSearchText(List<NearByPlaceSearchEntity> nearByPlaceSearchEntity, int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_InsertGoogleSearchText",
                    new
                    {
                        NearBySearchData = DataTableFun.ToDataTable<NearByPlaceSearchEntity>(nearByPlaceSearchEntity)
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



    }
}
