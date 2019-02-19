CREATE PROCEDURE Admin_MasterCategoryXMasterGoogleType 
	
AS
BEGIN
	SELECT [MasterCategoryXMasterGoogleTypeId]
      ,[MasterCategoryId]
      ,[MasterGoogleTypeId]
  FROM [dbo].[MasterCategoryXMasterGoogleType] WITH(NOLOCK)
END