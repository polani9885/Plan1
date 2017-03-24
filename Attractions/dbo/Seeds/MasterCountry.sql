USE [Attractions]
GO
IF(SELECT Count(1) FROM MasterCountry WHERE CountryName = 'INDIA') < 1
BEGIN
	INSERT INTO [dbo].[MasterCountry]
           ([CountryId]
           ,[CountryName]
           ,[CountryShortName]
           ,[CreatedBy]
           ,[CreatedDate]           
           ,[IsDefault]
		   ,ServerName
		   ,IsWindowsAccess
		   ,UserName
		   ,[Password]
		   ,DatabaseName)
     VALUES
           (1
           ,'INDIA'
           ,'IN'
           ,'Seed'
           ,GetDATE()           
           ,1
		   ,'L4211079075\SQLEXPRESS'
		   ,1
		   ,NULL
		   ,NULL
		   ,'AttractionsIN')
END
GO
IF(SELECT Count(1) FROM MasterCountry WHERE CountryName = 'United States') < 1
BEGIN
	INSERT INTO [dbo].[MasterCountry]
           ([CountryId]
           ,[CountryName]
           ,[CountryShortName]
           ,[CreatedBy]
           ,[CreatedDate]           
           ,[IsDefault]
		   ,ServerName
		   ,IsWindowsAccess
		   ,UserName
		   ,[Password]
		   ,DatabaseName)
     VALUES
           (1
           ,'United States'
           ,'US'
           ,'Seed'
           ,GetDATE()           
           ,0
		   ,'L4211079075\SQLEXPRESS'
		   ,1
		   ,NULL
		   ,NULL
		   ,'AttractionsUSA')
END
GO
IF(SELECT Count(1) FROM MasterCountry WHERE CountryName = 'Canada') < 1
BEGIN
	INSERT INTO [dbo].[MasterCountry]
           ([CountryId]
           ,[CountryName]
           ,[CountryShortName]
           ,[CreatedBy]
           ,[CreatedDate]           
           ,[IsDefault]
		   ,ServerName
		   ,IsWindowsAccess
		   ,UserName
		   ,[Password]
		   ,DatabaseName)
     VALUES
           (1
           ,'Canada'
           ,'CA'
           ,'Seed'
           ,GetDATE()           
           ,0
		   ,'L4211079075\SQLEXPRESS'
		   ,1
		   ,NULL
		   ,NULL
		   ,'AttractionsCA')
END
GO