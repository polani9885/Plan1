using GoogleMapsAPI.Helper;
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
        
        static void Main(string[] args)
        {
            Program program = new Program();
            program.GetRadiusInformation();
        }

        public void GetRadiusInformation()
        {
            string radiusData = string.Empty;
            string url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=27.987276,-82.334912&radius=500&key=" + ConfigurationManager.AppSettings["apiKey"];
            radiusData = webRequest.WebServiceInformation(url);
        }
    }
}
