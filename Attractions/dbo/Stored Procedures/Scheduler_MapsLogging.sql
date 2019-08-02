CREATE PROCEDURE [dbo].[Scheduler_MapsLogging] 
(
	@MethodName Varchar(50)
    ,@MapsId INT
    ,@MapsCredentialsId INT
    ,@MapFeaturesId INT
    ,@Response Varchar(max)
    ,@ErrorMessage Varchar(MAX)
    ,@ErrorStack Varchar(MAX)
    ,@CountryId INT
    ,@AttractionId INT
    ,@URL Varchar(MAX)    
	,@IsError BIT
	,@AttractionTravelStepsId INT
)	
AS
BEGIN

	DECLARE @CreatedDate DATE 

	SET @CreatedDate = GETDATE()


	IF @IsError = 1
	BEGIN
		IF EXISTS(
			SELECT 1 FROM [dbo].[MapsLoggingError] WITH(NOLOCK) 
			WHERE MapsId = @MapsId 
			AND MapsCredentialsId = @MapsCredentialsId			
			AND MapFeaturesId = @MapFeaturesId
			AND CountryId = @CountryId
			AND (AttractionId = @AttractionId OR AttractionTravelStepsId = @AttractionTravelStepsId))
		BEGIN
			UPDATE [dbo].[MapsLoggingError]
				SET FailedCounter = ISNULL(FailedCounter,0) + 1
					,Response = @Response
					,ErrorMessage = @ErrorMessage
					,ErrorStack = @ErrorStack
			WHERE MapsId = @MapsId 
			AND MapsCredentialsId = @MapsCredentialsId			
			AND MapFeaturesId = @MapFeaturesId
			AND CountryId = @CountryId
			AND (AttractionId = @AttractionId OR AttractionTravelStepsId = @AttractionTravelStepsId)
		END
		ELSE
		BEGIN		
			INSERT INTO [dbo].[MapsLoggingError]
					   ([MethodName]
					   ,[MapsId]
					   ,[MapsCredentialsId]
					   ,[CreatedDate]
					   ,[MapFeaturesId]
					   ,[Response]
					   ,[ErrorMessage]
					   ,[ErrorStack]
					   ,[CountryId]
					   ,[AttractionId]
					   ,[URL]
					   ,[FailedCounter]
					   ,AttractionTravelStepsId)
				 VALUES
					   (@MethodName
					   ,@MapsId
					   ,@MapsCredentialsId
					   ,@CreatedDate
					   ,@MapFeaturesId
					   ,@Response
					   ,@ErrorMessage
					   ,@ErrorStack
					   ,@CountryId
					   ,@AttractionId
					   ,@URL
					   ,1
					   ,@AttractionTravelStepsId)
		END
	END
	
	IF NOT EXISTS(
		SELECT 1 FROM [dbo].[MapsLogging] WITH(NOLOCK) 
		WHERE MapsCredentialsId = @MapsCredentialsId 
		AND CreatedDate = @CreatedDate
		)
	BEGIN
		INSERT INTO [dbo].[MapsLogging]
			   ([MapsCredentialsId]
			   ,[CreatedDate]
			   ,[Counter]
			   ,[FailedCount])
		 VALUES
			   (@MapsCredentialsId
			   ,@CreatedDate
			   ,1
			   ,CASE WHEN @IsError = 1 THEN 1 ELSE 0 END)

	END
	ELSE
	BEGIN
		UPDATE [dbo].[MapsLogging]
			SET Counter = Counter + 1
				,FailedCount = CASE WHEN @IsError = 1 THEN ISNULL(FailedCount,0) + 1  ELSE FailedCount END				
		WHERE MapsCredentialsId = @MapsCredentialsId 
		AND CreatedDate = @CreatedDate
	END 

	--Checking the Map Feature is Active or not
	DECLARE @GetSumOfCounter INT =(SELECT SUM(Counter) FROM [dbo].[MapsLogging] WITH(NOLOCK) WHERE MapsCredentialsId = @MapsCredentialsId)
	
	IF EXISTS(
		SELECT 1 FROM dbo.Maps M WITH(NOLOCK) 
		JOIN dbo.MapsCredentials MC WITH(NOLOCK) ON MC.MapsId = M.MapsId 
		WHERE MC.MapsCredentialsId = @MapsCredentialsId
		AND ISNULL(M.MaxTotalCount,0) > 0
		AND M.MaxTotalCount < @GetSumOfCounter
		)
	BEGIN
		UPDATE dbo.MapsCredentials
			SET IsActive = 0
		WHERE MapsCredentialsId = @MapsCredentialsId
	END



END
