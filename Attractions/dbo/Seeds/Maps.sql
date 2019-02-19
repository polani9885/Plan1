IF NOT EXISTS (SELECT 1 FROM dbo.Maps WITH(NOLOCK) WHERE MapsId = 1) 
BEGIN
	INSERT INTO [dbo].[Maps]
           ([MapsId]
           ,[MapName]
           ,[MaxCountPerDay]
           ,[MaxTotalCount]		   )
     VALUES
           (1
           ,'GoogleMaps'
           ,500
           ,7000)

END

IF NOT EXISTS (SELECT 1 FROM dbo.Maps WITH(NOLOCK) WHERE MapsId = 2) 
BEGIN
	INSERT INTO [dbo].[Maps]
           ([MapsId]
           ,[MapName]
           ,[MaxCountPerDay]		   
           )
     VALUES
           (2
           ,'locationiq'
           ,5000		   
           )

END


IF NOT EXISTS (SELECT 1 FROM dbo.Maps WITH(NOLOCK) WHERE MapsId = 3) 
BEGIN
	INSERT INTO [dbo].[Maps]
           ([MapsId]
           ,[MapName]
           ,[MaxCountPerDay]
		   ,PerMonthCount
           )
     VALUES
           (3
           ,'https://developer.here.com/plans'
           ,500
		   ,20000
           )
END

IF NOT EXISTS (SELECT 1 FROM dbo.Maps WITH(NOLOCK) WHERE MapsId = 4) 
BEGIN
	INSERT INTO [dbo].[Maps]
           ([MapsId]
           ,[MapName]
           ,[MaxCountPerDay]
		   ,PerMonthCount
           )
     VALUES
           (4
           ,'https://developer.mapquest.com/plans'
           ,500
		   ,10000
           )
END

IF NOT EXISTS (SELECT 1 FROM dbo.Maps WITH(NOLOCK) WHERE MapsId = 5) 
BEGIN
	INSERT INTO [dbo].[Maps]
           ([MapsId]
           ,[MapName]
           ,[MaxCountPerDay]		   
           )
     VALUES
           (5
           ,'https://www.graphhopper.com/pricing/'
           ,300		   
           )
END