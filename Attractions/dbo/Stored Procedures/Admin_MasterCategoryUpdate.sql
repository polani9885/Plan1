CREATE PROCEDURE [dbo].[Admin_MasterCategoryUpdate] 
(
	@CategoryId int
	,@CategoryName varchar(250)    
)	
AS
BEGIN
	IF((SELECT 1 FROM MasterCity WHERE CityId = @CategoryId) = 1)
	BEGIN	

		UPDATE [dbo].[MasterCategory]
		   SET CategoryName = @CategoryName
		 WHERE CategoryId = @CategoryId

		 
	END
	ELSE
	BEGIN

		INSERT INTO [dbo].[MasterCategory]
			   (CategoryId
			   ,CategoryName
			   )
		 VALUES
			   ((SELECT ISNULL(MAX(CategoryId),0) + 1 FROM MasterCategory)
			   ,@CategoryName
			   )

	END

	

END