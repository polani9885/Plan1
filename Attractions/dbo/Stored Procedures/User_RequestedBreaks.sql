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
      ,[IsUserInterestedBreak]
      ,CAST([UpdatedBreakTime] AS VARCHAR(8)) UpdatedBreakTime      
      ,[IsUserInterestedDinnerBreak]
      ,CAST([UpdatedDinnerTime] AS VARCHAR(8)) UpdatedDinnerTime      
	  ,IsUserInterestedBreakFast
	  ,CAST(UpdatedBreakFastTime AS VARCHAR(8)) UpdatedBreakFastTime	  
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
