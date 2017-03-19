using BusinessAccessLayer.Common;
using BusinessEntites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer
{
    public class GetListValues : BaseBusinessClass, IGetListValues
    {
        


        public GetListValues()
        {
            //_dataAccess = dataAccess;
        }


        /// <summary>
        /// Get city list information
        /// </summary>
        /// <returns></returns>
        public List<public_GetCityList> Public_GetCityList()
        {
            try
            {
                return _dataAccess.Public_GetCityList();                
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// get the categories
        /// </summary>
        /// <returns></returns>
        public List<Public_GetCategory> Public_GetCategory()
        {
            try
            {
                return _dataAccess.Public_GetCategory();
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
                return _dataAccess.Public_FilterAttractions(enterLocationName, categoryList);
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
                return _dataAccess.Public_GetOrderOfAttractionVisit(TravelModeId, SourceAttractionID, DestinationAttractionID, AttractionID, StartDate, StartTime, listGetOrderOfAttractionVisit);
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
                return _dataAccess.GetAttractionOpenTime(AttractionId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
