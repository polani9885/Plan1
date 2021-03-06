﻿using BusinessEntites.Common;
using Interfaces;
using PlanGoGoAdmin.Helper;
using PlanGoGoAdmin.Models.Attractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PlanGoGoAdmin.Controllers
{
    public class AttractionsController : BaseController
    {
        IAttractions _IAttractions;

        public AttractionsController(IAttractions attractions)
        {
            _IAttractions = attractions;
        }

        public JsonResult AttractionsOnCityId()
        {
            List<AttractionsDTO> getResult =
                _IAttractions.AttractionsOnCityId(new AttractionsDTO
                {
                    CityId = userEntity.MasterCityId,
                    CountryId = userEntity.MasterCountryId
                });
            return base.jsonReturn.JsonResult<AttractionsDTO>(getResult);
        }

        public ActionResult ManageAttractions()
        {
            return View();
        }


        public ActionResult UpdateAttractions(int attractionsId)
        {
            ModelAttractions model = new ModelAttractions();
            if (attractionsId > 0)
            {
                AttractionsDTO _data = _IAttractions.AttractionsOnAttractionsId(new AttractionsDTO { AttractionsId = attractionsId });
                model.AddressOne = _data.AddressOne;
                model.AddressTwo = _data.AddressTwo;
                model.AttractionName = _data.AttractionName;
                model.AttractionsId = _data.AttractionsId;
                model.CategoryId = _data.CategoryId;
                model.CityId = userEntity.MasterCityId;
                model.CreatedBy = userEntity.UserName;
                model.Googleadr_address = _data.Googleadr_address;
                model.GoogleICon = _data.GoogleICon;
                model.GoogleInternational_phone_number = _data.GoogleInternational_phone_number;
                model.GoogleName = _data.GoogleName;
                model.GoogleRating = _data.GoogleRating;
                model.GoogleSearchText = _data.GoogleSearchText;
                model.GoogleUser_ratings_total = _data.GoogleUser_ratings_total;
                model.GoogleWebSite = _data.GoogleWebSite;
                model.Latitude = _data.Latitude;
                model.Longitude = _data.Longitude;
                model.PlaceId = _data.PlaceId;
                model.RankId = _data.RankId;                
            }


            return View(model);
        }

        [HttpPost]
        public ActionResult UpdateAttractions(ModelAttractions model)
        {
            if (_IAttractions.AttractionsCheckExists(new AttractionsDTO { AttractionsId = model.AttractionsId, AttractionName = model.AttractionName,CityId = userEntity.MasterCityId }).Count > 0)
            {
                model.ErrorMessage = "Attraction name already existed";
            }
            else
            {
                _IAttractions.AttractionsUpdate(new AttractionsDTO
                {
                    AddressOne = model.AddressOne,
                    AddressTwo = model.AddressTwo,
                    AttractionName = model.AttractionName,
                    AttractionsId = model.AttractionsId,
                    CategoryId = model.CategoryId,
                    CityId = userEntity.MasterCityId,
                    CreatedBy = userEntity.UserName,
                    Googleadr_address = model.Googleadr_address,
                    GoogleICon = model.GoogleICon,
                    GoogleInternational_phone_number = model.GoogleInternational_phone_number,
                    GoogleName = model.GoogleName,
                    GoogleRating = model.GoogleRating,
                    GoogleSearchText = model.GoogleSearchText,
                    GoogleUser_ratings_total = model.GoogleUser_ratings_total,
                    GoogleWebSite = model.GoogleWebSite,
                    Latitude = model.Latitude,
                    Longitude = model.Longitude,
                    PlaceId = model.PlaceId,
                    RankId = model.RankId                    
                });
                Response.Redirect("ManageAttractions");
            }
            return View(model);
        }
    }
}