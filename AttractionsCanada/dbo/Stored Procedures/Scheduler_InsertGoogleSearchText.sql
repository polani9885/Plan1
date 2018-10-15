CREATE PROCEDURE [dbo].[Scheduler_InsertGoogleSearchText]
(
	@NearBySearchData NearBySearch ReadOnly
	,@AttractionsId AS INT
	,@AttractionTravelStepsId BIGINT
)	
AS
BEGIN	
	
	DECLARE @NearBySearchDataInfo AS NearBySearch 

	DECLARE @DestinationAttractions userTable_OnlyId
	DECLARE @TravelModeId AS INT

	INSERT INTO @NearBySearchDataInfo
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
	 
	 IF @AttractionTravelStepsId = 0
	 BEGIN
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
	ELSE
	BEGIN		
		
		INSERT INTO [dbo].[AttractionTravelStepsXAttractionsId]
			   ([AttractionTravelStepsId]
			   ,[AttractionsId])

		SELECT @AttractionTravelStepsId
				,A.AttractionsId				
		FROM @NearBySearchData NS
		JOIN Attractions A WITH(NOLOCK) ON A.GoogleSearchText = NS.GoogleSearchText AND A.AttractionName = NS.AttractionName AND A.PlaceId = Ns.PlaceId

		SELECT TOP  1 @TravelModeId = TravelModeId FROM dbo.AttractionTravelSteps ATS WITH(NOLOCK)
		JOIN dbo.AttractionTravelTimeDistance ATTD WITH(NOLOCK) ON ATTD.AttractionTravelTimeDistanceId = ATS.AttractionTravelTimeDistanceId

		INSERT INTO @DestinationAttractions (ID)
		SELECT A.AttractionsId				
		FROM @NearBySearchData NS
		JOIN Attractions A WITH(NOLOCK) ON A.GoogleSearchText = NS.GoogleSearchText AND A.AttractionName = NS.AttractionName AND A.PlaceId = Ns.PlaceId


		EXEC [Admin_AddMissingDistanceRecords]	
		@SourceAttractionID = @AttractionsId,
		@DestinationAttractions= @DestinationAttractions,
		@TravelModeId = @TravelModeId 


		UPDATE dbo.AttractionTravelSteps 
			SET IsNearestRestarentDone = 1
		WHERE AttractionTravelStepsId = @AttractionTravelStepsId


		
		
	END


END
