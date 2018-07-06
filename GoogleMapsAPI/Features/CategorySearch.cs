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
    public class CategorySearch
    {
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();
        private readonly WebRequest webRequest = new WebRequest();
        private readonly NLogBaseClass nLogBaseClass = new NLogBaseClass();
        private readonly ExceptionLogging exceptionLogging = new ExceptionLogging();
        private readonly GetPlaceInformation getPlaceInformation = new GetPlaceInformation();
        private readonly GetNearestInformation getNearestInformation = new GetNearestInformation();

        public void SearchByCategory(int countryId)
        {
            try
            {
                var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                if (googleCounter == null || googleCounter.Counter <
                    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                {
                    var masterCityList = dALSchedulers.Scheduler_GetCityOnCountryId(countryId);

                    foreach (MasterCityDTO _masterCityDTO in masterCityList)
                    {
                        var googleType = dALSchedulers.GetCityCategoryPending(countryId,_masterCityDTO.CityId);

                        foreach (GoogleTypes _googleTypes in googleType)
                        {
                            SearchByCategoryPlaceDetails(_googleTypes.TypeName, "+" + _masterCityDTO.CityName
                                                                                + "+" + _masterCityDTO.StateName
                                                                                + "+" + _masterCityDTO.CountryName,
                                countryId, _masterCityDTO, _googleTypes, googleType, masterCityList);
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

        private void SearchByCategoryPlaceDetails(string categoryName, string address, int countryId, MasterCityDTO _masterCityDTO = null, GoogleTypes _googleTypes = null, List<GoogleTypes>  googleType = null, List<MasterCityDTO>  masterCityList = null)
        {
            var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
            if (googleCounter == null || googleCounter.Counter <
                Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
            {
                string radiusData = string.Empty;
                string url =
                    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" +
                    categoryName.Replace('_', ' ')
                    + "+in"
                    + address
                    +
                    "&key=" +
                    ConfigurationManager.AppSettings["apiKey"];
                radiusData = webRequest.WebServiceInformation(url);
                var returnsInformation =
                    Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(
                        radiusData);
                dALSchedulers.Scheduler_GoogleLogging("place", "GetRadiusInformation", "", string.Empty, string.Empty,
                    false);


                if (returnsInformation != null && returnsInformation.results.Count > 0)
                {
                    dALSchedulers.UpdateCityCategorySearch(countryId,
                        (_masterCityDTO != null ? _masterCityDTO.CityId : 0),
                        _googleTypes.GoogleTypeID);

                    InsertSearchResult(returnsInformation, googleType.ToArray(), countryId, url,
                        string.Empty,
                        string.Empty,
                        0);
                }
            }
            getPlaceInformation.GetPlaceDetails(countryId);
        }

        private void InsertSearchResult(NearBySearchEntity returnsInformation, GoogleTypes[] googleType, int countryId, string url, string longitude, string latitude, int attractionId)
        {
            string radiusData = string.Empty;
            string urlString = string.Empty;
            returnsInformation.results =
                returnsInformation.results.Where(
                    x => x.types.Intersect(googleType.Select(type => type.TypeName).ToArray()).Any()).ToList();

            var nearByPlaceSearchEntity = returnsInformation.results.Select(x => new NearByPlaceSearchEntity
            {
                AttractionName = x.name,
                GoogleSearchText = x.formatted_address,
                PlaceId = x.place_id
            }).ToList();

            dALSchedulers.Scheduler_InsertGoogleSearchText(nearByPlaceSearchEntity, countryId, attractionId);

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

                    if (returnsInformation != null)
                    {
                        InsertSearchResult(returnsInformation, googleType, countryId, url, longitude, latitude, attractionId);
                    }
                }
            }
        }
    }
}
