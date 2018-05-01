CREATE PROCEDURE [dbo].[Scheduler_AttractionGetOnCityId]	
AS
BEGIN
	SELECT  
		 AttractionsId
		,Latitude
		,Longitude
	FROM Attractions
	WHERE ISNULL(IsScannedNearBy,0) = 0	
	AND Latitude IS NOt NULL
	ANd Longitude Is NOt NULL
	


END