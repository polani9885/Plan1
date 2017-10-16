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

	--if((SELECT count(*) FROM @OrderAttraction)>0)
	--BEGIN
	--	SET @SourceAttractionID = (SELECT TOP 1 DestinationAttractionId  FROM @OrderAttraction ORDER BY 1 DESC)
	--END
	--SELECT * FROM @OrderAttraction
	--SELECT @SourceAttractionID, (SELECT TOP 1 DestinationAttractionId  FROM @OrderAttraction ORDER BY 1 DESC)

	--Getting next nearest attraction ID
	--INSERT INTO @OrderAttraction(			
	--		[SourceAttractionId],
	--		[DestinationAttractionId],
	--		[Distance],
	--		[TravelTime],
	--		[TravelModeId],
	--		[SourceAttractionName],
	--		[DestinationAttractionName],
	--		[DateAndTime],
	--		[ReachTime],
	--		[TimeRequiredToView]
	--		,[ViewTime])
	--EXECUTE GetNextNearestLocation
	--@TravelModeId  = @TravelModeId
	--,@SourceAttractionID = @SourceAttractionID
	--,@DestinationAttractionID = @DestinationAttractionID
	--,@DestinationAttractions = @DestinationAttractions
	--,@OrderAttraction = @OrderAttraction
	--,@StartDateAndTime = @StartDateAndTime

	--SELECT TOP 1 @NextAttractionID = DestinationAttractionId
	--FROM @OrderAttractionTemp


	--DELETE FROM @OrderAttractionTemp
		
		
	
	--if(@SourceAttractionID > 0)
	--BEGIN
		--IF(	@NextAttractionID = @SourceAttractionID OR @NextAttractionID = 0)
		--BEGIN		
			
			
		--	INSERT INTO @OrderAttraction(			
		--	[SourceAttractionId],
		--	[DestinationAttractionId],
		--	[Distance],
		--	[TravelTime],
		--	[TravelModeId],
		--	[SourceAttractionName],
		--	[DestinationAttractionName],
		--	[DateAndTime],
		--	[ReachTime],
		--	[TimeRequiredToView]
		--	,[ViewTime])
		--	SELECT 
		--		CASE WHEN @NextAttractionID = 0 THEN @SourceAttractionID ELSE @NextAttractionID END
		--		,0
		--		,0
		--		,0
		--		,0
		--		,''
		--		,''
		--		,NULL
		--		,NULL
		--		,NULL
		--		,NULL
			
		--	DELETE FROM @SourceAttractions WHERE ID = CASE WHEN @NextAttractionID = 0 THEN @SourceAttractionID ELSE @NextAttractionID END
		--	--SET @SourceAttractionID = 
		--	--			(CASE WHEN (SELECT Count(*) FROM @SourceAttractions) = 1 
		--	--			THEN
		--	--				(SELECT TOP 1 ID FROM @SourceAttractions ORDER BY ID)			
		--	--			ELSE
		--	--				(SELECT TOP 1 ID FROM @SourceAttractions WHERE ID <> @DestinationAttractionID ORDER BY ID)			
		--	--			END)
			
		--	SET @NextAttractionID = @SourceAttractionID

			

		--END
		--ELSE
		--BEGIN

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



--IF(@DestinationAttractionID > 0)
--BEGIN	

--	--SELECT  @DestinationAttractionID
--	--Missing Destination adding to the order
--	IF((SELECT count(1) FROM @OrderAttraction WHERE SourceAttractionID = @DestinationAttractionID) = 1)
--	BEGIN
--		DELETE FROM @OrderAttraction WHERE SourceAttractionID = @DestinationAttractionID
		
--		SELECT TOP 1 @LastSource = SourceAttractionId FROM @OrderAttraction 
--		WHERE OrderNumber = (SELECT Count(*) FROM @OrderAttraction )

--		IF(@LastSource>0)
--		BEGIN
--			DELETE FROM @OrderAttraction 
--			WHERE OrderNumber = (SELECT Count(*) FROM @OrderAttraction )

--			INSERT INTO @OrderAttraction(			
--			[SourceAttractionId],
--			[DestinationAttractionId],
--			[Distance],
--			[TravelTime],
--			[TravelModeId],
--			[SourceAttractionName],
--			[DestinationAttractionName])
--			SELECT 
--				S.SourceAttractionId
--				,S.DestinationAttractionId
--				,S.Distance
--				,S.TravelTime
--				,S.TravelModeId
--				,ATS.AttractionName AS 'SourceAttractionName'
--				,ATD.AttractionName As 'DestinationAttractionName'
--			FROM 
--			(
--				select *,
--				row_number() over (PARTITION BY SourceAttractionId order by Distance asc )RN
--				from AttractionTravelTimeDistance 
--				WHERE TravelModeId = @TravelModeId
--				AND SourceAttractionId = @LastSource
--				AND DestinationAttractionId  = @DestinationAttractionID				
--			)S
--			JOIN Attractions ATS ON ATS.AttractionsId = S.SourceAttractionId
--			JOIN Attractions ATD ON ATD.AttractionsId = S.DestinationAttractionId
--			WHERE RN =1 
--		END
--	END
--END
--ELSE
--BEGIN			
--	SELECT TOP 1 @LastSource = SourceAttractionId FROM @OrderAttraction 
--	WHERE OrderNumber = (SELECT Count(*) FROM @OrderAttraction )
--	IF(@LastSource>0)
--	BEGIN
--		DELETE FROM @OrderAttraction 
--		WHERE OrderNumber = (SELECT Count(*) FROM @OrderAttraction )
--	END
--END
--SELECT * FROM @DestinationAttractions 
--SELECT *  FROM @SourceAttractions   
SELECT	OA.*
		,MT.TravelType 
		,A.GoogleICon 'SourceIcon'
		,AD.GoogleICon 'DestinationIcon'
FROM @OrderAttraction OA
JOIN Attractions.dbo.MasterTravelMode MT ON MT.TravelModeId = OA.TravelModeId
JOIN Attractions A ON A.AttractionsId = OA.SourceAttractionId
JOIN Attractions AD ON AD.AttractionsId = OA.DestinationAttractionId

UNION ALL

SELECT *
		,''
		,''
		,''
FROM @MissingAttractions

END


