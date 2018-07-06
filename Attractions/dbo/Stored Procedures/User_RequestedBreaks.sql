CREATE PROCEDURE User_RequestedBreaks
(
	@UserTripId AS INT
)	
AS
BEGIN
	SELECT [UserTripDatesId]
      ,[UserTripId]
      ,CAST(CONVERT(VARCHAR(8),CAST([TripDate] AS DATE),1) AS VARCHAR(50)) AS RequestDate
      ,[CreatedDate]
      ,[ModifiedDate]
      ,[IsUserInterestedDayBreak] 
      ,CAST([UpdateDayEndTime] AS VARCHAR(8)) UpdateDayEndTime
      ,CAST([UpdateDayStartTime] AS VARCHAR(8)) UpdateDayStartTime
      ,[IsUserInterestedLunchBreak]
      ,CAST([UpdatedLunchTime] AS VARCHAR(8)) UpdatedLunchTime
      ,CAST([UpdatedLunchMinimumTime] AS VARCHAR(8)) UpdatedLunchMinimumTime
      ,[IsUserInterestedBreak]
      ,CAST([UpdatedBreakTime] AS VARCHAR(8)) UpdatedBreakTime
      ,CAST([UpdatedBreakMinimumTime] AS VARCHAR(8)) UpdatedBreakMinimumTime
      ,[IsUserInterestedDinnerBreak]
      ,CAST([UpdatedDinnerTime] AS VARCHAR(8)) UpdatedDinnerTime
      ,CAST([UpdateDinnerMinimumTime] AS VARCHAR(8)) UpdateDinnerMinimumTime
  FROM [dbo].[UserTripDates] WITH(NOLOCK)
  WHERE UserTripId = @UserTripId
END