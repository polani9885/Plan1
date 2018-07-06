CREATE PROCEDURE Scheduler_RecalculateTourInfo
(
	@CountryId INT
)	
AS
BEGIN
	SELECT DISTINCT UT.[UserTripId]
      ,UT.[UserId]
      ,UT.[TripName]
      ,UT.[CreatedDate]
      ,UT.[ModifiedDate]
      ,UT.[CountryId]
      ,UT.[StartDate]
      ,UT.[EndDate]
      ,UT.[TravelModeId]
      ,UT.[SourceAttractionId]
      ,UT.[DestinationAttractionId]
  FROM [dbo].[UserTrip] UT WITH(NOLOCK)
  JOIN [dbo].[UserTripAttractionOrderVisit] UTAOV WITH(NOLOCK) ON UTAOV.UserTripId = UT.UserTripId
  WHERE StartDate IS NOT NULL
  AND CAST(StartDate AS DATE) >= CAST(GETDATE() AS DATE)
  AND CountryId = @CountryId
END