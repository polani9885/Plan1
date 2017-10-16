-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE public_GetCityList
	
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



END
