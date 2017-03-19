-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetOrderOfAttractionVisit]	
	@AttractionID userTable_OnlyId ReadOnly 
	,@TravelModeId INT
	,@SourceAttractionID INT
	,@DestinationAttractionID INT
	,@StartDate DATETIME = NULL
	,@StartTime TIME = NULL
	,@UpdatedOrderAttraction parameter_OrderAttraction ReadOnly
AS
BEGIN

DECLARE @StartDateAndTime DATETIME = CAST(CAST(ISNULL(@StartDate,GetDATE()+1) AS DATE) AS DATETIME) + CAST(CAST(ISNULL(@StartTime,'9:00 AM') AS TIME) AS DATETIME)	

DECLARE	@SourceAttractions userTable_OnlyId 
DECLARE	@DestinationAttractions userTable_OnlyId 

INSERT INTO @SourceAttractions
SELECT * FROM @AttractionID

INSERT INTO @DestinationAttractions
SELECT * FROM @AttractionID


DECLARE @OrderAttraction AS userTable_OrderAttraction

DECLARE @OrderAttractionTemp AS userTable_OrderAttraction

DECLARE @MissingAttractions AS userTable_OrderAttraction


DECLARE @NextAttractionID INT = 0

DECLARE @Counter INT = (SELECT Count(*) FROM @AttractionID) 
DECLARE @LastSource INT = 0


WHILE @Counter > 0
BEGIN

	

			--Checking is there any records are existed or not
			INSERT INTO @OrderAttractionTemp(			
			[SourceAttractionId],
			[DestinationAttractionId],
			[Distance],
			[TravelTime],
			[TravelModeId],
			[SourceAttractionName],
			[DestinationAttractionName],
			[DateAndTime],
			[ReachTime],
			[TimeRequiredToView]
			,[ViewTime])
			EXECUTE GetNextNearestLocation
			@TravelModeId  = @TravelModeId
			,@SourceAttractionID = @SourceAttractionID
			,@DestinationAttractionID = @DestinationAttractionID
			,@DestinationAttractions = @DestinationAttractions
			,@OrderAttraction = @OrderAttraction
			,@StartDateAndTime = @StartDateAndTime
			,@UpdatedOrderAttraction = @UpdatedOrderAttraction


			IF((SELECT COUNT(1) FROM @OrderAttractionTemp) = 0)
			BEGIN

				--Adding Missing Distance records
				EXEC [Admin_AddMissingDistanceRecords]
				@SourceAttractionID  = @SourceAttractionID,
				@DestinationAttractions =  @DestinationAttractions,
				@TravelModeId = @TravelModeId


				INSERT INTO @MissingAttractions(
				[SourceAttractionId],
				[DestinationAttractionId],
				[Distance]
				)
				VALUES
				(
					@SourceAttractionID,
					0,
					0
				)


				SELECT TOP 1 @SourceAttractionID = ID FROM  @SourceAttractions 
				WHERE ID NOT IN (@SourceAttractionID)
			END
			ELSE
			BEGIN
				INSERT INTO @OrderAttraction(			
				[SourceAttractionId],
				[DestinationAttractionId],
				[Distance],
				[TravelTime],
				[TravelModeId],
				[SourceAttractionName],
				[DestinationAttractionName],
				[DateAndTime],
				[ReachTime],
				[TimeRequiredToView]
				,[ViewTime])			
				EXECUTE GetNextNearestLocation
				@TravelModeId  = @TravelModeId
				,@SourceAttractionID = @SourceAttractionID
				,@DestinationAttractionID = @DestinationAttractionID
				,@DestinationAttractions = @DestinationAttractions
				,@OrderAttraction = @OrderAttraction
				,@StartDateAndTime = @StartDateAndTime
				,@UpdatedOrderAttraction = @UpdatedOrderAttraction


				
				SELECT TOP 1 @StartDateAndTime = ViewTime,
					@SourceAttractionID = DestinationAttractionId
				FROM @OrderAttraction
				Order by  ViewTime DESC
			END

			DELETE FROM @OrderAttractionTemp
			
			
			
			

			--DELETE FROM @OrderAttractionTemp

			DELETE FROM @DestinationAttractions WHERE ID IN  (SELECT DestinationAttractionId FROM @OrderAttraction)
			DELETE FROM @SourceAttractions WHERE ID IN  (SELECT SourceAttractionId FROM @OrderAttraction)
			--removing the missing attraction from the source also
			DELETE FROM @SourceAttractions WHERE ID IN  (SELECT SourceAttractionId FROM @MissingAttractions)

			--SET @SourceAttractionID = @NextAttractionID
			
			
		--END	

	--END

	

	SET @Counter = @Counter -1
END




SELECT	OA.*
		,MT.TravelType 
		,A.GoogleICon 'SourceIcon'
		,AD.GoogleICon 'DestinationIcon'
		,ROW_NUMBER() OVER(ORDER BY OA.SourceAttractionId) AS RecordCount
FROM @OrderAttraction OA
JOIN MasterTravelMode MT ON MT.TravelModeId = OA.TravelModeId
JOIN Attractions A ON A.AttractionsId = OA.SourceAttractionId
JOIN Attractions AD ON AD.AttractionsId = OA.DestinationAttractionId

UNION ALL

SELECT *
		,''
		,''
		,''
		,ROW_NUMBER() OVER(ORDER BY SourceAttractionId) AS RecordCount
FROM @MissingAttractions

END