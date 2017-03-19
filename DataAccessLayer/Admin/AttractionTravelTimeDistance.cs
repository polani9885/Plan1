using BusinessEntites.Admin;
using Dapper;
using DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Admin
{
    public class AttractionTravelTimeDistance: IAttractionTravelTimeDistance, IDisposable
    {
        public List<AttractionTravelTimeDistanceDTO> Admin_AttractionTravelTimeDistanceGet(int AttractionsId)
        {
            try
            {
                List<AttractionTravelTimeDistanceDTO> _returnResult = SqlHelper.QuerySP<AttractionTravelTimeDistanceDTO>("Admin_AttractionTravelTimeDistanceGet",
                    new
                    {
                        AttractionsId = AttractionsId
                    }).ToList();
                return _returnResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
