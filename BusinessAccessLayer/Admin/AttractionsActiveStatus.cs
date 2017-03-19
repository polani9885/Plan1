using BusinessAccessLayer.Common;
using BusinessAccessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessEntites;

namespace BusinessAccessLayer.Admin
{
    public class AttractionsActiveStatus : BaseBusinessClass, IAttractionsActiveStatus, IDisposable
    {
        public GetAttractionOpenTime Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId(int AttractionsActiveStatusId)
        {
            try
            {
                return _dataAccessAttractionsActiveStatus.Admin_AttractionsActiveStatusGetOnAttractionsActiveStatusId(AttractionsActiveStatusId);
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
