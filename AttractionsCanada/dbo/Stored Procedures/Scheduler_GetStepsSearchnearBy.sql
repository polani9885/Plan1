CREATE PROCEDURE Scheduler_GetStepsSearchnearBy
	
AS
BEGIN
	SELECT ATS.[AttractionTravelStepsId]
		,DestinationAttractionId AS AttractionsId
		,End_location_lat Latitude
		,End_location_lng Longitude
		,ANTS.NoOfTimesTried      
  FROM [dbo].[AttractionTravelSteps] ATS WITH(NOLOCK)
  JOIN dbo.AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.AttractionTravelTimeDistanceId = ATS.AttractionTravelTimeDistanceId
  LEFT JOIN dbo.AttractionNoOfTimesStepsNearyByCalcuated ANTS WITH(NOLOCK) ON ANTS.AttractionTravelStepsId = ATS.AttractionTravelStepsId
  WHERE ISNULL(IsNearestRestarentDone,0) = 0
  AND ISNULL(ANTS.NoOfTimesTried,0) < 5
END