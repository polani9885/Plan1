using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BusinessEntites.Users
{
    public class UserTable_UpdatedBreaksTemp
    {
        [DataMember]
        public string RequestDate { get; set; }

        [DataMember]
        public bool IsUserInterestedDayBreak { get; set; }

        [DataMember]
        public string UpdateDayEndTime { get; set; }

        [DataMember]
        public string UpdateDayStartTime { get; set; }

        [DataMember]
        public bool IsUserInterestedBreakFast { get; set; }

        [DataMember]
        public string UpdatedBreakFastTime { get; set; }

        [DataMember]
        public string UpdatedBreakFastMinimumTime { get; set; }

        [DataMember]
        public bool IsUserInterestedLunchBreak { get; set; }

        [DataMember]
        public string UpdatedLunchTime { get; set; }

        [DataMember]
        public string UpdatedLunchMinimumTime { get; set; }

        [DataMember]
        public bool IsUserInterestedBreak { get; set; }

        [DataMember]
        public string UpdatedBreakTime { get; set; }

        [DataMember]
        public string UpdatedBreakMinimumTime { get; set; }

        [DataMember]
        public bool IsUserInterestedDinnerBreak { get; set; }

        [DataMember]
        public string UpdatedDinnerTime { get; set; }

        [DataMember]
        public string UpdateDinnerMinimumTime { get; set; }


        [DataMember]
        public bool IsBreakAdded { get; set; }

        [DataMember]
        public int BreakAttractionId { get; set; }


        [DataMember]
        public bool IsLunchAdded { get; set; }

        [DataMember]
        public int LunchAttractionId { get; set; }

        [DataMember]
        public bool IsDinnerAdded { get; set; }

        [DataMember]
        public int DinnerAttractionId { get; set; }

        [DataMember]
        public bool IsBreakFastAdded { get; set; }

        [DataMember]
        public int BreakFastAttractionId { get; set; }

        [DataMember]
        public bool IsDayBreakAdded { get; set; }

        [DataMember]
        public int DayBreakAttractionId { get; set; }

        [DataMember]
        public int NoOfCars { get; set; }

        [DataMember]
        public int AverageMileage { get; set; }

        [DataMember]
        public int NoOfRooms { get; set; }

        [DataMember]
        public decimal BreakFastExpense { get; set; }

        [DataMember]
        public decimal LunchExpense { get; set; }

        [DataMember]
        public decimal BreakExpense { get; set; }

        [DataMember]
        public decimal DayBreakExpense { get; set; }

        [DataMember]
        public decimal DinnerExpense { get; set; }

        [DataMember]
        public decimal CarRentalExpense { get; set; }

        [DataMember]
        public int NoOfAttractions { get; set; }

        [DataMember]
        public string Distance { get; set; }

        [DataMember]
        public bool IsNoOfCarsUserUpdated { get; set; }

        [DataMember]
        public bool IsAverageMileageUserUpdated { get; set; }

        [DataMember]
        public bool IsCarRentalExpenseUserUpdated { get; set; }

        [DataMember]
        public bool IsBreakFastExpenseUserUpdated { get; set; }

        [DataMember]
        public bool IsLunchExpenseUserUpdated { get; set; }

        [DataMember]
        public bool IsBreakExpenseUserUpdated { get; set; }

        [DataMember]
        public bool IsDinnerExpenseUserUpdated { get; set; }

        [DataMember]
        public bool IsDayBreakExpenseUserUpdated { get; set; }

        [DataMember]
        public bool IsNoOfRoomsUserUpdated { get; set; }

    }
}
