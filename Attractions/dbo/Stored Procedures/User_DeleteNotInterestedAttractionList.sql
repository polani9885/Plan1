CREATE PROCEDURE User_DeleteNotInterestedAttractionList 
(
	@AttractionId As INT
	,@UserTripId AS INT
)	
AS
BEGIN
	
	DELETE FROM [dbo].[UserTripAttractionList] 
	WHERE UserTripId = @UserTripId AND AttractionId = @AttractionId

END
