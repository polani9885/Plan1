CREATE PROCEDURE User_GetOrderOfRequest
(
	@UserTripId AS INT
)	
AS
BEGIN
	SELECT [UserTripRequestOrderId]
      ,[UserTripId]
      ,[AttractionId]
      ,[OrderNumber]
      ,[CreatedDate]
      ,CAST([StayTime] AS VARCHAR(50)) StayTime
      ,[IsRequestedAfterBreakFast]
      ,[IsRequestedAfterLunch]
      ,[IsRequestedAfterBreak]
      ,[IsRequestedAfterDinner]
  FROM [dbo].[UserTripRequestOrder] WITH(NOLOCK)
  WHERE UserTripId = @UserTripId
END