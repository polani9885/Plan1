using BusinessEntites.Admin;
using BusinessEntites.DataBaseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces
{
    public interface ICountry
    {
        void Admin_UpdateCountry(MasterCountryDTO dto);

        List<MasterCountryDTO> Admin_GetCountry();

        List<MasterCountryDTO> Admin_CheckCountryExist(string countryName, int countryId);


        MasterCountryDTO Admin_GetCountryOnId(int countryId);

        void Admin_MasterPriceInfoUpdate(int countryId, MasterPriceInfo dto);
        List<MasterPriceInfo> Admin_GetMasterPriceInfo(int countryId);
    }
}
