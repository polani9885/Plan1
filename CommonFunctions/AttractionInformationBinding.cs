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

namespace CommonFunctions
{
    public class AttractionInformationBinding:IDisposable
    {

        readonly IGetListValues getListValues = new GetListValues();
        readonly IUser userInfo = new UserInfo();

        public void Dispose()
        {
            
        }

        public List<GroupWithDateAttractions> UserRequestedAttractionInformation(int travelModeId,
            int sourceAttractionID, int destinationAttractionID, List<userTable_OnlyId> attractionList, string startDate,
            string startTime, List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit, int countryId,
            List<UserTable_UpdatedBreaks> userTable_UpdatedBreaks,
            List<UserTable_AttractionRequestOrder> userTable_AttractionRequestOrder, int UserTripId)
        {

            List<GetOrderOfAttractionVisit> _ListGetOrderOfAttractionVisit =
                getListValues.Public_GetOrderOfAttractionVisit(travelModeId,
                    sourceAttractionID, destinationAttractionID, attractionList,
                    startDate, startTime, listGetOrderOfAttractionVisit,
                    countryId, userTable_UpdatedBreaks, userTable_AttractionRequestOrder);

            List<GetOrderOfAttractionVisit> userLogOrderOfVisit = _ListGetOrderOfAttractionVisit;


            var listGroupWithDateAttractions = new List<GroupWithDateAttractions>();
            listGroupWithDateAttractions = GroupOrderAttractions(_ListGetOrderOfAttractionVisit);

            //Inserting User Trip information

            try
            {
                userInfo.User_LogUserTripInformation(travelModeId, sourceAttractionID, destinationAttractionID,
                    attractionList, startDate, startTime, userLogOrderOfVisit, countryId,
                    userTable_UpdatedBreaks, userTable_AttractionRequestOrder, UserTripId);
            }
            catch (Exception e)
            {
                //Console.WriteLine(e);
                throw e;
            }

            


            return listGroupWithDateAttractions.OrderBy(x=>Convert.ToDateTime(x.GroupDate)).ToList();
        }

        private List<GroupWithDateAttractions> GroupOrderAttractions(List<GetOrderOfAttractionVisit> listGetOrderOfAttractionVisit)
        {
            var listGroupWithDateAttractions = new List<GroupWithDateAttractions>();

            var groupDates = listGetOrderOfAttractionVisit.GroupBy(_date => Convert.ToDateTime(_date.DateAndTime).ToString("MM/dd/yy"));
            List<GetOrderOfAttractionVisit> attractionListResult = listGetOrderOfAttractionVisit.OrderBy(x => Convert.ToDateTime(x.DateAndTime)).ToList();


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
                        Convert.ToDateTime(internalObjects.DateAndTime).ToString("hh:mm");
                    getOrderOfAttractionVisit.DestinationAttractionId = internalObjects.DestinationAttractionId;
                    getOrderOfAttractionVisit.DestinationAttractionName = internalObjects.DestinationAttractionName;
                    getOrderOfAttractionVisit.DestinationIcon = internalObjects.DestinationIcon;
                    getOrderOfAttractionVisit.Distance = internalObjects.Distance;
                    getOrderOfAttractionVisit.ReachTime = Convert.ToDateTime(internalObjects.ReachTime)
                        .ToString("hh:mm");
                    getOrderOfAttractionVisit.SourceAttractionId = internalObjects.SourceAttractionId;
                    getOrderOfAttractionVisit.SourceAttractionName = internalObjects.SourceAttractionName;
                    getOrderOfAttractionVisit.SourceIcon = internalObjects.SourceIcon;
                    getOrderOfAttractionVisit.TimeRequiredToView = Convert.ToDateTime(internalObjects.TimeRequiredToView).ToString("hh:mm");
                    getOrderOfAttractionVisit.TravelModeId = internalObjects.TravelModeId;
                    getOrderOfAttractionVisit.TravelTime =
                        TimeSpan.FromSeconds(Convert.ToInt32(internalObjects.TravelTime)).Hours + ":" + TimeSpan
                            .FromSeconds(Convert.ToInt32(internalObjects.TravelTime)).Minutes;
                    getOrderOfAttractionVisit.TravelType = internalObjects.TravelType;
                    getOrderOfAttractionVisit.EventEndTime =
                        Convert.ToDateTime(internalObjects.EventEndTime).ToString("hh:mm");
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
                    listGetOrderOfAttractionVisit.Add(getOrderOfAttractionVisit);
                }
                groupWithDateAttractions.ListGetOrderOfAttractionVisit = listGetOrderOfAttractionVisit;
                listGroupWithDateAttractions.Add(groupWithDateAttractions);
            }

            return listGroupWithDateAttractions;
        }

        public List<GroupWithDateAttractions> User_GetUserStoredAttractinInfo(int userTripId)
        {
            List<GetOrderOfAttractionVisit> _ListGetOrderOfAttractionVisit =
                userInfo.User_GetUserStoredAttractinInfo(userTripId);

            List<GetOrderOfAttractionVisit> userLogOrderOfVisit = _ListGetOrderOfAttractionVisit;


            var listGroupWithDateAttractions = new List<GroupWithDateAttractions>();
            listGroupWithDateAttractions = GroupOrderAttractions(_ListGetOrderOfAttractionVisit);

            return listGroupWithDateAttractions.OrderBy(x => Convert.ToDateTime(x.GroupDate)).ToList();
        }
    }
}
