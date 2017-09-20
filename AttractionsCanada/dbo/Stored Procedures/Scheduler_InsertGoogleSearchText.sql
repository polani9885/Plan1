CREATE PROCEDURE [dbo].[Scheduler_InsertGoogleSearchText]
(
	@NearBySearchData NearBySearch ReadOnly
)	
AS
BEGIN	
	
	DECLARE @NearBySearchDataInfo AS NearBySearch 

	INSERt INTO @NearBySearchDataInfo
	SELECT [AttractionName]           
           ,[GoogleSearchText]
	FROM Attractions 
	WHERE GoogleSearchText IN (
		SELECT GoogleSearchText FROM @NearBySearchData
	)

	INSERT INTO [dbo].[Attractions]
           ([AttractionName]           
           ,[GoogleSearchText]
           )
     SELECT AttractionName
			,GoogleSearchText 
	 FROM @NearBySearchData
	 WHERE GoogleSearchText NOt IN (
		SELECT GoogleSearchText FROM @NearBySearchDataInfo 
	 )

END
