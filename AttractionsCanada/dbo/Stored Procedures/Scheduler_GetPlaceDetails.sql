CREATE PROCEDURE [dbo].[Scheduler_GetPlaceDetails]
	
AS
BEGIN

	SELECT [AttractionsId]
		  ,[AttractionName]
		  ,[AddressOne]
		  ,[AddressTwo]
		  ,[CityId]
		  ,[CategoryId]
		  ,[Longitude]
		  ,[Latitude]
		  ,[PlaceId]
		  ,[RankId]
		  ,[CreatedDate]
		  ,[CreatedBy]
		  ,[ModifiedDate]
		  ,[ModifiedBy]
		  ,[GoogleSearchText]
		  ,[GoogleWebSite]
		  ,[GoogleICon]
		  ,[GoogleInternational_phone_number]
		  ,[Googleadr_address]
		  ,[GoogleName]
		  ,[GoogleRating]		  
		  ,[IsScannedNearBy]
	  FROM [dbo].[Attractions]
	  WHERE ISNULL(GoogleSearchText,'') <> ''
	  AND ISNULL(IsPlaceDetailsDone,0) = 0
END