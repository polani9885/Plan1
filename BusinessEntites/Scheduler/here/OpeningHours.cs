using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler.here
{
    public class OpeningHours
    {
        public string text { get; set; }

        public string lable { get; set; }

        public bool isOpen { get; set; }

        public List<Structured> structured { get; set; }
    }
}
