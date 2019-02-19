CREATE PROCEDURE [dbo].[BreakInformationUpdate] 
(
	@GetStartingTimeEvent AS DATETIME
	,@OrderOfAttactionInfomration AS user_OrderOfAttractionVisit READONLY
	,@UserBreakTime AS UserTable_UpdatedBreaks READONLY
	,@RecordOrder AS INT
	,@UserTripId INT
	,@IsForceAdding AS BIT
	,@BreakId AS INT
	,@SourceAttractionID AS INT
	,@TravelModeId AS INT
)

AS
BEGIN
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
	DECLARE @IsLunchDinnerBreakTime AS INT = 1

	DECLARE @RecordUpdate AS BIT = 0
	DECLARE @BreakType varchar(250)
	DECLARE @Counter AS INT = 1
	DECLARE @BreakStartTime AS TIME 
	DECLARE @BreakEndTime AS TIME 
	DECLARE @BreakMinimumTime AS TIME 
	DECLARE @BreakInformationId AS INT	
	DECLARE @IsDistanceCalculationMissing AS BIT = 0
	DECLARE @IsBreakAttractionExist AS BIT = 0
	DECLARE @NormalBreakExist As BIT = 0

	DECLARE @MissingAttractionID AS userTable_OnlyId
	
	DECLARE @OrderOfAttactionInfomrationOutPut AS user_OrderOfAttractionVisit
	
		

	INSERT INTO @OrderOfAttactionInfomrationOutPut(
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
				,WeekDayId 
				,BreakInformationId
				,IsDistanceCalculationMissing
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
		,WeekDayId
		,BreakInformationId
		,IsDistanceCalculationMissing
	FROM @OrderOfAttactionInfomration




	DECLARE @BreakInformation TABLE (
		[BreakInformationId] [int] NOT NULL,
		[BreakType] [varchar](250) NULL,
		[StartTime] [time](7) NULL,
		[MinimumTime] [time](7) NULL,
		[Display] [varchar](250) NULL,
		[EndTime] [time](7) NULL,
		RowCounter INT)

	INSERT INTO @BreakInformation
	SELECT *,Row_NUMBER() OVER(ORDER BY BreakInformationId)
	FROM Attractions.[dbo].[BreakInformation]


	


	WHILE @Counter <= (SELECT MAX(RowCounter) FROM @BreakInformation)
	BEGIN


		
		SELECT  @BreakType = Display
				,@BreakStartTime = StartTime
				,@BreakEndTime = EndTime
				,@BreakMinimumTime = MinimumTime
				,@BreakInformationId = BreakInformationId
		FROM @BreakInformation 
		WHERE RowCounter =  @Counter
		
		SET @RecordUpdate = 0	
		SET @IsDistanceCalculationMissing = 0
		SET @IsBreakAttractionExist = 0
		SET @ResSourceAttractionId  = 0
		SET @ResDestincationAttractionId  = 0
		SET @ResDistance  = 0
		SET @ResTravelTime  = 0
		SET @ResTravelModeId = 0
		SET @ResSourceAttractionName = @BreakType
		SET @ResDestincationAttractionName  = @BreakType
		SET @NormalBreakExist = 0		


		IF EXISTS(SELECT 1 FROM @OrderOfAttactionInfomration)
		BEGIN
		
			SELECT TOP 1
					 @ResSourceAttractionId = DestinationAttractionId
					 ,@ResSourceAttractionName = DestinationAttractionName
					 ,@ResTravelModeId = TravelModeId
				FROM @OrderOfAttactionInfomration
				ORDER BY EventEndTime DESC
		END
		ELSE
		BEGIN
			SELECT 
				@ResSourceAttractionId = AttractionsId
				,@ResSourceAttractionName = AttractionName
				,@ResTravelModeId = @TravelModeId
			FROM Attractions WITH(NOLOCK)
			WHERE AttractionsId = @SourceAttractionID
		END
		
		

		
			--Getting the user Requested Break time
			--User Time he required


			IF @BreakInformationId = 1
			BEGIN		
			
				IF NOT EXISTS (SELECT 1 FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
				AND IsBreakFastAdded = 1)
				BEGIN	
					
					IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsUserInterestedBreakFast = 1 
					)
					BEGIN				
						SELECT @BreakStartTime = UpdatedBreakFastTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsUserInterestedBreakFast = 1 AND UpdatedBreakFastTime IS NOt NULL

						SET @NormalBreakExist = 1
					END					
				END
				ELSE
				BEGIN

					IF NOT Exists (
					SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
					AND BreakInformationId = @BreakInformationId
					)
					BEGIN
						IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsUserInterestedBreakFast = 1 
						)
						BEGIN
							SELECT @ResDestincationAttractionId = BreakFastAttractionId 							
							FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
							AND IsBreakFastAdded = 1	

							SET @IsBreakAttractionExist = 1
						END
					END
				END

			END


			IF @BreakInformationId = 2
			BEGIN
				IF NOT EXISTS (SELECT 1 FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
				AND IsLunchAdded = 1)
				BEGIN				
								
					IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsUserInterestedLunchBreak = 1 
					)
					BEGIN				
						SELECT @BreakStartTime = UpdatedLunchTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsUserInterestedLunchBreak = 1 AND UpdatedLunchTime IS NOt NULL

						SET @NormalBreakExist = 1
					END						

				END
				ELSE 
				BEGIN					
					IF NOT Exists (
					SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
					AND BreakInformationId = @BreakInformationId
					)
					BEGIN		
						IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
							AND IsUserInterestedLunchBreak = 1 
						)
						BEGIN			
							SELECT @ResDestincationAttractionId = LunchAttractionId 							
							FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
							AND IsLunchAdded = 1	
						
							SET @IsBreakAttractionExist = 1
						END
					END
				END

			END


			IF @BreakInformationId = 3
			BEGIN
				IF NOT EXISTS (SELECT 1 FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
				AND IsBreakAdded = 1)
				BEGIN	
			
					IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
								AND IsUserInterestedBreak = 1 
							)
					BEGIN				
						SELECT @BreakStartTime = UpdatedBreakTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsUserInterestedBreak = 1 AND UpdatedBreakTime IS NOt NULL

						SET @NormalBreakExist = 1
					END								
				END

				IF NOT Exists (
					SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
					AND BreakInformationId = @BreakInformationId
					)
				BEGIN
					IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
								AND IsUserInterestedBreak = 1 
							)
					BEGIN	
						SELECT @ResDestincationAttractionId = BreakAttractionId 							
						FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsBreakAdded = 1	

						SET @IsBreakAttractionExist = 1
					END
				END

			END
			
			

			IF @BreakInformationId = 4
			BEGIN
				IF NOT EXISTS (SELECT 1 FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
				AND IsDinnerAdded = 1)
				BEGIN				
					IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
								AND IsUserInterestedDinnerBreak = 1 
							)
					BEGIN				
						SELECT @BreakStartTime = UpdatedDinnerTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsUserInterestedDinnerBreak = 1 AND UpdatedDinnerTime IS NOt NULL

						SET @NormalBreakExist = 1
						
					END								
				END

				IF NOT Exists (
					SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
					AND BreakInformationId = @BreakInformationId
					)
				BEGIN
					IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
								AND IsUserInterestedDinnerBreak = 1 
							)
					BEGIN
						SELECT @ResDestincationAttractionId = DinnerAttractionId 							
						FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsDinnerAdded = 1	

						SET @IsBreakAttractionExist = 1
					END
				END

			END

			IF @BreakInformationId = 5
			BEGIN		
			
				IF NOT EXISTS (SELECT 1 FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
				AND IsDayBreakAdded = 1)
				BEGIN					
						
					SELECT @BreakStartTime = UpdateDayEndTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE)			
				
					SET @NormalBreakExist = 1
				END

				IF NOT Exists (
					SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
					AND BreakInformationId = @BreakInformationId
					)
				BEGIN
					SELECT @ResDestincationAttractionId = DayBreakAttractionId 							
					FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsDayBreakAdded = 1	

					SET @IsBreakAttractionExist = 1
				END

				SET @BreakEndTime = '23:59:59'

				

			END
							

			

			IF 
				(
					@BreakInformationId = 5 
					AND @BreakEndTime < CAST(@GetStartingTimeEvent AS TIME)
				)	
				OR   
				(
					CAST(@GetStartingTimeEvent AS TIME) Between @BreakStartTime 
					AND DATEADD(SECOND,DATEDIFF(SECOND,0,@BreakStartTime), @BreakEndTime)
					AND (@NormalBreakExist = 1 OR @IsBreakAttractionExist = 1)
				)
				OR
				(
					@BreakInformationId IN (1,2,3,4) AND @BreakEndTime < CAST(@GetStartingTimeEvent AS TIME) 
					AND NOT EXISTS (SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
						AND BreakInformationId = @BreakInformationId)
					AND EXISTS(
								SELECT 1  FROM @UserBreakTime 
								WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) AND
									1 = CASE WHEN @BreakInformationId = 1 AND IsUserInterestedBreakFast = 1 THEN 1 
										ELSE 
											CASE WHEN @BreakInformationId = 2 AND IsUserInterestedLunchBreak = 1 THEN 1 
											ELSE
												CASE WHEN @BreakInformationId = 3 AND IsUserInterestedBreak = 1 THEN 1 	
												ELSE
													CASE WHEN @BreakInformationId = 4 AND IsUserInterestedDinnerBreak = 1 THEN 1 	
													ELSE
														0
													END
												END
											END
										END
							)
					AND (@NormalBreakExist = 1 OR @IsBreakAttractionExist = 1)
				)				
				OR
				(
					@IsForceAdding = 1 AND @BreakInformationId = @BreakId
				)				 
			BEGIN
				
				BEGIN
				
					IF EXISTS 
					(
						SELECT 1 FROM AttractionTravelTimeDistance WITH(NOLOCK) 
						WHERE SourceAttractionId = @ResSourceAttractionId AND DestinationAttractionId = @ResDestincationAttractionId
						AND TravelModeId = @ResTravelModeId
					)
					BEGIN					
						SELECT	@ResDistance = Distance
								,@ResTravelTime = TravelTime  
						FROM AttractionTravelTimeDistance WITH(NOLOCK) 
						WHERE SourceAttractionId = @ResSourceAttractionId AND DestinationAttractionId = @ResDestincationAttractionId
						AND TravelModeId = @ResTravelModeId

						SET @IsDistanceCalculationMissing = 0
					END
					ELSE
					BEGIN
						
					
						SET @ResDistance = 0
						SET @ResTravelTime = 0
						

						--Adding missing Distance information

						DELETE FROM @MissingAttractionID						
						
						INSERT INTO @MissingAttractionID(ID)
						SELECT @ResDestincationAttractionId

						IF @ResSourceAttractionId > 0  AND EXISTS (SELECT 1 FROM @MissingAttractionID)
						BEGIN
							EXEC AddingMissingClaims				
								@AttractionId = @ResSourceAttractionId
								,@TravelModeId  = @ResTravelModeId
								,@MissingAttractionID  = @MissingAttractionID
								,@CreatedBy = 'Missing Break Info'
							SET @IsDistanceCalculationMissing = 1
						END
					
					END

					SELECT @ResDestincationAttractionName = AttractionName FROM Attractions WITH(NOLOCK) 
					WHERE AttractionsId = @ResDestincationAttractionId			

					
				END
					SET @ResDateAndtime  = @GetStartingTimeEvent
					SET @ReachTime = DateADD(ss,@ResTravelTime,@GetStartingTimeEvent) 

					IF EXISTS( SELECT 1 FROM [Attractions]..[UserTripRequestOrder] WITH(NOLOCK) WHERE AttractionId = @ResDestincationAttractionId AND UserTripId = @UserTripId)
					BEGIN
						SELECT  
							@BreakMinimumTime = StayTime
						FROM [Attractions]..[UserTripRequestOrder] WITH(NOLOCK) WHERE AttractionId = @ResDestincationAttractionId AND UserTripId = @UserTripId
					END
					


					SET @ResTimeRequiredToView = @BreakMinimumTime
					SET @EventEndTime  = @ReachTime + CAST(@BreakMinimumTime AS DATETIME)
					SET @GetStartingTimeEvent = @EventEndTime			
				
				IF @NormalBreakExist = 1 OR @IsBreakAttractionExist = 1
				BEGIN
					SET @RecordUpdate = 1		
				END
			END		
		


		IF(@RecordUpdate = 1)
		BEGIN

			
			IF(@ResDestincationAttractionId = 0)
			BEGIN
				SET @ResDestincationAttractionId = @ResSourceAttractionId
			END

			INSERT INTO @OrderOfAttactionInfomrationOutPut(
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
				,BreakInformationId
				,IsDistanceCalculationMissing
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
				,@IsLunchDinnerBreakTime
				,@BreakInformationId
				,@IsDistanceCalculationMissing

		

		END

		


		SET @Counter = @Counter + 1
	END	

	

		
		SELECT * FROM @OrderOfAttactionInfomrationOutPut	
END




