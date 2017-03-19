using BusinessEntites.Admin;
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
        void Admin_UpdateCountry(int countryId, string countryName, string countryShortName, string createdBy, bool isDefault);

        [OperationContract]
        List<MasterCountryDTO> Admin_GetCountry();


        [OperationContract]
        List<MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId);

        [OperationContract]
        MasterCountryDTO Admin_GetCountryOnId(int countryId);
    }
}