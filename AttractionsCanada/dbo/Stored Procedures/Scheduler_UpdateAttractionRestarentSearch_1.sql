CREATE PROCEDURE [dbo].[Scheduler_UpdateAttractionRestarentSearch]
(
	@AttractionsId AS INT
)	
AS
BEGIN


	

	  UPDATE dbo.Attractions
		SET IsNearRestarentDone = 1
	WHERE AttractionsId = @AttractionsId



END