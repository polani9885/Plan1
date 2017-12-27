CREATE PROCEDURE [dbo].[Scheduler_DeleteMissingDistanceDestination] 
(
	@MissingDistanceAttractionsRecordsXAttractionsID AS INT
)	
AS
BEGIN
	DELETE FROM MissingDistanceAttractionsRecordsXAttractions
	WHERE MissingDistanceAttractionsRecordsXAttractionsID = @MissingDistanceAttractionsRecordsXAttractionsID

END