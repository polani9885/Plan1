﻿CREATE PROCEDURE Scheduler_GetDestinationMissingDistance 
(
	@attractionId INT
)
AS
BEGIN

	SELECT 
		MissingDistanceAttractionsRecordsXAttractionsID
		,A.GoogleSearchText AS DestinationText
		,AA.GoogleSearchText AS SourceText
		,MDARXA.AttractionsID
	FROM MissingDistanceAttractionsRecords MAR
	JOIN MissingDistanceAttractionsRecordsXAttractions MDARXA ON MDARXA.MissingDistanceAttractionsRecordsID =  MAR.MissingDistanceAttractionsRecordsID	
	JOIN Attractions A ON A.AttractionsId = MDARXA.AttractionsID
	JOIN Attractions AA ON AA.AttractionsId  = MAR.AttractionsID
	WHERE MAR.AttractionsID = @attractionId
	AND A.GoogleSearchText IS NOT NULL


END