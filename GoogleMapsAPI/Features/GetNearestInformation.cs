using BusinessEntites;
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

        public void GetRadiusInformation(int countryId)
        {
            try
            {
                var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place", countryId);
                if (googleCounter == null || googleCounter.Counter< Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                { 
                    var masterCityList = dALSchedulers.Scheduler_GetCityOnCountryId(countryId);
                    string latitude = string.Empty;
                    string longitude = string.Empty;

                    var googleType = dALSchedulers.Scheduler_GetTypes().ToArray();

                    if (masterCityList != null)
                    {
                        masterCityList =
                            masterCityList.Where(
                                    x => !string.IsNullOrEmpty(x.Latitude) && !string.IsNullOrEmpty(x.Longitude))
                                .ToList();

                        var cityInfo =
                            dALSchedulers.Scheduler_AttractionGetOnCityId(
                                masterCityList.Select(x => x.CityId).FirstOrDefault(), countryId);
                        if (cityInfo != null && cityInfo.Count > 0)
                        {
                            latitude = cityInfo.Select(x => x.Latitude).FirstOrDefault();
                            longitude = cityInfo.Select(x => x.Longitude).FirstOrDefault();
                        }
                        else
                        {
                            latitude = masterCityList.Select(x => x.Latitude).FirstOrDefault();
                            longitude = masterCityList.Select(x => x.Longitude).FirstOrDefault();
                        }
                    }
                    string radiusData = string.Empty;
                    string url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude +
                                 "," +
                                 longitude + "&radius=5000&key=" + ConfigurationManager.AppSettings["apiKey"];
                    radiusData = webRequest.WebServiceInformation(url);
                    var returnsInformation =
                        Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(radiusData);

                    if (returnsInformation != null)
                    {
                        InsertSearchResult(returnsInformation, googleType, countryId, url, longitude, latitude);
                    }

                    if (returnsInformation.results != null && returnsInformation.results.Count > 0)
                    {
                        dALSchedulers.Scheduler_GoogleLogging("place", "GetRadiusInformation", "", longitude, latitude,
                            false, countryId);
                    }
                    else
                    {
                        dALSchedulers.Scheduler_GoogleLogging("place", "GetRadiusInformation", "", longitude, latitude,
                            true, countryId);
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

        private void InsertSearchResult(NearBySearchEntity returnsInformation, GoogleTypes[] googleType,int countryId,string url,string longitude,string latitude)
        {
            string radiusData = string.Empty;
            string urlString = string.Empty;
            returnsInformation.results =
                        returnsInformation.results.Where(
                            x => x.types.Intersect(googleType.Select(type => type.TypeName).ToArray()).Any()).ToList();

            var nearByPlaceSearchEntity = returnsInformation.results.Select(x => new NearByPlaceSearchEntity
            {
                AttractionName = x.name,
                GoogleSearchText = x.vicinity
            }).ToList();

            dALSchedulers.Scheduler_InsertGoogleSearchText(nearByPlaceSearchEntity, countryId);

            var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place", countryId);
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
                            false, countryId);
                    }
                    else
                    {
                        dALSchedulers.Scheduler_GoogleLogging("place", "GetRadiusInformation", "", longitude, latitude,
                            true, countryId);
                    }

                    if (returnsInformation != null)
                    {
                        InsertSearchResult(returnsInformation, googleType, countryId, url, longitude, latitude);
                    }
                }
            }
        }
    }
}
