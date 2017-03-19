using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface IMasterCity
    {
        [OperationContract]
        List<MasterCityDTO> Admin_MasterCityCheckExists(MasterCityDTO masterCityDTO);

        [OperationContract]
        List<MasterCityDTO> Admin_MasterCityGet();

        [OperationContract]
        List<MasterCityDTO> Admin_MasterCityGetOnStateId(int stateId);

        [OperationContract]
        MasterCityDTO Admin_MasterCityGetOnCityId(int cityId);

        [OperationContract]
        void Admin_MasterCityUpdate(MasterCityDTO masterCityDTO);
    }
}