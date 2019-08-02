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

	DECLARE @AttractionId As BIGINT

	SELECT @AttractionId = AttractionId FROM dbo.AttractionPhotos WITH(NOLOCK) WHERE AttractionPhotosId = @AttractionPhotosId	

END