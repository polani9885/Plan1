using BusinessEntites;
using BusinessEntites.Common;
using BusinessEntites.EntityGoogleMaps.EntityNearBySearch;
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

            AttractionTravelTimeDistanceDTO attractionTravelTimeDistanceDTO = new AttractionTravelTimeDistanceDTO();

            foreach (AttractionsDTO attractionsDTO in pendingRecords)
            {
                var attractionInformation = dALSchedulers.Scheduler_GetAttractionNearBy(countryId,
                    attractionsDTO.AttractionsId);

                foreach (AttractionsDTO _attractionsDTO in attractionInformation)
                {
                    foreach (MasterTravelModeDTO masterTravelModeDTO in travelMode)
                    {
                        try
                        {


                            string radiusData = string.Empty;
                            string url =
                                "https://maps.googleapis.com/maps/api/directions/json?&mode=" +
                                masterTravelModeDTO.TravelType.ToLower() + "&origin=" + attractionsDTO.GoogleSearchText +
                                "&destination=" + _attractionsDTO.GoogleSearchText + "&key=" +
                                ConfigurationManager.AppSettings["apiKey"];
                            radiusData = webRequest.WebServiceInformation(url);
                            var returnsInformation =
                                Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(radiusData);

                            attractionTravelTimeDistanceDTO = new AttractionTravelTimeDistanceDTO();
                            attractionTravelTimeDistanceDTO.SourceAttractionId = attractionsDTO.AttractionsId;
                            attractionTravelTimeDistanceDTO.DestinationAttractionId = _attractionsDTO.AttractionsId;
                            attractionTravelTimeDistanceDTO.TravelModeId = masterTravelModeDTO.TravelModeId;
                            attractionTravelTimeDistanceDTO.Distance =
                                Convert.ToInt32(
                                    returnsInformation.routes.FirstOrDefault().legs.FirstOrDefault().distance.value);

                            attractionTravelTimeDistanceDTO.TravelTime =
                                Convert.ToInt32(
                                    returnsInformation.routes.FirstOrDefault().legs.FirstOrDefault().duration.value);

                            dALSchedulers.Scheduler_InsertAttractionTravelTimeDistance(attractionTravelTimeDistanceDTO,
                                countryId);

                        }
                        catch (Exception ex)
                        {
                            exceptionLogging.InsertExceptionInformation(new LoggingEntity
                            {
                                CreatedBy = "scheduler",
                                ExceptionMessage = ex.Message,
                                ExceptionStackTrace = ex.StackTrace,
                                MethodName = "CalculateDistance",
                                Parameters =
                                    "SourceAttractionId  = " + attractionsDTO.AttractionsId +
                                    " DestinationAttractionId = " + _attractionsDTO.AttractionsId + " TravelModeId = " +
                                    masterTravelModeDTO.TravelModeId,
                                CountryId = countryId
                            });
                        }

                    }
                }
            }
        }

    }
}
