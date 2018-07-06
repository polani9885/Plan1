CREATE PROCEDURE [dbo].[Scheduler_InsertGoogleSearchText]
(
	@NearBySearchData NearBySearch ReadOnly
	,@AttractionsId AS INt
)	
AS
BEGIN	
	
	DECLARE @NearBySearchDataInfo AS NearBySearch 

	INSERt INTO @NearBySearchDataInfo
	SELECT NS.[AttractionName]           
           ,NS.[GoogleSearchText]
		   ,NS.PlaceId
	FROM @NearBySearchData NS
	LEFT OUTER JOIN Attractions A WITH(NOLOCK) ON A.GoogleSearchText = NS.GoogleSearchText AND A.AttractionName = NS.AttractionName AND A.PlaceId = Ns.PlaceId
	WHERE ISNULL(A.GoogleSearchText,'') =''


	INSERT INTO [dbo].[Attractions]
           ([AttractionName]           
           ,[GoogleSearchText]
		   ,PlaceId
           )
     SELECT AttractionName
			,GoogleSearchText 
			,PlaceId
	 FROM @NearBySearchDataInfo
	 

	 UPDATE Attractions
			SET IsScannedNearBy = 1
		WHERE  AttractionsId = @AttractionsId		



	INSERT INTO [dbo].[AttractionsNextAttractions]
           ([AttractionsId]
           ,[NextAttractionsId])

	SELECT 
		@AttractionsId
		,A.AttractionsId		 
	FROM @NearBySearchData NS
	JOIN Attractions A WITH(NOLOCK) ON A.GoogleSearchText = NS.GoogleSearchText AND A.AttractionName = NS.AttractionName
	LEFT OUTER JOIN AttractionsNextAttractions ANS WITH(NOLOCK) ON ANS.AttractionsId = @AttractionsId AND ANS.NextAttractionsId = A.AttractionsId
	WHERE ANS.NextAttractionsId IS NULL

END
