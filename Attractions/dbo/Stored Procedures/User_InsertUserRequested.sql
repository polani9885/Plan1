CREATE PROCEDURE  User_InsertUserRequested
(
	@AttractionRequestOrder UserTable_AttractionRequestOrder READONLY
	,@UserTripId AS INT
)	
AS
BEGIN

	DELETE FROM [dbo].[UserTripRequestOrder]
	WHERE UserTripId = @UserTripId



	INSERT INTO [dbo].[UserTripRequestOrder]
           ([UserTripId]
           ,[AttractionId]
           ,[OrderNumber]
           ,[CreatedDate]
           ,[StayTime]
           ,[IsRequestedAfterBreakFast]
           ,[IsRequestedAfterLunch]
           ,[IsRequestedAfterBreak]
           ,[IsRequestedAfterDinner])
	SELECT 
		@UserTripId
		,AttractionId
		,OrderNumber
		,GETDATE()
		,CAST(StayTime AS TIME)  
		,IsRequestedAfterBreakFast
		,IsRequestedAfterLunch
		,IsRequestedAfterBreak
		,IsRequestedAfterDinner
	FROM @AttractionRequestOrder

END