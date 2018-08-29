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
	DECLARE @BreakType varchar(250)
	DECLARE @Counter AS INT = 1
	DECLARE @BreakStartTime AS TIME 
	DECLARE @BreakEndTime AS TIME 
	DECLARE @BreakMinimumTime AS TIME 
	DECLARE @BreakInformationId AS INT


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
		SET @RecordUpdate = 0	
		
		SELECT  @BreakType = Display
				,@BreakStartTime = StartTime
				,@BreakEndTime = EndTime
				,@BreakMinimumTime = MinimumTime
				,@BreakInformationId = BreakInformationId
		FROM @BreakInformation 
		WHERE RowCounter =  @Counter

		IF NOT Exists (
				SELECT 1 FROM @OrderOfAttactionInfomration WHERE CAST(DateAndtime AS DATE) = CAST(@GetStartingTimeEvent AS DATE) 
				AND DestinationAttractionName = @BreakType
			) AND 
			Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
						AND IsUserInterestedBreak = 1 
					)
		BEGIN

			--Getting the user Requested Break time
			--User Time he required

			IF @BreakInformationId = 2
			BEGIN				
				IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedLunchBreak = 1 AND UpdatedLunchTime IS NOt NULL
				)
				BEGIN				
					SELECT @BreakStartTime = UpdatedLunchTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedLunchBreak = 1 AND UpdatedLunchTime IS NOt NULL
				END			


				--User Lunch Time he required
				IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
							AND IsUserInterestedLunchBreak = 1 AND UpdatedLunchMinimumTime IS Not NULL
						)
				BEGIN				
					SELECT @BreakMinimumTime = UpdatedLunchMinimumTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedLunchBreak = 1 AND UpdatedLunchMinimumTime IS NOt NULL
				END		
			END


			IF @BreakInformationId = 3
			BEGIN
			
				IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
							AND IsUserInterestedBreak = 1 AND UpdatedBreakTime IS NOt NULL
						)
				BEGIN				
					SELECT @BreakStartTime = UpdatedBreakTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedBreak = 1 AND UpdatedBreakTime IS NOt NULL
				END			

				
				IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
							AND IsUserInterestedBreak = 1 AND UpdatedBreakMinimumTime IS Not NULL
						)
				BEGIN				
					SELECT @BreakMinimumTime = UpdatedBreakMinimumTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedBreak = 1 AND UpdatedBreakMinimumTime IS Not NULL
				END		
			END
			
			

			IF @BreakInformationId = 4
			BEGIN				
				IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
							AND IsUserInterestedDinnerBreak = 1 AND UpdatedDinnerTime IS NOt NULL
						)
				BEGIN				
					SELECT @BreakStartTime = UpdatedDinnerTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedDinnerBreak = 1 AND UpdatedDinnerTime IS NOt NULL
				END			

				
				IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
							AND IsUserInterestedDinnerBreak = 1 AND UpdateDinnerMinimumTime IS Not NULL
						)
				BEGIN				
					SELECT @BreakMinimumTime = UpdateDinnerMinimumTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedDinnerBreak = 1 AND UpdateDinnerMinimumTime IS Not NULL
				END		
			END

									

			IF (CAST(@GetStartingTimeEvent AS TIME) Between @BreakStartTime AND DATEADD(SECOND,DATEDIFF(SECOND,0,@BreakStartTime), @BreakEndTime))	 
			BEGIN
				
				SET @ResSourceAttractionId  = 0
				SET @ResDestincationAttractionId  = 0
				SET @ResDistance  = 0
				SET @ResTravelTime  = 0
				SET @ResTravelModeId = 0
				SET @ResSourceAttractionName = @BreakType
				SET @ResDestincationAttractionName  = @BreakType
				SET @ResDateAndtime  = @GetStartingTimeEvent
				SET @ReachTime = @GetStartingTimeEvent
				SET @ResTimeRequiredToView = @BreakMinimumTime
				SET @EventEndTime  = @GetStartingTimeEvent + CAST(@BreakMinimumTime AS DATETIME)
				SET @IsLunchDinnerBreakTime  = 1

				SET @GetStartingTimeEvent = @EventEndTime

				SET @RecordUpdate = 1		
			END		
		END


		IF(@RecordUpdate = 1)
		BEGIN

			SELECT TOP 1
				 @ResSourceAttractionId = DestinationAttractionId
				 ,@ResSourceAttractionName = DestinationAttractionName
			FROM @OrderOfAttactionInfomration
			ORDER BY EventEndTime DESC

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

		SET @Counter = @Counter + 1
	END





	
	

	

		
		RETURN	
END



