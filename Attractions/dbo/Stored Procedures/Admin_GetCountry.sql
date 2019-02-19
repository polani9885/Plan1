CREATE PROCEDURE [dbo].[Admin_GetCountry] 
AS
BEGIN
	SELECT [CountryId]
      ,[CountryName]
      ,[CountryShortName]
      ,[CreatedBy]
      ,[CreatedDate]
      ,[ModifiedBy]
      ,[ModifiedDate]
      ,[IsDefault]
      ,[ServerName]
      ,[IsWindowsAccess]
      ,[UserName]
      ,[Password]
      ,[DatabaseName]
      ,[DistanceMeasure]
      ,[MetersIn]
	  ,(SELECT Count(*) FROM MasterState MS WITH(NOLOCK) WHERE MS.CountryId = MC.CountryId) StateCount
	FROM [dbo].[MasterCountry] MC WITH(NOLOCK)
END