CREATE PROCEDURE [dbo].[Scheduler_UpdateLatAndLong]
(
	@AttractionsId AS INT
	,@Latitude As Varchar(50)
	,@Longitude AS Varchar(50)
)	
AS
BEGIN
	UPDATE Attractions
		SET IsLatAndLon = 1
			,Latitude = @Latitude
			,Longitude = @Longitude
	WHERE AttractionsId = @AttractionsId
END
