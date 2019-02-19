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
      ,CAST(ISNULL([UpdateDayEndTime],'00:00:00') AS VARCHAR(8)) UpdateDayEndTime
      ,CAST(ISNULL([UpdateDayStartTime],'00:00:00') AS VARCHAR(8)) UpdateDayStartTime
      ,[IsUserInterestedLunchBreak]
      ,CAST(ISNULL([UpdatedLunchTime],'00:00:00') AS VARCHAR(8)) UpdatedLunchTime      
      ,[IsUserInterestedBreak]
      ,CAST(ISNULL([UpdatedBreakTime],'00:00:00') AS VARCHAR(8)) UpdatedBreakTime      
      ,[IsUserInterestedDinnerBreak]
      ,CAST(ISNULL([UpdatedDinnerTime],'00:00:00') AS VARCHAR(8)) UpdatedDinnerTime      
	  ,IsUserInterestedBreakFast
	  ,CAST(ISNULL(UpdatedBreakFastTime,'00:00:00') AS VARCHAR(8)) UpdatedBreakFastTime	  
	  ,[IsBreakAdded]
      ,[BreakAttractionId]
      ,[IsLunchAdded]
      ,[LunchAttractionId]
      ,[IsDinnerAdded]
      ,[DinnerAttractionId]
	  ,IsBreakFastAdded
	  ,BreakFastAttractionId
	  ,IsDayBreakAdded
	  ,DayBreakAttractionId
	  ,NoOfCars        
	  ,AverageMileage	
	  ,NoOfRooms		
	  ,BreakFastExpense
	  ,LunchExpense	
	  ,BreakExpense	
	  ,DayBreakExpense
	  ,CarRentalExpense
	  ,NoOfAttractions
	  ,Distance
	  ,DinnerExpense
	  ,IsNoOfCarsUserUpdated  
	,IsAverageMileageUserUpdated 
	,IsCarRentalExpenseUserUpdated 
	,IsBreakFastExpenseUserUpdated 
	,IsLunchExpenseUserUpdated 
	,IsBreakExpenseUserUpdated 
	,IsDinnerExpenseUserUpdated 
	,IsDayBreakExpenseUserUpdated 
	,IsNoOfRoomsUserUpdated 
  FROM [dbo].[UserTripDates] WITH(NOLOCK)
  WHERE UserTripId = @UserTripId
END
