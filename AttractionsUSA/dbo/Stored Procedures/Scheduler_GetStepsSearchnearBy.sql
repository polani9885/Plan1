CREATE PROCEDURE Scheduler_GetStepsSearchnearBy
	
AS
BEGIN
	SELECT ATS.[AttractionTravelStepsId]
		,DestinationAttractionId AS AttractionsId
		,End_location_lat Latitude
		,End_location_lng Longitude		
  FROM [dbo].[AttractionTravelSteps] ATS WITH(NOLOCK)
  JOIN dbo.AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.AttractionTravelTimeDistanceId = ATS.AttractionTravelTimeDistanceId
  LEFT JOIN Attractions..MapsLoggingError MLE WITH(NOLOCK) ON MLE.AttractionId = ATS.AttractionTravelStepsId
  WHERE ISNULL(IsNearestRestarentDone,0) = 0  
  AND ISNULL(ATS.ParentAttractionTravelStepsId,0) = 0
  AND ISNULL(MLE.CountryId,(SELECT CAST(ColumnValue AS INT) FROM MainData WHERE ColumnKey = 'CountryId')) =  (SELECT CAST(ColumnValue AS INT) FROM MainData WHERE ColumnKey = 'CountryId')
	AND ISNULL(MLE.FailedCounter,0) < (SELECT CAST(ColumnValue AS INT) FROM MainData WHERE ColumnKey = 'AttractionNearByMaxTry')
  ORDER BY ATS.AttractionTravelStepsId DESC
END
