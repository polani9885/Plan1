CREATE PROCEDURE [dbo].[Admin_AttractionTravelTimeDistanceGet] 
(
	@AttractionsId AS INT
)
AS
BEGIN


SELECT ATT.[AttractionTravelTimeDistanceId]
      ,ATT.[SourceAttractionId]
      ,ATT.[DestinationAttractionId]
      ,ATT.[TravelModeId]
      ,ATT.[TravelTime]
      ,ATT.[Distance]
	  ,MTM.TravelType
	  ,A.AttractionName AS DestinationAttractionName
	  ,ASS.AttractionName AS SourceAttractionName
  FROM [dbo].[AttractionTravelTimeDistance] ATT
  JOIN MasterTravelMode MTM ON MTM.TravelModeId = ATT.TravelModeId
  JOIN Attractions A ON A.AttractionsId = ATT.DestinationAttractionId
  JOIN Attractions ASS ON ASS.AttractionsId = ATT.SourceAttractionId
  WHERE ATT.SourceAttractionId = @AttractionsId


END