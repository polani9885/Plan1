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
        

        public void MissingDistance(int countryId)
        {
            var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("directions");
            if (googleCounter == null || googleCounter.Counter <
                Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
            {
                var pendingRecords = dALSchedulers.Scheduler_GetMissingDistance(countryId);
                var travelMode = dALSchedulers.Scheduler_GetTravelMode();

                AttractionTravelTimeDistanceDTO attractionTravelTimeDistanceDTO = new AttractionTravelTimeDistanceDTO();

                foreach (AttractionsDTO attractionsDTO in pendingRecords)
                {
                    var attractionInformation = dALSchedulers.Scheduler_GetDestinationMissingDistance(countryId,
                        attractionsDTO.AttractionsId);

                    foreach (MissingDataAttractionDTO _attractionsDTO in attractionInformation)
                    {
                        foreach (MasterTravelModeDTO masterTravelModeDTO in _attractionsDTO.MasterTravelModeID > 0
                            ? travelMode.Where(x => x.TravelModeId == _attractionsDTO.MasterTravelModeID)
                            : travelMode)
                        {
                            DistanceGetting(masterTravelModeDTO.TravelType, _attractionsDTO.SourceText,
                                _attractionsDTO.DestinationText, attractionsDTO.AttractionsId,
                                _attractionsDTO.AttractionsId, masterTravelModeDTO.TravelModeId, countryId);
                        }

                        dALSchedulers.Scheduler_DeleteMissingDistanceDestination(countryId,_attractionsDTO
                            .MissingDistanceAttractionsRecordsXAttractionsID);
                    }

                    dALSchedulers.Scheduler_DeleteMissingDistance(countryId,attractionsDTO.AttractionsId);
                }
            }
        }


        public void CalculateDistance(int countryId)
        {
            var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("directions");
            if (googleCounter == null || googleCounter.Counter < Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
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
                            googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("directions");
                            if (googleCounter == null || googleCounter.Counter <
                                Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                            {
                                DistanceGetting(masterTravelModeDTO.TravelType, attractionsDTO.GoogleSearchText,
                                    _attractionsDTO.GoogleSearchText, attractionsDTO.AttractionsId,
                                    _attractionsDTO.AttractionsId, masterTravelModeDTO.TravelModeId, countryId);
                            }
                        }
                    }
                }
            }
        }

        public void DistanceGetting(string travelType,string origin, string destination,int sourceAttractionId, int destinationAttractionId, int travelTypeId, int countryId)
        {
            string url = string.Empty;
            try
            {
                AttractionTravelTimeDistanceDTO attractionTravelTimeDistanceDTO = new AttractionTravelTimeDistanceDTO();

                string radiusData = string.Empty;
                origin = origin.Replace('#',' ');
                destination = destination.Replace('#', ' ');
                url =
                    "https://maps.googleapis.com/maps/api/directions/json?&mode=" +
                    travelType.ToLower() + "&origin=" +
                    origin +
                    "&destination=" + destination + "&key=" +
                    ConfigurationManager.AppSettings["apiKey"];
                radiusData = webRequest.WebServiceInformation(url);
                var returnsInformation =
                    Newtonsoft.Json.JsonConvert.DeserializeObject<NearBySearchEntity>(radiusData);


                if (returnsInformation.results != null && returnsInformation.results.Count > 0)
                {
                    dALSchedulers.Scheduler_GoogleLogging("directions", "CalculateDistance", "",
                        string.Empty, string.Empty,
                        false);
                }
                else
                {
                    dALSchedulers.Scheduler_GoogleLogging("directions", "CalculateDistance", "",
                        string.Empty, string.Empty,
                        true);
                }

                attractionTravelTimeDistanceDTO = new AttractionTravelTimeDistanceDTO();
                attractionTravelTimeDistanceDTO.SourceAttractionId = sourceAttractionId;
                attractionTravelTimeDistanceDTO.DestinationAttractionId = destinationAttractionId;
                attractionTravelTimeDistanceDTO.TravelModeId = travelTypeId;
                attractionTravelTimeDistanceDTO.Distance =
                    Convert.ToInt32(
                        returnsInformation.routes.FirstOrDefault().legs.FirstOrDefault().distance.value);

                attractionTravelTimeDistanceDTO.TravelTime =
                    Convert.ToInt32(
                        returnsInformation.routes.FirstOrDefault().legs.FirstOrDefault().duration.value);

                dALSchedulers.Scheduler_InsertAttractionTravelTimeDistance(
                    attractionTravelTimeDistanceDTO,
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
                        "SourceAttractionId  = " + sourceAttractionId +
                        " DestinationAttractionId = " + destinationAttractionId +
                        " TravelModeId = " +
                        travelTypeId +
                        "url= " + url,
                    CountryId = countryId
                });
            }
        }

    }
}
