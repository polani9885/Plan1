CREATE PROCEDURE [dbo].[Service_TravelDistance] 
(	
	@AttractionTravelTimeDistanceInfo  user_AttractionTravelTimeDistance READONLY
)
AS
BEGIN
	

INSERT INTO [dbo].[AttractionTravelTimeDistance]
           ([SourceAttractionId]
           ,[DestinationAttractionId]
           ,[TravelModeId]
           ,[TravelTime]
           ,[Distance])
 SELECT 
	[SourceAttractionId]
           ,[DestinationAttractionId]
           ,[TravelModeId]
           ,[TravelTime]
           ,[Distance] 
 FROM @AttractionTravelTimeDistanceInfo   



END