using BusinessEntites;
using BusinessEntites.Admin;
using BusinessEntites.Common;
using BusinessEntites.EntityGoogleMaps.EntityNearBySearch;
using BusinessEntites.Scheduler;
using DataAccessLayer.LogException;
using DataAccessLayer.Schedulers;
using GoogleMapsAPI.Helper;
using HelperFunctions;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleMapsAPI.Features
{
    public class GetNearestInformation
    {
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();
        private readonly WebRequest webRequest = new WebRequest();
        private readonly NLogBaseClass nLogBaseClass = new NLogBaseClass();
        private readonly ExceptionLogging exceptionLogging = new ExceptionLogging();
        private readonly GetPlaceInformation getPlaceInformation = new GetPlaceInformation();

        public void GetRadiusInformation(int countryId)
        {
            try
            {
                var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                if (googleCounter == null || googleCounter.Counter <
                    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                {
                    var masterCityList = dALSchedulers.Scheduler_GetCityOnCountryId(countryId);
                    string latitude = string.Empty;
                    string longitude = string.Empty;
                    bool isCityInfo = true;

                    var googleTypeExtra = dALSchedulers.Scheduler_GetExtraCategoryList();

                    var cityInfo =
                        dALSchedulers.Scheduler_AttractionGetOnCityId(countryId);

                    foreach (MasterCityDTO _masterCityDTO in masterCityList)
                    {
                        isCityInfo = true;
                        latitude = string.Empty;
                        longitude = string.Empty;
                        if (!_masterCityDTO.IsGettingNearLocationDone)
                        {
                            latitude = _masterCityDTO.Latitude;
                            longitude = _masterCityDTO.Longitude;
                        }


                        var googleType = dALSchedulers.Scheduler_GetTypes().ToArray();




                        if (string.IsNullOrEmpty(latitude) && string.IsNullOrEmpty(longitude))
                        {
                           
                            foreach (RadiusInfo _cityInfo in cityInfo)
                            {

                                latitude = _cityInfo.Latitude;
                                longitude = _cityInfo.Longitude;
                                isCityInfo = false;

                                foreach (GoogleTypes _googleTypes in googleType.Where(x=>x.IsNeeded))
                                {
                                    NearestLocationAPICall(latitude, longitude, googleCounter,
                                        isCityInfo, _masterCityDTO, googleType, countryId,
                                        _cityInfo.AttractionsId, _googleTypes.TypeName);

                                    googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                                    if (googleCounter == null || googleCounter.Counter >=
                                        Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                                    {
                                        break;
                                    }
                                }

                                googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                                if (googleCounter == null || googleCounter.Counter >=
                                    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                                {
                                    break;
                                }

                            }
                        }
                        else
                        {
                            foreach (GoogleTypes _googleTypes in googleType.Where(x => x.IsNeeded))
                            {
                                NearestLocationAPICall(latitude, longitude, googleCounter,
                                    isCityInfo, _masterCityDTO, googleType, countryId,
                                    0, _googleTypes.TypeName);

                                googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                                if (googleCounter == null || googleCounter.Counter <
                                    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                                {
                                    break;
                                }
                            }
                        }

                        googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                        if (googleCounter == null || googleCounter.Counter <
                            Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                        {
                            break;
                        }

                    }

                }
            }
            catch (Exception ex)
            {
                exceptionLogging.InsertExceptionInformation(new LoggingEntity
                {
                    CreatedBy = "scheduler",
                    ExceptionMessage = ex.Message,
                    ExceptionStackTrace = ex.StackTrace,
                    MethodName = "GetRadiusInformation",
                    Parameters = "countryId = " + countryId.ToString(),
                    CountryId = countryId
                });
            }
        }


        public void SearchByCategoryAttraction(int countryId)
        {
            try
            {
                var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                if (googleCounter == null || googleCounter.Counter <
                    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                {
                    var attractinoList = dALSchedulers.Service_GetAttractionRestarentMissing(countryId);

                    var googleType = dALSchedulers.Scheduler_GetTypes().ToArray();

                    var googleTypeExtra = dALSchedulers.Scheduler_GetExtraCategoryList();

                    foreach (AttractionsDTO _attractionInfo in attractinoList)
                    {

                        foreach (GoogleTypes _googleTypes in googleTypeExtra)
                        {
                            NearestLocationAPICall(_attractionInfo.Latitude, _attractionInfo.Longitude, googleCounter,
                                false, null, googleType, countryId,
                                _attractionInfo.AttractionsId, _googleTypes.TypeName);
                        }

                        dALSchedulers.Scheduler_UpdateAttractionRestarentSearch(_attractionInfo.AttractionsId,
                            countryId);
                    }

                }
            }
            catch (Exception ex)
            {
                exceptionLogging.InsertExceptionInformation(new LoggingEntity
                {
                    CreatedBy = "scheduler",
                    ExceptionMessage = ex.Message,
                    ExceptionStackTrace = ex.StackTrace,
                    MethodName = "SearchByCategoryAttraction",
                    Parameters = "countryId = " + countryId.ToString(),
                    CountryId = countryId
                });
            }
        }

        public void SearchStepsDistanceNearBy(int countryId)
        {
            try
            {
                var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                if (googleCounter == null || googleCounter.Counter <
                    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                {
                    var attractinoList = dALSchedulers.Scheduler_GetStepsSearchnearBy(countryId);

                    var googleType = dALSchedulers.Scheduler_GetTypes().ToArray();

                    var googleTypeExtra = dALSchedulers.Scheduler_GetExtraCategoryList();

                    foreach (AttractionsDTO _attractionInfo in attractinoList)
                    {
                        try
                        {
                            foreach (GoogleTypes _googleTypes in googleTypeExtra)
                            {
                                NearestLocationAPICall(_attractionInfo.Latitude, _attractionInfo.Longitude,
                                    googleCounter,
                                    false, null, googleType, countryId,
                                    _attractionInfo.AttractionsId, _googleTypes.TypeName,
                                    _attractionInfo.AttractionTravelStepsId);
                            }
                        }
                        catch (Exception ex)
                        {
                            dALSchedulers.Scheduler_UpdateAttractionNoOfTimesStepsNearyByCalcuated(countryId,
                                _attractionInfo.AttractionTravelStepsId);
                        }

                        dALSchedulers.Scheduler_UpdateAttractionRestarentSearch(_attractionInfo.AttractionsId,
                            countryId);
                    }

                }
            }
            catch (Exception ex)
            {
                exceptionLogging.InsertExceptionInformation(new LoggingEntity
                {
                    CreatedBy = "scheduler",
                    ExceptionMessage = ex.Message,
                    ExceptionStackTrace = ex.StackTrace,
                    MethodName = "SearchByCategoryAttraction",
                    Parameters = "countryId = " + countryId.ToString(),
                    CountryId = countryId
                });
            }
        }

        private void NearestLocationAPICall(string latitude, string longitude, GoogleMapsLoggingDTO googleCounter,
            bool isCityInfo, MasterCityDTO _masterCityDTO, GoogleTypes[] googleType, int countryId,
             int attractionId, string type,int attractionTravelStepsId = 0)
        {
            if (!string.IsNullOrEmpty(latitude) && !string.IsNullOrEmpty(longitude))
            {
                googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                if (googleCounter == null || googleCounter.Counter <
                    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                {

                    string radiusData = string.Empty;
                    string url =
                        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
                        latitude +
                        "," +
                        longitude + "&radius=25000&key=" +
                        ConfigurationManager.AppSettings["apiKey"];

                    if (!string.IsNullOrEmpty(type))
                    {
                        url = url + "&type=" + type;
                    }

                    radiusData = webRequest.WebServiceInformation(url);
                    var returnsInformation =
                        Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(
                            radiusData);

                    if (returnsInformation != null && returnsInformation.results.Count > 0)
                    {
                        if (isCityInfo)
                            dALSchedulers.UpdateCityNearestLocationDont(_masterCityDTO
                                .CityId);

                        InsertSearchResult(returnsInformation, googleType, countryId, url,
                            longitude,
                            latitude,
                            attractionId, attractionTravelStepsId);
                    
                        dALSchedulers.Scheduler_GoogleLogging("place",
                            "GetRadiusInformation", "",
                            longitude,
                            latitude,
                            false);
                    }
                    else
                    {
                        dALSchedulers.Scheduler_GoogleLogging("place",
                            "GetRadiusInformation", "",
                            longitude,
                            latitude,
                            true);
                    }

                    //getPlaceInformation.GetPlaceDetails(countryId);
                }
            }
        }


        public List<ResultsList> NearestLocationAutocomplete(string latitude, string longitude, string distance,string address)
        {
            if (!string.IsNullOrEmpty(latitude) && !string.IsNullOrEmpty(longitude))
            {

                string radiusData = string.Empty;
                string url =
                    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
                    latitude +
                    "," +
                    longitude + "&radius=" + distance + "&key=" +
                    ConfigurationManager.AppSettings["apiKey"];
                url = url + "&name=" + address;


                radiusData = webRequest.WebServiceInformation(url);
                var returnsInformation =
                    Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(
                        radiusData);

                return returnsInformation.results;

            }
            return null;
        }

        private void InsertSearchResult(NearBySearchEntity returnsInformation, GoogleTypes[] googleType,int countryId,string url,string longitude,string latitude,int attractionId,int attractionTravelStepsId)
        {
            string radiusData = string.Empty;
            string urlString = string.Empty;
            returnsInformation.results =
                        returnsInformation.results.Where(
                            x => x.types.Intersect(googleType.Select(type => type.TypeName).ToArray()).Any()).ToList();

            var nearByPlaceSearchEntity = returnsInformation.results.Select(x => new NearByPlaceSearchEntity
            {
                AttractionName = x.name,
                GoogleSearchText = x.vicinity,
                PlaceId =  x.place_id
            }).ToList();

            dALSchedulers.Scheduler_InsertGoogleSearchText(nearByPlaceSearchEntity, countryId, attractionId, attractionTravelStepsId);

            var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
            if (googleCounter == null || googleCounter.Counter < Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
            {
                if (!string.IsNullOrEmpty(returnsInformation.next_page_token))
                {
                    urlString = url + "&pagetoken=" + returnsInformation.next_page_token;
                    radiusData = webRequest.WebServiceInformation(urlString);
                    returnsInformation = Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(radiusData);


                    if (returnsInformation.results != null && returnsInformation.results.Count > 0)
                    {
                        dALSchedulers.Scheduler_GoogleLogging("place", "GetRadiusInformation", "", longitude, latitude,
                            false);
                    }
                    else
                    {
                        dALSchedulers.Scheduler_GoogleLogging("place", "GetRadiusInformation", "", longitude, latitude,
                            true);
                    }

                    if (returnsInformation != null && returnsInformation.results.Count > 0)
                    {
                        InsertSearchResult(returnsInformation, googleType, countryId, url, longitude, latitude,
                            attractionId, attractionTravelStepsId);
                    }
                }
            }
        }
    }
}
