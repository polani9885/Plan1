CREATE PROCEDURE [dbo].[User_UpdateFindNearestRestarent]
(
	@AttractionsId AS INT
)	
AS
BEGIN
	UPDATE dbo.Attractions	
		SET IsNearRestarentDone = NULL
	WHERE AttractionsId = @AttractionsId

	IF NOT EXISTS (SELECT 1 FROM dbo.MissingAttractionRestarentSearch  WHERE AttractionsId = @AttractionsId)
	BEGIN
		INSERT INTO dbo.MissingAttractionRestarentSearch(AttractionsId,CreatedDate)
		VALUES(@AttractionsId,GETDATE())
	END

END
