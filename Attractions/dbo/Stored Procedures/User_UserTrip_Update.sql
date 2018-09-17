CREATE PROCEDURE User_UserTrip_Update
(	
	@UserTripId [int]	
	,@CountryId [int] =  0
	,@StartDate [date] = NULL
	,@EndDate [date] = NULL
	,@TravelModeId [int] = 0
	,@SourceAttractionId [int] = 0
	,@DestinationAttractionId [int] = 0
	,@NoOfPersons [int] 
	,@NoOfCars [int] 
	,@CarMileage [decimal](18, 2) 
	,@FuelPrice [decimal](18, 2) 
)	
AS
BEGIN	
	UPDATE [dbo].[UserTrip]
	   SET [ModifiedDate] = GETDATE()
		  ,[CountryId] = CASE WHEN @CountryId > 0 THEN @CountryId ELSE CountryId END
		  ,[StartDate] = CASE WHEN @StartDate IS NOT NULL THEN @StartDate ELSE StartDate END 
		  ,[EndDate] = CASE WHEN @EndDate IS NOT NULL THEN @EndDate ELSE EndDate END 
		  ,[TravelModeId] = CASE WHEN @TravelModeId > 0 THEN @TravelModeId ELSE TravelModeId END
		  ,[SourceAttractionId] = CASE WHEN @SourceAttractionId > 0 THEN @SourceAttractionId ELSE SourceAttractionId END
		  ,[DestinationAttractionId] = CASE WHEN @DestinationAttractionId > 0 THEN @DestinationAttractionId ELSE DestinationAttractionId END
		  ,[NoOfPersons] = @NoOfPersons
		  ,[NoOfCars] = @NoOfCars
		  ,[CarMileage] = @CarMileage
		  ,[FuelPrice] = @FuelPrice
	 WHERE UserTripId = @UserTripId

END