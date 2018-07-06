CREATE PROCEDURE [dbo].[Scheduler_GetAttractionNearBy]
(
	@AttractionsId As INT
)	
AS
BEGIN


	SELECT 		
		AD.[AttractionsId]
      ,AD.[AttractionName]
      ,AD.[AddressOne]
      ,AD.[AddressTwo]
      ,AD.[CityId]
      ,AD.[CategoryId]
      ,AD.[Longitude]
      ,AD.[Latitude]
      ,AD.[PlaceId]
      ,AD.[RankId]
      ,AD.[CreatedDate]
      ,AD.[CreatedBy]
      ,AD.[ModifiedDate]
      ,AD.[ModifiedBy]
      ,AD.[GoogleSearchText]
      ,AD.[GoogleWebSite]
      ,AD.[GoogleICon]
      ,AD.[GoogleInternational_phone_number]
      ,AD.[Googleadr_address]
      ,AD.[GoogleName]
      ,AD.[IsScannedNearBy]
      ,AD.[IsPlaceDetailsDone]
      ,AD.[IsNearDistanceDone]
      ,AD.[PriceLevel]
      ,AD.[GoogleRating]
  FROM [dbo].[Attractions] A WITH(NOLOCK)  
  JOIN AttractionsNextAttractions ANA WITH(NOLOCK) ON ANA.AttractionsId = A.AttractionsId
  LEFT OUTER JOIN AttractionTravelTimeDistance ATT WITH(NOLOCK) ON ATT.SourceAttractionId = ANA.AttractionsId AND ATT.DestinationAttractionId = ANA.NextAttractionsId
  JOIN [dbo].[Attractions] AD WITH(NOLOCK) ON AD.AttractionsId = ANA.NextAttractionsId 
  WHERE A.AttractionsId = @AttractionsId
  AND 
  AD.GoogleSearchText IS NOT NULL
  AND AD.GoogleSearchText <> ''
  AND ATT.DestinationAttractionId IS NULL
  
END