using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGo.Repository.Interface
{
    public interface ICountry
    {
        List<MasterCountryDTO> Admin_GetCountry();
    }
}