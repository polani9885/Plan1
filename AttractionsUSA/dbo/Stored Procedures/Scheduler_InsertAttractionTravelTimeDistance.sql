CREATE PROCEDURE Scheduler_InsertAttractionTravelTimeDistance
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


END