
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
using Interfaces;
using BusinessEntites.Users;
using BusinessEntites.Custom;

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

        public List<RadiusInfo> Scheduler_AttractionGetOnCityId(int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<RadiusInfo> _returnResult = SqlHelper.QuerySP<RadiusInfo>("Scheduler_AttractionGetOnCityId ").ToList();

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

        public List<AttractionPhotoReference> Scheduler_PhotoReferencePending(int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<AttractionPhotoReference> _returnResult = SqlHelper.QuerySP<AttractionPhotoReference>("Scheduler_PhotoReferencePending").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_PhotoReferenceUrlUpdate(int countryId, int attractionPhotosId, string url)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_PhotoReferenceUrlUpdate",new
                {
                    AttractionPhotosId = attractionPhotosId
                    ,url = url
                });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_PhotoReferenceUrlAlreadyTried(int countryId, int attractionPhotosId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_PhotoReferenceUrlAlreadyTried", new
                {
                    AttractionPhotosId = attractionPhotosId
                });
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

        public List<GoogleTypes> GetCityCategoryPending(int countryId,int cityId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<GoogleTypes> _returnResult = SqlHelper.QuerySP<GoogleTypes>("GetCityCategoryPending", new
                {
                    cityId = cityId

                }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public void UpdateCityCategorySearch(int countryId,int cityId, int googleTypeId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP<RadiusInfo>("UpdateCityCategorySearch", new
                {
                    cityId = cityId,
                    GoogleTypeID = googleTypeId

                });

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_InsertGoogleSearchText(List<NearByPlaceSearchEntity> nearByPlaceSearchEntity, int countryId,int attractionId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_InsertGoogleSearchText",
                    new
                    {
                        NearBySearchData = DataTableFun.ToDataTable<NearByPlaceSearchEntity>(nearByPlaceSearchEntity)
                        ,AttractionsId = attractionId
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetPlaceDetails> Scheduler_GetPlaceDetails(int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<GetPlaceDetails> _returnResult = SqlHelper.QuerySP<GetPlaceDetails>("Scheduler_GetPlaceDetails").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MasterCountryScheduler Scheduler_GetCountryOnId(int countryId)
        {
            try
            {
                MasterCountryScheduler _returnResult = SqlHelper.QuerySP<MasterCountryScheduler>("Scheduler_GetCountryOnId", new
                {
                    CountryId = countryId
                }).ToList().FirstOrDefault();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_InsertAttractionAuto(AttractionsDTO attractionsDTO,int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_InsertAttractionAuto",
                    new
                    {
                        Latitude = attractionsDTO.Latitude,
                        AddressOne = attractionsDTO.AddressOne,
                        AddressTwo = attractionsDTO.AddressTwo,
                        CityName = attractionsDTO.CityName,
                        CreatedBy = attractionsDTO.CreatedBy,
                        Longitude = attractionsDTO.Longitude,
                        PlaceId = attractionsDTO.PlaceId,
                        StateName = attractionsDTO.StateName,
                        CountryId = attractionsDTO.CountryId,
                        AttractionsId = attractionsDTO.AttractionsId,
                        StateShortName = attractionsDTO.StateShortName,
                        CityShortName = attractionsDTO.CityShortName
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public void UpdateCityNearestLocationDont(int cityId)
        {
            try
            {
                SqlHelper.QuerySP("UpdateCityNearestLocationDont",
                    new
                    {
                        cityId = cityId
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public void Scheduler_InsertAttractionInfo(SchedulerInsertPlaceDetails schedulerInsertPlaceDetails,int countryId, AttractionsDTO attractionsDTO)
        {
            try
            {
                if (schedulerInsertPlaceDetails.WeekDaysOpenClose == null)
                    schedulerInsertPlaceDetails.WeekDaysOpenClose = new List<WeekDaysOpenClose>();

                if (schedulerInsertPlaceDetails.GooglePhotos == null)
                    schedulerInsertPlaceDetails.GooglePhotos = new List<GooglePhotos>();

                if (schedulerInsertPlaceDetails.GoogleReview == null)
                    schedulerInsertPlaceDetails.GoogleReview = new List<GoogleReview>();

                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_InsertAttractionInfo",
                    new
                    {
                        AttractionsId = schedulerInsertPlaceDetails.AttractionsId,
                        CategoryDt = ConvertArrayToDataTable.GetDataTableCateogry(schedulerInsertPlaceDetails.Category),
                        GoogleWebSite  = schedulerInsertPlaceDetails.GoogleWebSite,
                        GoogleICon = schedulerInsertPlaceDetails.GoogleICon,
                        GoogleInternational_phone_number  = schedulerInsertPlaceDetails.GoogleInternational_phone_number,
                        Googleadr_address = schedulerInsertPlaceDetails.Googleadr_address,
                        GoogleName  = schedulerInsertPlaceDetails.GoogleName,
                        GoogleRating = schedulerInsertPlaceDetails.GoogleRating,
                        WeekDaysOpenClose = DataTableFun.ToDataTable<WeekDaysOpenClose>(schedulerInsertPlaceDetails.WeekDaysOpenClose),
                        GooglePhotos = DataTableFun.ToDataTable<GooglePhotos>(schedulerInsertPlaceDetails.GooglePhotos),
                        GoogleReview = DataTableFun.ToDataTable<GoogleReview>(schedulerInsertPlaceDetails.GoogleReview),
                        Pricelevel = schedulerInsertPlaceDetails.Pricelevel,
                        Latitude = attractionsDTO.Latitude,
                        AddressOne = attractionsDTO.AddressOne,
                        AddressTwo = attractionsDTO.AddressTwo,
                        CityName = attractionsDTO.CityName,
                        CreatedBy = attractionsDTO.CreatedBy,
                        Longitude = attractionsDTO.Longitude,
                        PlaceId = attractionsDTO.PlaceId,
                        StateName = attractionsDTO.StateName,
                        CountryId = attractionsDTO.CountryId,
                        StateShortName = attractionsDTO.StateShortName,
                        CityShortName = attractionsDTO.CityShortName,
                        Utc_offset = schedulerInsertPlaceDetails.Utc_offset

                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> Scheduler_GetDistancePending(int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("Scheduler_GetDistancePending").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> Scheduler_GetMissingDistance(int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("Scheduler_GetMissingDistance").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> Scheduler_GetAttractionNearBy(int countryId,int attractionId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("Scheduler_GetAttractionNearBy",new
                {
                    AttractionsId = attractionId
                }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MissingDataAttractionDTO> Scheduler_GetDestinationMissingDistance(int countryId, int attractionId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<MissingDataAttractionDTO> _returnResult = SqlHelper.QuerySP<MissingDataAttractionDTO>("Scheduler_GetDestinationMissingDistance", new
                {
                    attractionId = attractionId
                }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_DeleteMissingDistanceDestination(int countryId,int missingDistanceAttractionsRecordsXAttractionsID)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_DeleteMissingDistanceDestination",
                    new
                    {
                        MissingDistanceAttractionsRecordsXAttractionsID = missingDistanceAttractionsRecordsXAttractionsID
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_DeleteMissingDistance(int countryId,int attractionsID)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_DeleteMissingDistance",
                    new
                    {
                        AttractionsID = attractionsID
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterTravelModeDTO> Scheduler_GetTravelMode()
        {
            try
            {
                
                List<MasterTravelModeDTO> _returnResult = SqlHelper.QuerySP<MasterTravelModeDTO>("Scheduler_GetTravelMode").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_InsertAttractionTravelTimeDistance(BusinessEntites.Common.AttractionTravelTimeDistanceDTO attractionTravelTimeDistanceDTO, int countryId, List<StepsConsolidated> stepsConsolidated)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_InsertAttractionTravelTimeDistance",
                    new
                    {
                        SourceAttractionId = attractionTravelTimeDistanceDTO.SourceAttractionId,
                        DestinationAttractionId = attractionTravelTimeDistanceDTO.DestinationAttractionId,
                        TravelModeId = attractionTravelTimeDistanceDTO.TravelModeId,
                        TravelTime = attractionTravelTimeDistanceDTO.TravelTime,
                        Distance = attractionTravelTimeDistanceDTO.Distance,
                        StepsConsolidated = DataTableFun.ToDataTable<StepsConsolidated>(stepsConsolidated),

                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void SchedulerDeleteAttraction(int attractionId, int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("SchedulerDeleteAttraction",
                    new
                    {
                        AttractionId = attractionId

                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_GoogleLogging(string mapType,string methodName,string attractionName,string logitude,string latitude,bool isError)
        {
            try
            {
                SqlHelper.QuerySP("Scheduler_GoogleLogging",
                    new
                    {
                        MapType = mapType,
                        MethodName = methodName,
                        AttractionName = attractionName,
                        Logitude = logitude,
                        Latitude = latitude,
                        IsError = isError
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public GoogleMapsLoggingDTO Scheduler_GetGoogleMapsMethodCount(string mapType)
        {
            try
            {
                List<GoogleMapsLoggingDTO> _returnResult =
                    SqlHelper.QuerySP<GoogleMapsLoggingDTO>("Scheduler_GetGoogleMapsMethodCount",
                        new {MapType = mapType}).ToList();
                return _returnResult.FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GoogleSearchTextDTO> Scheduler_GetNoGoogleSearchText(int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<GoogleSearchTextDTO> _returnResult =
                    SqlHelper.QuerySP<GoogleSearchTextDTO>("Scheduler_GetNoGoogleSearchText").ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Scheduler_UpdateGoogleSearchText(int attractionsId,string googleSearchText,int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_UpdateGoogleSearchText",
                    new
                    {
                        AttractionsId = attractionsId,
                        GoogleSearchText = googleSearchText
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<UserTourInformation> Scheduler_RecalculateTourInfo(int countryId)
        {
            try
            {
                
                var result = SqlHelper.QuerySP<UserTourInformation>("Scheduler_RecalculateTourInfo",
                    new
                    {
                        CountryId = countryId
                    }).ToList();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> Service_GetAttractionRestarentMissing(int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                List<AttractionsDTO> _returnResult = SqlHelper.QuerySP<AttractionsDTO>("Service_GetAttractionRestarentMissing").ToList();

                return _returnResult;
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

        public void Scheduler_UpdateAttractionRestarentSearch(int attractionsId, int countryId)
        {
            try
            {
                SqlHelper.countryId = countryId;
                SqlHelper.QuerySP("Scheduler_UpdateAttractionRestarentSearch",
                    new
                    {
                        AttractionsId = attractionsId
                    });
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
