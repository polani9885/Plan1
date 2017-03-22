CREATE PROCEDURE [dbo].[Scheduler_AttractionGetOnCityId]
	@CityId INT
AS
BEGIN
	DECLARE @Latitude AS Varchar(50)
	,@Longitude AS Varchar(50)
	,@AttractionsId As INT = 0
	
	SELECT  TOP 1 
		@AttractionsId = AttractionsId
		,@Latitude = Latitude
		,@Longitude = Longitude
	FROM Attractions
	WHERE ISNULL(IsScannedNearBy,0) = 0
	ANd CityId = @CityId
	AND Latitude IS NOt NULL
	ANd Longitude Is NOt NULL

	IF (@AttractionsId > 0)
	BEGIN
		UPDATE Attractions
			SET IsScannedNearBy = 1
		WHERE  AttractionsId = @AttractionsId
		SELECT @Latitude Latitude, @Longitude Longitude
	END
	


END