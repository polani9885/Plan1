CREATE PROCEDURE [dbo].[Scheduler_GetCountryOnId] 
(
	@CountryId AS INT
)
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
			,ServerName
			,IsWindowsAccess
			,UserName
			,[Password]
			,DatabaseName
	FROM [dbo].[MasterCountry]
	WHERE CountryId = @CountryId
END
