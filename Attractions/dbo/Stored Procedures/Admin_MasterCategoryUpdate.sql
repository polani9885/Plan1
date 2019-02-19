CREATE PROCEDURE [dbo].[Admin_MasterCategoryUpdate] 
(
	@CategoryId int
	,@CategoryName varchar(250)   
	,@ViewTime Varchar(50) 
)	
AS
BEGIN
	IF((SELECT 1 FROM MasterCategory WHERE CategoryId = @CategoryId) = 1)
	BEGIN	

		UPDATE [dbo].[MasterCategory]
		   SET CategoryName = @CategoryName
				,ViewTime = CAST(@ViewTime AS TIME)
		 WHERE CategoryId = @CategoryId

		 
	END
	ELSE
	BEGIN

		INSERT INTO [dbo].[MasterCategory]
			   (CategoryId
			   ,CategoryName
			   ,ViewTime
			   )
		 VALUES
			   ((SELECT ISNULL(MAX(CategoryId),0) + 1 FROM MasterCategory)
			   ,@CategoryName
			   ,CAST(@ViewTime As TIME)
			   )

	END

	

END