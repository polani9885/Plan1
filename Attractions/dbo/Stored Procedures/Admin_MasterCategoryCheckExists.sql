CREATE PROCEDURE [dbo].[Admin_MasterCategoryCheckExists] 
(
	@CategoryId int
	,@CategoryName varchar(250)   
)	
AS
BEGIN
	IF(@CategoryId = 0)
	BEGIN
		SELECT MC.CategoryId
		  ,MC.CategoryName		  
		FROM [dbo].[MasterCategory] MC		
		WHERE MC.CategoryName = @CategoryName
		
	END
	ELSE
	BEGIN
		SELECT MC.CategoryId
		  ,MC.CategoryName		  	  
		FROM [dbo].[MasterCategory] MC		
		WHERE MC.CategoryId NOT IN (@CategoryId)
		AND MC.CategoryName = @CategoryName		
	END
END