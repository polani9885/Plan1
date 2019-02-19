CREATE PROCEDURE [dbo].[Admin_MasterCategoryOnCategoryId]
(
	@CategoryId int
)	
AS
BEGIN
	SELECT 
		CategoryId
		,CategoryName
		,convert(varchar(5),ViewTime,108) As ViewTime
	FROM [dbo].[MasterCategory] MC	
	WHERE MC.CategoryId = @CategoryId
END
