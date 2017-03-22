CREATE PROCEDURE [dbo].[Scheduler_GetCityOnCountryId] 
(
	@CountryId AS INT
)
AS
BEGIN


	SELECT MC.[CityId]
		  ,MC.[CityName]
		  ,MC.[CityShortName]
		  ,Mc.[StateId]
		  ,MC.[IsDefault]
		  ,MC.[Latitude]
		  ,MC.[Longitude]
	 FROM MasterCity MC
		JOIN MasterState MS ON MS.StateId = Mc.StateId
		JOIN MasterCountry MCC ON MCC.CountryId = Ms.CountryId
		WHERE MCC.CountryId = @CountryId
END