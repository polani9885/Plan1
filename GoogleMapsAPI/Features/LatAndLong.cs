using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using DataAccessLayer.Schedulers;
using BusinessEntites.Common;
using BusinessEntites.EntityAutoComplete;
using GoogleMapsAPI.Helper;
using DataAccessLayer.LogException;
using BusinessEntites;
using BusinessEntites.Scheduler.locationiq;
using Newtonsoft.Json;

namespace GoogleMapsAPI.Features
{

    public class LatAndLong
    {
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();
        private readonly WebRequest webRequest = new WebRequest();
        private readonly ExceptionLogging exceptionLogging = new ExceptionLogging();

        public void Init(int countryId)
        {
            var pendingRecords = dALSchedulers.Scheduler_GetNoLatitudeAndLogitute(countryId);
            var masterCityList = dALSchedulers.Scheduler_GetCityOnCountryId(countryId);
            string googleSearchText = string.Empty;
            string radiusData = string.Empty;
            string attractionaddress = string.Empty;
            string url = String.Empty;
            

            foreach (GoogleSearchTextDTO restlt in pendingRecords)
            {
                var mapsXapixFeature =
                    dALSchedulers.Scheduler_CheckWithAccountNeedToUse("LatAndLong", countryId);
                if (string.IsNullOrEmpty(mapsXapixFeature?.API))
                {
                    break;
                }

                try
                {


                    attractionaddress = restlt.AttractionName.Trim() + "," + restlt.GoogleSearchText.Trim();
                    radiusData = string.Empty;
                    switch (mapsXapixFeature.MapsId)
                    {
                        case 2:
                        {
                            url =
                                mapsXapixFeature.API +
                                "key=" + mapsXapixFeature.apiKeyOrapiId +
                                "&format=json" +
                                "&q=" + attractionaddress;
                            radiusData = webRequest.WebServiceInformation(url);
                            var returnsInformation = JsonConvert
                                .DeserializeObject<List<BusinessEntites.Scheduler.locationiq.LatAndLong>>(radiusData);
                            if (returnsInformation != null && returnsInformation.Any())
                            {
                                dALSchedulers.Scheduler_UpdateLatAndLong(restlt.AttractionsId, countryId,
                                    returnsInformation.Select(x => x.lat).FirstOrDefault(),
                                    returnsInformation.Select(x => x.lon).FirstOrDefault());

                                dALSchedulers.Scheduler_MapsLogging("LatAndLong_Init", mapsXapixFeature.MapsId,
                                    mapsXapixFeature.MapsCredentialsId, mapsXapixFeature.MapFeaturesId, string.Empty,
                                    string.Empty, string.Empty, countryId, restlt.AttractionsId, url, false,0);
                            }
                            else
                            {
                                dALSchedulers.Scheduler_MapsLogging("LatAndLong_Init", mapsXapixFeature.MapsId,
                                    mapsXapixFeature.MapsCredentialsId, mapsXapixFeature.MapFeaturesId, radiusData,
                                    string.Empty, string.Empty, countryId, restlt.AttractionsId, url, true,0);
                            }
                            //Every request after taking a break of one second
                            Thread.Sleep(1000);
                            break;
                        }
                    }
                    
                }
                catch (Exception ex)
                {
                    dALSchedulers.Scheduler_MapsLogging("LatAndLong_Init", mapsXapixFeature.MapsId,
                        mapsXapixFeature.MapsCredentialsId, mapsXapixFeature.MapFeaturesId, radiusData,
                        ex.Message, ex.StackTrace, countryId, restlt.AttractionsId, url, true,0);

                    if (ex.Message == "The remote server returned an error: (429) Too Many Requests.")
                    {
                        Thread.Sleep(1000 * 60);
                    }
                }
            }
        }
    }
}
