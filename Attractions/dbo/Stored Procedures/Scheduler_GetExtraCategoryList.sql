CREATE PROCEDURE [dbo].[Scheduler_GetExtraCategoryList] 
	
AS
BEGIN
	
	SELECT MGT.[GoogleTypeID]
      ,MGT.[TypeName]
      ,MGT.[IsNeeded]
	FROM [dbo].[MasterGoogleType] MGT WITH (NOLOCK)	
	WHERE ISNULL(ExtraSearch,0) = 1

END