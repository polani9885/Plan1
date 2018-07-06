using BusinessAccessLayer.Common;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites;
using BusinessEntites.Common;
using Interfaces;
using BusinessEntites.Scheduler;

namespace BusinessAccessLayer.Scheduler
{
    public class BALScheduler : BaseBusinessClass, ISchedulers, IDisposable
    {
        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public int Services_AddAttraction(AttractionsDTO attractionDTO, List<userTable_Category> Category, List<user_AttractionsActiveStatus> attractionsActiveStatus)
        {
            try
            {
                return _dataAccessSchedulers.Services_AddAttraction(attractionDTO, Category, attractionsActiveStatus);
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
                return _dataAccessSchedulers.Services_CheckAttractionExist(googleSearchText);
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
                _dataAccessSchedulers.Service_TravelDistance(attractionTravelTimeDistance);
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
               return _dataAccessSchedulers.Services_GetPlaceDetails(attractionIds, SourceAttractionId);
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
                return _dataAccessSchedulers.Service_GetSearchTextNotCorrect();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<GoogleTypes> Scheduler_GetExtraCategoryList()
        {
            try
            {
                return _dataAccessSchedulers.Scheduler_GetExtraCategoryList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
