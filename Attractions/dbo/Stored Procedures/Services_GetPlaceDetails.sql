CREATE PROCEDURE [dbo].[Services_GetPlaceDetails] 
	@AttractionId userTable_OnlyId ReadOnly,
	@SourceAttractionId INT
AS
BEGIN

	SELECT A.[AttractionsId]      
      ,A.[PlaceId] 
	  ,A.Longitude
	  ,A.Latitude  
	  ,A.GoogleSearchText   
  FROM [dbo].[Attractions] A
  WHERE AttractionsId IN (SELECT ID FROM @AttractionId)
  AND AttractionsId NOT IN (
	  SELECT  [DestinationAttractionId]			  
		FROM [dbo].[AttractionTravelTimeDistance]
		WHERE SourceAttractionId IN (@SourceAttractionId)
		AND DestinationAttractionId IN (SELECT ID FROM @AttractionId)
	)  

END