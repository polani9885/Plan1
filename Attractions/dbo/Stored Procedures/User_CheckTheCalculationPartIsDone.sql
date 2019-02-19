CREATE PROCEDURE User_CheckTheCalculationPartIsDone 
(
	@UserTripId AS INT
)	
AS
BEGIN
	SELECT *
  FROM [dbo].[UserTripAttractionOrderVisit] WITH(NOLOCK)
  WHERE UserTripId = @UserTripId
  
END