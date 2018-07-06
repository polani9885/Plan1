CREATE PROCEDURE [dbo].[Scheduler_PhotoReferencePending]		
AS
BEGIN



	SELECT 
	AP.AttractionPhotosId
	  ,AP.Photo_reference
  FROM dbo.AttractionPhotos AP WITH(NOLOCK)    
  WHERE 
  Photo_reference IS NOT NULL
  AND 
  PhotoURL IS NULL
  AND ISNULL(IsTried,0) = 0

END