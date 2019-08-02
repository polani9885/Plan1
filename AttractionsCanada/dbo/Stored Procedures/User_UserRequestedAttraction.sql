CREATE PROCEDURE User_UserRequestedAttraction 
(
	@UserTripId AS INT
	,@Address AS Varchar(2000)
	,@IsSource AS INT
	,@StartDate AS DATETIME = NULL
	,@GoogleSearchText AS Varchar(2000) = NULL
	,@BreakType As INT = NULL
	,@BreakDate As DATE = NULL
	,@StartTime AS TIME = NULL
)	
AS
BEGIN
	DECLARE @AttractionId AS INT
	DECLARE @CityId As INT
	DECLARE @AttractionName  AS Varchar(2000)

	SET @AttractionName = @Address

	IF @IsSource IN (1,2,3,4)
	BEGIN

		IF @IsSource = 4
			SET @Address = CASE WHEN ISNULL(@GoogleSearchText,'') = '' THEN @Address ELSE @GoogleSearchText END

		SELECT @AttractionId = AttractionsId 
			,@CityId = CityId	
		FROM Attractions WITH(NOLOCK) 
		WHERE SearchAddress = @Address
		OR AttractionName = @Address


		IF ISNULL(@AttractionId,0) = 0 
		BEGIN
			
			IF @IsSource = 4
			BEGIN
				INSERT INTO Attractions(AttractionName,SearchAddress,IsUserRequested)
				VALUES(@AttractionName,@GoogleSearchText,1)
			END
			ELSE
			BEGIN
				INSERT INTO Attractions (SearchAddress,IsUserRequested)
				VALUES(@Address,1)
			END

			SET @AttractionId = @@IDENTITY			
	
			INSERT INTO [dbo].[UserRequested]
					   ([UserTripId]
					   ,[AttractionsId])
				 VALUES
					   (@UserTripId
					   ,@AttractionId)

		END
	
		IF ISNULL(@CityId, 0) >0 AND NOT EXISTS(SELECT 1 FROM Attractions..UserTripCities WITH(NOLOCK) WHERE UserTripId = @UserTripId AND MasterCityId = @CityId)
		BEGIN
		

			INSERT INTO Attractions..[UserTripCities]
				([UserTripId]
				,[MasterCityId]
				,[CreatedDate]
				,[RecordIndex])
			VALUES
				(@UserTripId
				,@CityId
				,GETDATE()
				,ISNULL((SELECT MAX(RecordIndex) FROM Attractions..UserTripCities WITH(NOLOCK) WHERE UserTripId = @UserTripId),0)+1
				)

		END  

		UPDATE Attractions..UserTrip
			SET SourceAttractionId = CASE WHEN @IsSource = 1 THEN @AttractionId ELSE SourceAttractionId END
			,DestinationAttractionId = CASE WHEN @IsSource = 2 THEN @AttractionId ELSE DestinationAttractionId END
		WHERE UserTripId = @UserTripId


		IF @IsSource = 3 AND NOT EXISTS 
			(
				SELECT 1 FROM [Attractions]..[UserTripAttractionList] WITH(NOLOCK) 
				WHERE UserTripId = @UserTripId AND AttractionId = @AttractionId
			)
		BEGIN	
			INSERT INTO [Attractions]..[UserTripAttractionList]
				   ([UserTripId]
				   ,[AttractionId]
				   ,[CreatedDate])
			 VALUES
				   (@UserTripId
				   ,@AttractionId
				   ,GETDATE())

		END

		IF @IsSource = 4
		BEGIN
			UPDATE Attractions..UserTripDates
				SET 
					IsBreakFastAdded = CASE WHEN @BreakType = 1 THEN 1 ELSE IsBreakFastAdded END
					,BreakFastAttractionId = CASE WHEN @BreakType = 1 THEN @AttractionId ELSE BreakFastAttractionId END
					,IsLunchAdded = CASE WHEN @BreakType = 2 THEN 1 ELSE IsLunchAdded END
					,LunchAttractionId = CASE WHEN @BreakType = 2 THEN @AttractionId ELSE LunchAttractionId END
					,IsBreakAdded = CASE WHEN @BreakType = 3 THEN 1 ELSE IsBreakAdded END
					,BreakAttractionId = CASE WHEN @BreakType = 3 THEN @AttractionId ELSE BreakAttractionId END
					,IsDinnerAdded = CASE WHEN @BreakType = 4 THEN 1 ELSE IsDinnerAdded END
					,DinnerAttractionId = CASE WHEN @BreakType = 4 THEN @AttractionId ELSE DinnerAttractionId END
					,IsDayBreakAdded = CASE WHEN @BreakType = 5 THEN 1 ELSE IsDayBreakAdded END
					,DayBreakAttractionId = CASE WHEN @BreakType = 5 THEN @AttractionId ELSE DayBreakAttractionId END
			WHERE UserTripId = @UserTripId
			AND CAST(TripDate AS DATE) = CAST(@BreakDate AS DATE)
			
		END


	END
	IF @IsSource IN (5)
	BEGIN
		UPDATE Attractions..UserTrip
			SET StartDate = @StartDate			
		WHERE UserTripId = @UserTripId
	END
	IF @IsSource IN (6)
	BEGIN
		UPDATE Attractions..UserTrip
			SET StartTime = @StartTime			
		WHERE UserTripId = @UserTripId
	END
END
