using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Scheduler.here
{
    public class Items
    {
        public string[] position { get; set; }

        public int distance { get; set; }

        public string title { get; set; }

        public decimal averageRating { get; set; }

        public Category category { get; set; }

        public string icon { get; set; }

        public string vicinity { get; set; }

        public string type { get; set; }

        public string href { get; set; }

        public string id { get; set; }

        public OpeningHours openingHours { get; set; }

        public string[] chainIds { get; set; }

        public List<AlternativeNames> alternativeNames { get; set; }

    }
}
