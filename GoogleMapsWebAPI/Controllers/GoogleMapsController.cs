using BusinessEntites;
using BusinessEntites.Common;
using Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace GoogleMapsWebAPI.Controllers
{
    public class GoogleMapsController : Controller
    {
        ISchedulers _ISchedulers;
        public GoogleMapsController(ISchedulers schedulers)
        {
            _ISchedulers = schedulers;
        }


        public ActionResult UpdateSearchInformation()
        {
            string googleSearchText= "BAPS Shri Swaminarayan Mandir, Claireville Drive, Toronto, ON, Canada";
            string attractionId = "169,15,109,95";
            bool userRequest = true;
            List<AttractionsDTO> _listAttractionsDTO = new List<AttractionsDTO>();
            //string googleSearchText = "10220 Douglas Oaks Circle, Tampa, FL";
            AttractionsDTO _attractionsDTO = _ISchedulers.Services_CheckAttractionExist(googleSearchText);
            if (_attractionsDTO != null && !string.IsNullOrEmpty(_attractionsDTO.GoogleSearchText))
            {
                ViewBag.SearchData = false;
                _listAttractionsDTO = _ISchedulers.Services_GetPlaceDetails(attractionId.Split(',').ToList().Select(x=> new userTable_OnlyId { ID = int.Parse(x) }).ToList(), _attractionsDTO.AttractionsId);
                var sourceInformation = _attractionsDTO.AttractionsId + "~" + _attractionsDTO.GoogleSearchText;
                string destinationPlaceId = string.Empty;
                int counter = 1;
                foreach(AttractionsDTO _localAttractionsDTO in _listAttractionsDTO)
                {
                    if (counter == 0)
                        destinationPlaceId = _localAttractionsDTO.AttractionsId + "~" + _localAttractionsDTO.GoogleSearchText;
                    else
                        destinationPlaceId += _localAttractionsDTO.AttractionsId + "~" + _localAttractionsDTO.GoogleSearchText;

                    if (counter != _listAttractionsDTO.Count)
                        destinationPlaceId += "^";
                    counter++;
                }
                return RedirectToAction("TravelDistance",new { sourceInformation = sourceInformation, destinationInformation = destinationPlaceId });
            }
            else
            {
                ViewBag.SearchData = true;
                ViewBag.googleSearchText = googleSearchText;
                ViewBag.attractionId = attractionId;
                ViewBag.userRequest = userRequest;
            }
            
            return View();
        }

        public ActionResult TravelDistance(string sourceInformation, string destinationInformation)
        {
            ViewBag.SourcePlaceInformation = sourceInformation;
            ViewBag.DestinationPlaceInformation = destinationInformation;
            return View();
        }

        public ActionResult GoogleSearchText()
        {
            ViewBag.SearchTextNotCorrect = _ISchedulers.Service_GetSearchTextNotCorrect();
            return View();
        }
    }
}
