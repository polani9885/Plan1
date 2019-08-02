CREATE PROCEDURE [dbo].[Scheduler_GetAttractionNearBy]
(
	@AttractionsId As INT
)	
AS
BEGIN


	SELECT 		
		AD.[AttractionsId]
      ,AD.[AttractionName]      
      ,AD.[CityId]      
      ,AD.[Longitude]
      ,AD.[Latitude]      
      ,AD.[RankId]
      ,AD.[CreatedDate]
      ,AD.[CreatedBy]
      ,AD.[ModifiedDate]
      ,AD.[ModifiedBy]
      ,AD.[SearchAddress]
      ,AD.[WebSite]      
      ,AD.[phone_number]      
      ,AD.[IsScannedNearBy]
      ,AD.[IsPlaceDetailsDone]
      ,AD.[IsNearDistanceDone]
      ,AD.[PriceLevel]
      ,AD.[Rating]
  FROM [dbo].[Attractions] A WITH(NOLOCK)  
  JOIN AttractionsNextAttractions ANA WITH(NOLOCK) ON ANA.AttractionsId = A.AttractionsId
  LEFT OUTER JOIN AttractionTravelTimeDistance ATT WITH(NOLOCK) ON ATT.SourceAttractionId = ANA.AttractionsId AND ATT.DestinationAttractionId = ANA.NextAttractionsId
  JOIN [dbo].[Attractions] AD WITH(NOLOCK) ON AD.AttractionsId = ANA.NextAttractionsId 
  WHERE A.AttractionsId = @AttractionsId
  AND 
  AD.SearchAddress IS NOT NULL
  AND AD.SearchAddress <> ''
  AND ATT.DestinationAttractionId IS NULL
  
END