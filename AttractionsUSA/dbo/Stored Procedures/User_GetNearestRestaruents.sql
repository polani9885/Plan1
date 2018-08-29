CREATE PROCEDURE [dbo].[User_GetNearestRestaruents]
(
	@AttractionsId As INT
	,@TravelModeId AS INT
	,@sourceBeginLongitude AS DECIMAL(38,30)
	,@sourceBeginLatitude AS DECIMAL(38,30)
	,@sourceEndLongitude AS DECIMAL(38,30)
	,@sourceEndLatitude AS DECIMAL(38,30)
)	
AS
BEGIN

	DECLARE @Attractions AS TABLE(AttractionsId INT
		  ,AttractionName Varchar(1000)
		  ,AddressOne Varchar(1000)
		  ,AddressTwo Varchar(1000)
		  ,GoogleInternational_phone_number Varchar(1000)
		  ,GoogleRating Varchar(1000)
		  ,PriceLevel INT
		  ,CityId INT
		  ,CategoryId INT
		  ,Longitude Varchar(1000)
		  ,Latitude Varchar(1000)
		  ,PlaceId Varchar(1000)
		  ,RankId INT		  
		  ,GoogleSearchText Varchar(1000)
		  ,TravelTime DATETIME
		  ,Distance Varchar(1000)
		  ,IsWithDistance BIT
		  ,PhotoURL Varchar(Max)
		  )

	INSERT INTO @Attractions (AttractionsId 
		  ,AttractionName 
		  ,AddressOne 
		  ,AddressTwo 
		  ,GoogleInternational_phone_number 
		  ,GoogleRating 
		  ,PriceLevel 
		  ,CityId 
		  ,CategoryId 
		  ,Longitude 
		  ,Latitude 
		  ,PlaceId 
		  ,RankId 
		  ,GoogleSearchText 
		  ,TravelTime 
		  ,Distance
		  ,IsWithDistance
		  ,PhotoURL)

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
		,0
		,A.PhotoURL
  FROM dbo.AttractionsNextAttractions ANA WITH(NOLOCK)  
  JOIN  [dbo].[Attractions] A WITH(NOLOCK) ON A.AttractionsId = ANA.NextAttractionsId
  JOIN dbo.AttractionTravelTimeDistance ATT WITH(NOLOCK) ON ATT.SourceAttractionId = ANA.AttractionsId AND ATT.DestinationAttractionId = A.AttractionsId
  JOIN dbo.AttractionXCategory AC WITH(NOLOCK) ON AC.AttractionId = A.AttractionsId
  JOIN Attractions..MasterGoogleType MGT WITH(NOLOCK) ON MGT.GoogleTypeID = AC.CategoryId    
  WHERE    
  ANA.AttractionsId = @AttractionsId  
  AND MGT.ExtraSearch = 1
  AND ATT.TravelModeId = @TravelModeId

  UNION ALL

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
		  ,A.GoogleSearchText
		  ,NULL
		  ,NULL AS Distance
		,1
		,A.PhotoURL
  FROM [dbo].[Attractions] A WITH(NOLOCK)   
  JOIN dbo.AttractionXCategory AC WITH(NOLOCK) ON AC.AttractionId = A.AttractionsId
  JOIN Attractions..MasterGoogleType MGT WITH(NOLOCK) ON MGT.GoogleTypeID = AC.CategoryId    
  WHERE      
  MGT.ExtraSearch = 1
  AND A.Longitude >= @sourceBeginLongitude
  AND CAST(A.Longitude AS DECIMAL(38,30)) <= @sourceEndLongitude
  AND CAST(A.Latitude AS DECIMAL(38,30)) >= @sourceBeginLatitude
  AND CAST(A.Latitude AS DECIMAL(38,30)) <= @sourceEndLatitude


  ;WITH CTE AS
(
	SELECT *,rn=ROW_NUMBER() OVER (Partition By AttractionsId ORDER BY IsWithDistance)
	FROM @Attractions
 )
DELETE CTE WHERE rn > 1


  SELECT * FROM @Attractions
  


END
