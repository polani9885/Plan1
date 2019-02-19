using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    public class User_GetDirectionsSteps
    {
        public int AttractionTravelStepsId { get; set; }

        public int AttractionTravelTimeDistanceId { get; set; }

        public int Distance_Value { get; set; }

        public int Duration_Value { get; set; }

        public string End_location_lat { get; set; }

        public string End_location_lng { get; set; }

        public string Start_location_lat { get; set; }

        public string Start_location_lng { get; set; }

        public string Travel_mode { get; set; }

        public int OrderId { get; set; }

        public bool IsNearestRestarentDone { get; set; }

        public string StartDateTime { get; set; }

        public string EndDateTime { get; set; }

        public string DistanceCovered { get; set; }

        public string DistanceCoveredTime { get; set; }
    }
}
