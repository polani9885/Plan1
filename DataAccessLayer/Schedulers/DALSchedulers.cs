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
    }
}
