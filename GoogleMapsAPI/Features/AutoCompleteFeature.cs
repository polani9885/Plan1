using BusinessEntites.EntityAutoComplete;
using BusinessEntites.EntityAutoComplete.ReferenceObjects;
using GoogleMapsAPI.Helper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleMapsAPI.Features
{
    public class AutoCompleteFeature
    {
        private readonly WebRequest webRequest = new WebRequest();
        public List<EntityPredictions> SearchString(string attractionaddress,string countryName)
        {
            try
            {
                string url =
                    "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" +
                    attractionaddress +
                    "&components=country:" + countryName +
                    "&key=" + ConfigurationManager.AppSettings["apiKey"];
                string radiusData = webRequest.WebServiceInformation(url);
                var returnsInformation =
                    Newtonsoft.Json.JsonConvert.DeserializeObject<EntityAutoComplete>(radiusData);

                    return returnsInformation.predictions;
            }
            catch (Exception ex)
            {
                
            }
            return null;
        }
    }
}
