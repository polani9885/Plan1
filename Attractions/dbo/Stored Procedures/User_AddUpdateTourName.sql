CREATE PROCEDURE [dbo].[User_AddUpdateTourName]
(
	@UserId AS INT
	,@UserTripId AS INT
	,@TripName AS Varchar(500)
)	
AS
BEGIN

	IF @UserTripId = 0
	BEGIN
		INSERT INTO [dbo].[UserTrip]
			   ([UserId]
			   ,[TripName]
			   ,[CreatedDate]
			   )
		 VALUES
			   (@UserId
			   ,@TripName
			   ,GETDATE()
			   )	
	END
	ELSE
	BEGIN		

		UPDATE [dbo].[UserTrip]
		   SET TripName = @TripName			  
			  ,ModifiedDate = GETDATE()
		 WHERE UserTripId = @UserTripId

	END

	SELECT @@Identity AS UserTripId
END