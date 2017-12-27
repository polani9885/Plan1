CREATE FUNCTION [dbo].[fun_GetStartTime] 
(
	@UserBreakTime AS UserTable_UpdatedBreaks READONLY
	,@GetStartingTimeEvent AS DATETIME

)
RETURNS DATETIME
AS
BEGIN	
	DECLARE @DayStartTime AS TIME = '09:00:00.0000000'
	DECLARE @DayEnd AS TIME
	DECLARE @StartTime AS DATETIME

	IF Exists (
				SELECT 1 FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
				AND IsUserInterestedDayBreak = 1
			)
	BEGIN
	--Getting the user Requested Day Break time
		IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND IsUserInterestedDayBreak = 1 AND UpdateDayEndTime IS NOt NULL
				)
		BEGIN
			SELECT @DayEnd = UpdateDayEndTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
			AND IsUserInterestedDayBreak = 1 AND UpdateDayEndTime IS NOt NULL
		END				
	END
	ELSE
	BEGIN
		SET @DayEnd = '21:00:00.0000000'
	END					
	IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND UpdateDayStartTime IS NOt NULL
				)
	BEGIN
		SELECT @DayStartTime = UpdateDayStartTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
		AND UpdateDayStartTime IS NOt NULL
	END						 			
	IF CAST(@GetStartingTimeEvent AS TIME) > @DayEnd
	BEGIN			
		SET @GetStartingTimeEvent = CAST(CAST(DateADD(day, 1 , @GetStartingTimeEvent) AS DATE) AS DATETIME) + CAST(@DayStartTime AS DATETIME) 								
	END
	SET @StartTime = @GetStartingTimeEvent
	RETURN @StartTime
END
