CREATE PROCEDURE [dbo].[Scheduler_GetNoLatitudeAndLogitute]
	
AS
BEGIN
	SELECT 
	 AttractionsId
	 ,AttractionName
	 ,AddressOne
	 ,AddressTwo
	 ,GoogleSearchText
	FROM dbo.Attractions A WITH(NOLOCK)
	LEFT JOIN Attractions..MapsLoggingError MLE WITH(NOLOCK) ON MLE.AttractionId = A.AttractionsId
	WHERE ISNULL(A.IsLatAndLon,0) = 0
	AND ISNULL(A.GoogleSearchText, '') <> ''	
	AND ISNULL(A.Latitude,'') = ''
	AND ISNULL(A.Longitude,'') = ''
	AND ISNULL(MLE.CountryId,(SELECT CAST(ColumnValue AS INT) FROM MainData WHERE ColumnKey = 'CountryId')) =  (SELECT CAST(ColumnValue AS INT) FROM MainData WHERE ColumnKey = 'CountryId')
	AND ISNULL(MLE.FailedCounter,0) < (SELECT CAST(ColumnValue AS INT) FROM MainData WHERE ColumnKey = 'AttractionMaxTry')

END