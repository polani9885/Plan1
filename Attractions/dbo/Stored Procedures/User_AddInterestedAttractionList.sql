CREATE PROCEDURE User_AddInterestedAttractionList 
(
	@AttractionId As INT
	,@UserTripId AS INT
)	
AS
BEGIN	

	INSERT INTO [dbo].[UserTripAttractionList]
           ([UserTripId]
           ,[AttractionId]
           ,[CreatedDate])
     VALUES
           (@UserTripId
           ,@AttractionId
           ,GETDATE())

END