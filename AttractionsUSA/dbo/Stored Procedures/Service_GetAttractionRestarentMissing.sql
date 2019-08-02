CREATE PROCEDURE Service_GetAttractionRestarentMissing 
	
AS
BEGIN
	SELECT A.[AttractionsId]
		  ,[AttractionName]		  
		  ,[CityId]		  
		  ,[Longitude]
		  ,[Latitude]		  
		  ,[RankId]
		  ,A.[CreatedDate]
		  ,[CreatedBy]
		  ,[ModifiedDate]
		  ,[ModifiedBy]
		  ,[SearchAddress]
		  ,[WebSite]		  
		  ,[phone_number]
		  ,[SearchAddress]		  
		  ,[IsScannedNearBy]
		  ,[IsPlaceDetailsDone]
		  ,[IsNearDistanceDone]
		  ,[PriceLevel]
		  ,[Rating]
		  ,[User_ratings_total]
		  ,[IsLatAndLon]
		  ,[Utc_offset]		  
	  FROM [dbo].[Attractions] A WITH(NOLOCK)
END