CREATE PROCEDURE [dbo].[User_GetNearestRestaruents]
(
	@AttractionsId As INT
	,@TravelModeId AS INT
)	
AS
BEGIN
	SELECT 
			A.[AttractionsId]
		  ,A.[AttractionName]
		  ,A.[AddressOne]
		  ,A.[AddressTwo]
		  ,A.GoogleInternational_phone_number
		  ,A.GoogleRating
		  ,A.PriceLevel
		  ,A.[CityId]
		  ,AC.[CategoryId]
		  ,A.[Longitude]
		  ,A.[Latitude]
		  ,A.[PlaceId]
		  ,A.[RankId]
		  ,A.[CreatedDate]
		  ,A.[CreatedBy]
		  ,A.[ModifiedDate]
		  ,A.[ModifiedBy]
		  ,A.GoogleSearchText
		  ,ATT.TravelTime
		  ,CAST(
				CAST( 
					
						CAST(
								ATT.Distance AS DECIMAL(18,2)
							) 
							/ 5280 AS DECIMAL(18,2)
					) AS Varchar(50)
				)
		 + ' Miles' 		
		AS Distance
  FROM dbo.AttractionsNextAttractions ANA WITH(NOLOCK)  
  JOIN  [dbo].[Attractions] A WITH(NOLOCK) ON A.AttractionsId = ANA.NextAttractionsId
  JOIN dbo.AttractionTravelTimeDistance ATT WITH(NOLOCK) ON ATT.SourceAttractionId = ANA.AttractionsId AND ATT.DestinationAttractionId = A.AttractionsId
  JOIN dbo.AttractionXCategory AC WITH(NOLOCK) ON AC.AttractionId = A.AttractionsId
  JOIN Attractions..MasterGoogleType MGT WITH(NOLOCK) ON MGT.GoogleTypeID = AC.CategoryId    
  WHERE    
  ANA.AttractionsId = @AttractionsId  
  AND MGT.ExtraSearch = 1
  AND ATT.TravelModeId = @TravelModeId

END