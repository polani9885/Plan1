CREATE PROCEDURE [dbo].[User_UpdateBreakInformation]	
(
	
	@UserBreakTime UserTable_UpdatedBreaks ReadOnly		
	,@UserTripId INT	
)
AS
BEGIN

	UPDATE UTD
	   SET UTD.[ModifiedDate] = GETDATE()
		  ,UTD.[IsUserInterestedDayBreak] = ISNULL(UBT.IsUserInterestedDayBreak,1)
		  ,UTD.[UpdateDayEndTime] = UBT.UpdateDayEndTime
		  ,UTD.[UpdateDayStartTime] = UBT.UpdateDayStartTime
		  ,UTD.[IsUserInterestedLunchBreak] = ISNULL(UBT.IsUserInterestedLunchBreak,1)
		  ,UTD.[UpdatedLunchTime] = UBT.UpdatedLunchTime		  
		  ,UTD.[IsUserInterestedBreak] = ISNULL(UBT.IsUserInterestedBreak,1)
		  ,UTD.[UpdatedBreakTime] = UBT.UpdatedBreakTime		  
		  ,UTD.[IsUserInterestedDinnerBreak] = ISNULL(UBT.IsUserInterestedDinnerBreak,1)
		  ,UTD.[UpdatedDinnerTime] = UBT.UpdatedDinnerTime		  
		  ,UTD.IsBreakAdded = UBT.IsBreakAdded
		  ,UTD.BreakAttractionId = UBT.BreakAttractionId
		  ,UTD.IsLunchAdded = UBT.IsLunchAdded
		  ,UTD.LunchAttractionId = UBT.LunchAttractionId
		  ,UTD.IsDinnerAdded = UBT.IsDinnerAdded
		  ,UTD.DinnerAttractionId = UBT.DinnerAttractionId
		  ,UTD.IsUserInterestedBreakFast = ISNULL(UBT.IsUserInterestedBreakFast,1)
		  ,UTD.UpdatedBreakFastTime = UBT.UpdatedBreakFastTime		  
		  ,UTD.IsBreakFastAdded = UBT.IsBreakFastAdded
		  ,UTD.BreakFastAttractionId = UBT.BreakFastAttractionId
		  ,UTD.IsDayBreakAdded = UBT.IsDayBreakAdded
		  ,UTD.DayBreakAttractionId = UBT.DayBreakAttractionId
			,UTD.NoOfCars           = UBT.NoOfCars
			,UTD.AverageMileage		= UBT.AverageMileage
			,UTD.NoOfRooms			= UBT.NoOfRooms
			,UTD.BreakFastExpense	= UBT.BreakFastExpense 
			,UTD.LunchExpense		= UBT.LunchExpense 
			,UTD.BreakExpense		= UBT.BreakExpense  
			,UTD.DayBreakExpense	= UBT.DayBreakExpense  
			,UTD.DinnerExpense		= UBT.DinnerExpense 
			,UTD.CarRentalExpense	= UBT.CarRentalExpense			
			,UTD.IsNoOfCarsUserUpdated  = UBT.IsNoOfCarsUserUpdated
			,UTD.IsAverageMileageUserUpdated = UBT.IsAverageMileageUserUpdated
			,UTD.IsCarRentalExpenseUserUpdated = UBT.IsCarRentalExpenseUserUpdated
			,UTD.IsBreakFastExpenseUserUpdated = UBT.IsBreakFastExpenseUserUpdated
			,UTD.IsLunchExpenseUserUpdated = UBT.IsLunchExpenseUserUpdated
			,UTD.IsBreakExpenseUserUpdated = UBT.IsBreakExpenseUserUpdated
			,UTD.IsDinnerExpenseUserUpdated = UBT.IsDinnerExpenseUserUpdated
			,UTD.IsDayBreakExpenseUserUpdated = UBT.IsDayBreakExpenseUserUpdated
			,UTD.IsNoOfRoomsUserUpdated = UBT.IsNoOfRoomsUserUpdated
	FROM [dbo].[UserTripDates] UTD	
	JOIN @UserBreakTime UBT ON CAST(UBT.RequestDate As DATE) = CAST(UTD.TripDate AS DATE)
	 WHERE UTD.[UserTripId] = @UserTripId
	 	   
	
END