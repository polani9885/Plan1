using BusinessEntites.Admin;
using BusinessEntites.DataBaseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.Web;

namespace PlanGoGoService.Interfaces
{
    [ServiceContract]
    public interface ICountry
    {
        [OperationContract]
        void Admin_UpdateCountry(MasterCountryDTO dto);

        [OperationContract]
        List<MasterCountryDTO> Admin_GetCountry();


        [OperationContract]
        List<MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId);

        [OperationContract]
        MasterCountryDTO Admin_GetCountryOnId(int countryId);

        [OperationContract]
        void Admin_MasterPriceInfoUpdate(int countryId, MasterPriceInfo dto);
        [OperationContract]
        List<MasterPriceInfo> Admin_GetMasterPriceInfo(int countryId);
    }
}