CREATE PROCEDURE [dbo].[Scheduler_GetDestinationMissingDistance] 
(
	@attractionId INT
)
AS
BEGIN

	SELECT 
		MissingDistanceAttractionsRecordsXAttractionsID
		,CASE WHEN ISNULL(A.SearchAddress,'') = '' THEN A.AttractionName ELSE A.SearchAddress END  AS DestinationText
		,CASE WHEN ISNULL(AA.SearchAddress,'') = '' THEN AA.AttractionName ELSE AA.SearchAddress END  AS SourceText
		,MDARXA.AttractionsID
		,MAR.MasterTravelModeID		
	FROM MissingDistanceAttractionsRecords MAR
	JOIN MissingDistanceAttractionsRecordsXAttractions MDARXA ON MDARXA.MissingDistanceAttractionsRecordsID =  MAR.MissingDistanceAttractionsRecordsID	
	JOIN Attractions A ON A.AttractionsId = MDARXA.AttractionsID
	JOIN Attractions AA ON AA.AttractionsId  = MAR.AttractionsID
	WHERE MAR.AttractionsID = @attractionId
	AND A.SearchAddress IS NOT NULL


END