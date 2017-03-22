CREATE PROCEDURE Scheduler_GetTypes 
	
AS
BEGIN


SELECT [GoogleTypeID]
      ,[TypeName]
      ,[IsNeeded]
  FROM [dbo].[MasterGoogleType]
WHERE IsNeeded = 1


END