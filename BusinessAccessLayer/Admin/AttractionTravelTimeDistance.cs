using BusinessAccessLayer.Common;
using BusinessAccessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites.Admin;

namespace BusinessAccessLayer.Admin
{
    public class AttractionTravelTimeDistance: BaseBusinessClass, IAttractionTravelTimeDistance, IDisposable
    {
        public List<AttractionTravelTimeDistanceDTO> Admin_AttractionTravelTimeDistanceGet(int AttractionsId)
        {
            try
            {
                return _dataAccessAttractionTravelTimeDistance.Admin_AttractionTravelTimeDistanceGet(AttractionsId);
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
