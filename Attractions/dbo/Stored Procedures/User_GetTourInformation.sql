CREATE PROCEDURE [dbo].[User_GetTourInformation]
(
	@UserId AS INT
)	
AS
BEGIN
	SELECT [UserTripId]
      ,[UserId]
      ,[TripName]
      ,[CreatedDate]
      ,[ModifiedDate]
      ,[CountryId]
      ,CAST([StartDate] AS Varchar(50)) StartDate
      ,[EndDate]
      ,[TravelModeId]
      ,[SourceAttractionId]
      ,[DestinationAttractionId]
	  ,NoOfPersons
	  ,NoOfCars
	  ,CarMileage
	  ,FuelPrice
	  ,DrivingBreak
  FROM [dbo].[UserTrip] WITH(NOLOCK)
  WHERE UserId = @UserId
END

GO