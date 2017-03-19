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
    public class MasterWeek: IMasterWeek, IDisposable
    {
        public List<MasterWeekDTO> Admin_MasterWeekGet()
        {
            try
            {
                List<MasterWeekDTO> _returnResult = SqlHelper.QuerySP<MasterWeekDTO>("Admin_MasterWeekGet").ToList();
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
