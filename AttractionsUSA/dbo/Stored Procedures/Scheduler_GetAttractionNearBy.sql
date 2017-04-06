CREATE PROCEDURE Scheduler_GetAttractionNearBy
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
  ORDER BY AttractionsId DESC
END