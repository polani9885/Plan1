CREATE PROCEDURE Scheduler_GetTypes 
(
	@MapsId INT	
)	
AS
BEGIN


SELECT 
	MapsXCategoryId
	,TypeName
  FROM [dbo].[MapsXCategory] WITH(NOLOCK)
WHERE IsNeeded = 1
AND MapsId = @MapsId


END