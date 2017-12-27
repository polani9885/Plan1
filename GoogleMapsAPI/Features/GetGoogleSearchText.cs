using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer.Schedulers;
using BusinessEntites.Common;
using BusinessEntites.EntityAutoComplete;
using GoogleMapsAPI.Helper;
using DataAccessLayer.LogException;
using BusinessEntites;

namespace GoogleMapsAPI.Features
{

    public class GetGoogleSearchText
    {
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();
        private readonly WebRequest webRequest = new WebRequest();
        private readonly ExceptionLogging exceptionLogging = new ExceptionLogging();

        public void GoogleSearchText(int countryId)
        {
            var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("autocomplete");

            var pendingRecords = dALSchedulers.Scheduler_GetNoGoogleSearchText(countryId);
            var masterCityList = dALSchedulers.Scheduler_GetCityOnCountryId(countryId);
            string googleSearchText = string.Empty;
            string radiusData = string.Empty;
            string attractionaddress = string.Empty;
            string url = String.Empty;

            foreach (GoogleSearchTextDTO restlt in pendingRecords)
            {
                try
                {

                    if (googleCounter == null || googleCounter.Counter <
                        Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                    {
                        attractionaddress = ((restlt.AttractionName.Trim() + " " + restlt.AddressOne).Trim() + " " +
                                             restlt.AddressTwo).Trim();
                        url =
                            "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" +
                            attractionaddress +
                            "&components=country:" + masterCityList.Select(x => x.CountryShortName).FirstOrDefault() +
                            "&key=" + ConfigurationManager.AppSettings["apiKey"];
                        radiusData = webRequest.WebServiceInformation(url);
                        var returnsInformation =
                            Newtonsoft.Json.JsonConvert.DeserializeObject<EntityAutoComplete>(radiusData);

                        dALSchedulers.Scheduler_GoogleLogging("autocomplete", "GoogleSearchText", "",
                            string.Empty, string.Empty,
                            false);

                        if (returnsInformation.status == "ZERO_RESULTS")
                        {
                            googleSearchText = string.Empty;
                        }
                        else
                        {
                            googleSearchText = returnsInformation.predictions.Select(x => x.description)
                                .FirstOrDefault();
                        }
                        dALSchedulers.Scheduler_UpdateGoogleSearchText(restlt.AttractionsId, googleSearchText,
                            countryId);
                    }
                }
                catch (Exception ex)
                {
                    exceptionLogging.InsertExceptionInformation(new LoggingEntity
                    {
                        CreatedBy = "scheduler",
                        ExceptionMessage = ex.Message,
                        ExceptionStackTrace = ex.StackTrace,
                        MethodName = "GoogleSearchText",
                        Parameters = "url = " + url,
                        CountryId = countryId
                    });
                }
            }
        }
    }
}
