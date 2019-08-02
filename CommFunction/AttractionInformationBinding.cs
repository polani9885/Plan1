using BusinessEntites;
using BusinessEntites.Custom;
using BusinessEntites.Users;
using Interfaces;
using ServiceClient.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommFunction
{
    public class AttractionInformationBinding:IDisposable
    {

        readonly IGetListValues getListValues = new GetListValues();
        readonly IUser userInfo = new UserInfo();

        public void Dispose()
        {
            
        }

        public List<GroupWithDateAttractions> UserRequestedAttractionInformation(int travelModeId,
             List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks, int UserTripId)
        {

            List<GetOrderOfAttractionVisit> _ListGetOrderOfAttractionVisit =
                getListValues.Public_GetOrderOfAttractionVisit(travelModeId,
                    listGetOrderOfAttractionVisit,
                    countryId, userTable_UpdatedBreaks, UserTripId);

            List<GetOrderOfAttractionVisit> userLogOrderOfVisit = _ListGetOrderOfAttractionVisit;


            var listGroupWithDateAttractions = new List<GroupWithDateAttractions>();
            listGroupWithDateAttractions = GroupOrderAttractions(_ListGetOrderOfAttractionVisit, countryId);


            

            

            //Inserting User Trip information

            try
            {
                userInfo.User_LogUserTripInformation(travelModeId, 
                    userLogOrderOfVisit, countryId,
                    userTable_UpdatedBreaks, UserTripId);
            }
            catch (Exception e)
            {
                //Console.WriteLine(e);
                throw e;
            }

            


            return listGroupWithDateAttractions.OrderBy(x=>Convert.ToDateTime(x.GroupDate)).ToList();
        }

        private List<GroupWithDateAttractions> GroupOrderAttractions(List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit,int countryId)
        {
            var listGroupWithDateAttractions = new List<GroupWithDateAttractions>();

            var groupDates = listGetOrderOfAttractionVisit.GroupBy(_date => Convert.ToDateTime(_date.DateAndTime).ToString("MM/dd/yy"));
            List<GetOrderOfAttractionVisit> attractionListResult = listGetOrderOfAttractionVisit.OrderBy(x => Convert.ToDateTime(x.DateAndTime)).ToList();

            //Driving Steps

            List<DrivingSteps> listdrivingSteps = new List<DrivingSteps>();

            DrivingSteps drivingSteps = new DrivingSteps();

            

            foreach (var _dates in groupDates)
            {
                var groupWithDateAttractions = new GroupWithDateAttractions();
                groupWithDateAttractions.GroupDate = _dates.Key;
                listGetOrderOfAttractionVisit = new List<GetOrderOfAttractionVisit>();
                foreach (var internalObjects in attractionListResult.Where(
                    filter => Convert.ToDateTime(filter.DateAndTime).ToString("MM/dd/yy") == _dates.Key).OrderBy(x => Convert.ToDateTime(x.DateAndTime)))
                {
                    var getOrderOfAttractionVisit = new GetOrderOfAttractionVisit();
                    getOrderOfAttractionVisit.DateAndTime =
                        Convert.ToDateTime(internalObjects.DateAndTime).ToString("HH:mm");
                    getOrderOfAttractionVisit.DestinationAttractionId = internalObjects.DestinationAttractionId;
                    getOrderOfAttractionVisit.DestinationAttractionName = internalObjects.DestinationAttractionName;
                    getOrderOfAttractionVisit.DestinationIcon = internalObjects.DestinationIcon;
                    getOrderOfAttractionVisit.Distance = internalObjects.Distance;
                    getOrderOfAttractionVisit.ReachTime = Convert.ToDateTime(internalObjects.ReachTime)
                        .ToString("HH:mm");
                    getOrderOfAttractionVisit.SourceAttractionId = internalObjects.SourceAttractionId;
                    getOrderOfAttractionVisit.SourceAttractionName = internalObjects.SourceAttractionName;
                    getOrderOfAttractionVisit.SourceIcon = internalObjects.SourceIcon;
                    getOrderOfAttractionVisit.TimeRequiredToView = Convert.ToDateTime(internalObjects.TimeRequiredToView).ToString("HH:mm");
                    getOrderOfAttractionVisit.TravelModeId = internalObjects.TravelModeId;
                    getOrderOfAttractionVisit.TravelTimeSeconds = internalObjects.TravelTime;
                    getOrderOfAttractionVisit.TravelTime =
                        TimeSpan.FromSeconds(Convert.ToInt32(internalObjects.TravelTime)).Hours + ":" + TimeSpan
                            .FromSeconds(Convert.ToInt32(internalObjects.TravelTime)).Minutes;
                    getOrderOfAttractionVisit.TravelType = internalObjects.TravelType;
                    getOrderOfAttractionVisit.EventEndTime =
                        Convert.ToDateTime(internalObjects.EventEndTime).ToString("HH:mm");
                    getOrderOfAttractionVisit.RecordCount = internalObjects.RecordCount;
                    getOrderOfAttractionVisit.IsLunchDinnerBreakTime = internalObjects.IsLunchDinnerBreakTime;
                    getOrderOfAttractionVisit.IsDistanceCalculationMissing =
                        internalObjects.IsDistanceCalculationMissing;
                    getOrderOfAttractionVisit.SourceLatitude = internalObjects.SourceLatitude;
                    getOrderOfAttractionVisit.SourceLongitude = internalObjects.SourceLongitude;
                    getOrderOfAttractionVisit.DestinationLatitude = internalObjects.DestinationLatitude;
                    getOrderOfAttractionVisit.DestinationLongitude = internalObjects.DestinationLongitude;
                    getOrderOfAttractionVisit.SourceSearchText = internalObjects.SourceSearchText;
                    getOrderOfAttractionVisit.DestinationSearchText = internalObjects.DestinationSearchText;
                    getOrderOfAttractionVisit.SourcePhotoUrl = internalObjects.SourcePhotoUrl;
                    getOrderOfAttractionVisit.DestinationPhotoUrl = internalObjects.DestinationPhotoUrl;
                    getOrderOfAttractionVisit.BreakInformationId = internalObjects.BreakInformationId;
                    getOrderOfAttractionVisit.IsNeedDrivningBreak = internalObjects.IsNeedDrivningBreak;
                    getOrderOfAttractionVisit.AttractionTravelTimeDistanceId =
                        internalObjects.AttractionTravelTimeDistanceId;
                    listGetOrderOfAttractionVisit.Add(getOrderOfAttractionVisit);
                    
                }


                //Getting the driving steps
                listdrivingSteps = new List<DrivingSteps>();
                if (countryId > 0)
                {
                    foreach (var attractions in _dates.Where(x => x.IsNeedDrivningBreak))
                    {
                        drivingSteps = new DrivingSteps();
                        drivingSteps.RecordCount = attractions.RecordCount;
                        drivingSteps.DirectionSteps = userInfo.User_GetDirectionsSteps(countryId,
                            attractions.AttractionTravelTimeDistanceId, attractions.DateAndTime);
                        listdrivingSteps.Add(drivingSteps);
                    }
                }
                groupWithDateAttractions.DrivingSteps = listdrivingSteps;

                groupWithDateAttractions.ListGetOrderOfAttractionVisit = listGetOrderOfAttractionVisit;

                listGroupWithDateAttractions.Add(groupWithDateAttractions);
            }

            return listGroupWithDateAttractions;
        }

        public List<GroupWithDateAttractions> User_GetUserStoredAttractinInfo(int userTripId,int countryId,int userId)
        {
            List<GetOrderOfAttractionVisit> _ListGetOrderOfAttractionVisit =
                userInfo.User_GetUserStoredAttractinInfo(userTripId,userId);

            List<GetOrderOfAttractionVisit> userLogOrderOfVisit = _ListGetOrderOfAttractionVisit;


            var listGroupWithDateAttractions = new List<GroupWithDateAttractions>();
            listGroupWithDateAttractions = GroupOrderAttractions(_ListGetOrderOfAttractionVisit, countryId);

            return listGroupWithDateAttractions.OrderBy(x => Convert.ToDateTime(x.GroupDate)).ToList();
        }
    }
}
