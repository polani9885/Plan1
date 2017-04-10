using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites
{
    public class JsonResultReturn
    {
        public bool Success { get; set; }

        public string ErrorMessage { get; set; }

        public string UserName { get; set; }
    }
}
