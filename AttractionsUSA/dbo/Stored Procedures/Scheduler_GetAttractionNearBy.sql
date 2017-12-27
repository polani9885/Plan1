CREATE PROCEDURE [dbo].[Scheduler_GetAttractionNearBy]
(
	@AttractionsId As INT
)	
AS
BEGIN


	SELECT TOP 5 [AttractionsId]
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
      ,[IsScannedNearBy]
      ,[IsPlaceDetailsDone]
      ,[IsNearDistanceDone]
      ,[PriceLevel]
      ,[GoogleRating]
  FROM [dbo].[Attractions]
  WHERE AttractionsId > @AttractionsId
  AND GoogleSearchText IS NOT NULL
  AND GoogleSearchText <> ''

  UNION 
	
	
	SELECT TOP 5 [AttractionsId]
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
      ,[IsScannedNearBy]
      ,[IsPlaceDetailsDone]
      ,[IsNearDistanceDone]
      ,[PriceLevel]
      ,[GoogleRating]
  FROM [dbo].[Attractions]
  WHERE AttractionsId < @AttractionsId
  AND GoogleSearchText IS NOT NULL
  AND GoogleSearchText <> ''
  ORDER BY AttractionsId DESC
  
END