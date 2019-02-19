CREATE PROCEDURE User_GetAttractionTravelStepsNearAttractionInfo
(
	@AttractionTravelStepsId INT
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
		,A.AttractionName SourceAttractionName				
		,A.GoogleICon SourceIcon		
		,A.GoogleWebSite SourceDirection		
		,A.GoogleRating SourceRating		
		,A.GoogleUser_ratings_total SourceRatingTotal		
		,A.GoogleSearchText SourceSearchText								
		,(SELECT TOP 1 Html_attributions FROM AttractionPhotos SAP WITH(NOLOCK) WHERE SAP.AttractionId = A.AttractionsId) SourcePhoto		
		,A.Longitude SourceLongitude
		,A.Latitude SourceLatitude		
		,A.PhotoUrl SourcePhotoUrl				
		,(SELECT TOP 1 Food FROM [dbo].[MasterPriceInfo] WITH(NOLOCK) WHERE PriveLevel = A.PriceLevel) AS FoodExpense
		,(SELECT TOP 1 Stay FROM [dbo].[MasterPriceInfo] WITH(NOLOCK) WHERE PriveLevel = A.PriceLevel) AS StayExpense				
  FROM [dbo].[AttractionTravelSteps]  ATS WITH(NOLOCK)
  JOIN dbo.AttractionTravelStepsXAttractions ATSXA WITH(NOLOCK) ON ATSXA.AttractionTravelStepsId = ATS.AttractionTravelStepsId 
  JOIN dbo.Attractions A WITH(NOLOCK) ON A.AttractionsId = ATSXA.AttractionsId
  JOIN dbo.AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.AttractionTravelTimeDistanceId = ATS.AttractionTravelTimeDistanceId
  LEFT JOIN dbo.AttractionTravelTimeDistance ATTDX WITH(NOLOCK) ON ATTDX.SourceAttractionId = ATTD.SourceAttractionId AND ATTDX.DestinationAttractionId = ATSXA.AttractionsId    
  WHERE ATS.AttractionTravelStepsId = CASE WHEN EXISTS
												(SELECT 1 FROM [dbo].[AttractionTravelSteps] CATS WITH(NOLOCK)
													WHERE CATS.AttractionTravelStepsId = @AttractionTravelStepsId
													AND ISNULL(CATS.ParentAttractionTravelStepsId,0) > 0
												)
										THEN
											(SELECT TOP 1 CATS.ParentAttractionTravelStepsId FROM [dbo].[AttractionTravelSteps] CATS WITH(NOLOCK)
													WHERE CATS.AttractionTravelStepsId = @AttractionTravelStepsId
													AND ISNULL(CATS.ParentAttractionTravelStepsId,0) > 0
												)
										ELSE
											@AttractionTravelStepsId
										END
END
