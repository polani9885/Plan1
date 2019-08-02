CREATE PROCEDURE User_GetAttractionsNextAttractions
(
	@AttractionsId INT
)	
AS
BEGIN
	SELECT DISTINCT	
		A.AttractionsId
		,	CAST(
				CAST( 
					
						CAST(
								ATTDX.[Distance] AS DECIMAL(18,2)
							) 
							* (SELECT MetersIn FROM [Attractions]..[MasterCountry]  WITH(NOLOCK) WHERE CountryId = 2 )AS DECIMAL(18,2)
					) AS Varchar(50)
				)
		 + ' Miles' 		
		AS Distance
		,ATTDX.[TravelTime]
		,ATTDX.[TravelModeId]
		,A.AttractionName						
		,A.WebSite SourceDirection		
		,A.Rating SourceRating		
		,A.User_ratings_total SourceRatingTotal		
		,A.SearchAddress SourceSearchText								
		,(SELECT TOP 1 Html_attributions FROM AttractionPhotos SAP WITH(NOLOCK) WHERE SAP.AttractionId = A.AttractionsId) SourcePhoto		
		,A.Longitude SourceLongitude
		,A.Latitude SourceLatitude				
		,(SELECT TOP 1 Food FROM [dbo].[MasterPriceInfo] WITH(NOLOCK) WHERE PriveLevel = A.PriceLevel) AS FoodExpense
		,(SELECT TOP 1 Stay FROM [dbo].[MasterPriceInfo] WITH(NOLOCK) WHERE PriveLevel = A.PriceLevel) AS StayExpense				
  FROM [dbo].AttractionsNextAttractions  ANA WITH(NOLOCK)  
  JOIN dbo.Attractions A WITH(NOLOCK) ON A.AttractionsId = ANA.NextAttractionsId  
  LEFT JOIN dbo.AttractionTravelTimeDistance ATTDX WITH(NOLOCK) ON ATTDX.SourceAttractionId = ANA.AttractionsId AND ATTDX.DestinationAttractionId = ANA.NextAttractionsId    
  WHERE ANA.AttractionsId = @AttractionsId
  AND A.SearchAddress IS NOT NULL
  AND A.SearchAddress <> ''
END