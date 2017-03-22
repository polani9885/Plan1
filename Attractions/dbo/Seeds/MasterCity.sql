USE [Attractions]
GO
IF(SELECT Count(1) FROM MasterCity WHERE CityName = 'Vijayawada' AND StateId = 1) < 1
BEGIN	

	INSERT INTO [dbo].[MasterCity]
           ([CityId]
           ,[CityName]
           ,[CityShortName]
           ,[StateId]
           ,[IsDefault])
     VALUES
           (1
           ,'Vijayawada'
           ,'VJA'
           ,'1'
           ,1)

END
GO
IF(SELECT Count(1) FROM MasterCity WHERE CityName = 'Tampa' AND StateId = 2) < 1
BEGIN	

	INSERT INTO [dbo].[MasterCity]
           ([CityId]
           ,[CityName]
           ,[CityShortName]
           ,[StateId]
           ,[IsDefault]
		   ,Latitude
		   ,Longitude)
     VALUES
           (2
           ,'Tampa'
           ,'TP'
           ,'2'
           ,1
		   ,'27.983478'
		   ,'-82.537078')

END