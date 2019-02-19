CREATE PROCEDURE User_GetDirectionsSteps
(
	@AttractionTravelTimeDistanceId AS BIGINT
)	
AS
BEGIN
	
	SELECT [AttractionTravelStepsId]
		  ,[AttractionTravelTimeDistanceId]
		  ,[Distance_Value]
		  ,[Duration_Value]
		  ,[End_location_lat]
		  ,[End_location_lng]
		  ,[Start_location_lat]
		  ,[Start_location_lng]
		  ,[Travel_mode]
		  ,[OrderId]
		  ,[IsNearestRestarentDone]
	  FROM [dbo].[AttractionTravelSteps] WITH(NOLOCK)
	  WHERE AttractionTravelTimeDistanceId = @AttractionTravelTimeDistanceId


END