CREATE PROCEDURE [dbo].[Scheduler_PhotoReferenceUrlAlreadyTried]		
(
	@AttractionPhotosId AS BIGINT	
)
AS
BEGIN
	UPDATE dbo.AttractionPhotos
		SET IsTried = 1
	WHERE AttractionPhotosId = @AttractionPhotosId	

END