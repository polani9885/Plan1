CREATE PROCEDURE [dbo].[Scheduler_GetPlaceDetails]
	
AS
BEGIN

	SELECT [AttractionsId]
		  ,[AttractionName]		  
		  ,[CityId]		  
		  ,[Longitude]
		  ,[Latitude]		  
		  ,[RankId]
		  ,[CreatedDate]
		  ,[CreatedBy]
		  ,[ModifiedDate]
		  ,[ModifiedBy]
		  ,[SearchAddress]
		  ,[WebSite]		  
		  ,[phone_number]		  		  
		  ,[Rating]		  
		  ,[IsScannedNearBy]
	  FROM [dbo].[Attractions]
	  WHERE ISNULL(SearchAddress,'') <> ''
	  AND ISNULL(IsPlaceDetailsDone,0) = 0
END