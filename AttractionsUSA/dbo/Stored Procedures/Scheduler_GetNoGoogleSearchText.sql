CREATE PROCEDURE [dbo].[Scheduler_GetNoGoogleSearchText]
	
AS
BEGIN
	SELECT 
	 AttractionsId
	 ,AttractionName
	 ,AddressOne
	 ,AddressTwo
	FROM Attractions WITH(NOLOCK)
	WHERE ISNULL(IsGoogleSearchTextDone,0) = 0
	AND ISNULL(GoogleSearchText, '') = ''
END
