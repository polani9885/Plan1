CREATE PROCEDURE [dbo].[AddingMissingClaims]
(
	@AttractionId AS INT
	,@TravelModeId AS INT
	,@MissingAttractionID AS userTable_OnlyId ReadOnly
	,@CreatedBy AS Varchar(500)
)	
AS
BEGIN

	DECLARE @MissingAttractionUpdatedId AS userTable_OnlyId

	INSERT INTO @MissingAttractionUpdatedId
	SELECT * FROM @MissingAttractionID

	DECLARE @MissingDistanceAttractionsRecordsID AS INT
	IF EXISTS(SELECT 1 FROM [dbo].[MissingDistanceAttractionsRecords] WHERE AttractionsID = @AttractionId AND MasterTravelModeID = @TravelModeId)
	BEGIN
		SELECT @MissingDistanceAttractionsRecordsID = MissingDistanceAttractionsRecordsID 
		FROM [dbo].[MissingDistanceAttractionsRecords] WHERE AttractionsID = @AttractionId
		AND MasterTravelModeID = @TravelModeId
	END
	ELSE 
	BEGIN
		INSERT INTO [dbo].[MissingDistanceAttractionsRecords]
				([AttractionsID]
				,[MasterTravelModeID]
				,[CreatedDate]
				,[CreatedBy]
				)
		VALUES
			(@AttractionId
			,@TravelModeId
			,getdate()
			,@CreatedBy
			)	
		SET @MissingDistanceAttractionsRecordsID = @@IDENTITY
	END

	DELETE FROM	[dbo].[MissingDistanceAttractionsRecordsXAttractions]
	WHERE MissingDistanceAttractionsRecordsID = @MissingDistanceAttractionsRecordsID
	AND AttractionsID IN (SELECT ID FROM @MissingAttractionID)
	
	
	DELETE FROM  @MissingAttractionUpdatedId
	WHERE ID IN (
		SELECT DestinationAttractionId FROM [dbo].[AttractionNoOfTimesDistanceCalcuated]  WITH(NOLOCK)
		WHERE SourceAttractionId = @AttractionId
		AND NoOfTimesTried >= 3
		)	

		DELETE FROM  @MissingAttractionUpdatedId
	WHERE ID IN (
		SELECT AttractionsID FROM [dbo].[MissingDistanceAttractionsRecordsXAttractions]
		WHERE MissingDistanceAttractionsRecordsID IN (@MissingDistanceAttractionsRecordsID)
	)



	INSERT INTO [dbo].[MissingDistanceAttractionsRecordsXAttractions]
				([AttractionsID]
				,[MissingDistanceAttractionsRecordsID]							
				,[CreatedDate]
				,[CreatedBy]
				)
	SELECT ID 
	,@MissingDistanceAttractionsRecordsID							
	,getdate()
	,@CreatedBy
	FROM @MissingAttractionID				
	WHERE ID > 0	
END
