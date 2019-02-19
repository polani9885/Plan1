﻿USE [Attractions]
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
		   ,DatabaseName
		   ,DistanceMeasure
		   ,MetersIn)
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
		   ,'AttractionsIN'
		   ,'Km'
		   ,0.001)
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
		   ,DatabaseName
		   ,DistanceMeasure
		   ,MetersIn)
     VALUES
           (2
           ,'United States'
           ,'US'
           ,'Seed'
           ,GetDATE()           
           ,0
		   ,'L4211079075\SQLEXPRESS'
		   ,1
		   ,NULL
		   ,NULL
		   ,'AttractionsUSA'
		   ,'Miles'
		   ,0.00062137)
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
		   ,DatabaseName
		   ,DistanceMeasure
		   ,MetersIn)
     VALUES
           (3
           ,'Canada'
           ,'CA'
           ,'Seed'
           ,GetDATE()           
           ,0
		   ,'L4211079075\SQLEXPRESS'
		   ,1
		   ,NULL
		   ,NULL
		   ,'AttractionsCanada'
		   ,'Miles'
		   ,0.00062137)
END
GO