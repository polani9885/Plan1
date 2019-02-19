CREATE PROCEDURE User_GetAttractionXCategory
(
	@attractionId userTable_OnlyId READONLY
)	
AS
BEGIN
	SELECT DISTINCT [AttractionId]
      ,[CategoryId]
  FROM [dbo].[AttractionXCategory] WITH(NOLOCK)
  WHERE AttractionId IN (SELECT Id FROM @attractionId)
END