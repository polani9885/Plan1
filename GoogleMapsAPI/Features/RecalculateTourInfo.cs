using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonFunctions;
using DataAccessLayer.Schedulers;
using DataAccessLayer.User;
using BusinessEntites;
using BusinessEntites.Users;

namespace GoogleMapsAPI.Features
{
    public class RecalculateTourInfo
    {
        private readonly DALSchedulers dALSchedulers = new DALSchedulers();
        private readonly UserDAL userDal = new UserDAL();

        public void UpdateUserTourInformation(int countryId)
        {
            var tourInfo = dALSchedulers.Scheduler_RecalculateTourInfo(countryId);

            foreach (var tourdata in tourInfo)
            {
                List<GetOrderOfAttractionVisit> storedAttractinInfo =
                    userDal.User_GetUserStoredAttractinInfo(tourdata.UserTripId);
                List<UserTable_AttractionRequestOrder> attractionList =
                    userDal.User_UserTripGetAttractions(tourdata.UserTripId);
                List<UserTable_UpdatedBreaksTemp> breakInformation = userDal.User_RequestedBreaks(tourdata.UserTripId);

                List<userTable_OnlyId> userattraction = new List<userTable_OnlyId>();
                

                List<UserTable_UpdatedBreaks> breakInfo = breakInformation
                    .Where(y => !string.IsNullOrEmpty(y.UpdateDayEndTime)
                                && !string.IsNullOrEmpty(y.UpdateDayStartTime)
                                && !string.IsNullOrEmpty(y.UpdatedBreakTime)
                                && !string.IsNullOrEmpty(y.UpdatedDinnerTime)
                                && !string.IsNullOrEmpty(y.UpdatedLunchTime)
                    ).Select(x => new UserTable_UpdatedBreaks
                    {

                        IsUserInterestedBreak = x.IsUserInterestedBreak,
                        IsUserInterestedDayBreak = x.IsUserInterestedDayBreak,
                        UpdateDayStartTime = TimeSpan.Parse(x.UpdateDayStartTime),
                        UpdatedDinnerTime = TimeSpan.Parse(x.UpdatedDinnerTime),
                        UpdatedLunchTime = TimeSpan.Parse(x.UpdatedLunchTime),
                        IsUserInterestedLunchBreak = x.IsUserInterestedLunchBreak,
                        UpdatedBreakTime = TimeSpan.Parse(x.UpdatedBreakTime),
                        UpdateDayEndTime = TimeSpan.Parse(x.UpdateDayEndTime),
                        IsUserInterestedDinnerBreak = x.IsUserInterestedDinnerBreak,
                        RequestDate = Convert.ToDateTime(x.RequestDate),
                        IsBreakAdded = x.IsBreakAdded,
                        BreakAttractionId = x.BreakAttractionId,
                        IsLunchAdded = x.IsLunchAdded,
                        LunchAttractionId = x.LunchAttractionId,
                        IsDinnerAdded = x.IsDinnerAdded,
                        DinnerAttractionId = x.DinnerAttractionId,
                        IsUserInterestedBreakFast = x.IsUserInterestedBreakFast,
                        UpdatedBreakFastTime = TimeSpan.Parse(x.UpdatedBreakFastTime),
                        IsBreakFastAdded = x.IsBreakFastAdded,
                        BreakFastAttractionId = x.BreakFastAttractionId,
                        IsDayBreakAdded = x.IsDayBreakAdded,
                        DayBreakAttractionId = x.DayBreakAttractionId,
                        NoOfCars = x.NoOfCars,
                        AverageMileage = x.AverageMileage,
                        BreakExpense = x.BreakExpense,
                        BreakFastExpense = x.BreakFastExpense,
                        CarRentalExpense = x.CarRentalExpense,
                        DayBreakExpense = x.DayBreakExpense,
                        LunchExpense = x.LunchExpense,
                        NoOfRooms = x.NoOfRooms,
                        DinnerExpense = x.DinnerExpense,
                        IsNoOfCarsUserUpdated = x.IsNoOfCarsUserUpdated,
                        IsAverageMileageUserUpdated = x.IsAverageMileageUserUpdated,
                        IsCarRentalExpenseUserUpdated = x.IsCarRentalExpenseUserUpdated,
                        IsBreakFastExpenseUserUpdated = x.IsBreakFastExpenseUserUpdated,
                        IsLunchExpenseUserUpdated = x.IsLunchExpenseUserUpdated,
                        IsBreakExpenseUserUpdated = x.IsBreakExpenseUserUpdated,
                        IsDinnerExpenseUserUpdated = x.IsDinnerExpenseUserUpdated,
                        IsDayBreakExpenseUserUpdated = x.IsDayBreakExpenseUserUpdated,
                        IsNoOfRoomsUserUpdated = x.IsNoOfRoomsUserUpdated

                    }).ToList();


                userattraction = attractionList.Select(x => new userTable_OnlyId
                {
                    ID = x.AttractionId
                }).ToList();


                using (AttractionInformationBinding attractionInformation = new AttractionInformationBinding())
                {
                    attractionInformation.UserRequestedAttractionInformation(tourdata.TravelModeId,
                         userattraction,
                        storedAttractinInfo, tourdata.CountryId,
                        breakInfo,
                         tourdata.UserTripId);
                }

            }


            
        }
    }
}
