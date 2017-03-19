using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IMasterState
    {
        [OperationContract]
        void Admin_MasterStateUpdate(MasterStateDTO masterStateDTO);

        [OperationContract]
        List<MasterStateDTO> Admin_MasterStateGet();

        [OperationContract]
        List<MasterStateDTO> Admin_MasterStateCheckExists(MasterStateDTO masterStateDTO);

        [OperationContract]
        MasterStateDTO Admin_MasterStateGetOnStateId(int stateId);

        [OperationContract]
        List<MasterStateDTO> Admin_MasterStateGetOnCountryId(int countryId);
    }
}