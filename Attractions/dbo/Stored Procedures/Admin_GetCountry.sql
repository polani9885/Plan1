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
	FROM [dbo].[MasterCountry]
END