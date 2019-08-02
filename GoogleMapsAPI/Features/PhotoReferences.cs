using BusinessEntites;
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
    public class PhotoReferences
    {
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();
        private readonly ExceptionLogging exceptionLogging = new ExceptionLogging();
        private readonly WebRequest webRequest = new WebRequest();

        public void PhotoReference(int countryId)
        {
            try
            {
                var pendingReference = dALSchedulers.Scheduler_PhotoReferencePending(countryId);
                string url = string.Empty;
                string radiusData = string.Empty;
                foreach (var attractionPhotoReference in pendingReference)
                {
                    //var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                    //if (googleCounter == null || googleCounter.Counter <
                    //    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                    {
                        try
                        {

                            radiusData = string.Empty;
                            url =
                                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&photoreference=" +
                                attractionPhotoReference.Photo_reference + "&key=" +
                                ConfigurationManager.AppSettings["apiKey"];
                            radiusData = webRequest.RedirectedURL(url);

                            if (Uri.IsWellFormedUriString(radiusData, UriKind.RelativeOrAbsolute))
                            {
                                dALSchedulers.Scheduler_PhotoReferenceUrlUpdate(countryId,
                                    attractionPhotoReference.AttractionPhotosId, radiusData);
                            }
                        }
                        catch (Exception ex)
                        {
                            dALSchedulers.Scheduler_PhotoReferenceUrlAlreadyTried(countryId,
                                attractionPhotoReference.AttractionPhotosId);
                        }

                        //dALSchedulers.Scheduler_GoogleLogging("place", "GetRadiusInformation", "", string.Empty, string.Empty,
                        //    false);
                        //googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                        //if (googleCounter == null || googleCounter.Counter >
                        //    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
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
                    MethodName = "PhotoReference",
                    Parameters = "countryId = " + countryId.ToString(),
                    CountryId = countryId
                });
            }
        }

    }
}
