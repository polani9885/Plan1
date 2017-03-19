using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGoAdmin.Repository.Interface
{
    public interface ICountry
    {            

        void Admin_UpdateCountry(int countryId, string countryName, string countryShortName, string createdBy, bool isDefault);

        List<MasterCountryDTO> Admin_GetCountry();

        List<MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId);

        MasterCountryDTO Admin_GetCountryOnId(int countryId);
    }
}