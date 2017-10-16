CREATE PROCEDURE Scheduler_DeleteMissingDistance 
(
	@AttractionsID AS INT
)	
AS
BEGIN

	
	DELETE FROM MissingDistanceAttractionsRecordsXAttractions
	WHERE MissingDistanceAttractionsRecordsID IN (SELECT MissingDistanceAttractionsRecordsID FROM MissingDistanceAttractionsRecords WHERE AttractionsID = @AttractionsID)

	DELETE FROM MissingDistanceAttractionsRecords WHERE AttractionsID = @AttractionsID

END