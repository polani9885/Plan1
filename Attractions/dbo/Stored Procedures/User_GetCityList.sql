CREATE PROCEDURE [dbo].[User_GetCityList]
(
	@UserTripId AS INT
)	
AS
BEGIN

SELECT [CityId]
      ,[CityName] + ', ' + MS.StateName + ', ' + MCC.CountryName AS CityName
      ,[CityShortName]
      ,MC.[StateId]
	  ,MCC.CountryId
  FROM [dbo].[MasterCity] MC WITH(NOLOCK)
  JOIN dbo.MasterState MS WITH(NOLOCK) ON MS.StateId = MC.StateId
  JOIN dbo.MasterCountry MCC WITH(NOLOCK) ON MCC.CountryId = MS.CountryId
  JOIN dbo.UserTripCities UTC WITH(NOLOCK) ON UTC.MasterCityId = MC.CityId
  WHERE UTC.UserTripId = @UserTripId
  ORDER BY UTC.RecordIndex


END
