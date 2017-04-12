CREATE PROCEDURE Scheduler_GoogleLogging 
(
	@MapType varchar(50)
    ,@MethodName varchar(50)    
    ,@AttractionName varchar(250)
    ,@Logitude varchar(50)
    ,@Latitude varchar(50) 
	,@IsError bit   
)	
AS
BEGIN

DECLARE @CreatedDate DATE 

SET @CreatedDate = GETDATE()

IF NOT EXISTS(SELECT 1 FROM GoogleMapsLogging WHERE MapType = @MapType AND CreatedDate = @CreatedDate)
BEGIN
	INSERT INTO [dbo].[GoogleMapsLogging]
           ([MapType]
           ,[MethodName]
           ,[CreatedDate]           
           ,[Counter])
     VALUES
           (@MapType
           ,@MethodName
           ,@CreatedDate        
           ,1)
END
ELSE
BEGIN

	UPDATE [dbo].[GoogleMapsLogging]
	   SET [Counter] = [Counter] + 1
	WHERE MapType = @MapType AND CreatedDate = @CreatedDate
END

IF @IsError = 1
BEGIN
	UPDATE [dbo].[GoogleMapsLogging]
	   SET 
		  [AttractionName] = @AttractionName
		  ,[Logitude] = @Logitude
		  ,[Latitude] = @Latitude		  
	WHERE MapType = @MapType AND CreatedDate = @CreatedDate
END	

END