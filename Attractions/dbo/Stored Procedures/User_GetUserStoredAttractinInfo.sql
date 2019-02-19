CREATE PROCEDURE User_GetUserStoredAttractinInfo 
(
	@UserTripId INT
)	
AS
BEGIN
	SELECT [UserTripAttractionOrderVisitId]
      ,[UserTripId]
      ,[SourceAttractionId]
      ,[DestinationAttractionId]
      ,[Distance]
      ,[TravelTime]
      ,[TravelModeId]
      ,[SourceAttractionName]
      ,[DestinationAttractionName]
      ,[DateAndTime]
      ,[ReachTime]
      ,[TimeRequiredToView]
      ,[EventEndTime]
      ,[TravelType]
      ,[SourceIcon]
      ,[DestinationIcon]
      ,[RecordCount]
      ,[IsOrderUpdated]
      ,[UpdatedOrder]
      ,[IsUpdatedViewTime]
      ,[UpdatedTime]
      ,[IsPersonalRequest]
      ,[IsLunchDinnerBreakTime]
      ,[IsDistanceCalculationMissing]
      ,[SourceDirection]
      ,[DestinationDirection]
      ,[SourceRating]
      ,[DestinationRating]
      ,[SourceRatingTotal]
      ,[DestinationRatingTotal]
      ,[SourceSearchText]
      ,[DestinationSearchText]
      ,[SourceOpenTime]
      ,[SourceCloseTime]
      ,[DestinationOpenTime]
      ,[DestinationCloseTime]
      ,[SourcePhoto]
      ,[DestinationPhoto]
      ,[SourceLongitude]
      ,[SourceLatitude]
      ,[DestinationLongitude]
      ,[DestinationLatitude]
      ,[CreatedDate]
	  ,SourcePhotoUrl
	  ,DestinationPhotoUrl
	  ,BreakInformationId
	  ,IsNeedDrivningBreak
	  ,AttractionTravelTimeDistanceId
  FROM [dbo].[UserTripAttractionOrderVisit]
  WHERE UserTripId = @UserTripId
END
