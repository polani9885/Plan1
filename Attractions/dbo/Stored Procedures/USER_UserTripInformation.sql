CREATE PROCEDURE [dbo].[USER_UserTripInformation]	
(
	@AttractionID userTable_OnlyId ReadOnly 
	,@TravelModeId INT
	,@SourceAttractionID INT
	,@DestinationAttractionID INT
	,@UserBreakTime UserTable_UpdatedBreaks ReadOnly
	,@AttractionReqOrder UserTable_AttractionRequestOrder ReadOnly
	,@StartDate DATETIME = NULL	
	,@CountryId INT		
	,@EndDate DATETIME = NULL
	,@UserTripId INT
	,@AttractionOrder UserTable_GetOrderOfAttractionVisit ReadOnly
)
AS
BEGIN

	UPDATE [dbo].[UserTrip]
	   SET [ModifiedDate] = GETDATE()
		  ,[CountryId] = @CountryId
		  ,[StartDate] = CASE WHEN @StartDate IS NULL THEN DATEADD(Day,1,GETDATE()) ELSE @StartDate END
		  ,[EndDate] = @EndDate
		  ,[TravelModeId] = @TravelModeId
		  ,[SourceAttractionId] = @SourceAttractionId
		  ,[DestinationAttractionId] = @DestinationAttractionId
	 WHERE [UserTripId] = @UserTripId



	 DELETE FROM dbo.UserTripAttractionList
	 WHERE [UserTripId] = @UserTripId

	 INSERT INTO dbo.UserTripAttractionList(UserTripId,AttractionId,CreatedDate)
	 SELECT 
		@UserTripId
		,ID
		,GETDATE()
	 FROM @AttractionID


	 DELETE FROM dbo.UserTripRequestOrder
	 WHERE [UserTripId] = @UserTripId



	INSERT INTO [dbo].[UserTripRequestOrder]
			   ([UserTripId]
			   ,[AttractionId]
			   ,[OrderNumber]
			   ,[CreatedDate])
	SELECT 
		@UserTripId
		,AttractionId
		,OrderNumber
		,GETDATE()
	FROM @AttractionReqOrder



	DELETE FROM dbo.UserTripDates
	WHERE [UserTripId] = @UserTripId



	
	INSERT INTO [dbo].[UserTripDates]
           ([UserTripId]
           ,[TripDate]
           ,[CreatedDate]
		   ,[IsUserInterestedDayBreak]      
			,[IsUserInterestedLunchBreak]      
			,[IsUserInterestedBreak]      
			,[IsUserInterestedDinnerBreak]
			,IsUserInterestedBreakFast
           )
	SELECT DISTINCT 
			@UserTripId
			,CAST(DateAndTime As DATE)	
			,GETDATE()	
			,1
			,1
			,1
			,1
			,1
	FROM @AttractionOrder


	


    



	UPDATE UTD
	   SET UTD.[ModifiedDate] = GETDATE()
		  ,UTD.[IsUserInterestedDayBreak] = ISNULL(UBT.IsUserInterestedDayBreak,1)
		  ,UTD.[UpdateDayEndTime] = UBT.UpdateDayEndTime
		  ,UTD.[UpdateDayStartTime] = UBT.UpdateDayStartTime
		  ,UTD.[IsUserInterestedLunchBreak] = ISNULL(UBT.IsUserInterestedLunchBreak,1)
		  ,UTD.[UpdatedLunchTime] = UBT.UpdatedLunchTime
		  ,UTD.[UpdatedLunchMinimumTime] = UBT.UpdatedLunchMinimumTime
		  ,UTD.[IsUserInterestedBreak] = ISNULL(UBT.IsUserInterestedBreak,1)
		  ,UTD.[UpdatedBreakTime] = UBT.UpdatedBreakTime
		  ,UTD.[UpdatedBreakMinimumTime] = UBT.UpdatedBreakMinimumTime
		  ,UTD.[IsUserInterestedDinnerBreak] = ISNULL(UBT.IsUserInterestedDinnerBreak,1)
		  ,UTD.[UpdatedDinnerTime] = UBT.UpdatedDinnerTime
		  ,UTD.[UpdateDinnerMinimumTime] = UBT.UpdateDinnerMinimumTime
		  ,UTD.IsBreakAdded = UBT.IsBreakAdded
		  ,UTD.BreakAttractionId = UBT.BreakAttractionId
		  ,UTD.IsLunchAdded = UBT.IsLunchAdded
		  ,UTD.LunchAttractionId = UBT.LunchAttractionId
		  ,UTD.IsDinnerAdded = UBT.IsDinnerAdded
		  ,UTD.DinnerAttractionId = UBT.DinnerAttractionId
		  ,UTD.IsUserInterestedBreakFast = ISNULL(UBT.IsUserInterestedBreakFast,1)
		  ,UTD.UpdatedBreakFastTime = UBT.UpdatedBreakFastTime
		  ,UTD.UpdatedBreakFastMinimumTime = UBT.UpdatedBreakFastMinimumTime
		  ,UTD.IsBreakFastAdded = UBT.IsBreakFastAdded
		  ,UTD.BreakFastAttractionId = UBT.BreakFastAttractionId
		  ,UTD.IsDayBreakAdded = UBT.IsDayBreakAdded
		  ,UTD.DayBreakAttractionId = UBT.DayBreakAttractionId
			,UTD.NoOfCars           = UBT.NoOfCars
			,UTD.AverageMileage		= UBT.AverageMileage
			,UTD.NoOfRooms			= UBT.NoOfRooms
			,UTD.BreakFastExpense	= CASE WHEN UBT.IsBreakFastAdded = 1 AND  UBT.BreakFastAttractionId > 0 AND ISNULL(UBT.IsBreakFastExpenseUserUpdated,0) = 0  THEN 
										(SELECT FoodExpense FROM  @AttractionOrder WHERE DestinationAttractionId = UBT.BreakFastAttractionId) 
										ELSE UBT.BreakFastExpense END 
			,UTD.LunchExpense		= CASE WHEN UBT.IsLunchAdded = 1 AND  UBT.LunchAttractionId > 0  AND ISNULL(UBT.IsLunchExpenseUserUpdated,0) = 0 THEN 
										(SELECT FoodExpense FROM  @AttractionOrder WHERE DestinationAttractionId = UBT.LunchAttractionId) 
										ELSE UBT.LunchExpense END
			,UTD.BreakExpense		= CASE WHEN UBT.IsBreakAdded = 1 AND  UBT.BreakAttractionId > 0   AND ISNULL(UBT.IsBreakExpenseUserUpdated,0) = 0 THEN 
										(SELECT FoodExpense FROM  @AttractionOrder WHERE DestinationAttractionId = UBT.BreakAttractionId) 
										ELSE UBT.BreakExpense END 
			,UTD.DayBreakExpense	= CASE WHEN UBT.IsDayBreakAdded = 1 AND  UBT.DayBreakAttractionId > 0 AND ISNULL(UBT.IsDayBreakExpenseUserUpdated,0) = 0 THEN 
										(SELECT StayExpense FROM  @AttractionOrder WHERE DestinationAttractionId = UBT.DayBreakAttractionId) 
										ELSE UBT.DayBreakExpense END 
			,UTD.DinnerExpense		= CASE WHEN UBT.IsDinnerAdded = 1 AND  UBT.DinnerAttractionId > 0  AND ISNULL(UBT.IsDinnerExpenseUserUpdated,0) = 0 THEN 
										(SELECT FoodExpense FROM  @AttractionOrder WHERE DestinationAttractionId = UBT.DinnerAttractionId) 
										ELSE UBT.DinnerExpense END
			,UTD.CarRentalExpense	= UBT.CarRentalExpense
			,UTD.NoOfAttractions	= (SELECT COUNT(*) FROM @AttractionOrder WHERE CAST(DateAndTime AS DATE) = CAST(UBT.RequestDate As DATE) AND ISNULL(IsLunchDinnerBreakTime,0) = 0)
			,UTD.Distance		= (SELECT SUM(CAST(ISNULL(RTRIM(REPLACE(Distance,'Miles','')),0) AS DECIMAL(18,2))) FROM @AttractionOrder WHERE CAST(DateAndTime AS DATE) = CAST(UBT.RequestDate As DATE)) 
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

	DELETE FROM dbo.UserTripAttractionOrderVisit
	WHERE [UserTripId] = @UserTripId
		

	INSERT INTO [dbo].[UserTripAttractionOrderVisit]
           ([UserTripId]
           ,[SourceAttractionId]
           ,[DestinationAttractionId]
           ,[Distance]
           ,[TravelTime]
           ,[TravelModeId]
           ,[SourceAttractionName]
           ,[DestinationAttractionName]
           ,[DateAndTime]
           ,[ReachTime]
           ,[TimeRequiredToView]
           ,[EventEndTime]
           ,[TravelType]
           ,[SourceIcon]
           ,[DestinationIcon]
           ,[RecordCount]
           ,[IsOrderUpdated]
           ,[UpdatedOrder]
           ,[IsUpdatedViewTime]
           ,[UpdatedTime]
           ,[IsPersonalRequest]
           ,[IsLunchDinnerBreakTime]
           ,[IsDistanceCalculationMissing]
           ,[SourceDirection]
           ,[DestinationDirection]
           ,[SourceRating]
           ,[DestinationRating]
           ,[SourceRatingTotal]
           ,[DestinationRatingTotal]
           ,[SourceSearchText]
           ,[DestinationSearchText]
           ,[SourceOpenTime]
           ,[SourceCloseTime]
           ,[DestinationOpenTime]
           ,[DestinationCloseTime]
           ,[SourcePhoto]
           ,[DestinationPhoto]
           ,[SourceLongitude]
           ,[SourceLatitude]
           ,[DestinationLongitude]
           ,[DestinationLatitude]
           ,[CreatedDate]
		   ,SourcePhotoUrl
		   ,DestinationPhotoUrl
		   ,BreakInformationId
		  )
	SELECT @UserTripId
		  ,[SourceAttractionId]
		  ,[DestinationAttractionId]
		  ,[Distance]
		  ,[TravelTime]
		  ,[TravelModeId]
		  ,[SourceAttractionName]
		  ,[DestinationAttractionName]
		  ,[DateAndTime]
		  ,[ReachTime]
		  ,[TimeRequiredToView]
		  ,[EventEndTime]
		  ,[TravelType]
		  ,[SourceIcon]
		  ,[DestinationIcon]
		  ,[RecordCount]
		  ,[IsOrderUpdated]
		  ,[UpdatedOrder]
		  ,[IsUpdatedViewTime]
		  ,[UpdatedTime]
		  ,[IsPersonalRequest]
		  ,[IsLunchDinnerBreakTime]
		  ,[IsDistanceCalculationMissing]
		  ,[SourceDirection]
		  ,[DestinationDirection]
		  ,[SourceRating]
		  ,[DestinationRating]
		  ,[SourceRatingTotal]
		  ,[DestinationRatingTotal]
		  ,[SourceSearchText]
		  ,[DestinationSearchText]
		  ,[SourceOpenTime]
		  ,[SourceCloseTime]
		  ,[DestinationOpenTime]
		  ,[DestinationCloseTime]
		  ,[SourcePhoto]
		  ,[DestinationPhoto]
		  ,[SourceLongitude]
		  ,[SourceLatitude]
		  ,[DestinationLongitude]
		  ,[DestinationLatitude]
		  ,GETDATE()
		  ,SourcePhotoUrl
		  ,DestinationPhotoUrl
		  ,BreakInformationId		  
	  FROM @AttractionOrder



	   --Inserting UerTrip Build Information
	  IF EXISTS (SELECT 1 FROM @AttractionOrder WHERE IsDistanceCalculationMissing = 1)
	  BEGIN
		IF NOT EXISTS (SELECT 1 FROM [dbo].[UserTripBuildStatus] WITH(NOLOCK) WHERE UserTripBuildMessageId = 1 AND UserTripId = @UserTripId)
		BEGIN
			--Missing Distance Calcuation Information
			INSERT INTO [dbo].[UserTripBuildStatus]
			   ([UserTripId]
			   ,[IsError]
			   ,[UserTripBuildMessageId]
			   ,[FormattedMessage]
			   ,[CreatedDate])
			SELECT
				@UserTripId
				,1
				,1
				,Message
				,GETDATE() 
			FROM [dbo].[UserTripBuildMessage] WITH(NOLOCK)
			WHERE 
				UserTripBuildMessageId = 1
							
		END		
	  END
	  ELSE
	  BEGIN
		DELETE FROM [dbo].[UserTripBuildStatus] WHERE UserTripId = @UserTripId AND UserTripBuildMessageId = 1
	  END

	  DELETE FROM [dbo].[UserTripBuildStatus] WHERE UserTripId = @UserTripId AND UserTripBuildMessageId IN (2,3,4,5) 

		DECLARE @DayCount AS INT = (SELECT Count(*) FROM [dbo].[UserTripDates] WITH(NOLOCK) WHERE UserTripId = @UserTripId)
			
		DECLARE @DayBreakData AS TABLE(
			[UserTripId] [int] NULL,
			[TripDate] [date] NULL,
			[CreatedDate] [datetime] NULL,
			[ModifiedDate] [datetime] NULL,
			[IsUserInterestedDayBreak] [bit] NULL,
			[UpdateDayEndTime] [time](7) NULL,
			[UpdateDayStartTime] [time](7) NULL,
			[IsUserInterestedLunchBreak] [bit] NULL,
			[UpdatedLunchTime] [time](7) NULL,
			[UpdatedLunchMinimumTime] [time](7) NULL,
			[IsUserInterestedBreak] [bit] NULL,
			[UpdatedBreakTime] [time](7) NULL,
			[UpdatedBreakMinimumTime] [time](7) NULL,
			[IsUserInterestedDinnerBreak] [bit] NULL,
			[UpdatedDinnerTime] [time](7) NULL,
			[UpdateDinnerMinimumTime] [time](7) NULL,
			IsBreakAdded BIT NULL,
			BreakAttractionId [bigint] NULL,
			IsLunchAdded BIT NULL,
			LunchAttractionId [bigint] NULL,
			IsDinnerAdded BIT NULL,
			DinnerAttractionId BIGINT NULL,
			RowNumber INT
		)	
		INSERT INTO @DayBreakData
		SELECT [UserTripId]
			,[TripDate]
			,[CreatedDate]
			,[ModifiedDate]
			,[IsUserInterestedDayBreak]
			,[UpdateDayEndTime]
			,[UpdateDayStartTime]
			,[IsUserInterestedLunchBreak]
			,[UpdatedLunchTime]
			,[UpdatedLunchMinimumTime]
			,[IsUserInterestedBreak]
			,[UpdatedBreakTime]
			,[UpdatedBreakMinimumTime]
			,[IsUserInterestedDinnerBreak]
			,[UpdatedDinnerTime]
			,[UpdateDinnerMinimumTime]
			,IsBreakAdded
			,BreakAttractionId
			,IsLunchAdded
			,LunchAttractionId
			,IsDinnerAdded
			,DinnerAttractionId
			,ROW_NUMBER() OVER(ORDER BY CAST(TripDate AS DATE) DESC)  
		FROM [dbo].[UserTripDates] WITH(NOLOCK)
		WHERE UserTripId = @UserTripId

		DECLARE @TripDate AS DATE

		WHILE @DayCount > 0
		BEGIN
			
			SET @TripDate = (SELECT TripDate FROM @DayBreakData WHERE RowNumber = @DayCount) 

			IF EXISTS (SELECT 1 FROM @DayBreakData WHERE RowNumber = @DayCount AND ISNULL(IsUserInterestedLunchBreak,0) = 1 AND ISNULL(IsLunchAdded,0) = 0)
			BEGIN
				--Missing Day Lunch selected
				INSERT INTO [dbo].[UserTripBuildStatus]
				   ([UserTripId]
				   ,[IsError]
				   ,[UserTripBuildMessageId]
				   ,[FormattedMessage]
				   ,[CreatedDate])
				SELECT
					@UserTripId
					,0
					,UserTripBuildMessageId
					,REPLACE(Message,'<date>',CAST(FORMAT(@TripDate,'MM/dd/yyy','en-US') AS VARCHAR(10)))
					,GETDATE() 
				FROM [dbo].[UserTripBuildMessage] WITH(NOLOCK)
				WHERE 
					UserTripBuildMessageId = 2
			END

			IF EXISTS (SELECT 1 FROM @DayBreakData WHERE RowNumber = @DayCount AND ISNULL(IsUserInterestedDinnerBreak,0) = 1 AND ISNULL(IsDinnerAdded,0) = 0)
			BEGIN
				--Missing Day Lunch selected
				INSERT INTO [dbo].[UserTripBuildStatus]
				   ([UserTripId]
				   ,[IsError]
				   ,[UserTripBuildMessageId]
				   ,[FormattedMessage]
				   ,[CreatedDate])
				SELECT
					@UserTripId
					,0
					,UserTripBuildMessageId
					,REPLACE(Message,'<date>',CAST(FORMAT(@TripDate,'MM/dd/yyy','en-US') AS VARCHAR(10)))
					,GETDATE() 
				FROM [dbo].[UserTripBuildMessage] WITH(NOLOCK)
				WHERE 
					UserTripBuildMessageId = 3
			END

			IF EXISTS (SELECT 1 FROM @DayBreakData WHERE RowNumber = @DayCount AND ISNULL(IsUserInterestedDayBreak,0) = 1 AND ISNULL(IsBreakAdded,0) = 0)
			BEGIN
				--Missing Day Lunch selected
				INSERT INTO [dbo].[UserTripBuildStatus]
				   ([UserTripId]
				   ,[IsError]
				   ,[UserTripBuildMessageId]
				   ,[FormattedMessage]
				   ,[CreatedDate])
				SELECT
					@UserTripId
					,0
					,UserTripBuildMessageId
					,REPLACE(Message,'<date>',CAST(FORMAT(@TripDate,'MM/dd/yyy','en-US') AS VARCHAR(10)))
					,GETDATE() 
				FROM [dbo].[UserTripBuildMessage] WITH(NOLOCK)
				WHERE 
					UserTripBuildMessageId = 4
			END

			IF EXISTS (SELECT 1 FROM @DayBreakData WHERE RowNumber = @DayCount AND ISNULL(IsUserInterestedBreak,0) = 1 AND ISNULL(BreakAttractionId,0) = 0)
			BEGIN
				--Missing Day Lunch selected
				INSERT INTO [dbo].[UserTripBuildStatus]
				   ([UserTripId]
				   ,[IsError]
				   ,[UserTripBuildMessageId]
				   ,[FormattedMessage]
				   ,[CreatedDate])
				SELECT
					@UserTripId
					,0
					,UserTripBuildMessageId
					,REPLACE(Message,'<date>',CAST(FORMAT(@TripDate,'MM/dd/yyy','en-US') AS VARCHAR(10)))
					,GETDATE() 
				FROM [dbo].[UserTripBuildMessage] WITH(NOLOCK)
				WHERE 
					UserTripBuildMessageId = 5
			END


			SET @DayCount = @DayCount - 1
		END
	
END