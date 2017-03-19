using BusinessAccessLayer.Common;
using BusinessAccessLayer.Interfaces;
using BusinessEntites.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessAccessLayer.Admin
{
    public class MasterWeek : BaseBusinessClass, IMasterWeek, IDisposable
    {
        public List<MasterWeekDTO> Admin_MasterWeekGet()
        {
            try
            {
                return _dataAccessMasterWeek.Admin_MasterWeekGet();
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
