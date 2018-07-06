CREATE PROCEDURE [dbo].[User_InsertUpdateTripCities]	
	@CityVisitList CityVisitList ReadOnly	
	,@CountryId INT
	,@UserTripId INT
AS
BEGIN

	DELETE FROM dbo.UserTripCities 
	WHERE UserTripId = @UserTripId

	INSERT INTO dbo.UserTripCities(MasterCityId,UserTripId,RecordIndex,CreatedDate)
	SELECT CLV.CityId,@UserTripId,CLV.RecordIndex,GETDATE() FROM @CityVisitList CLV 
		
		
	UPDATE 	dbo.UserTrip
		SET CountryId = @CountryId
	WHERE UserTripId = @UserTripId 



END