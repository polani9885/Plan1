using BusinessEntites;
using BusinessEntites.Common;
using BusinessEntites.EntityGoogleMaps.EntityPlaceSearch.ReferenceObjects;
using BusinessEntites.EntityPlaceDetails;
using BusinessEntites.EntityPlaceDetails.RefernceObjects;
using BusinessEntites.EntityPlaceSearch;
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
    public class GetPlaceInformation
    {
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();
        private MasterCountryScheduler countryInformation = new MasterCountryScheduler();
        private readonly WebRequest webRequest = new WebRequest();
        private readonly NLogBaseClass nLogBaseClass = new NLogBaseClass();
        private readonly ExceptionLogging exceptionLogging = new ExceptionLogging();
        private readonly GetDistanceCalculation getDistanceCalculation = new GetDistanceCalculation();

        public void GetPlaceDetails(int countryId)
        {
            var placeDetails = dALSchedulers.Scheduler_GetPlaceDetails(countryId);

            countryInformation = dALSchedulers.Scheduler_GetCountryOnId(countryId);

            foreach (GetPlaceDetails details in placeDetails)
            {
                try
                {
                    GetPlaceDetails(details.PlaceId, details.AttractionsId, countryId);
                    //GetAutoCompleteInformation(countryId, details, countryInformation, details.AttractionsId);
                }
                catch (Exception ex)
                {
                    exceptionLogging.InsertExceptionInformation(new LoggingEntity
                    {
                        CreatedBy = "scheduler",
                        ExceptionMessage = ex.Message,
                        ExceptionStackTrace = ex.StackTrace,
                        MethodName = "GetPlaceDetails",
                        Parameters = "countryId = " + countryId.ToString(),
                        CountryId = countryId
                    });
                }
            }
            //getDistanceCalculation.CalculateDistance(countryId);
        }

        public void GetAutoCompleteInformation(int countryId, GetPlaceDetails details, MasterCountryScheduler masterCountryScheduler, int attractionsId,int userTripId = 0)
        {
            try
            {
                var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("geocode");
                if (googleCounter == null || googleCounter.Counter < Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                {
                    AttractionsDTO attractionDto;
                    string retsult = string.Empty;
                    string googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                                       details.AttractionName + " " + details.GoogleSearchText +
                                       "&components=country:" + masterCountryScheduler.CountryShortName + "&key=" +
                                       ConfigurationManager.AppSettings["apiKey"];

                    retsult = webRequest.WebServiceInformation(googleUrl);
                    var placeDetailsInfo = Newtonsoft.Json.JsonConvert.DeserializeObject<EntityPlaceSearch>(retsult);


                    if (placeDetailsInfo.results != null && placeDetailsInfo.results.Count > 0)
                    {
                        dALSchedulers.Scheduler_GoogleLogging("geocode", "GetAutoCompleteInformation",
                            details.AttractionName, "", "",
                            false);
                    }
                    else
                    {
                        dALSchedulers.Scheduler_GoogleLogging("geocode", "GetAutoCompleteInformation",
                            details.AttractionName, "", "",
                            true);
                    }

                    if (placeDetailsInfo != null)
                    {
                        if (masterCountryScheduler.CountryName != GetLongNameAddressElement(placeDetailsInfo.results
                                .FirstOrDefault()
                                .address_components, "country"))
                        {
                            dALSchedulers.SchedulerDeleteAttraction(attractionsId, countryId);
                        }
                        else
                        {
                            attractionDto = new AttractionsDTO();
                            attractionDto.Latitude = placeDetailsInfo.results.FirstOrDefault().geometry.location.lat;
                            attractionDto.AddressOne = GetLongNameAddressElement(placeDetailsInfo.results
                                                           .FirstOrDefault()
                                                           .address_components, "street_number")
                                                       + " "
                                                       +
                                                       GetLongNameAddressElement(placeDetailsInfo.results
                                                           .FirstOrDefault()
                                                           .address_components, "route");
                            attractionDto.AddressTwo = GetLongNameAddressElement(placeDetailsInfo.results
                                .FirstOrDefault()
                                .address_components, "administrative_area_level_2");
                            attractionDto.CityName = GetLongNameAddressElement(placeDetailsInfo.results.FirstOrDefault()
                                .address_components, "locality");
                            if(string.IsNullOrEmpty(attractionDto.CityName))
                            {
                                attractionDto.CityName = GetLongNameAddressElement(placeDetailsInfo.results.FirstOrDefault()
                                    .address_components, "administrative_area_level_2");
                            }
                            attractionDto.CreatedBy = "schedule";
                            attractionDto.Longitude = placeDetailsInfo.results.FirstOrDefault().geometry.location.lng;
                            attractionDto.PlaceId = placeDetailsInfo.results.FirstOrDefault().place_id;
                            attractionDto.StateName = GetLongNameAddressElement(placeDetailsInfo.results
                                .FirstOrDefault()
                                .address_components, "administrative_area_level_1");
                            attractionDto.CountryId = countryId;
                            attractionDto.AttractionsId = attractionsId;
                            attractionDto.StateShortName =
                                GetShortNameAddressElement(placeDetailsInfo.results.FirstOrDefault()
                                    .address_components, "administrative_area_level_1");

                            attractionDto.CityShortName =
                                GetShortNameAddressElement(placeDetailsInfo.results.FirstOrDefault()
                                    .address_components, "locality");
                            if (string.IsNullOrEmpty(attractionDto.CityShortName))
                            {
                                attractionDto.CityShortName = GetLongNameAddressElement(placeDetailsInfo.results.FirstOrDefault()
                                    .address_components, "administrative_area_level_2");
                            }
                            dALSchedulers.Scheduler_InsertAttractionAuto(attractionDto, countryId, userTripId);

                            GetPlaceDetails(attractionDto.PlaceId, attractionsId, countryId);
                        }
                    }
                    else
                    {
                        dALSchedulers.SchedulerDeleteAttraction(attractionsId, countryId);
                    }
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        private string GetLongNameAddressElement(List<address_components> address_components, string element)
        {
            string address = string.Empty;
            if (address_components != null && address_components.Where(x => x.types.Contains(element)).ToList().Count > 0)
                address = address_components.Where(x => x.types.Contains(element))
                .Select(y => y.long_name).FirstOrDefault();
            return address;
        }
        private string GetShortNameAddressElement(List<address_components> address_components, string element)
        {
            string address = string.Empty;
            if (address_components != null && address_components.Where(x => x.types.Contains(element)).ToList().Count > 0)
                address = address_components.Where(x => x.types.Contains(element))
                .Select(y => y.short_name).FirstOrDefault();
            return address;
        }

        private List<WeekDaysOpenClose> SerilizeOpenCloseTime(EntityOpening_hours entityOpening_hours)
        {
            List<WeekDaysOpenClose> LlstWeekDaysOpenClose = new List<WeekDaysOpenClose>();
            int weekDayId = 0;
            if (entityOpening_hours != null)
            {
               
                foreach (string weekDay in entityOpening_hours.weekday_text)
                {
                    string time = string.Empty;
                    switch (weekDay.Split(':')[0].Trim())
                    {
                        case "Monday":
                        {
                            weekDayId = 0;
                            time = weekDay.Replace("Monday:", "");
                            break;
                        }
                        case "Tuesday":
                        {
                            weekDayId = 1;
                            time = weekDay.Replace("Tuesday:", "");
                            break;
                        }
                        case "Wednesday":
                        {
                            weekDayId = 2;
                            time = weekDay.Replace("Wednesday:", "");
                            break;
                        }
                        case "Thursday":
                        {
                            weekDayId = 3;
                            time = weekDay.Replace("Thursday:", "");
                            break;
                        }
                        case "Friday":
                        {
                            weekDayId = 4;
                            time = weekDay.Replace("Friday:", "");
                            break;
                        }
                        case "Saturday":
                        {
                            weekDayId = 5;
                            time = weekDay.Replace("Saturday:", "");
                            break;
                        }
                        case "Sunday":
                        {
                            weekDayId = 6;
                            time = weekDay.Replace("Sunday:", "");
                            break;
                        }
                    }

                    if (time.Split(',').Length > 1)
                    {
                        for (int i = 0; i < time.Split(',').Length; i++)
                        {
                            LlstWeekDaysOpenClose = SaveCloseOpenTime(time.Split(',')[i], weekDayId, LlstWeekDaysOpenClose);
                        }
                    }
                    else
                    {
                        LlstWeekDaysOpenClose = SaveCloseOpenTime(time, weekDayId, LlstWeekDaysOpenClose);
                    }
                }
            }
            return LlstWeekDaysOpenClose.Where(x => !string.IsNullOrEmpty(x.OpenTime) ||
                                                    !string.IsNullOrEmpty(x.CloseTime)).ToList();
        }

        private List<WeekDaysOpenClose> SaveCloseOpenTime(string time, int weekdayId, List<WeekDaysOpenClose> llstWeekDaysOpenClose)
        {
            WeekDaysOpenClose weekDaysOpenClose = new WeekDaysOpenClose();
            weekDaysOpenClose.WeekdayId = weekdayId;

            if (time.Trim() == "Open 24 hours")
            {
                weekDaysOpenClose.OpenTime = TimeSpan.Parse("00:00").ToString().Replace('.', ':');
                weekDaysOpenClose.CloseTime = TimeSpan.Parse("23:59").ToString().Replace('.', ':');
            }
            else if (time.Trim() == "Closed")
            {
                weekDaysOpenClose = new WeekDaysOpenClose();
                weekDaysOpenClose.OpenTime = string.Empty;
                weekDaysOpenClose.CloseTime = string.Empty;
            }
            else
            {
                weekDaysOpenClose.OpenTime = TimeSpan
                    .Parse(DateTime.Parse(time.Trim().Split('–')[0].Trim()).Hour.ToString()).ToString()
                    .Replace('.', ':');
                weekDaysOpenClose.CloseTime = TimeSpan
                    .Parse(DateTime.Parse(time.Trim().Split('–')[1].Trim()).Hour.ToString()).ToString()
                    .Replace('.', ':');
            }
            llstWeekDaysOpenClose.Add(weekDaysOpenClose);
            return llstWeekDaysOpenClose;
        }

        private void GetPlaceDetails(string placeId, int attractionsId, int countryId)
        {
            if (!string.IsNullOrEmpty(placeId))
            {
                var googleCounter = dALSchedulers.Scheduler_GetGoogleMapsMethodCount("place");
                if (googleCounter == null || googleCounter.Counter <
                    Convert.ToInt32(ConfigurationManager.AppSettings["recordCount"]))
                {
                    string retsult = string.Empty;
                    string googleUrl = "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId +
                                       "&key=" +
                                       ConfigurationManager.AppSettings["apiKey"];

                    retsult = webRequest.WebServiceInformation(googleUrl);

                    var placeDetailsInfo = Newtonsoft.Json.JsonConvert.DeserializeObject<EntityPlaceDetails>(retsult);

                    if (placeDetailsInfo.result != null)
                    {
                        dALSchedulers.Scheduler_GoogleLogging("place", "GetPlaceDetails", placeId, "", "",
                            false);
                    }
                    else
                    {
                        dALSchedulers.Scheduler_GoogleLogging("place", "GetPlaceDetails", placeId, "", "",
                            true);
                    }


                    if (placeDetailsInfo != null && placeDetailsInfo.result != null)
                    {


                        SchedulerInsertPlaceDetails schedulerInsertPlaceDetails = new SchedulerInsertPlaceDetails();

                        schedulerInsertPlaceDetails.AttractionsId = attractionsId;
                        schedulerInsertPlaceDetails.Category = placeDetailsInfo.result.types;
                        schedulerInsertPlaceDetails.GoogleWebSite = placeDetailsInfo.result.url;
                        schedulerInsertPlaceDetails.GoogleICon = placeDetailsInfo.result.icon;
                        schedulerInsertPlaceDetails.GoogleInternational_phone_number =
                            placeDetailsInfo.result.international_phone_number;
                        schedulerInsertPlaceDetails.Googleadr_address = placeDetailsInfo.result.formatted_address;
                        schedulerInsertPlaceDetails.GoogleName = placeDetailsInfo.result.name;
                        schedulerInsertPlaceDetails.GoogleRating = Convert.ToDecimal(placeDetailsInfo.result.rating);
                        schedulerInsertPlaceDetails.WeekDaysOpenClose =
                            SerilizeOpenCloseTime(placeDetailsInfo.result.opening_hours);
                        schedulerInsertPlaceDetails.GoogleUser_ratings_total = placeDetailsInfo.result.rating;
                        schedulerInsertPlaceDetails.Pricelevel = Convert.ToInt32(placeDetailsInfo.result.price_level);
                        schedulerInsertPlaceDetails.GooglePhotos = (placeDetailsInfo.result.photos == null ||
                                                                    placeDetailsInfo.result.photos.Count == 0
                            ? null
                            : placeDetailsInfo.result.photos.Select(x => new GooglePhotos
                            {
                                Height = Convert.ToInt32(x.height),
                                Html_attributions = x.html_attributions.FirstOrDefault(),
                                Photo_reference = x.photo_reference,
                                Width = Convert.ToInt32(x.width)
                            }).ToList());
                        schedulerInsertPlaceDetails.GoogleReview = placeDetailsInfo.result.reviews == null ||
                                                                   placeDetailsInfo.result.reviews.Count == 0
                            ? null
                            : placeDetailsInfo.result.reviews.Select(x => new GoogleReview
                            {

                                Rating = Convert.ToInt32(x.rating),
                                Author_name = x.author_name,
                                Author_url = x.author_url,
                                //CreatedDate = new DateTime(Convert.ToInt64(x.time)*1000,DateTimeKind.Utc),
                                Language = x.language,
                                Profile_photo_url = x.author_url,
                                Text = x.text
                            }).ToList();

                        schedulerInsertPlaceDetails.Utc_offset =
                            string.IsNullOrEmpty(placeDetailsInfo.result.utc_offset)
                                ? 0
                                : Convert.ToInt32(placeDetailsInfo.result.utc_offset);


                        AttractionsDTO attractionDto = new AttractionsDTO();
                        attractionDto.Latitude = placeDetailsInfo.result.geometry.location.lat;
                        attractionDto.AddressOne =
                            GetLongNameAddressElement(placeDetailsInfo.result.address_components, "street_number")
                            + " "
                            +
                            GetLongNameAddressElement(placeDetailsInfo.result
                                .address_components, "route");
                        attractionDto.AddressTwo = GetLongNameAddressElement(placeDetailsInfo.result
                            .address_components, "administrative_area_level_2");
                        attractionDto.CityName = GetLongNameAddressElement(placeDetailsInfo.result
                            .address_components, "locality");
                        attractionDto.CreatedBy = "schedule";
                        attractionDto.Longitude = placeDetailsInfo.result.geometry.location.lng;
                        attractionDto.PlaceId = placeDetailsInfo.result.place_id;
                        attractionDto.StateName = GetLongNameAddressElement(placeDetailsInfo.result
                            .address_components, "administrative_area_level_1");
                        attractionDto.CountryId = countryId;
                        attractionDto.AttractionsId = attractionsId;
                        attractionDto.StateShortName =
                            GetShortNameAddressElement(placeDetailsInfo.result
                                .address_components, "administrative_area_level_1");

                        attractionDto.CityShortName =
                            GetShortNameAddressElement(placeDetailsInfo.result
                                .address_components, "locality");

                        attractionDto.AttractionName = placeDetailsInfo.result.name;



                        dALSchedulers.Scheduler_InsertAttractionInfo(schedulerInsertPlaceDetails, countryId,
                            attractionDto);
                    }
                }
            }
        }
    }
}
