using BusinessEntites.Admin;
using DataAccessLayer.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IAttractionTravelTimeDistance
    {
        List<AttractionTravelTimeDistanceDTO> Admin_AttractionTravelTimeDistanceGet(int AttractionsId);
    }
}
