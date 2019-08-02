
IF NOT EXISTS (SELECT 1 FROM dbo.MainData WITH(NOLOCK) WHERE ColumnKey = 'CountryId') 
BEGIN
	INSERT INTO [dbo].[MainData]
           ([ColumnKey]
           ,[ColumnValue])
     VALUES
           ('CountryId'
           ,'2')
END


IF NOT EXISTS (SELECT 1 FROM dbo.MainData WITH(NOLOCK) WHERE ColumnKey = 'AttractionMaxTry') 
BEGIN
	INSERT INTO [dbo].[MainData]
           ([ColumnKey]
           ,[ColumnValue])
     VALUES
           ('AttractionMaxTry'
           ,'5')
END

IF NOT EXISTS (SELECT 1 FROM dbo.MainData WITH(NOLOCK) WHERE ColumnKey = 'AttractionNearByMaxTry') 
BEGIN
	INSERT INTO [dbo].[MainData]
           ([ColumnKey]
           ,[ColumnValue])
     VALUES
           ('AttractionNearByMaxTry'
           ,'20')
END
