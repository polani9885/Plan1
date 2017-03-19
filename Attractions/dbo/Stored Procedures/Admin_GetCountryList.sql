-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE Admin_GetCountryList 
	
AS
BEGIN

SELECT [CountryId]
      ,[CountryName]
      ,[CountryShortName]
  FROM [dbo].[MasterCountry]
END
