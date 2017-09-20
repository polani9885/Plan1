CREATE PROCEDURE Scheduler_GetGoogleMapsMethodCount 
(
	@MapType AS Varchar(50)
)	
AS
BEGIN

	SELECT [GoogleMapsLoggingId]
      ,[MapType]
      ,[MethodName]
      ,[CreatedDate]
      ,[AttractionName]
      ,[Logitude]
      ,[Latitude]
      ,[Counter]
	FROM [dbo].[GoogleMapsLogging]
	WHERE MapType = @MapType
	AND CreatedDate = CAST(GETDATE() AS DATE)


END