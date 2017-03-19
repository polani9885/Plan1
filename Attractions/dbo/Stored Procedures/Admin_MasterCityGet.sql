CREATE PROCEDURE [dbo].[Admin_MasterCityGet]
	
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
	JOIN dob.MasterCountry MAC ON MAC.CountryId = MS.CountryId
	WHERE MAC.IsDefault = 1
	AND MS.IsDefault = 1
END