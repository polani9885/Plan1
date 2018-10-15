CREATE PROCEDURE [dbo].[Scheduler_InsertAttractionTravelTimeDistance]
(
	@SourceAttractionId int
    ,@DestinationAttractionId int
    ,@TravelModeId int
    ,@TravelTime int
    ,@Distance int
	,@StepsConsolidated AS User_StepsConsolidated READONLY
)	
AS
BEGIN

	UPDATE Attractions
		SET IsNearDistanceDone = 1
	WHERE AttractionsId = @SourceAttractionId

	DECLARE @AttractionTravelTimeDistanceId As INT


	IF ( SELECT Count(1) FROM AttractionTravelTimeDistance WITH(NOLOCK)
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


	SELECT @AttractionTravelTimeDistanceId =  AttractionTravelTimeDistanceId
	FROM AttractionTravelTimeDistance WITH(NOLOCK)
	WHERE SourceAttractionId = @SourceAttractionId
		AND DestinationAttractionId = @DestinationAttractionId
		AND TravelModeId = @TravelModeId

	IF EXISTS (SELECT 1 FROM @StepsConsolidated) AND @TravelTime > 3700 AND @TravelModeId = 1
	BEGIN
	
		DELETE FROM AttractionTravelSteps WHERE AttractionTravelTimeDistanceId = @AttractionTravelTimeDistanceId	

		INSERT INTO [dbo].[AttractionTravelSteps]
			   ([AttractionTravelTimeDistanceId]
			   ,[Distance_Value]
			   ,[Duration_Value]
			   ,[End_location_lat]
			   ,[End_location_lng]
			   ,[Start_location_lat]
			   ,[Start_location_lng]
			   ,[Travel_mode]
			   ,OrderId)
		 SELECT 
			@AttractionTravelTimeDistanceId,
			distance_Value,
			duration_Value,
			end_location_lat,
			end_location_lng,
			start_location_lat,
			start_location_lng,
			travel_mode,
			OrderId
		FROM @StepsConsolidated

		UPDATE AttractionTravelTimeDistance
			SET IsHasSteps = 1
		WHERE AttractionTravelTimeDistanceId = @AttractionTravelTimeDistanceId


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