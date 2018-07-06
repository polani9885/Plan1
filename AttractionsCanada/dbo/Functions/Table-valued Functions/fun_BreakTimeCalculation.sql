CREATE FUNCTION [dbo].[fun_BreakTimeCalculation] 
(	
	@GetStartingTimeEvent AS DATETIME
	,@OrderOfAttactionInfomration AS user_OrderOfAttractionVisit READONLY
	,@UserBreakTime AS UserTable_UpdatedBreaks READONLY
	,@RecordOrder AS INT
)
RETURNS @OrderOfAttactionInfomrationOutPut TABLE  
(
	RecordCount INT
	,SourceAttractionId INT
	,DestinationAttractionId INT
	,Distance INT
	,TravelTime INT
	,TravelModeId INT
	,SourceAttractionName Varchar(500)
	,DestinationAttractionName Varchar(500)	
	,DateAndtime DATETIME
	,ReachTime DATETIME
	,TimeRequiredToView TIME
	,EventEndTime  DATETIME
	,IsLunchDinnerBreakTime  INT
	,IsDistanceCalculationMissing BIT
	,WeekDayId INT
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
	DECLARE @IsLunchDinnerBreakTime AS INT

	DECLARE @RecordUpdate AS BIT = 0


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
	FROM @OrderOfAttactionInfomration

	---------------------------------------------Start Break Time Calculation ----------------------------------------------------------------
	DECLARE @BreakTime AS TIME = '17:00:00.0000000'
	DECLARE @BreakMinimumTime AS TIME = '01:00:00.0000000'	

	
		
	IF NOT Exists (
				SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
				AND SourceAttractionName = 'Break Time'
			)
	BEGIN
		--Getting the user Requested Lunch Break time
		IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedBreak = 1 AND UpdatedBreakTime IS NOt NULL
				)
		BEGIN				
			SELECT @BreakTime = UpdatedBreakTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
			AND IsUserInterestedBreak = 1 AND UpdatedBreakTime IS NOt NULL
		END			

		--User Lunch Time he required
		IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedBreak = 1 AND UpdatedBreakMinimumTime IS Not NULL
				)
		BEGIN				
			SELECT @BreakMinimumTime = UpdatedBreakMinimumTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
			AND IsUserInterestedBreak = 1 AND UpdatedBreakMinimumTime IS Not NULL
		END						
	END

	IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedBreak = 1 
				)
	BEGIN

		IF (CAST(@GetStartingTimeEvent AS TIME) Between @BreakTime AND DATEADD(hh,1,@BreakTime)) AND NOT EXISTS
			(
				SELECT * FROM @OrderOfAttactionInfomration 
				WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE)
				AND SourceAttractionName = 'Break Time'
			)
		BEGIN
				
			SET @ResSourceAttractionId  = 0
			SET @ResDestincationAttractionId  = 0
			SET @ResDistance  = 0
			SET @ResTravelTime  = 0
			SET @ResTravelModeId = 0
			SET @ResSourceAttractionName = 'Break Time'
			SET @ResDestincationAttractionName  = 'Break Time'	
			SET @ResDateAndtime  = @GetStartingTimeEvent
			SET @ReachTime = @GetStartingTimeEvent
			SET @ResTimeRequiredToView = @BreakMinimumTime
			SET @EventEndTime  = @GetStartingTimeEvent + CAST(@BreakMinimumTime AS DATETIME)
			SET @IsLunchDinnerBreakTime  = 1

			SET @GetStartingTimeEvent = @EventEndTime

			SET @RecordUpdate = 1

		
		END		
	END

	---------------------------------------------END Break Time Calculation ----------------------------------------------------------------

	---------------------------------------------Start Lunch Time Calculation ----------------------------------------------------------------
	DECLARE @LunchTime AS TIME = '12:00:00.0000000'
	DECLARE @LunchMinimumTime AS TIME = '01:00:00.0000000'
	IF NOT Exists (
					SELECT * FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
					AND SourceAttractionName = 'Lunch Time'
				)
	BEGIN	
			
		--Getting the user Requested Lunch Break time
		IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedLunchBreak = 1 AND UpdatedLunchTime IS NOt NULL
				)
		BEGIN				
			SELECT @LunchTime = UpdatedLunchTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
			AND IsUserInterestedLunchBreak = 1 AND UpdatedLunchTime IS NOt NULL
		END			


		--User Lunch Time he required
		IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedLunchBreak = 1 AND UpdatedLunchMinimumTime IS Not NULL
				)
		BEGIN				
			SELECT @LunchMinimumTime = UpdatedLunchMinimumTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
			AND IsUserInterestedLunchBreak = 1 AND UpdatedLunchMinimumTime IS NOt NULL
		END						
	END

	IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedLunchBreak = 1 
				)
	BEGIN	
		IF CAST(@GetStartingTimeEvent AS TIME) > @LunchTime AND NOT EXISTS
			(
				SELECT * FROM @OrderOfAttactionInfomration 
				WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE)
				AND SourceAttractionName = 'Lunch Time'
			)
		BEGIN				
				
			SET @ResSourceAttractionId  = 0
			SET @ResDestincationAttractionId  = 0
			SET @ResDistance  = 0
			SET @ResTravelTime  = 0
			SET @ResTravelModeId = 0
			SET @ResSourceAttractionName = 'Lunch Time'
			SET @ResDestincationAttractionName  = 'Lunch Time'	
			SET @ResDateAndtime  = @GetStartingTimeEvent
			SET @ReachTime = @GetStartingTimeEvent
			SET @ResTimeRequiredToView = @LunchMinimumTime
			SET @EventEndTime  = @GetStartingTimeEvent + CAST(@LunchMinimumTime AS DATETIME)
			SET @IsLunchDinnerBreakTime  = 1

			SET @GetStartingTimeEvent = @EventEndTime		
		
			SET @RecordUpdate = 1		
						
		END
	END
	---------------------------------------------End Lunch Time Calculation ----------------------------------------------------------------

	---------------------------------------------Start Dinner Time Calculation ----------------------------------------------------------------
	DECLARE @DinnerTime AS TIME = '20:00:00.0000000'
	DECLARE @DinnerMinimumTime AS TIME = '01:30:00.0000000'
	IF NOT Exists (
					SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
					AND SourceAttractionName = 'Dinner Time'
				)
	BEGIN
		--Getting the user Requested Lunch Break time
		IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedDinnerBreak = 1 AND UpdatedDinnerTime IS NOt NULL
				)
		BEGIN				
			SELECT @DinnerTime = UpdatedDinnerTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
			AND IsUserInterestedDinnerBreak = 1 AND UpdatedDinnerTime IS NOt NULL
		END			

		--User Lunch Time he required
		IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedDinnerBreak = 1 AND UpdateDinnerMinimumTime IS Not NULL
				)
		BEGIN				
			SELECT @DinnerMinimumTime = UpdateDinnerMinimumTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
			AND IsUserInterestedDinnerBreak = 1 AND UpdateDinnerMinimumTime IS Not NULL
		END						
	END
	IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedDinnerBreak = 1 
				)
	BEGIN
		IF CAST(@GetStartingTimeEvent AS TIME) > @DinnerTime AND NOT EXISTS
			(
				SELECT * FROM @OrderOfAttactionInfomration 
				WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE)
				AND SourceAttractionName = 'Dinner Time'
			)
		BEGIN
				
			SET @ResSourceAttractionId  = 0
			SET @ResDestincationAttractionId  = 0
			SET @ResDistance  = 0
			SET @ResTravelTime  = 0
			SET @ResTravelModeId = 0
			SET @ResSourceAttractionName = 'Dinner Time'
			SET @ResDestincationAttractionName  = 'Dinner Time'	
			SET @ResDateAndtime  = @GetStartingTimeEvent
			SET @ReachTime = @GetStartingTimeEvent
			SET @ResTimeRequiredToView = @DinnerMinimumTime
			SET @EventEndTime  = @GetStartingTimeEvent + CAST(@DinnerMinimumTime AS DATETIME)
			SET @IsLunchDinnerBreakTime  = 1

			SET @GetStartingTimeEvent = @EventEndTime

			SET @RecordUpdate = 1
			
		END	
	END
	---------------------------------------------End Dinner Time Calculation ----------------------------------------------------------------

	

	IF(@RecordUpdate = 1)
	BEGIN
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
	END

		
		RETURN	
END
