CREATE PROCEDURE Scheduler_GetMissingDistance 
	
AS
BEGIN

	SELECT [MissingDistanceAttractionsRecordsID]
		  ,[AttractionsID]
		  ,[MasterTravelModeID]
		  ,[CreatedDate]
		  ,[CreatedBy]
		  ,[ModifiedDate]
		  ,[ModifiedBy]
	  FROM [dbo].[MissingDistanceAttractionsRecords]

END