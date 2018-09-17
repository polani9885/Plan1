using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    public class UserTourInformation
    {
        public int UserId { get; set; }

        public int UserTripId { get; set; }

        public string TripName { get; set; }

        public string CreatedDate { get; set; }

        public bool IsTripDone { get; set; }

        public int CountryId { get; set; }

        public string StartDate { get; set; }

        public string EndDate { get; set; }

        public int TravelModeId { get; set; }

        public int SourceAttractionId { get; set; }

        public int DestinationAttractionId { get; set; }

        public int NoOfPersons { get; set; }

        public int NoOfCars { get; set; }

        public decimal CarMileage { get; set; }

        public decimal FuelPrice { get; set; }
    }
}
