using PlanGoGoService.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using BusinessEntites.Admin;
using PlanGoGoService.BaseClasses;
using BusinessEntites;
using BusinessEntites.Common;
using BusinessEntites.DataBaseModels;

namespace PlanGoGoService.Admin
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "MasterCategory" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select MasterCategory.svc or MasterCategory.svc.cs at the Solution Explorer and start debugging.
    public class MasterCategory : BaseReference, IMasterCategory
    {
        public List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId)
        {
            try
            {
                return _businessMasterCategory.Admin_MasterCategoryCheckExists(categoryName, categoryId);
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
                return _businessMasterCategory.Admin_MasterCategoryGet();
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
                return _businessMasterCategory.Admin_MasterCategoryOnCategoryId(categoryId);
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
                _businessMasterCategory.Admin_MasterCategoryUpdate(categoryId, categoryName, viewTime);
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
                return _businessMasterCategory.Admin_BreakInformationCheckExists(breakInformationId, breakType);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Admin_MasterBreakInfoUpdate(int breakInformationId, string breakType, string startTime,
            string minimumTime, string display, string endTime)
        {
            try
            {
                _businessMasterCategory.Admin_MasterBreakInfoUpdate(breakInformationId, breakType, startTime,
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
                return _businessMasterCategory.Scheduler_GetTravelMode();
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
                return _businessMasterCategory.Admin_TravelModeCheckExists(travelModeId, travelType);
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
                _businessMasterCategory.Admin_TravelModeUpdate(travelModeId, travelType);
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
                return _businessMasterCategory.Admin_MasterGoogleTypeGet();
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
                return _businessMasterCategory.Admin_MasterGoogleTypeCheckExists(googleTypeID, typeName);
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
                _businessMasterCategory.Admin_MasterGoogleTypeUpdate(masterGoogleType);
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
                return _businessMasterCategory.Admin_MasterCategoryXMasterGoogleType();
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
