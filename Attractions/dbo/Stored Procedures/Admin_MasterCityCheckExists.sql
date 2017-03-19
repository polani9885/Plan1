CREATE PROCEDURE [dbo].[Admin_MasterCityCheckExists] 
(
	@CityId int
	,@CityName varchar(250)
)	
AS
BEGIN
	IF(@CityId = 0)
	BEGIN
		SELECT MC.[StateId]
		  ,MC.[CityName]
		  ,MS.[CountryId]
		  ,MC.[CityShortName]		  
		FROM [dbo].[MasterCity] MC
		JOIN dbo.MasterState MS ON MS.StateId = MC.StateId
		WHERE MC.CityName = @CityName
		
	END
	ELSE
	BEGIN
		SELECT MC.[StateId]
		  ,MC.[CityName]
		  ,MS.[CountryId]
		  ,MC.[CityShortName]		  
		FROM [dbo].[MasterCity] MC
		JOIN dbo.MasterState MS ON MS.StateId = MC.StateId
		WHERE MC.CityId NOT IN (@CityId)
		AND MC.CityName = @CityName		
	END
END