using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using BusinessEntites;
using BusinessEntites.Common;
using PlanGoGoService.BaseClasses;

namespace PlanGoGoService.Schedulers
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Scheduler" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Scheduler.svc or Scheduler.svc.cs at the Solution Explorer and start debugging.
    public class Scheduler : BaseReference, ISchedulers
    {
        public int Services_AddAttraction(AttractionsDTO attractionDTO, List<userTable_Category> Category, List<user_AttractionsActiveStatus> attractionsActiveStatus)
        {
            try
            {
                return _businessSchedulers.Services_AddAttraction(attractionDTO, Category, attractionsActiveStatus);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public AttractionsDTO Services_CheckAttractionExist(string googleSearchText)
        {
            try
            {
                return _businessSchedulers.Services_CheckAttractionExist(googleSearchText);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Service_TravelDistance(List<user_AttractionTravelTimeDistance> attractionTravelTimeDistance)
        {
            try
            {
                _businessSchedulers.Service_TravelDistance(attractionTravelTimeDistance);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<AttractionsDTO> Services_GetPlaceDetails(List<userTable_OnlyId> attractionIds, int SourceAttractionId)
        {
            try
            {
                return _businessSchedulers.Services_GetPlaceDetails(attractionIds, SourceAttractionId);
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
                return _businessSchedulers.Service_GetSearchTextNotCorrect();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
