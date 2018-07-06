CREATE PROCEDURE [dbo].[Scheduler_InsertAttractionTravelTimeDistance]
(
	@SourceAttractionId int
    ,@DestinationAttractionId int
    ,@TravelModeId int
    ,@TravelTime int
    ,@Distance int
)	
AS
BEGIN

	UPDATE Attractions
		SET IsNearDistanceDone = 1
	WHERE AttractionsId = @SourceAttractionId


	IF ( SELECT Count(1) FROM AttractionTravelTimeDistance 
			WHERE SourceAttractionId = @SourceAttractionId
				AND DestinationAttractionId = @DestinationAttractionId
				AND TravelModeId = @TravelModeId
		)>0
	BEGIN


		UPDATE [dbo].[AttractionTravelTimeDistance]
		   SET [SourceAttractionId] = @SourceAttractionId
			  ,[DestinationAttractionId] = @DestinationAttractionId
			  ,[TravelModeId] = @TravelModeId
			  ,[TravelTime] = @TravelTime
			  ,[Distance] = @Distance
		 WHERE SourceAttractionId = @SourceAttractionId
				AND DestinationAttractionId = @DestinationAttractionId
				AND TravelModeId = @TravelModeId



	END
	ELSE
	BEGIN
		INSERT INTO [dbo].[AttractionTravelTimeDistance]
			   ([SourceAttractionId]
			   ,[DestinationAttractionId]
			   ,[TravelModeId]
			   ,[TravelTime]
			   ,[Distance])
		 VALUES
			   (@SourceAttractionId
			   ,@DestinationAttractionId
			   ,@TravelModeId
			   ,@TravelTime
			   ,@Distance)
	END

	If EXISTS (
		SELECT 1
		  FROM [dbo].[AttractionNoOfTimesDistanceCalcuated] WITH(NOLOCK)
		  WHERE SourceAttractionId = @SourceAttractionId AND DestinationAttractionId = @DestinationAttractionId AND TravelModeId = @TravelModeId
	)
	BEGIN

		UPDATE [dbo].[AttractionNoOfTimesDistanceCalcuated]
		   SET [NoOfTimesTried] = NoOfTimesTried + 1
			  ,[ModifiedDate] = GETDATE()
		 WHERE SourceAttractionId = @SourceAttractionId AND DestinationAttractionId = @DestinationAttractionId
	END
	ELSE
	BEGIN
		INSERT INTO [dbo].[AttractionNoOfTimesDistanceCalcuated]
           ([SourceAttractionId]
           ,[DestinationAttractionId]
           ,[NoOfTimesTried]
           ,[CreatedDate]
		   ,TravelModeId
           )
		 VALUES
			   (@SourceAttractionId
			   ,@DestinationAttractionId
			   ,1
			   ,GETDATE()
			   ,@TravelModeId
			   )
	END




END