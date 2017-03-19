using BusinessEntites;
using PlanGoGoService.BaseClasses;
using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace PlanGoGoService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "GetListValues" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select GetListValues.svc or GetListValues.svc.cs at the Solution Explorer and start debugging.    
    public class GetListValues : BaseReference,IGetListValues
    {
        //BusinessAccessLayer.IGetListValues _localbusinessAccess;
        //public GetListValues(BusinessAccessLayer.IGetListValues localbusinessAccess)
        //{
        //    _localbusinessAccess = localbusinessAccess;
        //}
        

        /// <summary>
        /// Get city list information
        /// </summary>
        /// <returns></returns>
        public List<public_GetCityList> Public_GetCityList()
        {
            try
            {
                return _businessAccess.Public_GetCityList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Public_GetCategory> Public_GetCategory()
        {
            try
            {
                return _businessAccess.Public_GetCategory();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<public_FilterAttractions> Public_FilterAttractions(string enterLocationName, List<userTable_Category> categoryList)
        {
            try
            {
                return _businessAccess.Public_FilterAttractions(enterLocationName, categoryList);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetOrderOfAttractionVisit> Public_GetOrderOfAttractionVisit(int TravelModeId, int SourceAttractionID, int DestinationAttractionID, List<userTable_OnlyId> AttractionID, string StartDate, string StartTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit)
        {
            try
            {
                return _businessAccess.Public_GetOrderOfAttractionVisit(TravelModeId, SourceAttractionID, DestinationAttractionID, AttractionID, StartDate, StartTime,listGetOrderOfAttractionVisit);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId)
        {
            try
            {
                return _businessAccess.GetAttractionOpenTime(AttractionId);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
