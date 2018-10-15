CREATE PROCEDURE [dbo].[Scheduler_GetDestinationMissingDistance] 
(
	@attractionId INT
)
AS
BEGIN

	SELECT 
		MissingDistanceAttractionsRecordsXAttractionsID
		,CASE WHEN ISNULL(A.GoogleSearchText,'') = '' THEN A.AttractionName ELSE A.GoogleSearchText END  AS DestinationText
		,CASE WHEN ISNULL(AA.GoogleSearchText,'') = '' THEN AA.AttractionName ELSE AA.GoogleSearchText END  AS SourceText
		,MDARXA.AttractionsID
		,MAR.MasterTravelModeID		
	FROM MissingDistanceAttractionsRecords MAR
	JOIN MissingDistanceAttractionsRecordsXAttractions MDARXA ON MDARXA.MissingDistanceAttractionsRecordsID =  MAR.MissingDistanceAttractionsRecordsID	
	JOIN Attractions A ON A.AttractionsId = MDARXA.AttractionsID
	JOIN Attractions AA ON AA.AttractionsId  = MAR.AttractionsID
	WHERE MAR.AttractionsID = @attractionId
	AND A.GoogleSearchText IS NOT NULL


END