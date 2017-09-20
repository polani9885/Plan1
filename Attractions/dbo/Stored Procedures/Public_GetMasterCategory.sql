CREATE PROCEDURE [dbo].[Public_GetMasterCategory]
	
AS
BEGIN

	SELECT [CategoryId]
      ,[CategoryName]
  FROM [dbo].[MasterCategory]


END
