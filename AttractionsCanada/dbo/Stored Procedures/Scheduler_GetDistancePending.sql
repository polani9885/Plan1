CREATE PROCEDURE [dbo].[Scheduler_GetDistancePending]
	
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
      ,[IsScannedNearBy]
      ,[IsPlaceDetailsDone]
      ,[IsNearDistanceDone]
      ,[PriceLevel]
      ,[GoogleRating]
  FROM [dbo].[Attractions]
  WHERE ISNULL(IsNearDistanceDone,0) = 0
  AND Longitude IS NOT NULL
  AND Latitude Is NOT NULL
  AND GoogleSearchText IS NOT NULL
  AND GoogleSearchText <> ''

END