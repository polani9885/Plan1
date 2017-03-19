CREATE PROCEDURE [dbo].[Admin_MasterCityGetOnStateId]
(
	@StateId INT
)	
AS
BEGIN
	SELECT 
		MC.CityId
	   ,MC.[StateId]
      ,MC.[CityName]
      ,MS.[CountryId]
      ,MC.[CityShortName]	  
	  ,MC.IsDefault
	FROM [dbo].[MasterCity] MC
	JOIN dbo.MasterState MS ON MS.StateId = MC.StateId
	JOIN dbo.MasterCountry MAC ON MAC.CountryId = MS.CountryId
	WHERE MS.StateId = @StateId
END
