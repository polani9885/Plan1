using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    public class LoggingEntity
    {
        public string MethodName { get; set; }
        public string Parameters { get; set; }
        public string ExceptionMessage { get; set; }
        public string ExceptionStackTrace { get; set; }
        public string CreatedBy { get; set; }

        public int CountryId { get; set; }
    }
}
