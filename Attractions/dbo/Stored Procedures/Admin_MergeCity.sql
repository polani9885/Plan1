CREATE PROCEDURE [dbo].[Admin_MergeCity] 
(
	@SourceCityId INT,
	@DestinationCityId INT
)	
AS
BEGIN
	UPDATE dbo.MasterCity	
		SET CityId =  @DestinationCityId
	WHERE CityId = @SourceCityId

	DELETE FROM dbo.MasterCity WHERE StateId = @SourceCityId
END