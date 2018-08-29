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

	UPDATE dbo.Attractions
		SET PhotoUrl = (SELECT TOP 1 PhotoURL FROM dbo.AttractionPhotos WITH(NOLOCK) WHERE AttractionId = @AttractionId AND PhotoURL IS NOT NULL ORDER BY AttractionPhotosId)
	WHERE AttractionsId  = @AttractionId 

END