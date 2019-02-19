CREATE PROCEDURE [dbo].[Admin_MasterCategoryGet]
	
AS
BEGIN
	SELECT 
		CategoryId
		,CategoryName
		,convert(varchar(5),ViewTime,108) As ViewTime
	FROM [dbo].[MasterCategory] MC	
END
