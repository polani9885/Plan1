CREATE PROCEDURE Scheduler_GetTravelMode 
	
AS
BEGIN
	SELECT [TravelModeId]
		  ,[TravelType]
	FROM [dbo].[MasterTravelMode]
	WHERE TravelType NOt IN ('Transit')
END