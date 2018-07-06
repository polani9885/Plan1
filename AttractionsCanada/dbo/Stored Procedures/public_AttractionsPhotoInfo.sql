CREATE PROCEDURE [dbo].[public_AttractionsPhotoInfo]	
	@AttractionId BIGINT
AS
BEGIN



	SELECT 
	  AP.PhotoURL
  FROM dbo.AttractionPhotos AP WITH(NOLOCK)    
  WHERE 
  AP.AttractionId = @AttractionId
  AND PhotoURL IS NOT NULL

END