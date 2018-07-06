CREATE PROCEDURE [dbo].[Scheduler_PhotoReferenceUrlUpdate]		
(
	@AttractionPhotosId AS BIGINT
	,@url Varchar(max)
)
AS
BEGIN
	UPDATE dbo.AttractionPhotos
		SET PhotoURL = @url
	WHERE AttractionPhotosId = @AttractionPhotosId	

END