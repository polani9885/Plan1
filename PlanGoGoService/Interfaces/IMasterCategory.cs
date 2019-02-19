using BusinessEntites;
using BusinessEntites.Admin;
using BusinessEntites.Common;
using BusinessEntites.DataBaseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IMasterCategory
    {
        [OperationContract]
        void Admin_MasterCategoryUpdate(int categoryId, string categoryName, string viewTime);

        [OperationContract]
        List<MasterCategoryDTO> Admin_MasterCategoryGet();

        [OperationContract]
        List<MasterCategoryDTO> Admin_MasterCategoryCheckExists(string categoryName, int categoryId);

        [OperationContract]
        MasterCategoryDTO Admin_MasterCategoryOnCategoryId(int categoryId);

        [OperationContract]
        List<BreakInformation> Admin_BreakInformationCheckExists(int breakInformationId, string breakType);

        [OperationContract]
        void Admin_MasterBreakInfoUpdate(int breakInformationId, string breakType, string startTime, string minimumTime,
            string display, string endTime);

        [OperationContract]
        List<MasterTravelModeDTO> Scheduler_GetTravelMode();

        [OperationContract]
        List<BreakInformation> Admin_TravelModeCheckExists(int travelModeId, string travelType);

        [OperationContract]
        void Admin_TravelModeUpdate(int travelModeId, string travelType);

        [OperationContract]
        List<MasterGoogleType> Admin_MasterGoogleTypeGet();
        [OperationContract]
        List<MasterGoogleType> Admin_MasterGoogleTypeCheckExists(int googleTypeID, string typeName);
        [OperationContract]
        void Admin_MasterGoogleTypeUpdate(MasterGoogleType masterGoogleType);

        [OperationContract]
        List<Admin_MasterCategoryXMasterGoogleType> Admin_MasterCategoryXMasterGoogleType();
    }
}