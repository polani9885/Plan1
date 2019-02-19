-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[GetOrderOfAttractionVisit]	
(	
	@TravelModeId INT	
	,@UserBreakTime UserTable_UpdatedBreaks ReadOnly	
	,@UserTripId INT
)
AS
BEGIN

	DECLARE @SourceAttractionID INT
	,@DestinationAttractionID INT
	,@StartDate DATETIME = NULL
	,@StartTime TIME = NULL	
	,@DrivingBreak INT = 0

	IF @TravelModeId = 0 
		SET @TravelModeId = 1

	SELECT  
		@SourceAttractionID = SourceAttractionId
		,@DestinationAttractionID = DestinationAttractionId
		,@StartDate = StartDate
		,@DrivingBreak = DrivingBreak
	FROM Attractions..UserTrip WITH(NOLOCK)
	WHERE UserTripId = @UserTripId

	DECLARE @GetStartingTimeEvent AS DATETIME 
	
	IF EXISTS (SELECT 1 FROM @UserBreakTime WHERE RequestDate = CAST(ISNULL(@StartDate,GetDATE()+1) AS DATE))
	BEGIN
		SELECT @StartTime = UpdateDayStartTime 
		FROM @UserBreakTime WHERE RequestDate = CAST(ISNULL(@StartDate,GetDATE()+1) AS DATE)

		SET @GetStartingTimeEvent = CAST(CAST(ISNULL(@StartDate,GetDATE()+1) AS DATE) AS DATETIME) + CAST(CAST(ISNULL(@StartTime,'9:00 AM') AS TIME) AS DATETIME)	
	END
	ELSE
	BEGIN
		SET @GetStartingTimeEvent = CAST(CAST(ISNULL(@StartDate,GetDATE()+1) AS DATE) AS DATETIME) + CAST(CAST(ISNULL(@StartTime,'9:00 AM') AS TIME) AS DATETIME)	
	END
	
	
	DECLARE @CurrentWeekDay As INT = DATEPART(weekday, @GetStartingTimeEvent) - 1	
	DECLARE @NextAttractionId AS INT = @SourceAttractionID		
	DECLARE @IsDayUpdated AS BIT  = 1
	DECLARE @RecordOrder AS INT = 1
	DECLARE @IsSequenceRecordDone AS BIT = 0
	DECLARE @ResDestinationAttractionId AS INt = 0


	
	DECLARE @ResSourceAttractionId As INT
	DECLARE @ResDestincationAttractionId AS INT
	DECLARE @ResDistance AS INT
	DECLARE @ResTravelTime AS INT
	DECLARE @ResTravelModeId AS INT
	DECLARE @ResSourceAttractionName AS Varchar(500)
	DECLARE @ResDestincationAttractionName AS Varchar(500)	
	DECLARE @ResDateAndtime As DATETIME
	DECLARE @ReachTime AS DATETIME
	DECLARE @ResTimeRequiredToView AS TIME
	DECLARE @EventEndTime AS DATETIME	
	DECLARE @IsDistanceCalculationMissing AS BIT	

	DECLARE @OrderOfAttactionInfomration AS user_OrderOfAttractionVisit

	DECLARE @OrderOfAttactionInfomrationTemp AS user_OrderOfAttractionVisit	
	
	
		
	DECLARE @AttractionInfomation AS TABLE(AttractionId INT, RowNumber INT)

	DECLARE @MissingAttractionID AS userTable_OnlyId


	INSERT INTO @AttractionInfomation
	SELECT AttractionId,ROW_NUMBER() OVER(ORDER BY AttractionId) 
	FROM Attractions..UserTripAttractionList WITH(NOLOCK)
	WHERE UserTripId = @UserTripId	
	
	

	DECLARE @Counter INT = 0
	DECLARE @LoopCounter INT = (SELECT Count(*) FROM @AttractionInfomation)

	DECLARE @RestarentSearchDestinationId AS BIGINT

	DECLARE @BreakCount INT = 0
	DECLARE @LoopBreakAddedCount INT = 0
	DECLARE @IsRecordExists As BIT = 0
	DECLARE @IsForceAdding AS BIT = 0
	DECLARE @BreakId AS INT = 0

	

	WHILE @Counter <= @LoopCounter
	BEGIN
		
		SET @IsSequenceRecordDone = 0	
		SET @IsRecordExists = 0


		SELECT @RecordOrder = MAX(ISNULL(RecordCount,0)) + 1 FROM @OrderOfAttactionInfomration
		
		SET @RecordOrder = ISNULL(@RecordOrder,1)  	
		
		
		SELECT TOP 1 @GetStartingTimeEvent = EventEndTime				
		FROM @OrderOfAttactionInfomration
		ORDER BY RecordCount DESC
			
		--Find the way how to use break information, otherwise remove complete dependency
		-------------------------------------------------------------------------------------------------------------------------------
		----Start Break Time Logic		
			
		--	DELETE FROM @OrderOfAttactionInfomrationTemp
		
		--	INSERt INTO @OrderOfAttactionInfomrationTemp		
		--	SELECT * FROM @OrderOfAttactionInfomration
		
		--	DELETE FROM @OrderOfAttactionInfomration		

		--	INSERT INTO @OrderOfAttactionInfomration
		--	(
		--		RecordCount,
		--		[SourceAttractionId],
		--		[DestinationAttractionId],
		--		[Distance],
		--		[TravelTime],
		--		[TravelModeId],
		--		[SourceAttractionName],
		--		[DestinationAttractionName],
		--		[DateAndtime],
		--		[ReachTime],
		--		[TimeRequiredToView],
		--		[EventEndTime],
		--		[IsLunchDinnerBreakTime],
		--		[IsDistanceCalculationMissing],
		--		WeekDayId,
		--		BreakInformationId
		--	)		
		--	EXEC BreakInformationUpdate 
		--	@GetStartingTimeEvent = @GetStartingTimeEvent
		--	,@OrderOfAttactionInfomration = @OrderOfAttactionInfomrationTemp
		--	,@UserBreakTime = @UserBreakTime
		--	,@RecordOrder = @RecordOrder		
		--	,@UserTripId = @UserTripId
		--	,@IsForceAdding = @IsForceAdding
		--	,@BreakId = @BreakId
		--	,@SourceAttractionID = @SourceAttractionID
		--	,@TravelModeId = @TravelModeId

			
			
		--	--These should be here only because of force break adding
		--	SET @IsForceAdding = 0
		--	SET @BreakId  = 0
		
		--	IF EXISTS (SELECT 1 FROM @OrderOfAttactionInfomration
		--	WHERE BreakInformationId IS NOT NULL 
		--	AND  IsLunchDinnerBreakTime  = 1
		--	AND RecordCount = (SELECT MAX(RecordCount) FROM @OrderOfAttactionInfomration))
		--	BEGIN
			
		--		SELECT @NextAttractionId = DestinationAttractionId 		
		--				,@ResTravelModeId = TravelModeId 
		--		FROM @OrderOfAttactionInfomration
		--		WHERE BreakInformationId IS NOT NULL 
		--		AND  IsLunchDinnerBreakTime  = 1
		--		AND RecordCount = (SELECT MAX(RecordCount) FROM @OrderOfAttactionInfomration)
		--	END

			

		--	SELECT @RecordOrder = MAX(ISNULL(RecordCount,0)) + 1 FROM @OrderOfAttactionInfomration

			
		----End break information missing adding
		-----------------------------------------------------------------------------------------------------------
		SELECT TOP 1 @GetStartingTimeEvent = EventEndTime					
		FROM @OrderOfAttactionInfomration
		ORDER BY RecordCount DESC
		

		

		--SELECT @OldRecordCount, @NewRecordCount, @GetStartingTimeEvent, @RecordLoopCounter

		------------------------------------------------------------------------------------------------------------------------------
		--Checking the Day Brak
		
		--SELECT @GetStartingTimeEvent

		

		SET @GetStartingTimeEvent = dbo.fun_GetStartTime(@UserBreakTime,@GetStartingTimeEvent)	

		
		
		SET @CurrentWeekDay = DATEPART(weekday, @GetStartingTimeEvent) - 1					
		
		--End Day Break

		------------------------------------------------------------------------------------------------------	
		
		
		
		
		--End Break Time Logic

		--if the attraction is empty then we will get the privous attraction information
		IF (@NextAttractionId <= 0)
		BEGIN
			SELECT TOP 1 @NextAttractionId = DestinationAttractionId FROM @OrderOfAttactionInfomration
			WHERE DestinationAttractionId  > 0
			ORDER BY RecordCount DESC
		END


		SET @RecordOrder = ISNULL(@RecordOrder,1)  			
		

		

		
			--Start Getting Record As User Requested Order
		
		
	--IF Exists (SELECT 1 FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)
	--	BEGIN
	--		IF Exists ( 
	--			SELECT 1
	--			FROM @AttractionInfomation A 
	--			JOIN AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.DestinationAttractionId = A.AttractionId 
	--			JOIN AttractionsActiveStatus AAS WITH(NOLOCK) ON AAS.AttractionsId = ATTD.DestinationAttractionId
	--			JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = ATTD.SourceAttractionId
	--			JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = ATTD.DestinationAttractionId
	--			WHERE ATTD.SourceAttractionId = @NextAttractionId
	--			AND ATTD.TravelModeId = @TravelModeId
	--			AND AAS.MasterWeekId = @CurrentWeekDay
	--			AND AAS.CloseTime < CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
	--			AND AAS.OpenTime > CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
	--			AND ATTD.DestinationAttractionId = (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)				
	--		)
	--		BEGIN				
	--			SELECT TOP 1 
	--					@ResSourceAttractionId = ATTD.SourceAttractionId
	--				,@ResDestincationAttractionId = ATTD.DestinationAttractionId
	--				,@ResDistance = ATTD.Distance
	--				,@ResTravelTime = ATTD.TravelTime
	--				,@ResTravelModeId = ATTD.TravelModeId
	--				,@ResSourceAttractionName = SA.AttractionName 
	--				,@ResDestincationAttractionName = DA.AttractionName
	--				,@ReachTime =  DateADD(ss,ATTD.TravelTime,@GetStartingTimeEvent)
	--			FROM @AttractionInfomation A 
	--			JOIN AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.DestinationAttractionId = A.AttractionId 
	--			JOIN AttractionsActiveStatus AAS WITH(NOLOCK) ON AAS.AttractionsId = ATTD.DestinationAttractionId
	--			JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = ATTD.SourceAttractionId
	--			JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = ATTD.DestinationAttractionId
	--			WHERE ATTD.SourceAttractionId = @NextAttractionId
	--			AND ATTD.TravelModeId = @TravelModeId
	--			AND AAS.MasterWeekId = @CurrentWeekDay
	--			AND AAS.CloseTime < CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
	--			AND AAS.OpenTime > CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
	--			AND ATTD.DestinationAttractionId = (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)
	--			ORDER BY TravelTime

	--			--Below logic we are using to get the minium time to required to view

	--			SET @ResTimeRequiredToView = dbo.[fun_GetViewTime](@ResDestincationAttractionId,@UserTripId)

	--			--End minium required time 

	--			SET @EventEndTime = @ReachTime + CAST(@ResTimeRequiredToView AS DATETIME)

	--			SET @ResDateAndtime  = @GetStartingTimeEvent
	--			SET @GetStartingTimeEvent = @EventEndTime
	--			SET @NextAttractionId = @ResDestincationAttractionId
				
				

	--			INSERT INTO @OrderOfAttactionInfomration(
	--				RecordCount
	--				,SourceAttractionId 
	--				,DestinationAttractionId 
	--				,Distance 
	--				,TravelTime 
	--				,TravelModeId 
	--				,SourceAttractionName 
	--				,DestinationAttractionName 
	--				,DateAndtime 
	--				,ReachTime 
	--				,TimeRequiredToView 
	--				,EventEndTime  
	--				,IsLunchDinnerBreakTime  
	--				,IsDistanceCalculationMissing
	--				,WeekDayId
	--			)
	--			SELECT @RecordOrder
	--				,@ResSourceAttractionId
	--				,@ResDestincationAttractionId 
	--				,@ResDistance 
	--				,@ResTravelTime
	--				,@ResTravelModeId
	--				,@ResSourceAttractionName
	--				,@ResDestincationAttractionName
	--				,@ResDateAndtime
	--				,@ReachTime
	--				,@ResTimeRequiredToView
	--				,@EventEndTime
	--				,NULL
	--				,@IsDistanceCalculationMissing
	--				,@CurrentWeekDay

	--			SET @IsSequenceRecordDone = 1

	--		END
	--		ELSE
	--		BEGIN
	--			--Adding missing Attraction

	--			DELETE FROM @MissingAttractionID

	--			INSERT INTO @MissingAttractionID(ID)
	--			SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder

	--			IF @NextAttractionId > 0 
	--			BEGIN
	--				EXEC AddingMissingClaims				
	--					@AttractionId = @NextAttractionId
	--					,@TravelModeId  = @ResTravelModeId
	--					,@MissingAttractionID  = @MissingAttractionID
	--					,@CreatedBy = 'User Requested Order'	
	--			END		
				

	--			SET @IsDistanceCalculationMissing = 1

	--			SET @IsSequenceRecordDone = 1
	--		END
	--	END
			--End Getting Record As User Requested Order
			-------------------------------------------------------------------------------------------------------
			--Start Get next attraction Information
		
		
																																																																																																																																																																																																																																																																																							IF @IsSequenceRecordDone = 0
				
			IF Exists ( 
				SELECT 1 
				FROM @AttractionInfomation A 
				JOIN AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.DestinationAttractionId = A.AttractionId 
				JOIN AttractionsActiveStatus AAS WITH(NOLOCK) ON AAS.AttractionsId = ATTD.DestinationAttractionId
				JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = ATTD.SourceAttractionId
				JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = ATTD.DestinationAttractionId				
				WHERE ATTD.SourceAttractionId = @NextAttractionId
				AND ATTD.TravelModeId = @TravelModeId
				AND AAS.MasterWeekId = @CurrentWeekDay
				AND AAS.CloseTime > CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
				AND AAS.OpenTime < CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)					
				--AND ATTD.DestinationAttractionId NOT IN (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)								
				
			)
			BEGIN		
				
				
				SELECT TOP 1 
					@ResSourceAttractionId = ATTD.SourceAttractionId
					,@ResDestincationAttractionId = ATTD.DestinationAttractionId
					,@ResDistance = ATTD.Distance
					,@ResTravelTime = ATTD.TravelTime
					,@ResTravelModeId = ATTD.TravelModeId
					,@ResSourceAttractionName = SA.AttractionName 
					,@ResDestincationAttractionName = DA.AttractionName
					,@ReachTime =  DateADD(ss, ATTD.TravelTime , @GetStartingTimeEvent)  
				FROM @AttractionInfomation A 
				JOIN AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.DestinationAttractionId = A.AttractionId 
				JOIN AttractionsActiveStatus AAS WITH(NOLOCK) ON AAS.AttractionsId = ATTD.DestinationAttractionId
				JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = ATTD.SourceAttractionId
				JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = ATTD.DestinationAttractionId
				WHERE ATTD.SourceAttractionId = @NextAttractionId
				AND ATTD.TravelModeId = @TravelModeId
				AND AAS.MasterWeekId = @CurrentWeekDay
				AND AAS.CloseTime > CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
				AND AAS.OpenTime < CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)		
				--AND ATTD.DestinationAttractionId NOT IN (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)											
				ORDER BY TravelTime

				
				
				
				SET @IsRecordExists = 1					
				

			END
			ELSE
			BEGIN		
			
			
				---start Getting the not specific open time records
				IF  Exists ( 
					SELECT 1
					FROM @AttractionInfomation A 
					JOIN AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.DestinationAttractionId = A.AttractionId 					
					JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = ATTD.SourceAttractionId
					JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = ATTD.DestinationAttractionId
					WHERE ATTD.SourceAttractionId = @NextAttractionId
					AND ATTD.TravelModeId = @TravelModeId										
					--AND ATTD.DestinationAttractionId NOT IN (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)														
					
				)
				BEGIN	
									
							
					SELECT TOP 1 
						@ResSourceAttractionId = ATTD.SourceAttractionId
						,@ResDestincationAttractionId = ATTD.DestinationAttractionId
						,@ResDistance = ATTD.Distance
						,@ResTravelTime = ATTD.TravelTime
						,@ResTravelModeId = ATTD.TravelModeId
						,@ResSourceAttractionName = SA.AttractionName 
						,@ResDestincationAttractionName = DA.AttractionName
						,@ReachTime =  DateADD(ss, ATTD.TravelTime , @GetStartingTimeEvent)
					FROM @AttractionInfomation A 
					JOIN AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.DestinationAttractionId = A.AttractionId 
					JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = ATTD.SourceAttractionId
					JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = ATTD.DestinationAttractionId
					WHERE ATTD.SourceAttractionId = @NextAttractionId
					AND ATTD.TravelModeId = @TravelModeId					
					--AND ATTD.DestinationAttractionId NOT IN (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)												
					ORDER BY TravelTime

					
					
					
					SET @IsRecordExists = 1
											

					---End Getting the not specific open time records
					END
				ELSE
				BEGIN
					--Adding missing Attraction				
					DELETE FROM @MissingAttractionID
					
					
					INSERT INTO @MissingAttractionID(ID)
					SELECT AttractionId FROM @AttractionInfomation

					IF @NextAttractionId > 0 AND EXISTS (SELECT 1 FROM @MissingAttractionID)
					BEGIN
						
						EXEC AddingMissingClaims				
							@AttractionId = @NextAttractionId
							,@TravelModeId  = @ResTravelModeId
							,@MissingAttractionID  = @MissingAttractionID
							,@CreatedBy = 'Missing Record'				
							
						UPDATE @OrderOfAttactionInfomration
						SET IsDistanceCalculationMissing = 1								
				
						SET @IsDistanceCalculationMissing = 1
					END

					
				END					
									
			END		
				

	
	IF @IsRecordExists = 1
	BEGIN
		
		SET @BreakId = 0
		SELECT 
			 @BreakId = CASE WHEN IsRequestedAfterBreakFast = 1 THEN 1 ELSE @BreakId END
			 ,@BreakId = CASE WHEN IsRequestedAfterLunch = 1 THEN 2 ELSE @BreakId END
			 ,@BreakId = CASE WHEN IsRequestedAfterBreak = 1 THEN 3 ELSE @BreakId END
			 ,@BreakId = CASE WHEN IsRequestedAfterDinner = 1 THEN 4 ELSE @BreakId END
		FROM Attractions..UserTripRequestOrder WITH(NOLOCK) 
		WHERE UserTripId = @UserTripId 
		AND AttractionId = @ResDestincationAttractionId

		
		
		
		IF @BreakId > 0 AND 
		NOT EXISTS(SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) =  CAST(@GetStartingTimeEvent AS DATE) AND BreakInformationId = @BreakId) 
		AND 
		EXISTS (
					SELECT 1							
					FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND  1  = 
					CASE WHEN @BreakId = 1 AND IsDayBreakAdded = 1 THEN 1 
					ELSE
						CASE WHEN @BreakId = 2 AND IsLunchAdded = 1 THEN 1
						ELSE
							CASE WHEN @BreakId = 3 AND IsBreakAdded = 1 THEN 1
							ELSE
								CASE WHEN @BreakId = 3 AND IsDinnerAdded = 1 THEN 1
								ELSE
									0
								END
							END
						END
					END						  	
				)
		BEGIN		
		
			SET @IsForceAdding = 1	
			SET @IsRecordExists = 0		
		END
		ELSE
		BEGIN

			

			SET @ResTimeRequiredToView = dbo.[fun_GetViewTime](@ResDestincationAttractionId,@UserTripId)

			SET @EventEndTime = @ReachTime + CAST(@ResTimeRequiredToView AS DATETIME)

			SET @ResDateAndtime  = @GetStartingTimeEvent
			SET @GetStartingTimeEvent = @EventEndTime
			SET @NextAttractionId = @ResDestincationAttractionId


			INSERT INTO @OrderOfAttactionInfomration(
				RecordCount
				,SourceAttractionId 
				,DestinationAttractionId 
				,Distance 
				,TravelTime 
				,TravelModeId 
				,SourceAttractionName 
				,DestinationAttractionName 
				,DateAndtime 
				,ReachTime 
				,TimeRequiredToView 
				,EventEndTime  
				,IsLunchDinnerBreakTime  
				,IsDistanceCalculationMissing
				,WeekDayId
			)
			SELECT @RecordOrder
				,@ResSourceAttractionId
				,@ResDestincationAttractionId 
				,@ResDistance 
				,@ResTravelTime
				,@ResTravelModeId
				,@ResSourceAttractionName
				,@ResDestincationAttractionName
				,@ResDateAndtime
				,@ReachTime
				,@ResTimeRequiredToView
				,@EventEndTime
				,NULL
				,@IsDistanceCalculationMissing
				,@CurrentWeekDay
		END
	END
			

			
			--Removing the break count form the main counter loop

			SET @BreakCount = (SELECT Count(*) FROM  @OrderOfAttactionInfomration WHERE IsLunchDinnerBreakTime = 1)
			IF @LoopBreakAddedCount < @BreakCount 
			BEGIN
				SET @Counter = @Counter - (@BreakCount - @LoopBreakAddedCount)
				SET @LoopBreakAddedCount = @BreakCount
			END
			
		SET @Counter = @Counter + 1	

			--SELECT @ResDestincationAttractionId	
			IF @IsRecordExists = 1
			BEGIN	
				DELETE FROM @AttractionInfomation
				WHERE AttractionId = @ResDestincationAttractionId
			END
			--SELECT * FROM @AttractionInfomation
			--ORDER BY 1 DESC

			
			
			
			
			
			
			--SET @RecordOrder = @RecordOrder + 1

		
	END
	--End Get next attraction Information
	-------------------------------------------------------------------------------------------------------------------------------------------
	
	--If Destination AttractionId Exists then we are adding destination information
	IF @DestinationAttractionID > 0
	BEGIN
		
		IF  Exists ( 
					SELECT 1
					FROM AttractionTravelTimeDistance ATTD WITH(NOLOCK) 
					WHERE ATTD.SourceAttractionId = @NextAttractionId
					AND ATTD.TravelModeId = @TravelModeId										
					AND ATTD.DestinationAttractionId = @DestinationAttractionID
				)
		BEGIN		
		
				SELECT TOP 1 
						@ResSourceAttractionId = ATTD.SourceAttractionId
						,@ResDestincationAttractionId = ATTD.DestinationAttractionId
						,@ResDistance = ATTD.Distance
						,@ResTravelTime = ATTD.TravelTime
						,@ResTravelModeId = ATTD.TravelModeId
						,@ResSourceAttractionName = SA.AttractionName 
						,@ResDestincationAttractionName = DA.AttractionName
						,@ReachTime =  DateADD(ss, ATTD.TravelTime , @GetStartingTimeEvent)
					FROM AttractionTravelTimeDistance ATTD WITH(NOLOCK) 
					JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = ATTD.SourceAttractionId
					JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = ATTD.DestinationAttractionId
					WHERE ATTD.SourceAttractionId = @NextAttractionId
					AND ATTD.TravelModeId = @TravelModeId					
					AND ATTD.DestinationAttractionId = @DestinationAttractionID
					ORDER BY TravelTime

					
					SET @ResTimeRequiredToView = dbo.[fun_GetViewTime](@ResDestincationAttractionId,@UserTripId)

					SET @EventEndTime = @ReachTime + CAST(@ResTimeRequiredToView AS DATETIME)

					SET @ResDateAndtime  = @GetStartingTimeEvent
					SET @GetStartingTimeEvent = @EventEndTime
					SET @NextAttractionId = @ResDestincationAttractionId
					
					SET @IsDistanceCalculationMissing = 0
					
					

					INSERT INTO @OrderOfAttactionInfomration(
						RecordCount
						,SourceAttractionId 
						,DestinationAttractionId 
						,Distance 
						,TravelTime 
						,TravelModeId 
						,SourceAttractionName 
						,DestinationAttractionName 
						,DateAndtime 
						,ReachTime 
						,TimeRequiredToView 
						,EventEndTime  
						,IsLunchDinnerBreakTime  
						,IsDistanceCalculationMissing
						,WeekDayId
					)
					SELECT @RecordOrder
						,@ResSourceAttractionId
						,@ResDestincationAttractionId 
						,@ResDistance 
						,@ResTravelTime
						,@ResTravelModeId
						,@ResSourceAttractionName
						,@ResDestincationAttractionName
						,@ResDateAndtime
						,@ReachTime
						,@ResTimeRequiredToView
						,@EventEndTime
						,NULL
						,@IsDistanceCalculationMissing
						,@CurrentWeekDay

				
		END
		ELSE
		BEGIN
			--Adding missing Attraction				
			DELETE FROM @MissingAttractionID

			INSERT INTO @MissingAttractionID(ID)
			SELECT @DestinationAttractionID 

			IF @NextAttractionId > 0 AND EXISTS (SELECT 1 FROM @MissingAttractionID)
			BEGIN
				EXEC AddingMissingClaims				
					@AttractionId = @NextAttractionId
					,@TravelModeId  = @TravelModeId
					,@MissingAttractionID  = @MissingAttractionID
					,@CreatedBy = 'Missing Record123'				
				UPDATE @OrderOfAttactionInfomration
				SET IsDistanceCalculationMissing = 1				
			END

										
			
		END

	END
	
	
	--If the First record is a break event then we are adding the destination points to the break information
	IF EXISTS(SELECT 1 FROM @OrderOfAttactionInfomration WHERE RecordCount = 1 AND IsLunchDinnerBreakTime = 1 AND SourceAttractionId = 0)
	BEGIN
		UPDATE @OrderOfAttactionInfomration 
			SET SourceAttractionId = (SELECT SourceAttractionId FROM @OrderOfAttactionInfomration WHERE RecordCount = 2)
		WHERE RecordCount = 1

	END


	
	SELECT 
		OAI.[RecordCount]
		,OAI.[SourceAttractionId]
		,OAI.[DestinationAttractionId]
		,
			CAST(
				CAST( 
					
						CAST(
								OAI.[Distance] AS DECIMAL(18,2)
							) 
							* (SELECT MetersIn FROM [Attractions]..[MasterCountry]  WITH(NOLOCK) WHERE CountryId = 2 )AS DECIMAL(18,2)
					) AS Varchar(50)
				)
		 + ' Miles' 		
		AS Distance
		,OAI.[TravelTime]
		,OAI.[TravelModeId]
		,OAI.[SourceAttractionName]
		,OAI.[DestinationAttractionName]
		,CAST(OAI.[DateAndtime] AS VARCHAR(50)) AS DateAndtime
		,CAST(OAI.[ReachTime] AS VARCHAR(50)) AS ReachTime
		,CAST(OAI.[TimeRequiredToView] AS VARCHAR(50)) AS TimeRequiredToView
		,CAST(OAI.[EventEndTime] AS VARCHAR(50)) AS EventEndTime
		,OAI.[IsLunchDinnerBreakTime]
		,OAI.[IsDistanceCalculationMissing]
		,SA.GoogleICon SourceIcon
		,DA.GoogleICon DestinationIcon
		,SA.GoogleWebSite SourceDirection
		,DA.GoogleWebSite DestinationDirection
		,SA.GoogleRating SourceRating
		,DA.GoogleRating DestinationRating
		,SA.GoogleUser_ratings_total SourceRatingTotal
		,DA.GoogleUser_ratings_total DestinationRatingTotal
		,SA.GoogleSearchText SourceSearchText
		,DA.GoogleSearchText DestinationSearchText
		,MTW.TravelType
		,OAI.WeekDayId
		,CAST(SAAS.OpenTime AS VARCHAR(50)) SourceOpenTime
		,CAST(SAAS.CloseTime AS VARCHAR(50)) SourceCloseTime
		,CAST(DAAS.OpenTime AS VARCHAR(50)) DestinationOpenTime
		,CAST(DAAS.CloseTime AS VARCHAR(50)) DestinationCloseTime
		,(SELECT TOP 1 Html_attributions FROM AttractionPhotos SAP WITH(NOLOCK) WHERE SAP.AttractionId = OAI.SourceAttractionId) SourcePhoto
		,(SELECT TOP 1 Html_attributions FROM AttractionPhotos DAP WITH(NOLOCK) WHERE DAP.AttractionId = OAI.DestinationAttractionId) DestinationPhoto
		,SA.Longitude SourceLongitude
		,SA.Latitude SourceLatitude
		,DA.Longitude DestinationLongitude
		,DA.Latitude DestinationLatitude
		,SA.PhotoUrl SourcePhotoUrl
		,DA.PhotoUrl DestinationPhotoUrl
		,OAI.BreakInformationId
		,(SELECT Food FROM [dbo].[MasterPriceInfo] WITH(NOLOCK) WHERE PriveLevel = DA.PriceLevel) AS FoodExpense
		,(SELECT Stay FROM [dbo].[MasterPriceInfo] WITH(NOLOCK) WHERE PriveLevel = DA.PriceLevel) AS StayExpense
		,CASE WHEN 
			(OAI.[TravelTime]/60/60) >= @DrivingBreak 
			AND OAI.[TravelModeId] = 1 
			AND EXISTS
			(	SELECT 1 FROM [dbo].[AttractionTravelTimeDistance] WITH(NOLOCK) 
				WHERE SourceAttractionId = OAI.[SourceAttractionId] 
				AND DestinationAttractionId = OAI.[DestinationAttractionId]
				AND TravelModeId = OAI.[TravelModeId]
			)
		THEN 1 
		ELSE 0 
		END IsNeedDrivningBreak
		,(	SELECT TOP 1 AttractionTravelTimeDistanceId FROM [dbo].[AttractionTravelTimeDistance] WITH(NOLOCK) 
			WHERE SourceAttractionId = OAI.[SourceAttractionId] 
			AND DestinationAttractionId = OAI.[DestinationAttractionId]
			AND TravelModeId = OAI.[TravelModeId]
		) AS AttractionTravelTimeDistanceId
	FROM @OrderOfAttactionInfomration OAI
	LEFT JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = OAI.SourceAttractionId
	LEFT JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = OAI.DestinationAttractionId
	LEFT JOIN Attractions..MasterTravelMode MTW WITH(NOLOCK) ON MTW.TravelModeId = OAI.TravelModeId
	LEFT JOIN AttractionsActiveStatus SAAS WITH(NOLOCK) ON SAAS.AttractionsId = OAI.SourceAttractionId AND SAAS.MasterWeekId = OAI.WeekDayId
	LEFT JOIN AttractionsActiveStatus DAAS WITH(NOLOCK) ON DAAS.AttractionsId = OAI.DestinationAttractionId AND DAAS.MasterWeekId = OAI.WeekDayId
	ORDER BY CAST(DateAndtime AS DATETIME)
END










