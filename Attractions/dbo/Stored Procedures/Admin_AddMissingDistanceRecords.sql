-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[Admin_AddMissingDistanceRecords]
(
	@SourceAttractionID INT,
	@DestinationAttractions userTable_OnlyId ReadOnly,
	@TravelModeId INT 
)
AS
BEGIN

	DECLARE @MissingDistanceAttractionsRecordsID AS INT = 0

	SELECT @MissingDistanceAttractionsRecordsID = MissingDistanceAttractionsRecordsID 
		FROM [MissingDistanceAttractionsRecords] 
		WHERE AttractionsID = @SourceAttractionID AND MasterTravelModeID = @TravelModeId

	
	IF	(@MissingDistanceAttractionsRecordsID  < 1)
	BEGIN	

		INSERT INTO [dbo].[MissingDistanceAttractionsRecords]
				   ([AttractionsID]
				   ,[MasterTravelModeID]
				   ,[CreatedDate]
				   ,[CreatedBy]
				   )
		VALUES
			(@SourceAttractionID
			,@TravelModeId
			,getdate()
			,'User Checking'
			)
		
		SET @MissingDistanceAttractionsRecordsID = @@IDENTITY

	END


	INSERT INTO [dbo].[MissingDistanceAttractionsRecordsXAttractions]
			   ([AttractionsID]
			   ,[MissingDistanceAttractionsRecordsID]
			   ,[IsTaken]
			   ,[IsResolved]
			   ,[CreatedDate]
			   ,[CreatedBy]
			   )
	SELECT 
		 ID
		,@MissingDistanceAttractionsRecordsID
		,0
		,0
		,getdate()
		,'User Checking'		
	FROM @DestinationAttractions
	WHERE ID NOT IN 
				(
					SELECT AttractionsID 
					FROM MissingDistanceAttractionsRecordsXAttractions
					WHERE MissingDistanceAttractionsRecordsID = @MissingDistanceAttractionsRecordsID
				)	
END
