CREATE PROCEDURE [dbo].[User_AddUpdateTourName]
(
	@UserId AS INT
	,@UserTripId AS INT
	,@TripName AS Varchar(500)
	,@CountryId AS INT
)	
AS
BEGIN

	IF @UserTripId = 0
	BEGIN
		INSERT INTO [dbo].[UserTrip]
			   ([UserId]
			   ,[TripName]
			   ,[CreatedDate]
			   ,NoOfPersons
			   ,NoOfCars
			   ,CarMileage
			   ,FuelPrice
			   ,CountryId
			   ,DrivingBreak
			   )
		 VALUES
			   (@UserId
			   ,@TripName
			   ,GETDATE()
			   ,1
			   ,1
			   ,20
			   ,2.5
			   ,@CountryId
			   ,2
			   )	
	END
	ELSE
	BEGIN		

		UPDATE [dbo].[UserTrip]
		   SET TripName = @TripName			  
			  ,ModifiedDate = GETDATE()
			  ,CountryId = @CountryId
		 WHERE UserTripId = @UserTripId

	END

	SELECT @@Identity AS UserTripId
END
