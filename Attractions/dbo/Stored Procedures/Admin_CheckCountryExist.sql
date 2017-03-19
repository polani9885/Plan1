CREATE PROCEDURE [dbo].[Admin_CheckCountryExist] 
	@CountryName Varchar(250)
	,@CountryId INT
AS
BEGIN	

	IF(@CountryId = 0)
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
		WHERE CountryName = @CountryName

	END
	ELSE
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
		WHERE CountryName = @CountryName
		AND CountryId NOT IN (@CountryId)
	END
END