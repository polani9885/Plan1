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



            string argMessage = "Please enter arguments in the following format /mode:NEARBYSEARCH~2 or /mode:PLACEDETAILS~2 or /mode:DISTANCECALCULATION~2";

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
