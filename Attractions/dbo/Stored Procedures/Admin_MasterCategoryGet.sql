CREATE PROCEDURE [dbo].[Admin_MasterCategoryGet]
	
AS
BEGIN
	SELECT 
		CategoryId
		,CategoryName
	FROM [dbo].[MasterCategory] MC	
END
