IF NOT EXISTS (SELECT 1 FROM dbo.MasterPriceInfo WITH(NOLOCK) WHERE MasterPriceInfoId = 1) 
BEGIN

	INSERT INTO [dbo].[MasterPriceInfo]
           ([MasterPriceInfoId]
           ,[PriveLevel]
           ,[Food]
           ,[Stay])
     VALUES
           (1
           ,0
           ,10
           ,50)
END

GO

IF NOT EXISTS (SELECT 1 FROM dbo.MasterPriceInfo WITH(NOLOCK) WHERE MasterPriceInfoId = 2) 
BEGIN

	INSERT INTO [dbo].[MasterPriceInfo]
           ([MasterPriceInfoId]
           ,[PriveLevel]
           ,[Food]
           ,[Stay])
     VALUES
           (2
           ,1
           ,15
           ,80)
END

GO

IF NOT EXISTS (SELECT 1 FROM dbo.MasterPriceInfo WITH(NOLOCK) WHERE MasterPriceInfoId = 3) 
BEGIN

	INSERT INTO [dbo].[MasterPriceInfo]
           ([MasterPriceInfoId]
           ,[PriveLevel]
           ,[Food]
           ,[Stay])
     VALUES
           (3
           ,2
           ,20
           ,100)
END

GO

IF NOT EXISTS (SELECT 1 FROM dbo.MasterPriceInfo WITH(NOLOCK) WHERE MasterPriceInfoId = 4) 
BEGIN

	INSERT INTO [dbo].[MasterPriceInfo]
           ([MasterPriceInfoId]
           ,[PriveLevel]
           ,[Food]
           ,[Stay])
     VALUES
           (4
           ,3
           ,25
           ,150)
END

GO

IF NOT EXISTS (SELECT 1 FROM dbo.MasterPriceInfo WITH(NOLOCK) WHERE MasterPriceInfoId = 5) 
BEGIN

	INSERT INTO [dbo].[MasterPriceInfo]
           ([MasterPriceInfoId]
           ,[PriveLevel]
           ,[Food]
           ,[Stay])
     VALUES
           (5
           ,4
           ,30
           ,200)
END