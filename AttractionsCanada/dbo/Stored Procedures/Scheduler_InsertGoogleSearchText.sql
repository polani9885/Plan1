CREATE PROCEDURE [dbo].[Scheduler_InsertGoogleSearchText]
(
	@NearBySearchData NearBySearch ReadOnly
	,@AttractionsId AS INt
)	
AS
BEGIN	
	
	DECLARE @NearBySearchDataInfo AS NearBySearch 

	INSERt INTO @NearBySearchDataInfo
	SELECT [AttractionName]           
           ,[GoogleSearchText]
		   ,PlaceId
	FROM Attractions 
	WHERE GoogleSearchText IN (
		SELECT GoogleSearchText FROM @NearBySearchData
	)

	INSERT INTO [dbo].[Attractions]
           ([AttractionName]           
           ,[GoogleSearchText]
		   ,PlaceId
           )
     SELECT AttractionName
			,GoogleSearchText 
			,PlaceId
	 FROM @NearBySearchData
	 WHERE GoogleSearchText NOt IN (
		SELECT GoogleSearchText FROM @NearBySearchDataInfo 
	 )

	 UPDATE Attractions
			SET IsScannedNearBy = 1
		WHERE  AttractionsId = @AttractionsId		

END
