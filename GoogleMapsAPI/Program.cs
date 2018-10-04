using BusinessEntites.Common;
using BusinessEntites.EntityGoogleMaps.EntityNearBySearch;
using BusinessEntites.EntityGoogleMaps.EntityPlaceSearch.ReferenceObjects;
using BusinessEntites.EntityPlaceDetails;
using BusinessEntites.EntityPlaceDetails.RefernceObjects;
using BusinessEntites.EntityPlaceSearch;
using BusinessEntites.Scheduler;
using DataAccessLayer.Admin;
using DataAccessLayer.Schedulers;
using GoogleMapsAPI.Features;
using GoogleMapsAPI.Helper;
using SchedulerCode;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleMapsAPI
{
    class Program
    {
        static int Main(string[] args)
        {

            GetNearestInformation getNearestInformation = new GetNearestInformation();
            GetPlaceInformation getPlaceInformation = new GetPlaceInformation();
            GetDistanceCalculation getDistanceCalculation = new GetDistanceCalculation();
            GetGoogleSearchText googleSearchText = new GetGoogleSearchText();
            CategorySearch categorySearch = new CategorySearch();
            RecalculateTourInfo recalculateTourInfo = new RecalculateTourInfo();
            PhotoReferences photoReferences = new PhotoReferences();
            DALSchedulers dALSchedulers = new DALSchedulers();



        string argMessage = "Please enter arguments in the following format /mode:NEARBYSEARCH~2 or /mode:PLACEDETAILS~2 or /mode:DISTANCECALCULATION~2 or /mode:USERFAILEDRECORDS~2";

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



                switch (argmentarray[1].ToUpper().Split('~')[0])
                {
                    case "NEARBYSEARCH":
                    {
                        getNearestInformation.GetRadiusInformation(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        //getPlaceInformation.GetPlaceDetails(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        break;
                    }
                    case "SEARCHCATEGORY":
                    {
                        categorySearch.SearchByCategory(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        break;
                    }
                    case "PLACEDETAILS":
                    {
                        getPlaceInformation.GetPlaceDetails(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        break;
                    }
                    case "DISTANCECALCULATION":
                    {
                        getDistanceCalculation.CalculateDistance(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        break;
                    }
                    case "MISSINGDISTANCE":
                    {
                        getDistanceCalculation.MissingDistance(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        break;
                    }
                    case "GOOGLESEARCHTEXT":
                    {
                        googleSearchText.GoogleSearchText(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        break;
                    }
                    case "USERFAILEDRECORDS":
                    {
                        recalculateTourInfo.UpdateUserTourInformation(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        //missing distance calcuation
                        getDistanceCalculation.MissingDistance(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        //getNearestInformation.SearchByCategoryAttraction(Convert.ToInt32(argmentarray[1]
                        //    .Split('~')[1]));
                        //getDistanceCalculation.CalculateDistance(Convert.ToInt32(argmentarray[1].Split('~')[1]));
                        Main(args);
                        break;
                    }
                    case "PHOTOREFERENCEUPDATE":
                    {
                        photoReferences.PhotoReference(Convert.ToInt32(argmentarray[1]
                            .Split('~')[1]));
                        break;
                    }
                    case "USERREQUESTED":
                    {

                        List<GetUserRequested> getUserRequested = dALSchedulers.Scheduler_GetUserRequested(
                            Convert.ToInt32(argmentarray[1]
                                .Split('~')[1]));

                        if (getUserRequested != null && getUserRequested.Count > 0)
                        {
                            foreach (GetUserRequested _getUserRequested in getUserRequested)
                            {
                                getPlaceInformation.GetAutoCompleteInformation(_getUserRequested.CountryId,
                                    new GetPlaceDetails
                                    {
                                        AttractionsId = _getUserRequested.AttractionsId,
                                        AttractionName = string.Empty,
                                        GoogleSearchText = _getUserRequested.GoogleSearchText
                                    },
                                    new MasterCountryScheduler
                                    {
                                        CountryId = _getUserRequested.CountryId,
                                        CountryName = _getUserRequested.CountryName,
                                        CountryShortName = _getUserRequested.CountryShortName
                                    }, _getUserRequested.AttractionsId, _getUserRequested.UserTripId);

                                dALSchedulers.Scheduler_DeleteUserRequested(_getUserRequested.UserRequestedId,
                                    _getUserRequested.CountryId);

                            }
                            
                        }
                        
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
        
    }
}
