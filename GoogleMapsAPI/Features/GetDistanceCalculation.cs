using BusinessEntites.Common;
using DataAccessLayer.LogException;
using DataAccessLayer.Schedulers;
using GoogleMapsAPI.Helper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleMapsAPI.Features
{
    public class GetDistanceCalculation
    {
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();
        private readonly WebRequest webRequest = new WebRequest();
        private readonly ExceptionLogging exceptionLogging = new ExceptionLogging();

        public void CalculateDistance(int countryId)
        {
            var pendingRecords = dALSchedulers.Scheduler_GetDistancePending(countryId);
            var travelMode = dALSchedulers.Scheduler_GetTravelMode();

            foreach (AttractionsDTO attractionsDTO in pendingRecords)
            {
                var attractionInformation = dALSchedulers.Scheduler_GetAttractionNearBy(countryId,
                    attractionsDTO.AttractionsId);

                foreach (AttractionsDTO _attractionsDTO in attractionInformation)
                {
                    foreach (MasterTravelModeDTO masterTravelModeDTO in travelMode)
                    {
                        string radiusData = string.Empty;
                        string url =
                            "https://maps.googleapis.com/maps/api/directions/json?&mode=" +
                            masterTravelModeDTO.TravelType + "&origin=" + attractionsDTO.GoogleSearchText +
                            "&destination=" + _attractionsDTO.GoogleSearchText + "&key=" +
                            ConfigurationManager.AppSettings["apiKey"];
                        radiusData = webRequest.WebServiceInformation(url);
                    }
                }
            }
        }

    }
}
