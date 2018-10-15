CREATE PROCEDURE User_CheckTheCalculationPartIsDone 
(
	@UserTripId AS INT
)	
AS
BEGIN
	SELECT TOP 1 IsDistanceCalculationMissing        
  FROM [dbo].[UserTripAttractionOrderVisit] WITH(NOLOCK)
  WHERE UserTripId = @UserTripId
  AND IsDistanceCalculationMissing = 1
END