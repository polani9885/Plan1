IF(SELECT Count(1) FROM MasterTravelMode WHERE TravelType = 'Driving') < 1
BEGIN
	INSERT INTO [dbo].[MasterTravelMode]
           ([TravelModeId]
           ,[TravelType])
     VALUES
           (1
           ,'Driving')
END
GO
IF(SELECT Count(1) FROM MasterTravelMode WHERE TravelType = 'Walking') < 1
BEGIN
	INSERT INTO [dbo].[MasterTravelMode]
           ([TravelModeId]
           ,[TravelType])
     VALUES
           (2
           ,'Walking')
END
GO
IF(SELECT Count(1) FROM MasterTravelMode WHERE TravelType = 'Bicycling') < 1
BEGIN
	INSERT INTO [dbo].[MasterTravelMode]
           ([TravelModeId]
           ,[TravelType])
     VALUES
           (3
           ,'Bicycling')
END
GO
IF(SELECT Count(1) FROM MasterTravelMode WHERE TravelType = 'Transit') < 1
BEGIN
	INSERT INTO [dbo].[MasterTravelMode]
           ([TravelModeId]
           ,[TravelType])
     VALUES
           (4
           ,'Transit')
END
GO