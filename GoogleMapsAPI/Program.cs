using BusinessEntites.Common;
using BusinessEntites.EntityGoogleMaps.EntityNearBySearch;
using BusinessEntites.EntityPlaceSearch;
using BusinessEntites.Scheduler;
using DataAccessLayer.Admin;
using DataAccessLayer.Schedulers;
using GoogleMapsAPI.Helper;
using SchedulerCode;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleMapsAPI
{
    class Program
    {
        private readonly WebRequest webRequest = new WebRequest();
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();

        private MasterCountryScheduler countryInformation = new MasterCountryScheduler();


        static int Main(string[] args)
        {
            Program program = new Program();
            

            string argMessage = "Please enter arguments in the following format /mode:NEARBYSEARCH~2 or /mode:PLACEDETAILS~2";

            try
            {
                if (args.Length <= 0)
                {
                    Console.WriteLine(argMessage);
                    return (int)ExitCode.NoArgument;
                }

                var argument = args[0];
                var argmentarray = argument.Split(':');

                if ((argmentarray.Length != 2) || (argmentarray[0].ToLower() != "/mode"))
                {
                    Console.WriteLine(argMessage);
                    return (int)ExitCode.ArgumentNotInCorrectFormat;
                }

                

                switch (argmentarray[1].ToUpper())
                {
                    case "NearBySearch~2":
                    {
                        program.GetRadiusInformation(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        break;
                    }
                    case "PLACEDETAILS~2":
                    {
                        program.GetPlaceDetails(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        break;
                    }
                    default:
                    {
                        return (int) ExitCode.ArgumentNotInCorrectFormat;
                    }
                }
            }
            catch (Exception e)
            {
                return (int)ExitCode.Exception;
            }
            return (int)ExitCode.Success;
        }

        private void GetRadiusInformation(int countryId)
        {
            var masterCityList = dALSchedulers.Scheduler_GetCityOnCountryId(countryId);
            string latitude = string.Empty;
            string longitude = string.Empty;

            var googleType = dALSchedulers.Scheduler_GetTypes().ToArray();

            if (masterCityList != null)
            {
                masterCityList =
                    masterCityList.Where(x => !string.IsNullOrEmpty(x.Latitude) && !string.IsNullOrEmpty(x.Longitude))
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
                         longitude + "&radius=500&key=" + ConfigurationManager.AppSettings["apiKey"];
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

                dALSchedulers.Scheduler_InsertGoogleSearchText(nearByPlaceSearchEntity,countryId);
            }
        }

        private void GetPlaceDetails(int countryId)
        {
            var placeDetails = dALSchedulers.Scheduler_GetPlaceDetails(countryId);

            countryInformation = dALSchedulers.Scheduler_GetCountryOnId(countryId);

            foreach (GetPlaceDetails details in placeDetails)
            {
                try
                {
                    GetAutoCompleteInformation(countryId, details.GoogleSearchText, countryInformation, details.AttractionsId);
                }
                catch (Exception e)
                {
                    
                }
            }
        }


        private void GetAutoCompleteInformation(int countryId, string googleSearchText, MasterCountryScheduler masterCountryScheduler,int AttractionsId)
        {
            try
            {
                AttractionsDTO attractionDto;
                string retsult = string.Empty;
                string googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + googleSearchText +
                                   "&components=country:"+ masterCountryScheduler.CountryShortName + "&key=" + ConfigurationManager.AppSettings["apiKey"];

                retsult = webRequest.WebServiceInformation(googleUrl);
                var placeDetailsInfo = Newtonsoft.Json.JsonConvert.DeserializeObject<EntityPlaceSearch>(retsult);
                if (placeDetailsInfo != null)
                {
                    attractionDto = new AttractionsDTO();
                    attractionDto.Latitude = placeDetailsInfo.results.FirstOrDefault().geometry.location.lat;
                    attractionDto.AddressOne =
                        placeDetailsInfo.results.FirstOrDefault()
                            .address_components.Where(x => x.types.Contains("street_number"))
                            .Select(y => y.long_name).FirstOrDefault()
                            .ToString()
                            + " "
                            + placeDetailsInfo.results.FirstOrDefault()
                            .address_components.Where(x => x.types.Contains("route"))
                            .Select(y => y.long_name).FirstOrDefault()
                            .ToString()
                            ;
                    attractionDto.AddressTwo = placeDetailsInfo.results.FirstOrDefault()
                        .address_components.Where(x => x.types.Contains("administrative_area_level_2"))
                        .Select(y => y.long_name).FirstOrDefault()
                        .ToString();
                    attractionDto.CityName = placeDetailsInfo.results.FirstOrDefault()
                        .address_components.Where(x => x.types.Contains("administrative_area_level_1"))
                        .Select(y => y.long_name).FirstOrDefault()
                        .ToString();
                    attractionDto.CreatedBy = "schedule";
                    attractionDto.Longitude = placeDetailsInfo.results.FirstOrDefault().geometry.location.lng;
                    attractionDto.PlaceId = placeDetailsInfo.results.FirstOrDefault().place_id;
                    attractionDto.StateName = placeDetailsInfo.results.FirstOrDefault()
                        .address_components.Where(x => x.types.Contains("administrative_area_level_1"))
                        .Select(y => y.long_name).FirstOrDefault()
                        .ToString();
                    attractionDto.CountryId = countryId;
                    attractionDto.AttractionsId = AttractionsId;
                    attractionDto.StateShortName = placeDetailsInfo.results.FirstOrDefault()
                        .address_components.Where(x => x.types.Contains("administrative_area_level_1"))
                        .Select(y => y.short_name).FirstOrDefault()
                        .ToString();
                    attractionDto.CityShortName = placeDetailsInfo.results.FirstOrDefault()
                        .address_components.Where(x => x.types.Contains("administrative_area_level_1"))
                        .Select(y => y.short_name).FirstOrDefault()
                        .ToString();

                    dALSchedulers.Scheduler_InsertAttractionAuto(attractionDto, countryId);
                }
            }
            catch (Exception e)
            {

            }
        }
    }
}
