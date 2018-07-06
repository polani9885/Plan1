CREATE PROCEDURE User_UserTripGetAttractions 
(
	@UserTripId AS INT
)	
AS
BEGIN
	SELECT 
      [AttractionId]
      ,[CreatedDate]
  FROM dbo.[UserTripAttractionList] WITH(NOLOCK)
  WHERE UserTripId = @UserTripId
END