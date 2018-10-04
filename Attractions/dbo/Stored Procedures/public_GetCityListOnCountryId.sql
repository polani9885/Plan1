CREATE PROCEDURE [dbo].[public_GetCityListOnCountryId]
(
	@CountryId As INT
)	
AS
BEGIN

SELECT [CityId]
      ,[CityName] + ', ' + MS.StateName + ', ' + MCC.CountryName AS CityName
      ,[CityShortName]
      ,MC.[StateId]
	  ,MCC.CountryId
  FROM [dbo].[MasterCity] MC
  JOIN dbo.MasterState MS ON MS.StateId = MC.StateId
  JOIN dbo.MasterCountry MCC ON MCC.CountryId = MS.CountryId
  WHERE MCC.CountryId = @CountryId



END
