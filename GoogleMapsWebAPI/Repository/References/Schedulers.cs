﻿using GoogleMapsWebAPI.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites;
using BusinessEntites.Common;

namespace GoogleMapsWebAPI.Repository.References
{
    public class Schedulers : ISchedulers
    {
        GoogleMapsWebAPI.Scheduler.ISchedulers _client = new GoogleMapsWebAPI.Scheduler.SchedulersClient();

        public int Services_AddAttraction(AttractionsDTO attractionDTO, List<userTable_Category> Category, List<user_AttractionsActiveStatus> attractionsActiveStatus)
        {
            return _client.Services_AddAttraction(attractionDTO, Category, attractionsActiveStatus);
        }

        public AttractionsDTO Services_CheckAttractionExist(string googleSearchText)
        {
            return _client.Services_CheckAttractionExist(googleSearchText);
        }

        public void Service_TravelDistance(List<user_AttractionTravelTimeDistance> attractionTravelTimeDistance)
        {
            _client.Service_TravelDistance(attractionTravelTimeDistance);
        }

        public List<AttractionsDTO> Services_GetPlaceDetails(List<userTable_OnlyId> attractionIds, int SourceAttractionId)
        {
            try
            {
                return _client.Services_GetPlaceDetails(attractionIds, SourceAttractionId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> Service_GetSearchTextNotCorrect()
        {
            try
            {                
                return _client.Service_GetSearchTextNotCorrect();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}