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

                List<UserTable_AttractionRequestOrder>  requestOrder = new List<UserTable_AttractionRequestOrder>();

                List<UserTable_UpdatedBreaks> breakInfo = breakInformation
                    .Where(y => !string.IsNullOrEmpty(y.UpdateDayEndTime)
                                && !string.IsNullOrEmpty(y.UpdateDayStartTime)
                                && !string.IsNullOrEmpty(y.UpdateDinnerMinimumTime)
                                && !string.IsNullOrEmpty(y.UpdatedBreakMinimumTime)
                                && !string.IsNullOrEmpty(y.UpdatedBreakTime)
                                && !string.IsNullOrEmpty(y.UpdatedDinnerTime)
                                && !string.IsNullOrEmpty(y.UpdatedLunchMinimumTime)
                                && !string.IsNullOrEmpty(y.UpdatedLunchTime)
                    ).Select(x => new UserTable_UpdatedBreaks
                    {

                        RequestDate = Convert.ToDateTime(x.RequestDate),
                        IsUserInterestedBreak = x.IsUserInterestedBreak,
                        UpdateDayEndTime = TimeSpan.Parse(x.UpdateDayEndTime),
                        IsUserInterestedDayBreak = x.IsUserInterestedDayBreak,
                        UpdateDayStartTime = TimeSpan.Parse(x.UpdateDayStartTime),
                        UpdatedDinnerTime = TimeSpan.Parse(x.UpdatedDinnerTime),
                        UpdateDinnerMinimumTime = TimeSpan.Parse(x.UpdateDinnerMinimumTime),
                        UpdatedBreakMinimumTime = TimeSpan.Parse(x.UpdatedBreakMinimumTime),
                        UpdatedLunchTime = TimeSpan.Parse(x.UpdatedLunchTime),
                        UpdatedLunchMinimumTime = TimeSpan.Parse(x.UpdatedLunchMinimumTime),
                        IsUserInterestedLunchBreak = x.IsUserInterestedLunchBreak,
                        UpdatedBreakTime = TimeSpan.Parse(x.UpdatedBreakTime),
                        IsUserInterestedDinnerBreak = x.IsUserInterestedDinnerBreak
                    }).ToList();


                userattraction = attractionList.Select(x => new userTable_OnlyId
                {
                    ID = x.AttractionId
                }).ToList();


                using (AttractionInformationBinding attractionInformation = new AttractionInformationBinding())
                {
                    attractionInformation.UserRequestedAttractionInformation(tourdata.TravelModeId,
                        tourdata.SourceAttractionId, tourdata.DestinationAttractionId, userattraction,
                        tourdata.StartDate,
                        string.Empty, storedAttractinInfo, tourdata.CountryId,
                        breakInfo,
                        requestOrder, tourdata.UserTripId);
                }

            }


            
        }
    }
}
