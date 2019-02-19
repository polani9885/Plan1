
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Admin;
using BusinessAccessLayer.Common;
using Interfaces;
using BusinessEntites;
using BusinessEntites.Common;
using BusinessEntites.DataBaseModels;

namespace BusinessAccessLayer.Admin
{
    public class MasterCategory : BaseBusinessClass, IMasterCategory, IDisposable
    {
        public List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId)
        {
            try
            {
                return _dataAccessMasterCategory.Admin_MasterCategoryCheckExists(categoryName, categoryId);
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
                return _dataAccessMasterCategory.Admin_MasterCategoryGet();
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
                return _dataAccessMasterCategory.Admin_MasterCategoryOnCategoryId(categoryId);
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
                _dataAccessMasterCategory.Admin_MasterCategoryUpdate(categoryId, categoryName, viewTime);
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
                return _dataAccessMasterCategory.Admin_BreakInformationCheckExists(breakInformationId, breakType);
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
                _dataAccessMasterCategory.Admin_MasterBreakInfoUpdate(breakInformationId, breakType, startTime,
                    minimumTime, display, endTime);
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
                return _dataAccessMasterCategory.Scheduler_GetTravelMode();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<BreakInformation> Admin_TravelModeCheckExists(int travelModeId, string travelType)
        {
            try
            {
                return _dataAccessMasterCategory.Admin_TravelModeCheckExists(travelModeId, travelType);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_TravelModeUpdate(int travelModeId, string travelType)
        {
            try
            {
                _dataAccessMasterCategory.Admin_TravelModeUpdate(travelModeId, travelType);
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
                return _dataAccessMasterCategory.Admin_MasterGoogleTypeGet();
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
                return _dataAccessMasterCategory.Admin_MasterGoogleTypeCheckExists(googleTypeID, typeName);
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
                _dataAccessMasterCategory.Admin_MasterGoogleTypeUpdate(masterGoogleType);
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
                return _dataAccessMasterCategory.Admin_MasterCategoryXMasterGoogleType();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
