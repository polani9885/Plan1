
using PlanGoGoAdmin.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessEntites;

namespace PlanGoGoAdmin.Repository.Reference
{
    public class GetListValues: IGetListValues
    {
        PlanGoGoAdmin.GetListValues.IGetListValues _client = new PlanGoGoAdmin.GetListValues.GetListValuesClient();

        public List<GetAttractionOpenTime> GetAttractionOpenTime(int AttractionId)
        {
            try
            {
                return _client.GetAttractionOpenTime(AttractionId);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}