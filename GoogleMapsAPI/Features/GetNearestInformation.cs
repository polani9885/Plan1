using BusinessEntites;
using BusinessEntites.Admin;
using BusinessEntites.Common;
using BusinessEntites.EntityGoogleMaps.EntityNearBySearch;
using BusinessEntites.Scheduler;
using DataAccessLayer.LogException;
using DataAccessLayer.Schedulers;
using GoogleMapsAPI.Helper;
using HelperFunctions;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using BusinessEntites.Scheduler.locationiq;

namespace GoogleMapsAPI.Features
{
    public class GetNearestInformation
    {
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();
        private readonly WebRequest webRequest = new WebRequest();
        private readonly NLogBaseClass nLogBaseClass = new NLogBaseClass();
        private readonly ExceptionLogging exceptionLogging = new ExceptionLogging();
        private readonly GetPlaceInformation getPlaceInformation = new GetPlaceInformation();

        public void Init(int countryId)
        {
            try
            {
                var masterCityList = dALSchedulers.Scheduler_GetCityOnCountryId(countryId);
                string latitude = string.Empty;
                string longitude = string.Empty;


                var pendingAttractions =
                    dALSchedulers.Scheduler_AttractionGetOnCityId(countryId);

                foreach (MasterCityDTO _masterCityDTO in masterCityList)
                {

                    latitude = string.Empty;
                    longitude = string.Empty;
                    if (!_masterCityDTO.IsGettingNearLocationDone)
                    {
                        latitude = _masterCityDTO.Latitude;
                        longitude = _masterCityDTO.Longitude;
                    }

                    if (string.IsNullOrEmpty(latitude) && string.IsNullOrEmpty(longitude))
                    {

                        foreach (RadiusInfo attractionInfo in pendingAttractions)
                        {

                            var mapsXapixFeature =
                                dALSchedulers.Scheduler_CheckWithAccountNeedToUse("Near By", countryId);
                            if (string.IsNullOrEmpty(mapsXapixFeature?.API))
                            {
                                break;
                            }

                            latitude = attractionInfo.Latitude;
                            longitude = attractionInfo.Longitude;

                            var googleType = dALSchedulers.Scheduler_GetTypes(mapsXapixFeature.MapsId);

                            if (googleType.Any())
                            {
                                NearestLocationApiCall(latitude, longitude,
                                    false, _masterCityDTO, googleType, countryId,
                                    attractionInfo.AttractionsId, mapsXapixFeature, attractionInfo.AttractionName);
                            }

                        }
                    }
                    else
                    {
                        var mapsXapixFeature =
                            dALSchedulers.Scheduler_CheckWithAccountNeedToUse("Near By", countryId);
                        if (!string.IsNullOrEmpty(mapsXapixFeature?.API))
                        {
                            var googleType = dALSchedulers.Scheduler_GetTypes(mapsXapixFeature.MapsId);

                            NearestLocationApiCall(latitude, longitude,
                                true, _masterCityDTO, googleType, countryId,
                                0, mapsXapixFeature,string.Empty);
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

        public void SearchStepsDistanceNearBy(int countryId)
        {
            try
            {
                var attractinoList = dALSchedulers.Scheduler_GetStepsSearchnearBy(countryId);

                

                

                foreach (AttractionsDTO _attractionInfo in attractinoList)
                {
                    try
                    {
                        var mapsXapixFeature =
                            dALSchedulers.Scheduler_CheckWithAccountNeedToUse("Near By", countryId);
                        if (string.IsNullOrEmpty(mapsXapixFeature?.API))
                        {
                            break;
                        }

                        var googleType = dALSchedulers.Scheduler_GetTypes(mapsXapixFeature.MapsId);


                        NearestLocationApiCall(_attractionInfo.Latitude, _attractionInfo.Longitude,
                            false, null, googleType, countryId,
                            _attractionInfo.AttractionsId, mapsXapixFeature,_attractionInfo.AttractionName,_attractionInfo.AttractionTravelStepsId);

                    }
                    catch (Exception ex)
                    {
                        //This code is not required while removine remove the tables also
                        dALSchedulers.Scheduler_UpdateAttractionNoOfTimesStepsNearyByCalcuated(countryId,
                            _attractionInfo.AttractionTravelStepsId);
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

        private void NearestLocationApiCall(string latitude, string longitude,
            bool isCityInfo, MasterCityDTO masterCityDto, List<GoogleTypes> googleType, int countryId,
            int attractionId, MapsXAPIXFeature mapsXapixFeature,string attractionName, int attractionTravelStepsId = 0)
        {
            string radiusData = string.Empty;
            string url = string.Empty;

            
            if (!string.IsNullOrEmpty(latitude) && !string.IsNullOrEmpty(longitude))
            {
                foreach (var googleTypes in googleType)
                {
                    try
                    {
                        radiusData = string.Empty;
                        url = string.Empty;
                        switch (mapsXapixFeature.MapsId)
                        {
                            //google
                            case 1:
                            {
                                url =
                                    mapsXapixFeature.API +
                                    latitude +
                                    "," +
                                    longitude + "&radius=25000&key=" +
                                    mapsXapixFeature.apiKeyOrapiId;

                                if (!string.IsNullOrEmpty(googleTypes.TypeName))
                                {
                                    url = url + "&type=" + googleTypes.TypeName;
                                }

                                radiusData = webRequest.WebServiceInformation(url);
                                var returnsInformation =
                                    JsonConvert.DeserializeObject<NearBySearchEntity>(
                                        radiusData);

                                if (returnsInformation != null && returnsInformation.results.Any())
                                {
                                    if (isCityInfo)
                                        dALSchedulers.UpdateCityNearestLocationDont(masterCityDto
                                            .CityId);

                                    InsertSearchResult(returnsInformation, countryId, url,
                                        longitude,
                                        latitude,
                                        attractionId, attractionTravelStepsId, mapsXapixFeature.MapsId,
                                        mapsXapixFeature);

                                    dALSchedulers.Scheduler_MapsLogging("NearestLocationApiCall", mapsXapixFeature.MapsId,
                                        mapsXapixFeature.MapsCredentialsId, mapsXapixFeature.MapFeaturesId, radiusData,
                                        string.Empty, string.Empty, countryId, attractionId, url, false, attractionTravelStepsId);

                                    }
                                else
                                {

                                    dALSchedulers.Scheduler_MapsLogging("NearestLocationApiCall", mapsXapixFeature.MapsId,
                                        mapsXapixFeature.MapsCredentialsId, mapsXapixFeature.MapFeaturesId, radiusData,
                                        string.Empty, string.Empty, countryId, attractionId, url, true, attractionTravelStepsId);
                                }

                                break;
                            }
                            //locationiq
                            case 2:
                            {
                                url =
                                    mapsXapixFeature.API +
                                    "key=" + mapsXapixFeature.apiKeyOrapiId +
                                    "&format=json" +
                                    "&lat=" + latitude +
                                    "&lon=" + longitude +
                                    "&tag=" + googleTypes.TypeName;
                                radiusData = webRequest.WebServiceInformation(url);
                                var returnsInformation = JsonConvert
                                    .DeserializeObject<List<NearBy>>(radiusData);


                                if (returnsInformation != null && returnsInformation.Any())
                                {
                                    var result = returnsInformation.Where(x => !string.IsNullOrEmpty(x.name)).Select(
                                        y => new ResultsList
                                        {
                                            geometry = new geometryList
                                            {
                                                location = new locationList
                                                {
                                                    lat = y.lat,
                                                    lng = y.lon
                                                }
                                            },
                                            name = y.name,
                                            types = (new List<string>() {googleTypes.TypeName}).ToArray()
                                        }).ToList();

                                    

                                    InsertSearchResult(new NearBySearchEntity { results = result }, countryId, url,
                                        longitude,
                                        latitude,
                                        attractionId, attractionTravelStepsId, mapsXapixFeature.MapsId,
                                        mapsXapixFeature);

                                    dALSchedulers.Scheduler_MapsLogging("NearestLocationApiCall",
                                        mapsXapixFeature.MapsId,
                                        mapsXapixFeature.MapsCredentialsId, mapsXapixFeature.MapFeaturesId,
                                        string.Empty,
                                        string.Empty, string.Empty, countryId, attractionId, url, false,
                                        attractionTravelStepsId);
                                }
                                else
                                {
                                    dALSchedulers.Scheduler_MapsLogging("NearestLocationApiCall", mapsXapixFeature.MapsId,
                                        mapsXapixFeature.MapsCredentialsId, mapsXapixFeature.MapFeaturesId, radiusData,
                                        string.Empty, string.Empty, countryId, attractionId, url, true, attractionTravelStepsId);
                                }
                                //Every request after taking a break of one second
                                Thread.Sleep(1000);
                                break;
                            }
                            case 3:
                            {
                                if (!string.IsNullOrEmpty(attractionName))
                                {
                                    url =
                                        mapsXapixFeature.API +
                                        "at=" + latitude + "," + longitude +
                                        "&q=" + attractionName +
                                        "&app_id=" + mapsXapixFeature.apiKeyOrapiId +
                                        "&app_code=" + mapsXapixFeature.apiCode;
                                    radiusData = webRequest.WebServiceInformation(url);
                                    var returnsInformation = JsonConvert
                                        .DeserializeObject<BusinessEntites.Scheduler.here.NearBy>(radiusData);
                                }
                                break;
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        dALSchedulers.Scheduler_MapsLogging("NearestLocationApiCall", mapsXapixFeature.MapsId,
                            mapsXapixFeature.MapsCredentialsId, mapsXapixFeature.MapFeaturesId, radiusData,
                            ex.Message, ex.StackTrace, countryId, attractionId, url, true, attractionTravelStepsId);

                        if (ex.Message == "The remote server returned an error: (429) Too Many Requests.")
                        {
                            Thread.Sleep(1000 * 60);
                        }
                    }
                }
            }

        }


        //public List<ResultsList> NearestLocationAutocomplete(string latitude, string longitude, string distance,
        //    string address)
        //{
        //    if (!string.IsNullOrEmpty(latitude) && !string.IsNullOrEmpty(longitude))
        //    {

        //        string radiusData = string.Empty;
        //        string url =
        //            "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
        //            latitude +
        //            "," +
        //            longitude + "&radius=" + distance + "&key=" +
        //            ConfigurationManager.AppSettings["apiKey"];
        //        url = url + "&name=" + address;


        //        radiusData = webRequest.WebServiceInformation(url);
        //        var returnsInformation =
        //            Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(
        //                radiusData);

        //        return returnsInformation.results;

        //    }
        //    return null;
        //}

        private void InsertSearchResult(NearBySearchEntity returnsInformation,
            int countryId, string url, string longitude, string latitude, int attractionId, int attractionTravelStepsId,
            int mapsId, MapsXAPIXFeature mapsXapixFeature)
        {
            string radiusData = string.Empty;
            string urlString = string.Empty;

            var nearByPlaceSearchEntity = returnsInformation.results.Select(x => new NearByPlaceSearchEntity
            {
                AttractionName = x.name,
                GoogleSearchText = x.vicinity,
                PlaceId = x.place_id,
                Latitude = x.geometry.location.lat,
                Longitude = x.geometry.location.lng,
                types = string.Join("~", x.types)
            }).ToList();

            dALSchedulers.Scheduler_InsertNearBy(nearByPlaceSearchEntity, countryId, attractionId,
                attractionTravelStepsId, mapsId);


            if (!string.IsNullOrEmpty(returnsInformation.next_page_token))
            {
                urlString = url + "&pagetoken=" + returnsInformation.next_page_token;
                radiusData = webRequest.WebServiceInformation(urlString);
                returnsInformation = Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(radiusData);


                dALSchedulers.Scheduler_MapsLogging("LatAndLong_Init", mapsXapixFeature.MapsId,
                    mapsXapixFeature.MapsCredentialsId, mapsXapixFeature.MapFeaturesId, radiusData,
                    string.Empty, string.Empty, countryId, attractionId, url, false, attractionTravelStepsId);

                if (returnsInformation.results != null && returnsInformation.results.Count > 0)
                {
                    InsertSearchResult(returnsInformation, countryId, url, longitude, latitude,
                        attractionId, attractionTravelStepsId, mapsId, mapsXapixFeature);
                }
            }
        }
    }
}
