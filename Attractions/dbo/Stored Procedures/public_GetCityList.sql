-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE public_GetCityList
	
AS
BEGIN

SELECT [CityId]
      ,[CityName]
      ,[CityShortName]
      ,[StateId]
  FROM [dbo].[MasterCity]



END
