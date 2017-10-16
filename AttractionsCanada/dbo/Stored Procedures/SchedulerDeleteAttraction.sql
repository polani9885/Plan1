CREATE PROCEDURE SchedulerDeleteAttraction
(
	@AttractionId INT
)	
AS
BEGIN
	
	DELETE FROM AttractionAverageTime
	WHERE AttractionsId = @AttractionId

	DELETE FROM AttractionPhotos
	WHERE AttractionId = @AttractionId

	DELETE FROM AttractionReview	
	WHERE AttractionId = @AttractionId

	DELETE FROM AttractionsActiveStatus
	WHERE AttractionsId = @AttractionId

	DELETE FROM AttractionsNextAttractions
	WHERE AttractionsId = @AttractionId

	DELETE FROM AttractionTravelTimeDistance
	WHERE SourceAttractionId = @AttractionId

	DELETE FROM AttractionTravelTimeDistance
	WHERE DestinationAttractionId = @AttractionId

	DELETE FROM AttractionXCategory
	WHERE AttractionId = @AttractionId

	DELETE FROM AttractionXMasterGoogleType
	WHERE AttractionId = @AttractionId


	DELETE FROM MissingDistanceAttractionsRecords
	WHERE AttractionsId = @AttractionId

	DELETE FROM MissingDistanceAttractionsRecordsXAttractions
	WHERE AttractionsId = @AttractionId

	DELETE FROM Attractions
	WHERE AttractionsId = @AttractionId


END