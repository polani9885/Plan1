CREATE PROCEDURE dbo.UpdateCityNearestLocationDont
(
	@CityId AS INT
)	
AS
BEGIN
	UPDATE dbo.MasterCity	
		SET IsGettingNearLocationDone = 1
	WHERE CityId = @CityId
END