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
                string url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," +
                             longitude + "&radius=5000&key=" + ConfigurationManager.AppSettings["apiKey"];
                radiusData = webRequest.WebServiceInformation(url);
                var returnsInformation = Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(radiusData);

                if (returnsInformation != null)
                {
                    returnsInformation.results =
                        returnsInformation.results.Where(
                            x => x.types.Intersect(googleType.Select(type => type.TypeName).ToArray()).Any()).ToList();

                    var nearByPlaceSearchEntity = returnsInformation.results.Select(x => new NearByPlaceSearchEntity
                    {
                        AttractionName = x.name,
                        GoogleSearchText = x.vicinity
                    }).ToList();

                    dALSchedulers.Scheduler_InsertGoogleSearchText(nearByPlaceSearchEntity, countryId);
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
    }
}
