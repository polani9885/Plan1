USE [Attractions]
GO
IF(SELECT Count(1) FROM MasterState WHERE StateName = 'Andhra Pradesh' AND CountryId = 1) < 1
BEGIN
	INSERT INTO [dbo].[MasterState]
           ([StateId]
           ,[StateName]
           ,[CountryId]
           ,[StateShortName]
           ,[IsDefault])
     VALUES
           (1
           ,'Andhra Pradesh'
           ,1
           ,'AP'
           ,1)
END
IF(SELECT Count(1) FROM MasterState WHERE StateName = 'Florida' AND CountryId = 2) < 1
BEGIN
	INSERT INTO [dbo].[MasterState]
           ([StateId]
           ,[StateName]
           ,[CountryId]
           ,[StateShortName]
           ,[IsDefault])
     VALUES
           (2
           ,'Florida'
           ,2
           ,'AP'
           ,1)
END
IF(SELECT Count(1) FROM MasterState WHERE StateName = 'Chennai' AND CountryId = 1) < 1
BEGIN
	INSERT INTO [dbo].[MasterState]
           ([StateId]
           ,[StateName]
           ,[CountryId]
           ,[StateShortName]
           ,[IsDefault])
     VALUES
           (3
           ,'Chennai'
           ,1
           ,'TN'
           ,1)
END
IF(SELECT Count(1) FROM MasterState WHERE StateName = 'Toronto' AND CountryId = 3) < 1
BEGIN
	INSERT INTO [dbo].[MasterState]
           ([StateId]
           ,[StateName]
           ,[CountryId]
           ,[StateShortName]
           ,[IsDefault])
     VALUES
           (4
           ,'Toronto'
           ,3
           ,'TO'
           ,1)
END