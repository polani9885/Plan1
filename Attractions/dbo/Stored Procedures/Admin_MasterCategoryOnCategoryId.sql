CREATE PROCEDURE [dbo].[Admin_MasterCategoryOnCategoryId]
(
	@CategoryId int
)	
AS
BEGIN
	SELECT 
		CategoryId
		,CategoryName
	FROM [dbo].[MasterCategory] MC	
	WHERE MC.CategoryId = @CategoryId
END
