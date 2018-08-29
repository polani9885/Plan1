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
	,@UserBreakTime UserTable_UpdatedBreaks ReadOnly
	,@AttractionReqOrder UserTable_AttractionRequestOrder ReadOnly
	,@StartDate DATETIME = NULL
	,@StartTime TIME = NULL		
AS
BEGIN

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
	
	DECLARE @AverageMinimumTime AS TIME = '02:00:00.0000000'
		
	DECLARE @AttractionInfomation AS TABLE(AttractionId INT, RowNumber INT)

	DECLARE @MissingAttractionID AS userTable_OnlyId


	INSERT INTO @AttractionInfomation
	SELECT ID,ROW_NUMBER() OVER(ORDER BY ID) FROM @AttractionID
	WHERE ID NOT IN (@SourceAttractionID)	
		

	DECLARE @Counter INT = 0
	DECLARE @LoopCounter INT = (SELECT Count(*) FROM @AttractionInfomation)

	DECLARE @RestarentSearchDestinationId AS BIGINT

	

	WHILE @Counter <= @LoopCounter
	BEGIN
		SET @IsSequenceRecordDone = 0			

		-----------------------------------------------------------------------------------------------------------------------------
		--Start Break Time Logic

		DELETE FROM @OrderOfAttactionInfomrationTemp
		
		INSERt INTO @OrderOfAttactionInfomrationTemp		
		SELECT * FROM @OrderOfAttactionInfomration
		
		DELETE FROM @OrderOfAttactionInfomration


		--Checking the near resturant are searched or not
		IF EXISTS (SELECT 1 FROM dbo.fun_BreakTimeCalculation(@GetStartingTimeEvent,@OrderOfAttactionInfomrationTemp,@UserBreakTime,@RecordOrder))
		BEGIN
			SELECT 
				TOP 1 @RestarentSearchDestinationId = DestinationAttractionId
			FROM @OrderOfAttactionInfomrationTemp
			ORDER BY DateAndtime DESC

			--Checking the Restarent search is done or not

			IF NOT EXISTS (SELECT 1 FROM dbo.Attractions WITH(NOLOCK) WHERE AttractionsId = @RestarentSearchDestinationId AND ISNULL(IsNearRestarentDone,0) = 1)
			BEGIN			
				IF NOT EXISTS(SELECT 1 FROM [dbo].[MissingAttractionRestarentSearch] WHERE AttractionsId = @RestarentSearchDestinationId)
				BEGIN			
					IF @RestarentSearchDestinationId > 0
					BEGIN
						INSERT INTO [dbo].[MissingAttractionRestarentSearch]
								   ([AttractionsId]
								   ,[CreatedDate])
							 VALUES
								   (@RestarentSearchDestinationId
								   ,GETDATE()
								   )
					END
				END

			END
		END

		
		

		INSERT INTO @OrderOfAttactionInfomration
		(
		RecordCount,
		[SourceAttractionId],
		[DestinationAttractionId],
		[Distance],
		[TravelTime],
		[TravelModeId],
		[SourceAttractionName],
		[DestinationAttractionName],
		[DateAndtime],
		[ReachTime],
		[TimeRequiredToView],
		[EventEndTime],
		[IsLunchDinnerBreakTime],
		[IsDistanceCalculationMissing],
		WeekDayId
		)
		SELECT 
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
			,@IsDistanceCalculationMissing 
			,WeekDayId
		FROM dbo.fun_BreakTimeCalculation(@GetStartingTimeEvent,@OrderOfAttactionInfomrationTemp,@UserBreakTime,@RecordOrder)

		SELECT TOP 1 @GetStartingTimeEvent = EventEndTime
		FROM @OrderOfAttactionInfomration
		ORDER BY RecordCount DESC
		
		IF((SELECT Count(*) FROM @OrderOfAttactionInfomrationTemp) < (SELECT Count(*) FROM @OrderOfAttactionInfomration))
		BEGIN
			SET @RecordOrder = @RecordOrder + 1
		END
		
		--End Break Time Logic

		------------------------------------------------------------------------------------------------------------------------------
		--Checking the Day Brak
		SET @GetStartingTimeEvent = dbo.fun_GetStartTime(@UserBreakTime,@GetStartingTimeEvent)	
		
		SET @CurrentWeekDay = DATEPART(weekday, @GetStartingTimeEvent) - 1					
		
		--End Day Break

		------------------------------------------------------------------------------------------------------
		--Start Getting Record As User Requested Order
		
		
		IF Exists (SELECT * FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)
		BEGIN
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
				AND AAS.CloseTime < CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
				AND AAS.OpenTime > CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
				AND ATTD.DestinationAttractionId = (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)				
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
					,@ReachTime =  DateADD(ss,ATTD.TravelTime,@GetStartingTimeEvent)
				FROM @AttractionInfomation A 
				JOIN AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.DestinationAttractionId = A.AttractionId 
				JOIN AttractionsActiveStatus AAS WITH(NOLOCK) ON AAS.AttractionsId = ATTD.DestinationAttractionId
				JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = ATTD.SourceAttractionId
				JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = ATTD.DestinationAttractionId
				WHERE ATTD.SourceAttractionId = @NextAttractionId
				AND ATTD.TravelModeId = @TravelModeId
				AND AAS.MasterWeekId = @CurrentWeekDay
				AND AAS.CloseTime < CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
				AND AAS.OpenTime > CAST(DateADD(ss,ATTD.TravelTime, @GetStartingTimeEvent) AS TIME)
				AND ATTD.DestinationAttractionId = (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)
				ORDER BY TravelTime

				IF EXISTS( SELECT 1 FROM AttractionAverageTime WITH(NOLOCK) WHERE AttractionsId = @NextAttractionId)
				BEGIN
					SET @ResTimeRequiredToView = (SELECT AverageTime FROM AttractionAverageTime WITH(NOLOCK) WHERE AttractionsId = @NextAttractionId)
				END
				ELSE IF EXISTS 
					(
						SELECT 1
							FROM AttractionXCategory AXM
							JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
							WHERE AXM.AttractionId = @NextAttractionId 
							AND MG.ViewTime > CAST('00:01' AS TIME)
					)
				BEGIN
					SET @ResTimeRequiredToView = 
						(
							SELECT MAX(ViewTime) 
							FROM AttractionXCategory AXM
							JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
							WHERE AXM.AttractionId = @NextAttractionId 							
						)
							
				END
				ELSE IF EXISTS
					(
						SELECT 1 
						FROM AttractionXCategory AXM WITH(NOLOCK)
						JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
						JOIN Attractions..MasterCategory MC WITH(NOLOCK) ON MC.CategoryId = MG.MasterCategoryId
						WHERE AXM.AttractionId = @NextAttractionId 	
						AND MC.ViewTime > CAST('00:01' AS TIME)  							
					)
				BEGIN
					SET @ResTimeRequiredToView = 
							(
								SELECT MAX(MC.ViewTime) 
								FROM AttractionXCategory AXM WITH(NOLOCK)
								JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
								JOIN Attractions..MasterCategory MC WITH(NOLOCK) ON MC.CategoryId = MG.MasterCategoryId
								WHERE AXM.AttractionId = @NextAttractionId 	
								AND MC.ViewTime > CAST('00:01' AS TIME)   							
							)
				END
				ELSE
				BEGIN
					SET @ResTimeRequiredToView = @AverageMinimumTime
				END

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

				SET @IsSequenceRecordDone = 1

			END
			ELSE
			BEGIN
				--Adding missing Attraction

				DELETE FROM @MissingAttractionID

				INSERT INTO @MissingAttractionID(ID)
				SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder

				EXEC AddingMissingClaims				
					@AttractionId = @NextAttractionId
					,@TravelModeId  = @ResTravelModeId
					,@MissingAttractionID  = @MissingAttractionID
					,@CreatedBy = 'User Requested Order'	
						
									

				SET @IsDistanceCalculationMissing = 1

				SET @IsSequenceRecordDone = 1
			END
		END
		--End Getting Record As User Requested Order
		-------------------------------------------------------------------------------------------------------
		--Start Get next attraction Information
		
		IF @IsSequenceRecordDone = 0
		BEGIN			
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
				AND ATTD.DestinationAttractionId NOT IN (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)								
				
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
				AND ATTD.DestinationAttractionId NOT IN (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)											
				ORDER BY TravelTime

				IF EXISTS( SELECT 1 FROM AttractionAverageTime WITH(NOLOCK) WHERE AttractionsId = @NextAttractionId)
				BEGIN
					SET @ResTimeRequiredToView = (SELECT AverageTime FROM AttractionAverageTime WITH(NOLOCK) WHERE AttractionsId = @NextAttractionId)
				END
				ELSE IF EXISTS 
					(
						SELECT 1
							FROM AttractionXCategory AXM
							JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
							WHERE AXM.AttractionId = @NextAttractionId 
							AND MG.ViewTime > CAST('00:01' AS TIME)
					)
				BEGIN
					SET @ResTimeRequiredToView = 
						(
							SELECT MAX(ViewTime) 
							FROM AttractionXCategory AXM
							JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
							WHERE AXM.AttractionId = @NextAttractionId 							
						)
							
				END
				ELSE IF EXISTS
					(
						SELECT 1 
						FROM AttractionXCategory AXM WITH(NOLOCK)
						JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
						JOIN Attractions..MasterCategory MC WITH(NOLOCK) ON MC.CategoryId = MG.MasterCategoryId
						WHERE AXM.AttractionId = @NextAttractionId 	
						AND MC.ViewTime > CAST('00:01' AS TIME)  							
					)
				BEGIN
					SET @ResTimeRequiredToView = 
							(
								SELECT MAX(MC.ViewTime) 
								FROM AttractionXCategory AXM WITH(NOLOCK)
								JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
								JOIN Attractions..MasterCategory MC WITH(NOLOCK) ON MC.CategoryId = MG.MasterCategoryId
								WHERE AXM.AttractionId = @NextAttractionId 	
								AND MC.ViewTime > CAST('00:01' AS TIME)   							
							)
				END
				ELSE
				BEGIN
					SET @ResTimeRequiredToView = @AverageMinimumTime
				END

				
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
			ELSE
			BEGIN
				---start Getting the not specific open time records
				IF Exists ( 
					SELECT 1
					FROM @AttractionInfomation A 
					JOIN AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.DestinationAttractionId = A.AttractionId 
					LEFT JOIN AttractionsActiveStatus AAS WITH(NOLOCK) ON AAS.AttractionsId = ATTD.DestinationAttractionId
					JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = ATTD.SourceAttractionId
					JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = ATTD.DestinationAttractionId
					WHERE ATTD.SourceAttractionId = @NextAttractionId
					AND ATTD.TravelModeId = @TravelModeId										
					AND ATTD.DestinationAttractionId NOT IN (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)									
					AND AAS.AttractionsActiveStatusId IS NULL
					
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
					AND ATTD.DestinationAttractionId NOT IN (SELECT AttractionId FROM @AttractionReqOrder WHERE OrderNumber = @RecordOrder)												
					ORDER BY TravelTime

					
					IF EXISTS( SELECT 1 FROM AttractionAverageTime WITH(NOLOCK) WHERE AttractionsId = @NextAttractionId)
					BEGIN
						SET @ResTimeRequiredToView = (SELECT AverageTime FROM AttractionAverageTime WITH(NOLOCK) WHERE AttractionsId = @NextAttractionId)
					END
					ELSE IF EXISTS 
						(
							SELECT 1
								FROM AttractionXCategory AXM
								JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
								WHERE AXM.AttractionId = @NextAttractionId 
								AND MG.ViewTime > CAST('00:01' AS TIME)
						)
					BEGIN
						SET @ResTimeRequiredToView = 
							(
								SELECT MAX(ViewTime) 
								FROM AttractionXCategory AXM
								JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
								WHERE AXM.AttractionId = @NextAttractionId 							
							)
							
					END
					ELSE IF EXISTS
						(
							SELECT 1 
							FROM AttractionXCategory AXM WITH(NOLOCK)
							JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
							JOIN Attractions..MasterCategory MC WITH(NOLOCK) ON MC.CategoryId = MG.MasterCategoryId
							WHERE AXM.AttractionId = @NextAttractionId 	
							AND MC.ViewTime > CAST('00:01' AS TIME)  							
						)
					BEGIN
						SET @ResTimeRequiredToView = 
								(
									SELECT MAX(MC.ViewTime) 
									FROM AttractionXCategory AXM WITH(NOLOCK)
									JOIN Attractions..MasterGoogleType MG WITH(NOLOCK) ON MG.GoogleTypeID = AXM.CategoryId
									JOIN Attractions..MasterCategory MC WITH(NOLOCK) ON MC.CategoryId = MG.MasterCategoryId
									WHERE AXM.AttractionId = @NextAttractionId 	
									AND MC.ViewTime > CAST('00:01' AS TIME)   							
								)
					END
					ELSE
					BEGIN
						SET @ResTimeRequiredToView = @AverageMinimumTime
					END

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

					---End Getting the not specific open time records
					END
					ELSE
					BEGIN
						--Adding missing Attraction				
						DELETE FROM @MissingAttractionID

						INSERT INTO @MissingAttractionID(ID)
						SELECT AttractionId FROM @AttractionInfomation

						EXEC AddingMissingClaims				
							@AttractionId = @NextAttractionId
							,@TravelModeId  = @ResTravelModeId
							,@MissingAttractionID  = @MissingAttractionID
							,@CreatedBy = 'Missing Record'				

				
						SET @IsDistanceCalculationMissing = 1
					END					
									
			END		
				
			SET @Counter = @Counter + 1	
		END		
		ELSE
		BEGIN
			SET @Counter = @Counter + 1	
		END	
			
		

		--SELECT @ResDestincationAttractionId		
		DELETE FROM @AttractionInfomation
		WHERE AttractionId = @ResDestincationAttractionId
		--SELECT * FROM @AttractionInfomation
		--ORDER BY 1 DESC

		SET @RecordOrder = @RecordOrder + 1
		



		
	END
	--End Get next attraction Information
	-------------------------------------------------------------------------------------------------------------------------------------------

	--If the First record is a break event then we are adding the destination points to the break information
	IF EXISTS(SELECT 1 FROM @OrderOfAttactionInfomration WHERE RecordCount = 1 AND IsLunchDinnerBreakTime = 1)
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
							/ 5280 AS DECIMAL(18,2)
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
	FROM @OrderOfAttactionInfomration OAI
	LEFT JOIN Attractions SA WITH(NOLOCK) ON SA.AttractionsId = OAI.SourceAttractionId
	LEFT JOIN Attractions DA WITH(NOLOCK) ON DA.AttractionsId = OAI.DestinationAttractionId
	LEFT JOIN Attractions..MasterTravelMode MTW WITH(NOLOCK) ON MTW.TravelModeId = OAI.TravelModeId
	LEFT JOIN AttractionsActiveStatus SAAS WITH(NOLOCK) ON SAAS.AttractionsId = OAI.SourceAttractionId AND SAAS.MasterWeekId = OAI.WeekDayId
	LEFT JOIN AttractionsActiveStatus DAAS WITH(NOLOCK) ON DAAS.AttractionsId = OAI.DestinationAttractionId AND DAAS.MasterWeekId = OAI.WeekDayId
	
END





