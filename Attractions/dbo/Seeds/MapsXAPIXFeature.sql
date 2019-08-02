IF NOT EXISTS (SELECT 1 FROM dbo.MapsXAPIXFeature WITH(NOLOCK) WHERE MapsId = 1 AND MapFeaturesId = 1) 
BEGIN
	INSERT INTO [dbo].[MapsXAPIXFeature]
           ([MapsId]
           ,[MapFeaturesId]
           ,[MasterCountryId]
           ,[API])
     VALUES
           (1
           ,1
           ,NULL
           ,'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=')

END

GO

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXAPIXFeature WITH(NOLOCK) WHERE MapsId = 1 AND MapFeaturesId = 2) 
BEGIN
	INSERT INTO [dbo].[MapsXAPIXFeature]
           ([MapsId]
           ,[MapFeaturesId]
           ,[MasterCountryId]
           ,[API])
     VALUES
           (1
           ,2
           ,NULL
           ,'https://maps.googleapis.com/maps/api/place/details/json?placeid=')

END

GO

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXAPIXFeature WITH(NOLOCK) WHERE MapsId = 1 AND MapFeaturesId = 3) 
BEGIN
	INSERT INTO [dbo].[MapsXAPIXFeature]
           ([MapsId]
           ,[MapFeaturesId]
           ,[MasterCountryId]
           ,[API])
     VALUES
           (1
           ,3
           ,NULL
           ,'https://maps.googleapis.com/maps/api/directions/json?&mode=')

END

GO


IF NOT EXISTS (SELECT 1 FROM dbo.MapsXAPIXFeature WITH(NOLOCK) WHERE MapsId = 2 AND MapFeaturesId = 4 AND MasterCountryId = 2)  
BEGIN
	INSERT INTO [dbo].[MapsXAPIXFeature]
           ([MapsId]
           ,[MapFeaturesId]
           ,[MasterCountryId]
           ,[API])
     VALUES
           (2
           ,4
           ,2
           ,'https://us1.locationiq.com/v1/search.php?')
END

GO

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXAPIXFeature WITH(NOLOCK) WHERE MapsId = 2 AND MapFeaturesId = 1 AND MasterCountryId = 2)  
BEGIN
	INSERT INTO [dbo].[MapsXAPIXFeature]
           ([MapsId]
           ,[MapFeaturesId]
           ,[MasterCountryId]
           ,[API])
     VALUES
           (2
           ,1
           ,2
           ,'https://us1.locationiq.com/v1/nearby.php?')
END

GO

IF NOT EXISTS (SELECT 1 FROM dbo.MapsXAPIXFeature WITH(NOLOCK) WHERE MapsId = 3 AND MapFeaturesId = 1)  
BEGIN
	INSERT INTO [dbo].[MapsXAPIXFeature]
           ([MapsId]
           ,[MapFeaturesId]           
           ,[API])
     VALUES
           (3
           ,1           
           ,'https://places.cit.api.here.com/places/v1/autosuggest?')
END

GO