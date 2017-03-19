using BusinessEntites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PlanGoGoAdmin.Repository.Interface
{
    public interface IGetListValues
    {
        List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId);
    }
}