using BusinessEntites;
using BusinessEntites.Admin;
using BusinessEntites.Common;
using BusinessEntites.DataBaseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces
{
    public interface IMasterCategory
    {
        void Admin_MasterCategoryUpdate(int categoryId, string categoryName, string viewTime);

        List<MasterCategoryDTO> Admin_MasterCategoryGet();

        List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId);


        MasterCategoryDTO Admin_MasterCategoryOnCategoryId(int categoryId);

        List<BreakInformation> Admin_BreakInformationCheckExists(int breakInformationId, string breakType);

        void Admin_MasterBreakInfoUpdate(int breakInformationId, string breakType, string startTime, string minimumTime,
            string display, string endTime);

        List<MasterTravelModeDTO> Scheduler_GetTravelMode();

        List<BreakInformation> Admin_TravelModeCheckExists(int travelModeId, string travelType);
        void Admin_TravelModeUpdate(int travelModeId, string travelType);

        List<MasterGoogleType> Admin_MasterGoogleTypeGet();
        List<MasterGoogleType> Admin_MasterGoogleTypeCheckExists(int googleTypeID, string typeName);
        void Admin_MasterGoogleTypeUpdate(MasterGoogleType masterGoogleType);
        List<Admin_MasterCategoryXMasterGoogleType> Admin_MasterCategoryXMasterGoogleType();
    }
}
