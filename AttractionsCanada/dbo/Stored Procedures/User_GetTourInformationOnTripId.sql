CREATE PROCEDURE [dbo].[User_GetTourInformationOnTripId]
(
	@UserTripId AS INT
)	
AS
BEGIN
	SELECT UT.[UserTripId]
      ,UT.[UserId]
      ,UT.[TripName]
      ,UT.[CreatedDate]
      ,UT.[ModifiedDate]
      ,UT.[CountryId]
      ,CAST(UT.[StartDate] AS Varchar(50)) StartDate
      ,UT.[EndDate]
      ,UT.[TravelModeId]
      ,UT.[SourceAttractionId]
      ,UT.[DestinationAttractionId]
	  ,UT.NoOfPersons
	  ,UT.NoOfCars
	  ,UT.CarMileage
	  ,UT.FuelPrice
	  ,SA.GoogleSearchText SourceAttractionName
	  ,DA.GoogleSearchText DestinationAttractionName
  FROM Attractions..[UserTrip] UT WITH(NOLOCK)
  LEFT OUTER JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = UT.SourceAttractionId
  LEFT OUTER JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = UT.DestinationAttractionId
  WHERE UserTripId = @UserTripId
END