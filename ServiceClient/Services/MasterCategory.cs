using BusinessEntites;
using BusinessEntites.Admin;
using BusinessEntites.Common;
using BusinessEntites.DataBaseModels;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceClient.Services
{
    public class MasterCategory : IMasterCategory
    {
        ServiceClient.MasterCategory.IMasterCategory _client = new ServiceClient.MasterCategory.MasterCategoryClient();
        public List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId)
        {
            try
            {
                return _client.Admin_MasterCategoryCheckExists(categoryName, categoryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MasterCategoryDTO> Admin_MasterCategoryGet()
        {
            try
            {
                return _client.Admin_MasterCategoryGet();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public MasterCategoryDTO Admin_MasterCategoryOnCategoryId(int categoryId)
        {
            try
            {
                return _client.Admin_MasterCategoryOnCategoryId(categoryId);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterCategoryUpdate(int categoryId, string categoryName, string viewTime)
        {
            try
            {
                _client.Admin_MasterCategoryUpdate(categoryId, categoryName, viewTime);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<BreakInformation> Admin_BreakInformationCheckExists(int breakInformationId, string breakType)
        {
            try
            {
                return _client.Admin_BreakInformationCheckExists(breakInformationId, breakType);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void Admin_MasterBreakInfoUpdate(int breakInformationId, string breakType, string startTime,
            string minimumTime, string display, string endTime)
        {
            try
            {
                _client.Admin_MasterBreakInfoUpdate(breakInformationId, breakType, startTime, minimumTime, display,
                    endTime);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<MasterTravelModeDTO> Scheduler_GetTravelMode()
        {
            try
            {
                return _client.Scheduler_GetTravelMode();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<BreakInformation> Admin_TravelModeCheckExists(int travelModeId, string travelType)
        {
            try
            {
                return _client.Admin_TravelModeCheckExists(travelModeId,travelType);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void Admin_TravelModeUpdate(int travelModeId, string travelType)
        {
            try
            {
                _client.Admin_TravelModeUpdate(travelModeId,travelType);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<MasterGoogleType> Admin_MasterGoogleTypeGet()
        {
            try
            {
                return _client.Admin_MasterGoogleTypeGet();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<MasterGoogleType> Admin_MasterGoogleTypeCheckExists(int googleTypeID, string typeName)
        {
            try
            {
                return _client.Admin_MasterGoogleTypeCheckExists(googleTypeID, typeName);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void Admin_MasterGoogleTypeUpdate(MasterGoogleType masterGoogleType)
        {
            try
            {
                _client.Admin_MasterGoogleTypeUpdate(masterGoogleType);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<Admin_MasterCategoryXMasterGoogleType> Admin_MasterCategoryXMasterGoogleType()
        {
            try
            {
                return _client.Admin_MasterCategoryXMasterGoogleType();
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
