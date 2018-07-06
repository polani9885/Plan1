CREATE PROCEDURE Scheduler_UpdateAttractionRestarentSearch 
(
	@AttractionsId AS INT
)	
AS
BEGIN


	DELETE FROM [dbo].[MissingAttractionRestarentSearch]
      WHERE AttractionsId = @AttractionsId


	   UPDATE dbo.Attractions
		SET IsNearRestarentDone = 1
	WHERE AttractionsId = @AttractionsId

END