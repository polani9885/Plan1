CREATE FUNCTION [dbo].[fun_GetStartTime] 
(
	@UserBreakTime AS UserTable_UpdatedBreaks READONLY
	,@GetStartingTimeEvent AS DATETIME

)
RETURNS DATETIME
AS
BEGIN	
	DECLARE @DayStartTime AS TIME = '9:00:00.0000000'
	DECLARE @DayEnd AS TIME
	DECLARE @StartTime AS DATETIME

	IF Exists (
				SELECT 1 FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
				AND IsUserInterestedDayBreak = 1 AND UpdateDayEndTime IS NOt NULL
			)
	BEGIN
	--Getting the user Requested Day Break time		
		SELECT @DayEnd = DATEADD(MINUTE,60,UpdateDayEndTime)   FROM @UserBreakTime 
		WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
		AND IsUserInterestedDayBreak = 1 AND UpdateDayEndTime IS NOt NULL		
	END
	ELSE
	BEGIN
		SET @DayEnd = '22:00:00.0000000'
	END					
							 			
	IF CAST(@GetStartingTimeEvent AS TIME) > @DayEnd
	BEGIN		
		
		SET @GetStartingTimeEvent = CAST(CAST(DateADD(day, 1 , @GetStartingTimeEvent) AS DATE) AS DATETIME) 

		IF Exists (SELECT 1  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
					AND UpdateDayStartTime IS NOt NULL
				)
		BEGIN
			SELECT @DayStartTime = UpdateDayStartTime  FROM @UserBreakTime WHERE RequestDate = CAST(@GetStartingTimeEvent AS DATE) 
			AND UpdateDayStartTime IS NOt NULL
		END

		SET @GetStartingTimeEvent = @GetStartingTimeEvent + CAST(@DayStartTime AS DATETIME)


	END
	SET @StartTime = @GetStartingTimeEvent
	RETURN @StartTime
END


