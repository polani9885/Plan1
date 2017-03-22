﻿CREATE PROCEDURE [dbo].[Admin_GetCountry] 
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
	FROM [dbo].[MasterCountry]
END