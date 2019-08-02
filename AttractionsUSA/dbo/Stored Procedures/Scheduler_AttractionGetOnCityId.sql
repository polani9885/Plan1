CREATE PROCEDURE [dbo].[Scheduler_AttractionGetOnCityId]	
AS
BEGIN
	SELECT  
		 AttractionsId
		,Latitude
		,Longitude
		,A.AttractionName
	FROM Attractions A WITH(NOLOCK)
	LEFT JOIN Attractions..MapsLoggingError MLE WITH(NOLOCK) ON MLE.AttractionId = A.AttractionsId
	WHERE ISNULL(IsScannedNearBy,0) = 0	
	AND ISNULL(A.Latitude,'') <> ''
	AND ISNULL(A.Longitude,'') <> ''
	AND ISNULL(MLE.CountryId,(SELECT CAST(ColumnValue AS INT) FROM MainData WHERE ColumnKey = 'CountryId')) =  (SELECT CAST(ColumnValue AS INT) FROM MainData WHERE ColumnKey = 'CountryId')
	AND ISNULL(MLE.FailedCounter,0) < (SELECT CAST(ColumnValue AS INT) FROM MainData WHERE ColumnKey = 'AttractionNearByMaxTry')



END